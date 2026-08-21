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

4. **BẮT BUỘC Chạy Kiểm thử Trước khi Push (Pre-Push Test Verification)**:
   - **NGHIÊM CẤM push code lỗi lên GitHub**: Trước khi thực thi bất kỳ lệnh commit hay git push nào, Agent **BẮT BUỘC** phải chạy kiểm thử tự động:
     1. Typecheck & Build: Chạy `npm run build` trên tất cả các microservices có chỉnh sửa để đảm bảo **0 lỗi TypeScript (Exit code 0)**.
     2. Unit & Integration Tests: Chạy `npm test` để xác minh 100% test cases passed.
     3. Nếu có bất kỳ lỗi nào xuất hiện, Agent phải lập tức dừng quy trình push, sửa lỗi triệt để, chạy lại kiểm thử cho đến khi pass hoàn toàn rồi mới được phép commit/push.

5. **Quy trình làm việc chuẩn 4 bước (Standard Pipeline)**:
   - **Code $\rightarrow$ Review $\rightarrow$ Test (Passed 100%) $\rightarrow$ Auto Git Push**.

6. **Tự động Commit & Push lên GitHub**:
   - Sau khi hoàn thành xong một tính năng hoặc refactor và đã vượt qua **Quy tắc số 4 (Kiểm thử đạt 100%)**, Agent phải tự động chạy lệnh `git add .`, tạo commit theo chuẩn **Conventional Commits** (ví dụ: `feat(auth): ...`, `refactor(gateway): ...`) và tự động `git push origin main` lên GitHub mà không cần chờ người dùng nhắc.
