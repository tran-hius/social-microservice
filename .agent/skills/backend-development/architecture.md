# 🏛️ Architecture & Domain Boundaries

## 1. Lựa chọn Kiến trúc Phù hợp (Context-Driven Architecture)
Không áp đặt một mẫu kiến trúc cứng nhắc cho mọi bài toán:
- **Layered Architecture (Controller - Service - Repository)**: Chuẩn mực cho phần lớn CRUD và Microservices vừa/nhỏ. Tối ưu thời gian phát triển, rành mạch và dễ test.
- **Hexagonal / Clean Architecture (Ports & Adapters)**: Áp dụng khi nghiệp vụ lõi (Domain Logic) phức tạp và độc lập hoàn toàn với Framework/Database bên ngoài.
- **Modular Monolith**: Phù hợp cho giai đoạn đầu của sản phẩm trước khi tách thành Microservices thực sự.

## 2. Chiều Phụ thuộc (Dependency Direction)
```text
Controller / Routes (Tầng Ngoài cùng)
       ↓ (phụ thuộc vào)
    Service (Tầng Nghiệp vụ)
       ↓ (phụ thuộc vào)
   Repository (Tầng Dữ liệu)
       ↓ (phụ thuộc vào)
  Database Entity / Model
```
- Tầng bên trong không bao giờ được phụ thuộc ngược ra tầng bên ngoài.
- Tầng ngoài giao tiếp với tầng trong thông qua **Interfaces** (Dependency Inversion).

## 3. Ranh giới Ngữ cảnh (Bounded Contexts)
- Mỗi microservice quản lý một Domain riêng biệt.
- **Database per Service**: Mỗi service sở hữu database riêng, không query chéo database.
- Giao tiếp giữa các Service: Đồng bộ qua HTTP/gRPC (chỉ khi cần phản hồi ngay), Bất đồng bộ qua Message Queue (cho events).
