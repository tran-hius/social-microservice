---
name: code-review-test
description: >-
  Use this skill whenever developing, refactoring, or modifying features across microservices.
  It enforces a strict 4-phase automated workflow: 1. Code Implementation -> 2. Quality & Security Review -> 3. Automated Testing and Verification -> 4. Auto Git Commit and Push.
---

# 🔄 AI Workflow: Code -> Review -> Test -> Push

Quy trình chuẩn hóa 4 giai đoạn tự động cho AI Agent khi thực hiện bất kỳ tác vụ code nào trong hệ sinh thái Microservices.

---

## 🚀 Giai đoạn 1: Code (Triển khai mã nguồn)

1. **Chuẩn bị DTO & Validation**:
   - Định nghĩa DTO với `class-validator` decorators (`@IsEmail`, `@IsNotEmpty`, `@MinLength`, v.v.).
   - Sử dụng middleware `validateDto(DtoClass)` tại Route để chặn lỗi đầu vào.
2. **Tuân thủ Dependency Injection**:
   - Inject Model vào Repository qua Constructor.
   - Inject Repository vào Service qua Constructor.
   - Inject Service vào Controller qua Constructor.
3. **Phân tách tầng rõ ràng**:
   - **Controller**: Tiếp nhận request, gọi Service, trả về qua `ApiResponse.success` hoặc `ApiResponse.created`. Tuyệt đối không validate thủ công (`if (!field)`).
   - **Service**: Xử lý logic nghiệp vụ, gọi Mapper để chuyển đổi Entity sang DTO an toàn.
   - **Repository**: Chỉ chứa các thao tác Database CRUD.
4. **Không viết comment thừa**:
   - Giữ mã nguồn tự giải thích (Self-documenting code), không chèn comment thừa thãi.

---

## 🔍 Giai đoạn 2: Review (Kiểm tra chất lượng & Bảo mật)

Trước khi chuyển sang test, AI Agent tự động rà soát mã nguồn theo danh sách kiểm tra: [review-checklist.md](./references/review-checklist.md):

1. **Kiểm tra Phân lớp & DI**:
   - [ ] Có câu lệnh truy vấn Database trực tiếp trong Controller hoặc Service không? *(Nếu có -> Chuyển vào Repository)*.
   - [ ] Có validate thủ công trong Controller không? *(Nếu có -> Chuyển vào DTO)*.
   - [ ] Có inject dependencies qua Constructor không?
2. **Kiểm tra Bảo mật**:
   - [ ] Mật khẩu có được hash bằng Bcrypt không?
   - [ ] Các trường nhạy cảm (`password`, `refreshToken`) có bị rò rỉ ra DTO không?
   - [ ] Đã có cờ `select: false` trong Schema chưa?
3. **Kiểm tra Xử lý Lỗi**:
   - [ ] Các lỗi có kế thừa từ `AppError` không?
   - [ ] Mã HTTP status code có chính xác không (400, 401, 403, 404, 409, 422)?
4. **Kiểm tra Kiểu dữ liệu (Type Safety)**:
   - [ ] Không sử dụng kiểu `any` tùy tiện.
   - [ ] Interface và DTOs có khớp nhau không?

---

## 🧪 Giai đoạn 3: Test (Kiểm thử & Xác thực tự động)

Tham khảo tiêu chuẩn kiểm thử: [test-standards.md](./references/test-standards.md):

1. **Biên dịch & Kiểm tra kiểu (Build / Typecheck)**:
   - Chạy lệnh: `npm run build` hoặc `npx tsc --noEmit`.
   - Bắt buộc không có bất kỳ lỗi TypeScript nào trước khi hoàn tất.
2. **Chạy Unit Test cho Services**:
   - Mock các Repositories để kiểm tra logic của Service trong các kịch bản:
     - Kịch bản thành công (Happy path).
     - Kịch bản trùng email/username (`ConflictError`).
     - Kịch bản sai mật khẩu (`UnauthorizedError`).
     - Kịch bản tài khoản bị khóa (`ForbiddenError`).
3. **Chạy Integration Test cho API Routes**:
   - Kiểm tra request gửi qua endpoint có trả về đúng mã status và format `ApiResponse` không.

---

## 📤 Giai đoạn 4: Git Commit & Push (Tự động hóa)

Sau khi Giai đoạn 3 (Test) thành công 100%:
1. **Kiểm tra Git Status**: Đảm bảo các file cấu hình, mã nguồn mới và `.agents` được thêm đầy đủ.
2. **Commit theo chuẩn Conventional Commits**:
   - `feat(scope): ...` cho tính năng mới.
   - `fix(scope): ...` cho sửa lỗi.
   - `refactor(scope): ...` cho tái cấu trúc mã nguồn.
3. **Tự động Push**:
   - Thực thi `git add .`, `git commit -m "..."` và `git push origin main`.
4. **Báo cáo kết quả**:
   - Báo cáo rõ ràng trạng thái: **Đã Code $\rightarrow$ Đã Review $\rightarrow$ Đã Pass Tests $\rightarrow$ Đã Push GitHub**.
