import { Redis } from 'ioredis';

export class RedisClient {
  private static instance: RedisClient;
  private readonly client: Redis;
  private isConnected = false;

  private constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || undefined,
      lazyConnect: true,
      retryStrategy: (times: number) => {
        if (times > 10) {
          console.error('[Redis] Quá 10 lần thất bại. Dừng retry.');
          return null;
        }
        return Math.min(times * 100, 3000);
      },
    });

    this.client.on('connect', () => {
      this.isConnected = true;
      console.log('[Redis] Kết nối thành công');
    });

    this.client.on('error', (err: Error) => {
      this.isConnected = false;
      console.error('[Redis] Lỗi:', err.message);
    });

    this.client.on('reconnecting', () => {
      console.warn('[Redis] Đang thử kết nối lại...');
    });
  }

  static getInstance(): RedisClient {
    if (!RedisClient.instance) {
      RedisClient.instance = new RedisClient();
    }
    return RedisClient.instance;
  }

  async connect(): Promise<void> {
    if (this.isConnected) return;
    await this.client.connect();
  }

  getClient(): Redis {
    if (!this.isConnected) {
      throw new Error('[Redis] Chưa kết nối. Gọi connect() trước trong startServer().');
    }
    return this.client;
  }

  async disconnect(): Promise<void> {
    if (!this.isConnected) return;
    await this.client.quit();
    this.isConnected = false;
    console.log('[Redis] Đã đóng kết nối gracefully');
  }
  async ping(): Promise<boolean> {
    try {
      const result = await this.client.ping();
      return result === 'PONG';
    } catch {
      return false;
    }
  }
}
