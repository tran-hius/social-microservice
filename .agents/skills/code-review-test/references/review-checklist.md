# Detailed Code Review Checklist

Danh sách kiểm tra chi tiết khi review mã nguồn:

### 1. Kiến trúc & Clean Code
- **Single Responsibility**: Mỗi file/class chỉ đảm nhận 1 nhiệm vụ duy nhất.
- **Dependency Inversion**: Các module cấp cao không phụ thuộc trực tiếp vào module cấp thấp, cả 2 phụ thuộc vào abstraction (Interfaces).
- **Mapper**: Không bao giờ trả Mongoose Document thô ra ngoài API, luôn dùng `Mapper.toResponseDto()`.
- **Validation**: Mọi dữ liệu từ bên ngoài (Body, Query, Params) phải đi qua `validateDto`.

### 2. Bảo mật (Security)
- **Password**: Luôn hash với bcrypt (salt rounds >= 10).
- **JWT**: Sử dụng secret keys riêng biệt cho Access Token và Refresh Token, đặt thời gian sống hợp lý (Access: 15m, Refresh: 7d).
- **No Sensitive Leak**: Loại bỏ `password`, `refreshToken`, `__v` trong output DTOs.
- **Rate Limiting & Helmet**: Được kích hoạt ở Gateway và Service.

### 3. Hiệu năng & Database
- **Indexing**: Các trường dùng để tìm kiếm thường xuyên (`email`, `username`, `token`, `userId`) phải được đánh Index trong Schema.
- **Connection Management**: Sử dụng Connection Pool và Graceful Shutdown.
