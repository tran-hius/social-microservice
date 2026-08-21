---
name: code-review
description: >-
  Use this skill to perform automated code review, security audits, and architectural validation across microservice codebases.
---

# 🔍 Code Review Skill

Hướng dẫn quy trình rà soát chất lượng mã nguồn tự động.

## Quy trình rà soát:

1. **Kiểm tra Phân lớp**:
   - Đối chiếu theo vai trò của [code-reviewer.md](../../roles/code-reviewer.md).
   - Đảm bảo Controller không chứa logic, Service không chứa SQL/Mongoose query trực tiếp.
2. **Kiểm tra Bảo mật**:
   - Mật khẩu hash Bcrypt, refresh token tách rời.
   - Không leak secret key hoặc password ra ngoài API.
3. **Kiểm tra DI & Clean Code**:
   - Tất cả dependencies được inject qua Constructor.
   - Mã nguồn không chứa comment thừa.
