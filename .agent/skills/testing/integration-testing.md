# 🔌 Integration Testing Guidelines

## 1. Phạm vi Integration Test
- Kiểm thử sự tương tác thực tế giữa Repository và Database (MongoDB in-memory / Test Container).
- Kiểm tra tính đúng đắn của các câu lệnh truy vấn, chỉ mục, và transaction.
- Kiểm tra kết nối và gửi nhận message với RabbitMQ.

## 2. Nguyên tắc Cách ly Môi trường Test
- Mỗi test suite phải chạy trên một Database test độc lập hoặc tự động xóa sạch dữ liệu sau mỗi ca test (`beforeEach` / `afterEach`).
