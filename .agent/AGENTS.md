# AI Coding Guidelines & Agent Rules

## 🎯 Quy chuẩn phát triển cho toàn bộ AI Agents trong dự án:

1. **Kiến trúc phân lớp (Layered Architecture)**:
   - `DTO`: Khai báo validation schema bằng `class-validator`.
   - `Controller`: Chỉ nhận DTO đã validate, gọi Service, trả về qua `ApiResponse`. Không viết logic nghiệp vụ hay validate thủ công tại Controller.
   - `Service`: Chứa toàn bộ nghiệp vụ, gọi Repository.
   - `Repository`: Chứa toàn bộ câu lệnh truy vấn Database (Mongoose / Prisma / PostgreSQL).
   - `Model`: Entity định nghĩa bảng/collection trong Database.
   - `Mapper`: Chuyển đổi giữa Model Entity và DTO.

2. **Nguyên tắc Dependency Injection (DI)**:
   - Bắt buộc inject các dependencies qua Constructor (Repository vào Service, Service vào Controller, Model vào Repository).

3. **Xử lý lỗi & Phản hồi**:
   - Sử dụng các lớp Custom Error kế thừa từ `AppError` (`BadRequestError`, `UnauthorizedError`, `ForbiddenError`, `NotFoundError`, `ConflictError`).
   - Sử dụng `ApiResponse` để chuẩn hóa định dạng trả về.

4. **Quy trình làm việc chuẩn**:
   - Mọi tác vụ code tính năng mới hoặc refactor đều phải tuân theo quy trình: **Code $\rightarrow$ Review $\rightarrow$ Test $\rightarrow$ Git Push** (được định nghĩa trong skill `code-review-test`).

5. **Tự động Commit & Push lên GitHub**:
   - **BẮT BUỘC**: Sau khi hoàn thành xong một tính năng hoặc refactor (đã Review và Test thành công 0 lỗi), Agent phải tự động chạy lệnh `git add .`, tạo commit theo chuẩn **Conventional Commits** (ví dụ: `feat(auth): ...`, `refactor(gateway): ...`) và tự động `git push` lên GitHub mà không cần chờ người dùng nhắc.
