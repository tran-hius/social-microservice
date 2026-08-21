import { ILoginService, IUserRepository, IRefreshTokenRepository } from '../interfaces';
import { LoginDto, AuthResponseDto } from '../dtos';
import { userRepository } from '../repositories/user.repository';
import { refreshTokenRepository } from '../repositories/refresh-token.repository';
import { comparePassword } from '../utils/password';
import { generateAuthTokens } from '../utils/jwt';
import { UserMapper } from '../mappers/user.mapper';
import { UnauthorizedError, ForbiddenError } from '../utils/custom-errors';
import { logger } from '../utils/logger';

const REFRESH_TOKEN_DAYS = 7;

export class LoginService implements ILoginService {
  constructor(
    private readonly userRepo: IUserRepository = userRepository,
    private readonly tokenRepo: IRefreshTokenRepository = refreshTokenRepository
  ) {}

  private getRefreshTokenExpiry(): Date {
    return new Date(Date.now() + REFRESH_TOKEN_DAYS * 24 * 60 * 60 * 1000);
  }

  async execute(
    dto: LoginDto,
    metadata?: { userAgent?: string; ipAddress?: string }
  ): Promise<AuthResponseDto> {
    const user = await this.userRepo.findByEmailOrUsernameWithPassword(dto.identifier);
    if (!user || !user.password) {
      throw new UnauthorizedError('Invalid email/username or password');
    }

    if (user.status === 'blocked') {
      throw new ForbiddenError('Your account has been blocked. Please contact support.');
    }

    const isPasswordValid = await comparePassword(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid email/username or password');
    }

    const tokens = generateAuthTokens({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    await this.tokenRepo.create({
      userId: user._id.toString(),
      token: tokens.refreshToken,
      expiresAt: this.getRefreshTokenExpiry(),
      userAgent: metadata?.userAgent,
      ipAddress: metadata?.ipAddress,
    });

    await this.userRepo.updateLastLogin(user._id.toString());

    logger.info(`User logged in: [${user.username}]`, { userId: user._id.toString() });

    return {
      user: UserMapper.toResponseDto(user),
      tokens,
    };
  }
}

export const loginService = new LoginService();
