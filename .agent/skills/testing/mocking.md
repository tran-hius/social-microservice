# 🎭 Mocking Guidelines

## 1. Nguyên tắc Mocking Đúng đắn
- Chỉ mock các **Dependencies bên ngoài** (Database Repositories, Message Broker, Third-party APIs).
- **Không mock logic nghiệp vụ**: Không mock các hàm tính toán, helper hoặc mappers bên trong Service.
- Sử dụng TypeScript Interfaces để tạo Mock Objects một cách type-safe, tránh dùng `any`.

## 2. Ví dụ Mock Repository:
```typescript
const mockUserRepository: IUserRepository = {
  create: jest.fn(),
  findByEmail: jest.fn(),
  findByUsername: jest.fn(),
  findById: jest.fn(),
  findByIdWithPassword: jest.fn(),
  findByEmailOrUsernameWithPassword: jest.fn(),
  updateLastLogin: jest.fn(),
};
```
