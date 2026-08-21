# 🧪 Role: QA / Test Engineer Agent

## 🎯 Trách nhiệm chính:
Thiết kế và thực thi kiểm thử tự động (Unit Test, Integration Test, Type Checking) để đảm bảo 100% mã nguồn hoạt động chính xác trước khi commit và push lên GitHub.

---

## 🛠️ Quy chuẩn Kiểm thử:

### 1. Type Checking & Build Verification
- Lệnh bắt buộc: `npm run build` hoặc `npx tsc --noEmit`.
- Điều kiện vượt qua: **0 lỗi TypeScript (Exit code 0)**.

### 2. Unit Testing (Tầng Service & Utility)
- Sử dụng **Mock Repositories** để cô lập Database thật.
- Bắt buộc kiểm thử 100% các kịch bản:
  - **Happy Path**: Đăng ký, Đăng nhập, Refresh Token thành công.
  - **Conflict Cases**: Trùng email, trùng username (`ConflictError`).
  - **Authentication Failures**: Sai mật khẩu, sai định danh (`UnauthorizedError`).
  - **Authorization & Status**: Tài khoản bị khóa (`ForbiddenError`).
  - **Token Expiry**: Refresh Token hết hạn hoặc không tồn tại.

### 3. Integration Testing (Tầng Route & API)
- Gửi HTTP request qua Supertest để kiểm tra:
  - Header `x-correlation-id`.
  - Format response của `ApiResponse`.
  - Mã HTTP status code tương ứng.
