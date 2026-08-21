---
name: code-review
description: >-
  Senior/Principal-level code review skill. Evaluates code holistically across architecture, security, correctness, database behavior, performance, and maintainability.
---

# 🔍 Code Review Skill (Principal Engineer Level)

Kỹ năng rà soát mã nguồn toàn diện ở cấp độ Principal/Senior Backend Reviewer.

---

## 📚 Hướng dẫn Rà soát Chuyên sâu:

- 🏛️ [Rà soát Kiến trúc & Khớp nối (Architecture Review)](./architecture-review.md)
- 🎯 [Tính Đúng đắn & Race Conditions (Correctness)](./correctness.md)
- 🔒 [Rà soát Lỗ hổng Bảo mật (Security Review)](./security-review.md)
- ⚡ [Rà soát Hiệu năng & Rò rỉ Bộ nhớ (Performance Review)](./performance-review.md)
- 🗄️ [Rà soát Cơ sở Dữ liệu & Index (Database Review)](./database-review.md)
- ⚠️ [Rà soát Xử lý Lỗi & Status Codes (Error Handling Review)](./error-handling-review.md)
- 🧹 [Khả năng Bảo trì & Clean Code (Maintainability)](./maintainability.md)
- 📋 [Bảng Checklist Phân loại Mức độ (Review Checklist)](./review-checklist.md)

---

## 🎯 Cấu trúc một Báo cáo Review Chuẩn:

Mỗi vấn đề được phát hiện trong mã nguồn **BẮT BUỘC** trình bày theo 7 mục:
1. **Mức độ nghiêm trọng (Severity)**: `CRITICAL`, `MAJOR`, hoặc `MINOR`.
2. **Vị trí (Location)**: Tên file và dòng code cụ thể (`file.ts:L25-L30`).
3. **Vấn đề (Problem)**: Mô tả ngắn gọn lỗi hoặc rủi ro.
4. **Tại sao quan trọng (Why It Matters)**: Tác động tiêu cực tới hệ thống.
5. **Kịch bản Thất bại (Failure Scenario)**: Ví dụ tình huống xảy ra lỗi thực tế.
6. **Giải pháp Đề xuất (Recommended Fix)**: Hướng khắc phục chuẩn.
7. **Code Mẫu Cải tiến (Improved Implementation)**: Đoạn code đã sửa.
