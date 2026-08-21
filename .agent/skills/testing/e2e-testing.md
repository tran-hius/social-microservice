# 🌐 End-to-End (E2E) Testing Guidelines

## 1. Phạm vi E2E Test
- Kiểm thử luồng người dùng hoàn chỉnh từ HTTP Request đến HTTP Response thông qua Express App và Supertest.
- Kiểm thử luồng:
  1. `POST /auth/register` $\rightarrow$ Nhận `accessToken` và `refreshToken`.
  2. `GET /auth/me` kèm `Authorization: Bearer <accessToken>` $\rightarrow$ Nhận thông tin user.
  3. `POST /auth/refresh` kèm `refreshToken` $\rightarrow$ Nhận cặp token mới.
  4. `POST /auth/logout` $\rightarrow$ Thu hồi token.
