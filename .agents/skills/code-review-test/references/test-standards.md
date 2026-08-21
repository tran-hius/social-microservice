# Testing Standards & Guidelines

Tiêu chuẩn viết và chạy kiểm thử tự động trong dự án:

### 1. Cấu trúc thư mục Test
```text
tests/
├── unit/
│   ├── services/
│   │   └── auth.service.spec.ts
│   └── utils/
│       └── password.spec.ts
└── integration/
    └── auth.routes.spec.ts
```

### 2. Nguyên tắc Unit Test cho Services
- **Mock Repositories**: Không kết nối Database thật khi chạy Unit Test.
- **Test Case Coverage tối thiểu**:
  - `register`:
    - Case 1: Đăng ký thành công $\rightarrow$ trả về UserResponseDto và Tokens.
    - Case 2: Email trùng $\rightarrow$ ném `ConflictError`.
    - Case 3: Username trùng $\rightarrow$ ném `ConflictError`.
  - `login`:
    - Case 1: Đăng nhập thành công $\rightarrow$ trả về UserResponseDto và Tokens.
    - Case 2: Sai email/username $\rightarrow$ ném `UnauthorizedError`.
    - Case 3: Sai password $\rightarrow$ ném `UnauthorizedError`.
    - Case 4: Tài khoản bị khóa (`status: 'blocked'`) $\rightarrow$ ném `ForbiddenError`.
  - `refreshTokens`:
    - Case 1: Token hợp lệ $\rightarrow$ trả về cặp token mới.
    - Case 2: Token hết hạn/bị thu hồi $\rightarrow$ ném `UnauthorizedError`.

### 3. Quy trình chạy Test tự động
- Chạy toàn bộ Unit Tests: `npm test`
- Chạy Type checking: `npx tsc --noEmit`
