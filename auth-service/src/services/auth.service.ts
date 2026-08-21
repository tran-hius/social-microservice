import { IAuthService, IUserRepository } from '../interfaces/user.interface';
import { RegisterDto, LoginDto, AuthResponseDto, UserResponseDto } from '../dtos/user.dto';
import { ITokenPair } from '../interfaces/auth.interface';
import { userRepository } from '../repositories/user.repository';
import { refreshTokenRepository, IRefreshTokenRepository } from '../repositories/refresh-token.repository';
import { hashPassword, comparePassword } from '../utils/password';
import { generateAuthTokens, verifyRefreshToken } from '../utils/jwt';
import { UserMapper } from '../mappers/user.mapper';
import { ConflictError, UnauthorizedError, ForbiddenError, NotFoundError } from '../utils/custom-errors';
import { logger } from '../utils/logger';

const REFRESH_TOKEN_DAYS = 7;

export class AuthService implements IAuthService {
  constructor(
    private readonly userRepo: IUserRepository = userRepository,
    private readonly tokenRepo: IRefreshTokenRepository = refreshTokenRepository
  ) {}

  private getRefreshTokenExpiry(): Date {
    return new Date(Date.now() + REFRESH_TOKEN_DAYS * 24 * 60 * 60 * 1000);
  }

  async register(
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

  async login(
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

  async refreshTokens(
    refreshToken: string,
    metadata?: { userAgent?: string; ipAddress?: string }
  ): Promise<ITokenPair> {
    const decoded = verifyRefreshToken(refreshToken);

    const storedToken = await this.tokenRepo.findByToken(refreshToken);
    if (!storedToken || storedToken.isRevoked) {
      throw new UnauthorizedError('Invalid or expired refresh token session');
    }

    const user = await this.userRepo.findById(decoded.userId);
    if (!user) {
      throw new UnauthorizedError('User no longer exists');
    }

    if (user.status === 'blocked') {
      throw new ForbiddenError('Your account has been blocked');
    }

    await this.tokenRepo.deleteToken(refreshToken);

    const newTokens = generateAuthTokens({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    await this.tokenRepo.create({
      userId: user._id.toString(),
      token: newTokens.refreshToken,
      expiresAt: this.getRefreshTokenExpiry(),
      userAgent: metadata?.userAgent,
      ipAddress: metadata?.ipAddress,
    });

    return newTokens;
  }

  async logout(refreshToken: string): Promise<void> {
    if (refreshToken) {
      await this.tokenRepo.deleteToken(refreshToken);
    }
  }

  async logoutAll(userId: string): Promise<void> {
    await this.tokenRepo.revokeAllUserTokens(userId);
    logger.info(`Revoked all sessions for user`, { userId });
  }

  async getMe(userId: string): Promise<UserResponseDto> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return UserMapper.toResponseDto(user);
  }
}

export const authService = new AuthService();
