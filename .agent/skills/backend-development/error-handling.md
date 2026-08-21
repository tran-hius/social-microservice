# ⚠️ Error Handling & Resilience

## 1. Phân loại Lỗi (Error Classification)
- **Domain / Business Errors**: Xảy ra do vi phạm quy tắc nghiệp vụ (Email trùng, tài khoản bị khóa, số dư không đủ). Ném ra các custom error kế thừa `AppError`.
- **Validation Errors**: Sai định dạng dữ liệu đầu vào. Trả về `422` kèm danh sách trường bị lỗi.
- **Infrastructure Errors**: Database mất kết nối, Message Broker không phản hồi, Network timeout. Log mức độ `ERROR` kèm stack trace và trả về `500` an toàn cho client.

## 2. Centralized Error Handling
- Không sử dụng `try-catch` tràn lan nếu chỉ để log lại lỗi và `next(err)`.
- Sử dụng Middleware bắt lỗi tập trung (`errorHandler` ở cuối chuỗi middleware).
- Middleware tự động trích xuất `x-correlation-id` gắn vào log và response JSON.

## 3. An toàn Thông tin khi Phản hồi Lỗi (Safe Error Responses)
- Ở môi trường `production`: Tuyệt đối không trả `stack trace`, thông tin SQL query hay cấu trúc thư mục máy chủ ra client. Chỉ trả về mã lỗi tổng quát `INTERNAL_SERVER_ERROR`.
