import { ITokenService, IUserRepository, IRefreshTokenRepository, ITokenPair } from '../interfaces';
import { userRepository } from '../repositories/user.repository';
import { refreshTokenRepository } from '../repositories/refresh-token.repository';
import { generateAuthTokens, verifyRefreshToken } from '../utils/jwt';
import { UnauthorizedError, ForbiddenError } from '../utils/custom-errors';
import { logger } from '../utils/logger';

const REFRESH_TOKEN_DAYS = 7;

export class TokenService implements ITokenService {
  constructor(
    private readonly userRepo: IUserRepository = userRepository,
    private readonly tokenRepo: IRefreshTokenRepository = refreshTokenRepository
  ) {}

  private getRefreshTokenExpiry(): Date {
    return new Date(Date.now() + REFRESH_TOKEN_DAYS * 24 * 60 * 60 * 1000);
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
}

export const tokenService = new TokenService();
