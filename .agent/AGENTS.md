# AI Coding Guidelines & Agent Rules

## 🎯 Quy chuẩn phát triển cho toàn bộ AI Agents trong dự án:

1. **RAG & Index-First Navigation Mandate**:
   - **BẮT BUỘC**: Luôn đọc `.agent/INDEX.md` đầu tiên để xác định Intent. Sau đó dùng **Keyword Routing Table** bên dưới để load NGAY Primary Skill tương ứng — không suy luận, không bỏ qua bước.
   - **Tuyệt đối không đọc các file `.md` không liên quan đến Intent hiện tại.**

   ### ⚡ Keyword → Skill Routing Table (Deterministic — NO GUESSING)

   | Từ khóa kích hoạt (tiếng Việt / English) | Primary Skill File cần đọc NGAY |
   | :--- | :--- |
   | `hướng dẫn`, `giải thích`, `dạy`, `teach`, `explain`, `how does`, `tại sao`, `why`, `mentor`, `tư vấn`, `học` | **`.agent/skills/senior-mentor/SKILL.md`** |
   | `implement`, `viết code`, `tạo`, `build`, `thêm feature`, `làm tính năng`, `code cho tôi` | **`.agent/skills/backend-development/SKILL.md`** |
   | `review`, `kiểm tra code`, `đánh giá`, `audit`, `nhận xét code` | **`.agent/skills/code-review/SKILL.md`** |
   | `debug`, `lỗi`, `bug`, `fix`, `sửa lỗi`, `không chạy được` | **`.agent/skills/testing/SKILL.md`** |
   | `thiết kế hệ thống`, `system design`, `kiến trúc`, `architecture`, `design cho tôi` | **`.agent/skills/system-design/SKILL.md`** |
   | `tối ưu`, `performance`, `chậm`, `slow`, `optimize`, `profiling` | **`.agent/skills/performance/SKILL.md`** |
   | `bảo mật`, `security`, `auth`, `JWT`, `permission`, `phân quyền` | **`.agent/skills/security/SKILL.md`** |
   | `migrate`, `migration`, `schema thay đổi`, `database migration` | **`.agent/skills/database/SKILL.md`** |
   | `sự cố`, `incident`, `outage`, `circuit breaker`, `reliability` | **`.agent/skills/reliability/SKILL.md`** |
   | `microservice`, `event`, `kafka`, `rabbitmq`, `saga`, `message queue` | **`.agent/skills/microservices/SKILL.md`** |
   | `docker`, `deploy`, `devops`, `CI/CD`, `health check`, `container` | **`.agent/skills/devops/SKILL.md`** |
   | `concurrency`, `race condition`, `deadlock`, `lock`, `transaction isolation` | **`.agent/skills/concurrency/SKILL.md`** |
   | `log`, `trace`, `observability`, `monitoring`, `correlation ID` | **`.agent/skills/observability/SKILL.md`** |
   | `API contract`, `versioning`, `breaking change`, `DTO schema`, `swagger` | **`.agent/skills/api-contracts/SKILL.md`** |
   | `threat model`, `STRIDE`, `attack surface`, `trust boundary` | **`.agent/skills/threat-modeling/SKILL.md`** |

   > **Quy tắc vàng**: Đọc INDEX.md → khớp keyword → **đọc NGAY Primary Skill file** → thực thi. Không được bỏ qua bước đọc Skill file.

   ### 📢 Mandatory Skill Confirmation Banner
   - **BẮT BUỘC**: Ngay sau khi đọc xong bất kỳ Skill file nào, Agent PHẢI hiển thị dòng xác nhận ở đầu response theo đúng format:
     ```
     📚 Skill đã load: .agent/skills/<tên-skill>/SKILL.md
     ```
   - **Ví dụ thực tế**:
     - `📚 Skill đã load: .agent/skills/senior-mentor/SKILL.md`
     - `📚 Skill đã load: .agent/skills/backend-development/SKILL.md`
     - `📚 Skill đã load: .agent/skills/code-review/SKILL.md`
   - Dòng này phải xuất hiện **trước nội dung trả lời chính**, không được bỏ qua, không được viết tắt.

2. **Kiến trúc phân lớp (Layered Architecture)**:
   - `DTO`: Khai báo validation schema bằng `class-validator`.
   - `Controller`: Chỉ nhận DTO đã validate, gọi Service, trả về qua `ApiResponse`. Không viết logic nghiệp vụ hay validate thủ công tại Controller.
   - `Service`: Chứa toàn bộ nghiệp vụ, gọi Repository.
   - `Repository`: Chứa toàn bộ câu lệnh truy vấn Database (Mongoose / Prisma / PostgreSQL).
   - `Model`: Entity định nghĩa bảng/collection trong Database.
   - `Mapper`: Chuyển đổi giữa Model Entity và DTO.

3. **Nguyên tắc Dependency Injection (DI)**:
   - Bắt buộc inject các dependencies qua Constructor (Repository vào Service, Service vào Controller, Model vào Repository).

4. **Xử lý lỗi & Phản hồi**:
   - Sử dụng các lớp Custom Error kế thừa từ `AppError` (`BadRequestError`, `UnauthorizedError`, `ForbiddenError`, `NotFoundError`, `ConflictError`).
   - Sử dụng `ApiResponse` để chuẩn hóa định dạng trả về.

5. **BẮT BUỘC Chạy Kiểm thử Trước khi Push (Pre-Push Test Verification)**:
   - **NGHIÊM CẤM push code lỗi lên GitHub**: Trước khi thực thi bất kỳ lệnh commit hay git push nào, Agent **BẮT BUỘC** phải chạy kiểm thử tự động:
     1. Typecheck & Build: Chạy `npm run build` trên tất cả các microservices có chỉnh sửa để đảm bảo **0 lỗi TypeScript (Exit code 0)**.
     2. Unit & Integration Tests: Chạy `npm test` để xác minh 100% test cases passed.
     3. Nếu có bất kỳ lỗi nào xuất hiện, Agent phải lập tức dừng quy trình push, sửa lỗi triệt để, chạy lại kiểm thử cho đến khi pass hoàn toàn rồi mới được phép commit/push.

6. **Quy trình làm việc chuẩn 4 bước (Standard Pipeline)**:
   - **Code $\rightarrow$ Review $\rightarrow$ Test (Passed 100%) $\rightarrow$ Auto Git Push**.

7. **Tự động Commit & Push lên GitHub**:
   - Sau khi hoàn thành xong một tính năng hoặc refactor và đã vượt qua **Quy tắc số 5 (Kiểm thử đạt 100%)**, Agent phải tự động chạy lệnh `git add .`, tạo commit theo chuẩn **Conventional Commits** (ví dụ: `feat(auth): ...`, `refactor(gateway): ...`) và tự động `git push origin main` lên GitHub mà không cần chờ người dùng nhắc.

8. **Tiêu Chuẩn Chất Lượng Giải Thích Bắt Buộc — Senior Mentor Quality (Áp dụng cho MỌI response)**:

   > 🚨 Rule này áp dụng **toàn cục** — bất kể đang dùng Skill nào. Agent **KHÔNG ĐƯỢC** đợi người dùng phàn nàn mới giải thích đầy đủ.

   Agent PHẢI tuân thủ đồng thời tất cả các tiêu chuẩn sau trong **lần trả lời đầu tiên**:

   | # | Tiêu chuẩn | Mô tả bắt buộc |
   | :---: | :--- | :--- |
   | 1 | **Analogy thực tế** | Mọi khái niệm kỹ thuật PHẢI được mở đầu bằng 1 ví dụ thực tế dễ hiểu (nhân viên bán hàng, bưu điện, quản lý kho...) — map 1-to-1 với concept |
   | 2 | **Problem-First** | Trước khi viết code hay giải thích concept, PHẢI nêu rõ: *"Bài toán thực tế bạn đang gặp là..."* |
   | 3 | **Bước từng bước** | Mọi hướng dẫn setup/implementation PHẢI chia thành Bước 1, Bước 2... — mỗi bước giải thích **TẠI SAO** tồn tại, không chỉ **LÀM GÌ** |
   | 4 | **Giải thích thư viện** | Khi giới thiệu bất kỳ thư viện/package nào: PHẢI nêu **tại sao chọn thư viện này** (so với alternatives) + **lệnh cài đặt cụ thể** |
   | 5 | **Comment inline code** | Mọi dòng code quan trọng PHẢI có `// 👇` giải thích lý do kiến trúc — **không phải** giải thích code làm gì, mà **tại sao phải viết vậy** |
   | 6 | **NGHIÊM CẤM trả lời sơ sài** | **Tuyệt đối cấm** cho câu trả lời tổng quan rồi đợi người dùng hỏi thêm chi tiết. Response đầu tiên phải **hoàn chỉnh, cụ thể, actionable** |
