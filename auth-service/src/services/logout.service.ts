import { BlacklistCacheService } from "../cache/blacklist.cache.js";
import { IRefreshTokenRepository } from "../interfaces/repository.interface.js";
import { refreshTokenRepository } from "../repositories/refresh-token.repository.js";
import { verifyAccessToken } from "../utils/jwt/jwt.util.js";
import { logger } from "../utils/logger.js";


class LogoutService {
     constructor(
        private readonly blacklistCache = new BlacklistCacheService(),
        private readonly tokenRepository: IRefreshTokenRepository = refreshTokenRepository     
    ){}

    async execute(accessToken: string, refreshToken?: string): Promise<void>{
        try{
            const decoded = verifyAccessToken(accessToken);
            const now = Math.floor(Date.now() / 1000);
            const ttl = decoded.exp! - now;
            
            if(ttl > 0){
                await this.blacklistCache.blockToken(decoded.jti as string, ttl)
            }
        }catch(error){
              logger.warn(
                "[LogoutService] Failed to blacklist access token",
                error,
              );
        }

        if(refreshToken){
            await this.tokenRepository.deleteToken(refreshToken);
        }
    }
}

export const logoutService = new LogoutService();