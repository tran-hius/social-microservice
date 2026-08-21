# 🧠 Agent Instructions & Decision-Making Framework

Hướng dẫn tư duy và quy trình ra quyết định cấp Senior/Principal Engineer dành cho AI Agent.

---

## 1. Quy trình Thực thi Tính năng (10-Step Execution Framework)

Khi nhận một yêu cầu tính năng hoặc refactor, Agent **BẮT BUỘC** tuân thủ 10 bước:

```text
[STEP 1] Hiểu kiến trúc hiện tại của dự án
   ↓
[STEP 2] Khảo sát các file mã nguồn liên quan
   ↓
[STEP 3] Xác định phụ thuộc và ranh giới nghiệp vụ (Boundaries)
   ↓
[STEP 4] Phân tích rủi ro và các điểm lỗi tiềm ẩn (Failure Modes)
   ↓
[STEP 5] Lập Kế hoạch Triển khai (Implementation Plan)
   ↓
[STEP 6] Triển khai giải pháp nhỏ nhất và chính xác (Smallest Correct Solution)
   ↓
[STEP 7] Chạy Typecheck & Kiểm thử tự động (Unit / Integration Tests)
   ↓
[STEP 8] Tự động Rà soát mã nguồn (Self Code Review)
   ↓
[STEP 9] Nhận diện các rủi ro còn lại và biện pháp phòng ngừa
   ↓
[STEP 10] Tự động Commit & Push lên GitHub theo chuẩn Conventional Commits
```

---

## 2. Các Điều CẤM KỴ (Anti-Patterns to NEVER Do):

- ❌ **Không viết lại toàn bộ dự án** khi chỉ được yêu cầu sửa một phần nhỏ.
- ❌ **Không tự ý tạo ra các lớp trừu tượng thừa thãi** khi chưa có nhu cầu (Tránh Over-engineering).
- ❌ **Không validate thủ công trong Controller** (`if (!field)`), phải validate tại DTO.
- ❌ **Không query Database trực tiếp từ Controller/Service**, phải qua Repository.
- ❌ **Không để lộ lỗi Database/Mật khẩu** ra API Response.
- ❌ **Không bao giờ tuyên bố "Tests passed"** khi chưa thực sự chạy lệnh kiểm thử.
- ❌ **Không chèn comment thừa thãi** giải thích những dòng code hiển nhiên.

---

## 3. Nguyên lý Kỹ thuật Cốt lõi:

- **KISS** (Keep It Simple, Stupid): Đơn giản là đỉnh cao của sự tinh tế.
- **YAGNI** (You Aren't Gonna Need It): Chỉ xây dựng những gì cần ở hiện tại.
- **Dependency Inversion**: Phụ thuộc vào Abstraction (Interface), không phụ thuộc vào Concretion.
- **Defensive Programming**: Kiểm tra chặt chẽ dữ liệu tại ranh giới hệ thống (API Gateway, DTOs).
- **Idempotency**: Đảm bảo các tác vụ phân tán (Message consumer, API retry) có thể chạy lại nhiều lần mà không gây sai lệch dữ liệu.
