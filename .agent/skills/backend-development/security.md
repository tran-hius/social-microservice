# 🔒 Security & Authentication

## 1. Xác thực & Quản lý Token (JWT Architecture)
- **Access Token**: Thời hạn ngắn (15 phút), chứa thông tin tối thiểu (`userId`, `email`, `role`).
- **Refresh Token**: Thời hạn dài hơn (7 ngày), lưu trữ trong Collection riêng biệt với TTL Index.
- **Refresh Token Rotation**: Khi client gửi Refresh Token để lấy token mới, token cũ phải lập tức bị xóa/thu hồi và sinh ra cặp token mới hoàn toàn.
- **Vô hiệu hóa phiên (Revocation)**: Hỗ trợ đăng xuất từng thiết bị (`/logout`) và đăng xuất toàn bộ thiết bị (`/logout-all`).

## 2. Mã hóa Mật khẩu (Password Hashing)
- Bắt buộc sử dụng thuật toán mạnh một chiều: **Bcrypt** (Salt rounds >= 10) hoặc **Argon2id**.
- Tuyệt đối không tự sáng chế thuật toán băm (không dùng MD5, SHA-1, SHA-256 thuần).

## 3. Ranh giới Tin cậy trong Microservices (Trust Boundaries)
- **API Gateway**: Đóng vai trò lớp phòng thủ ngoài cùng (Rate Limit, Helmet, Stateless JWT verification).
- **Service Nội bộ**: Nhận `x-user-id` và `x-user-role` từ Gateway, nhưng vẫn phải tự kiểm tra phân quyền RBAC/ABAC trên từng thao tác nhạy cảm, không tin tưởng mù quáng.

## 4. Bảo vệ Dữ liệu Nhạy cảm
- Luôn đặt cờ `select: false` trong Database Schema cho các trường `password`, `refreshToken`.
- Tuyệt đối không log ra console các dữ liệu nhạy cảm (mật khẩu plain-text, secret keys, thẻ tín dụng).
