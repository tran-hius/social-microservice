# 🌐 API Design & Data Transfer Objects (DTOs)

## 1. Nguyên tắc Thiết kế RESTful
- **Tài nguyên (Resources)**: Sử dụng danh từ số nhiều (ví dụ `/api/v1/articles`, `/api/v1/users`).
- **HTTP Verbs**:
  - `GET`: Lấy dữ liệu (An toàn, Idempotent).
  - `POST`: Tạo mới tài nguyên (Không Idempotent).
  - `PUT`: Thay thế toàn bộ tài nguyên (Idempotent).
  - `PATCH`: Cập nhật một phần tài nguyên.
  - `DELETE`: Xóa tài nguyên (Idempotent).

## 2. Chuẩn hóa HTTP Status Codes
- `200 OK`: Thành công với dữ liệu trả về.
- `201 Created`: Tạo mới thành công (kèm URI tài nguyên hoặc DTO).
- `204 No Content`: Xóa thành công hoặc không có dữ liệu trả về.
- `400 Bad Request`: Sai định dạng tham số.
- `401 Unauthorized`: Chưa xác thực hoặc Token không hợp lệ.
- `403 Forbidden`: Đã xác thực nhưng không đủ quyền truy cập.
- `404 Not Found`: Không tìm thấy tài nguyên.
- `409 Conflict`: Xung đột dữ liệu (Email/Username đã tồn tại).
- `422 Unprocessable Entity`: Dữ liệu vi phạm validation schema.
- `500 Internal Server Error`: Lỗi máy chủ không mong muốn.

## 3. Quản lý Validation & DTOs
- Validate 100% dữ liệu đầu vào tại DTO trước khi chạm vào Controller.
- Sử dụng `class-validator` hoặc `zod`.
- Dùng Data Mapper để biến đổi Entity $\leftrightarrow$ DTO, không để lộ cấu trúc bảng ra ngoài.
