# 🚢 Production Readiness Checklist

Trước khi tuyên bố một tính năng hay service sẵn sàng chạy Production, Agent phải xác nhận:

- [ ] **Bảo mật**: Mật khẩu đã hash, không rò rỉ JWT secret, input đã validate qua DTO.
- [ ] **Database**: Đã có Index trên các trường tìm kiếm, không có N+1 queries.
- [ ] **Xử lý Lỗi**: Centralized error handler đã bắt toàn bộ ngoại lệ, không leak stack trace ở production.
- [ ] **Giám sát**: Structured JSON log có `correlationId`, endpoint `/health` hoạt động tốt.
- [ ] **Graceful Shutdown**: Server bắt tín hiệu `SIGTERM`/`SIGINT`, đóng kết nối DB/MQ an toàn trước khi dừng.
- [ ] **Kiểm thử**: Đã chạy `npm run build` (0 lỗi) và vượt qua toàn bộ Unit/Integration tests.
