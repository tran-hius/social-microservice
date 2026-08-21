# 📋 Kế hoạch Kiến trúc: Hướng Đối tượng Hóa (OOP) cho RabbitMQ Event Bus & Redis Caching

**Trạng thái**: Đã lập kế hoạch (Pending Implementation)  
**Mục tiêu**: Đóng gói RabbitMQ và Redis thành các dịch vụ hướng đối tượng (OOP), độc lập, tuân thủ nguyên lý Dependency Inversion (SOLID) và dễ dàng viết Unit Test mà không cần kết nối mạng thật.

---

## 🏛️ 1. Nguyên lý Thiết kế & Design Patterns

1. **Adapter Pattern**:
   - Chuyển đổi API phức tạp của các thư viện bên thứ 3 (`amqplib`, `ioredis`) thành giao diện nghiệp vụ chuẩn (`IEventBus`, `ICacheService`).
2. **Dependency Inversion Principle (DIP)**:
   - Tầng nghiệp vụ (`services/`) chỉ phụ thuộc vào `IEventBus` và `ICacheService` trừu tượng, không phụ thuộc vào `amqplib` hay `ioredis`.
3. **Testability (Dễ kiểm thử)**:
   - Cung cấp `MockEventBus` và `InMemoryCacheService` để chạy Unit Test 100% độc lập với tốc độ mili-giây.
4. **Lifecycle Encapsulation**:
   - Toàn bộ logic kết nối lại (Auto-reconnect), xử lý lỗi mạng (Circuit breaker), bắt tín hiệu tắt máy (Graceful shutdown) được đóng gói bên trong Class.

---

## 📐 2. Thiết kế Hợp đồng (Interfaces & Contracts)

### 🔹 2.1. Hợp đồng Event Bus (`src/interfaces/event-bus.interface.ts`)
```typescript
export type EventHandler<T = any> = (data: T, correlationId?: string) => Promise<void>;

export interface IEventBus {
  connect(): Promise<void>;
  publish<T>(topic: string, event: T, correlationId?: string): Promise<boolean>;
  subscribe<T>(topic: string, queue: string, handler: EventHandler<T>): Promise<void>;
  close(): Promise<void>;
}
```

### 🔹 2.2. Hợp đồng Caching (`src/interfaces/cache.interface.ts`)
```typescript
export interface ICacheService {
  connect(): Promise<void>;
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: unknown, ttlSeconds?: number): Promise<void>;
  delete(key: string): Promise<void>;
  has(key: string): Promise<boolean>;
  getOrSet<T>(key: string, factory: () => Promise<T>, ttlSeconds?: number): Promise<T>;
  close(): Promise<void>;
}
```

---

## 🛠️ 3. Thiết kế Triển khai Chi tiết (Implementation Classes)

### 🔹 3.1. `RabbitMQEventBus` (`src/infrastructure/messaging/rabbitmq-event-bus.ts`)
- **Thuộc tính**:
  - `connection: ChannelModel | null`
  - `channel: Channel | null`
  - `exchangeName: string` (mặc định: `social.events`)
  - `exchangeType: 'topic'`
- **Tính năng cao cấp**:
  - Tự động gắn `x-correlation-id` vào message headers khi publish.
  - Tự động serialize/deserialize JSON.
  - Tự động ack khi consumer xử lý thành công, nack/requeue hoặc đẩy vào Dead Letter Queue (DLQ) khi có lỗi.
  - Bắt sự kiện `close` và `error` của socket để tự động reconnect theo Exponential Backoff.

### 🔹 3.2. `RedisCacheService` (`src/infrastructure/cache/redis-cache.service.ts`)
- **Thuộc tính**:
  - `client: RedisClient`
  - `keyPrefix: string` (ví dụ `auth:`, `docs:`)
- **Tính năng cao cấp**:
  - Tự động JSON serialize đối tượng khi `set` và parse khi `get`.
  - Hỗ trợ hàm `getOrSet(key, factory, ttl)` để tránh lặp lại logic `if (!cached) queryDb()`.
  - Phòng chống Cache Stampede: Hỗ trợ jitter (dao động ngẫu nhiên TTL ±5%).
  - Graceful Fallback: Nếu Redis bị sập tạm thời, tự động log cảnh báo và bypass query thẳng vào DB mà không làm crash ứng dụng.

### 🔹 3.3. Mock Classes phục vụ Testing (`tests/mocks/`)
- `MockEventBus`: Lưu trữ mảng `publishedEvents` trong memory để assert trong Unit Test (`expect(eventBus.publishedEvents).toContainEqual(...)`).
- `InMemoryCacheService`: Sử dụng `Map<string, { value: any, expiresAt: number }>` trong bộ nhớ RAM, chạy test siêu nhanh mà không cần Redis Docker.

---

## 🔄 4. Ví dụ Tích hợp vào Service & Dependency Injection

```typescript
export class RegisterService implements IRegisterService {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly tokenRepo: IRefreshTokenRepository,
    private readonly eventBus: IEventBus // 👈 Nhận qua Constructor
  ) {}

  async execute(dto: RegisterDto, metadata?: { userAgent?: string; ipAddress?: string }): Promise<AuthResponseDto> {
    // 1. Tạo user & tokens trong DB...
    const newUser = await this.userRepo.create(...);
    const tokens = generateAuthTokens(...);

    // 2. Bắn sự kiện bất đồng bộ qua EventBus Interface
    await this.eventBus.publish('auth.user.registered', {
      userId: newUser.id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
      createdAt: newUser.createdAt,
    });

    return { user: UserMapper.toResponseDto(newUser), tokens };
  }
}
```

---

## 🗺️ 5. Lộ trình Triển khai Khi Bắt đầu Thực hiện

1. **Giai đoạn 1**: Khởi tạo thư mục `src/infrastructure/` và khai báo các Interfaces chuẩn (`IEventBus`, `ICacheService`).
2. **Giai đoạn 2**: Triển khai `RedisCacheService` với `ioredis`, thêm cơ chế fallback và graceful shutdown.
3. **Giai đoạn 3**: Triển khai `RabbitMQEventBus` với `amqplib`, thêm cơ chế Topic Exchange, Dead Letter Exchange (DLX).
4. **Giai đoạn 4**: Viết `InMemoryCacheService` và `MockEventBus` trong thư mục `tests/mocks/`.
5. **Giai đoạn 5**: Inject vào các Service liên quan, viết Unit Test kiểm thử và cập nhật tài liệu.
