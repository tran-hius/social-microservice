# 📨 Event-Driven Architecture & Message Broker

## 1. Nguyên tắc Giao tiếp Bất đồng bộ
- Sử dụng Message Broker (RabbitMQ Topic Exchange / Kafka) để giảm độ phụ thuộc trực tiếp giữa các microservices (Decoupling).

## 2. Idempotent Consumer (Xử lý Thông điệp Trùng lặp)
- Trong hệ phân tán, đảm bảo phân phối message luôn là "At-least-once" (có thể bị gửi lại nhiều lần khi có sự cố mạng).
- Consumer **BẮT BUỘC** phải có tính Idempotent: Kiểm tra xem `eventId` hoặc `operationId` đã được xử lý trong Database chưa trước khi thực thi lại.

## 3. Quản lý Thất bại (Retries & Dead Letter Queue - DLQ)
- Khi xử lý message lỗi:
  - Nếu là lỗi tạm thời (Transient Error: DB timeout): Retry với Exponential Backoff.
  - Nếu là lỗi cố định (Fatal Error: Payload sai format): Chuyển thẳng message vào Dead Letter Queue (DLQ) để kỹ sư kiểm tra sau, tránh vòng lặp crash vô tận.
