# 🧩 Unit Testing Guidelines

## 1. Phạm vi Unit Test
- Kiểm thử các quy tắc nghiệp vụ (Business Rules), Pure functions, Services, DTO Validators, Mappers, Utils.
- Không kết nối Database thật khi chạy Unit Test.

## 2. Các Kịch bản Bắt buộc cho Mỗi Service:
- **Happy Path**: Dữ liệu hợp lệ $\rightarrow$ Trả về DTO và Tokens chính xác.
- **Validation Failure**: Dữ liệu thiếu hoặc sai format $\rightarrow$ Ném lỗi validation.
- **Business Conflicts**: Trùng email, trùng username $\rightarrow$ Ném `ConflictError`.
- **Authentication Failure**: Sai mật khẩu, không tìm thấy user $\rightarrow$ Ném `UnauthorizedError`.
- **Authorization / Status**: Tài khoản bị khóa (`status: 'blocked'`) $\rightarrow$ Ném `ForbiddenError`.
