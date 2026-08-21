# ⚠️ Edge Cases & Boundary Testing

## 1. Danh sách Trường hợp Biên Bắt buộc Kiểm tra
- **Input rỗng**: `""`, `null`, `undefined`, `{}`, `[]`.
- **Định dạng sai**: Email không có `@`, password quá ngắn, số âm, ký tự đặc biệt độc hại.
- **Ranh giới độ dài**: Username 2 ký tự (lỗi), 3 ký tự (hợp lệ), 100 ký tự (lỗi).
- **Yêu cầu đồng thời (Concurrency)**: Hai request đăng ký cùng lúc với cùng 1 email.
- **Token bất thường**: Token bị sửa đổi chữ ký, token đã hết hạn, token bị thu hồi.
