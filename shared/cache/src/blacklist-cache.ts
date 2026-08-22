import { BaseCacheService } from "./base-cache.js";

export class BlacklistCacheService extends BaseCacheService<string> {
  protected readonly keyPrefix = "auth:blacklist";
  protected readonly defaultTtl = 3600;

  async blockToken(jti: string, timeToLive: number): Promise<void> {
    await this.set(jti, jti, timeToLive);
  }

  async isTokenBlocked(jti: string): Promise<boolean> {
    return this.exists(jti);
  }
}
