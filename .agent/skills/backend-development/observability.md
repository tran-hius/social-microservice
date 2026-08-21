# 📊 Observability & Structured Logging

## 1. Nguyên tắc Ghi Log Có Cấu trúc (Structured Logging)
- Mọi log ghi ra phải ở định dạng JSON để dễ dàng tổng hợp qua ELK Stack, Grafana Loki, CloudWatch.
- Các trường bắt buộc trong mỗi log entry:
  - `timestamp`: Thời gian chuẩn ISO-8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`).
  - `level`: `INFO`, `WARN`, `ERROR`, `DEBUG`.
  - `service`: Tên microservice (ví dụ `auth-service`, `gateway`).
  - `message`: Nội dung sự kiện ngắn gọn.
  - `correlationId`: Mã định danh xuyên suốt request.

## 2. Correlation IDs & Distributed Tracing
- API Gateway sinh ra `x-correlation-id` (UUID v4) khi nhận request.
- Mọi request nội bộ giữa các service hoặc message đẩy lên RabbitMQ đều phải đính kèm `correlationId` này.

## 3. Health Checks
- Mỗi service phải cung cấp endpoint `GET /health` để Kubernetes / Load Balancer kiểm tra liveness và readiness.
