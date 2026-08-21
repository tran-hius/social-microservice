---
name: testing
description: >-
  Senior QA/Test Engineer skill. Guides the AI to design behavior-oriented unit, integration, and E2E test suites with realistic edge cases and failure mode coverage.
---

# 🧪 Testing Skill (Senior QA / Test Engineer Level)

Kỹ năng kiểm thử tự động toàn diện theo phương pháp Behavior-Driven Testing và kiểm tra các kịch bản lỗi (Failure Modes).

---

## 📚 Tài liệu Hướng dẫn Kiểm thử:

- 🧩 [Kiểm thử Đơn vị Nghiệp vụ (Unit Testing)](./unit-testing.md)
- 🔌 [Kiểm thử Tích hợp Cơ sở dữ liệu & Services (Integration Testing)](./integration-testing.md)
- 🌐 [Kiểm thử API Đầu-Cuối (E2E Testing)](./e2e-testing.md)
- 🎭 [Chiến lược Mocking Phụ thuộc (Mocking Guide)](./mocking.md)
- 🗄️ [Quản lý Dữ liệu Kiểm thử (Test Database)](./test-database.md)
- ⚠️ [Danh mục Trường hợp Biên (Edge Cases)](./edge-cases.md)
- 📐 [Chiến lược Kim tự tháp Kiểm thử (Test Strategy)](./test-strategy.md)
- 🎯 [Độ phủ Code có Ý nghĩa (Coverage)](./coverage.md)

---

## 🛠️ Quy trình Kiểm thử Bắt buộc:

1. **Kiểm tra Biên dịch (Build Check)**:
   - Chạy `npm run build` hoặc `npx tsc --noEmit`. Bắt buộc đạt 0 lỗi.
2. **Thực thi Unit Tests**:
   - Chạy `npm test` để kiểm tra toàn bộ tầng Service, Mapper, Utils với Mock Repositories.
3. **Thực thi Integration / E2E Tests**:
   - Kiểm tra các endpoint HTTP thực tế qua Supertest.
