# 🗄️ Database Design & Optimization

## 1. Thiết kế Chỉ mục (Indexing Strategy)
- Luôn đánh `unique index` cho các trường định danh duy nhất (`email`, `username`).
- Đánh chỉ mục cho các trường thường xuyên dùng trong mệnh đề `WHERE`, `ORDER BY`, `JOIN` (hoặc `find()`, `sort()` trong MongoDB).
- Cân nhắc `Compound Index` cho các truy vấn lọc nhiều trường (ví dụ `{ role: 1, status: 1 }`).
- Sử dụng **TTL Index** (Time-To-Live) cho các collection lưu token hoặc session tạm thời.

## 2. Phòng tránh Lỗi N+1 Queries
- Tuyệt đối không gọi truy vấn Database bên trong vòng lặp `for` / `forEach`.
- Sử dụng `$in` / `WHERE IN` hoặc batching với Dataloader.

## 3. Quản lý Giao dịch (Transactions & Concurrency)
- Sử dụng Database Transaction khi một thao tác nghiệp vụ cần ghi vào nhiều bảng/collection đồng thời để đảm bảo tính toàn vẹn (ACID).
- Chọn giải pháp khóa phù hợp:
  - **Optimistic Locking**: Sử dụng trường version (`versionKey` / `__v`) cho hệ thống có tần suất ghi thấp/vừa.
  - **Pessimistic Locking**: Sử dụng khi tranh chấp dữ liệu cao (thanh toán, trừ tồn kho).

## 4. Quản lý Kết nối (Connection Pooling)
- Sử dụng Connection Pool, đặt giới hạn `maxPoolSize` và `minPoolSize` phù hợp với tài nguyên máy chủ.
- Luôn đóng kết nối trong tiến trình Graceful Shutdown.
