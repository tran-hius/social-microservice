---
name: backend-development
description: >-
  Senior-level backend engineering skill. Guides the AI to design and implement robust, scalable, secure, and production-ready backend microservices and APIs.
---

# 🚀 Backend Development Skill

Kỹ năng phát triển Backend chuyên sâu dành cho AI Agent. Hướng dẫn thiết kế và xây dựng hệ thống thay vì chỉ sinh mã nguồn đơn thuần.

---

## 📚 Tài liệu Tham chiếu Kỹ thuật (Sub-Guides):

- 🏛️ [Kiến trúc & Ranh giới Nghiệp vụ (Architecture)](./architecture.md)
- 🌐 [Thiết kế API & DTOs (API Design)](./api-design.md)
- 🗄️ [Thiết kế Cơ sở Dữ liệu & Tối ưu Query (Database)](./database.md)
- 🔒 [Bảo mật & Quản lý Xác thực (Security)](./security.md)
- ⚠️ [Xử lý Lỗi Phân tầng (Error Handling)](./error-handling.md)
- 📊 [Giám sát & Structured Logging (Observability)](./observability.md)
- ⚡ [Tối ưu Hiệu năng & Bottlenecks (Performance)](./performance.md)
- 📨 [Giao tiếp Bất đồng bộ & Message Broker (Messaging)](./messaging.md)
- 💾 [Chiến lược Bộ nhớ đệm (Caching)](./caching.md)
- 🚢 [Bảng kiểm tra Xuất bản Production (Production Readiness)](./production-readiness.md)

---

## 🛠️ Quy trình Triển khai Chuẩn (Step-by-Step Implementation):

1. **Khảo sát & Thiết kế Hợp đồng (Contracts First)**:
   - Xác định rõ DTO Request / Response.
   - Định nghĩa Interface cho Repository và Service trong `src/interfaces/`.
2. **Triển khai Tầng Dữ liệu (Repository & Model)**:
   - Xây dựng Mongoose Schema / PostgreSQL Table có đánh index hợp lý.
   - Viết Repository implements Interface, nhận Model qua Constructor Injection.
3. **Triển khai Tầng Nghiệp vụ (Service & Mapper)**:
   - Viết Service xử lý logic, mã hóa, tính toán, kiểm tra xung đột.
   - Chuyển đổi dữ liệu sang DTO an toàn qua Mapper trước khi trả về.
4. **Triển khai Tầng Giao tiếp (Controller & Router)**:
   - Gắn `validateDto(DtoClass)` tại Router để chặn dữ liệu sai ngay từ cửa ngõ.
   - Controller chỉ gọi Service và bọc response qua `ApiResponse`.
5. **Kiểm tra & Rà soát**:
   - Chạy `npm run build` hoặc `npx tsc --noEmit` để đảm bảo 0 lỗi kiểu dữ liệu.
