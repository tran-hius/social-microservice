---
name: automated-testing
description: >-
  Use this skill to run typechecking, build tests, unit tests, and integration test suites for microservices.
---

# 🧪 Automated Testing Skill

Hướng dẫn quy trình kiểm thử tự động.

## Các bước thực thi:

1. **Kiểm tra biên dịch TypeScript**:
   - Chạy lệnh: `npm run build` hoặc `npx tsc --noEmit`.
   - Bắt buộc phải đạt 0 lỗi biên dịch.
2. **Kiểm thử Đơn vị (Unit Tests)**:
   - Viết hoặc chạy test suite kiểm tra Service và Utils với Mock Repositories.
3. **Xác nhận kết quả**:
   - Nếu có lỗi $\rightarrow$ Chuyển ngược về tầng Backend Development để sửa.
   - Nếu vượt qua 100% $\rightarrow$ Chuyển sang Giai đoạn Git Push.
