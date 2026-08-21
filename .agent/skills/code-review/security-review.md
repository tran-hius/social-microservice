# 🔒 Security Review

## 1. Các Lỗ hổng Nghiêm trọng Cần Chặn (Critical Vulnerabilities)
- **Plain-text Passwords**: Mật khẩu có bị lưu trực tiếp hoặc in ra log không?
- **Authentication Bypass**: Có endpoint nhạy cảm nào quên kiểm tra xác thực hoặc token không?
- **Insecure Direct Object Reference (IDOR)**: User A có thể sửa bài viết/thông tin của User B bằng cách đổi `id` trên URL không? (Phải so sánh `authorId === currentUserId`).
- **Data Leaks**: Password hash, Refresh token hoặc biến môi trường bí mật có bị trả về qua DTO không?
- **Mass Assignment**: Client có tự gán quyền `role: 'admin'` khi đăng ký không? (Phải lọc whitelist trường trong DTO).
