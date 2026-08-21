import { IRegisterService, IUserRepository, IRefreshTokenRepository } from '../interfaces/index.js';
import { RegisterDto, AuthResponseDto } from '../dtos/index.js';
import { userRepository } from '../repositories/user.repository.js';
import { refreshTokenRepository } from '../repositories/refresh-token.repository.js';
import { hashPassword } from '../utils/password/index.js';
import { generateAuthTokens } from '../utils/jwt/index.js';
import { UserMapper } from '../mappers/user.mapper.js';
import { ConflictError } from '../utils/custom-errors.js';
import { logger } from '../utils/logger.js';

const REFRESH_TOKEN_DAYS = 7;

export class RegisterService implements IRegisterService {
  constructor(
    private readonly userRepo: IUserRepository = userRepository,
    private readonly tokenRepo: IRefreshTokenRepository = refreshTokenRepository
  ) {}

  private getRefreshTokenExpiry(): Date {
    return new Date(Date.now() + REFRESH_TOKEN_DAYS * 24 * 60 * 60 * 1000);
  }

  async execute(
    dto: RegisterDto,
    metadata?: { userAgent?: string; ipAddress?: string }
  ): Promise<AuthResponseDto> {
    const existingEmail = await this.userRepo.findByEmail(dto.email);
    if (existingEmail) {
      throw new ConflictError('Email is already registered');
    }

    const existingUsername = await this.userRepo.findByUsername(dto.username);
    if (existingUsername) {
      throw new ConflictError('Username is already taken');
    }

    const hashedPassword = await hashPassword(dto.password);

    const newUser = await this.userRepo.create({
      email: dto.email,
      username: dto.username,
      password: hashedPassword,
      role: dto.role || 'reader',
    });

    const tokens = generateAuthTokens({
      userId: newUser._id.toString(),
      email: newUser.email,
      role: newUser.role,
    });

    await this.tokenRepo.create({
      userId: newUser._id.toString(),
      token: tokens.refreshToken,
      expiresAt: this.getRefreshTokenExpiry(),
      userAgent: metadata?.userAgent,
      ipAddress: metadata?.ipAddress,
    });

    logger.info(`User registered successfully: [${newUser.username}] (${newUser.role})`, {
      userId: newUser._id.toString(),
    });

    return {
      user: UserMapper.toResponseDto(newUser),
      tokens,
    };
  }
}

export const registerService = new RegisterService();
