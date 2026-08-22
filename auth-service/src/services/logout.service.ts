import { BlacklistCacheService } from "@social/shared/cache";
import { IRefreshTokenRepository } from "../interfaces/repository.interface.js";
import { ILogoutService } from "../interfaces/service.interface.js";
import { refreshTokenRepository } from "../repositories/refresh-token.repository.js";
import { verifyAccessToken } from "../utils/jwt/jwt.util.js";
import { logger } from "../utils/logger.js";

class LogoutService implements ILogoutService {
  constructor(
    private readonly blacklistCache = new BlacklistCacheService(),
    private readonly tokenRepository: IRefreshTokenRepository = refreshTokenRepository,
  ) {}

  async execute(accessToken?: string, refreshToken?: string): Promise<void> {
    if (accessToken) {
      try {
        const decoded = verifyAccessToken(accessToken);
        const now = Math.floor(Date.now() / 1000);
        const ttl = decoded.exp! - now;

        if (ttl > 0 && decoded.jti) {
          await this.blacklistCache.blockToken(decoded.jti, ttl);
        }
      } catch (error) {
        logger.warn("[LogoutService] Failed to blacklist access token", error);
      }
    }

    if (refreshToken) {
      await this.tokenRepository.deleteToken(refreshToken);
    }
  }

  async logoutAll(userId: string): Promise<void> {
    await this.tokenRepository.revokeAllUserTokens(userId);
    logger.info(`Revoked all sessions for user`, { userId });
  }
}

export const logoutService = new LogoutService();
