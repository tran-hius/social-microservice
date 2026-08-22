import { RedisClient } from './redis.js';

export abstract class BaseCacheService<T> {
  protected client = RedisClient.getInstance().getClient();

  protected abstract readonly keyPrefix: string;

  protected abstract readonly defaultTtl: number;

  protected generateKey(keySuffix: string): string {
    return `${this.keyPrefix}:${keySuffix}`;
  }

  async set(keySuffix: string, value: T, ttlSeconds: number = this.defaultTtl): Promise<void> {
    const key = this.generateKey(keySuffix);
    const serialized = JSON.stringify(value);
    
    if (ttlSeconds > 0) {
      await this.client.set(key, serialized, "EX", ttlSeconds);
    } else {
      await this.client.set(key, serialized);
    }
  }

  async get(keySuffix: string): Promise<T | null> {
    const key = this.generateKey(keySuffix);
    const raw = await this.client.get(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  }

  async mget(keySuffixes: string[]): Promise<(T | null)[]> {
    if (keySuffixes.length === 0) return [];
    const keys = keySuffixes.map(suffix => this.generateKey(suffix));
    const raws = await this.client.mget(...keys);
    return raws.map(raw => raw ? JSON.parse(raw) as T : null);
  }

  async mset(entries: { keySuffix: string, value: T }[], ttlSeconds: number = this.defaultTtl): Promise<void> {
    if (entries.length === 0) return;
    
    if (ttlSeconds > 0) {
      const pipeline = this.client.pipeline();
      for (const entry of entries) {
        const key = this.generateKey(entry.keySuffix);
        pipeline.set(key, JSON.stringify(entry.value), "EX", ttlSeconds);
      }
      await pipeline.exec();
    } else {
      const keyValuePairs: Record<string, string> = {};
      for (const entry of entries) {
        keyValuePairs[this.generateKey(entry.keySuffix)] = JSON.stringify(entry.value);
      }
      await this.client.mset(keyValuePairs);
    }
  }

  async del(...keySuffixes: string[]): Promise<void> {
    if (keySuffixes.length === 0) return;
    const keys = keySuffixes.map(suffix => this.generateKey(suffix));
    await this.client.del(...keys);
  }

  async exists(keySuffix: string): Promise<boolean> {
    const key = this.generateKey(keySuffix);
    const result = await this.client.exists(key);
    return result === 1;
  }

  async expire(keySuffix: string, ttlSeconds: number): Promise<void> {
    const key = this.generateKey(keySuffix);
    await this.client.expire(key, ttlSeconds);
  }

  async deleteByPattern(patternSuffix: string): Promise<void> {
    const pattern = this.generateKey(patternSuffix);
    const keys = await this.client.keys(pattern);
    if (keys.length > 0) {
      await this.client.del(...keys);
    }
  }
}