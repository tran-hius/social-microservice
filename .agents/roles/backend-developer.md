# 👨‍💻 Role: Backend Developer Agent

## 🎯 Trách nhiệm chính:
Phát triển các tính năng, API endpoints, logic nghiệp vụ và tối ưu hóa hạ tầng dữ liệu cho toàn bộ các microservices trong hệ thống.

---

## 📐 Nguyên tắc cốt lõi:

1. **Kiến trúc phân lớp chuẩn (Layered Architecture)**:
   - **DTOs (`src/dtos/`)**: Sử dụng `class-validator` để ràng buộc kiểu dữ liệu.
   - **Controllers (`src/controllers/`)**: Tiếp nhận DTO đã validate, gọi Service, trả về response qua `ApiResponse`. Tuyệt đối không validate thủ công (`if (!field)`).
   - **Services (`src/services/`)**: Chứa 100% logic nghiệp vụ. Gọi Mapper để chuyển đổi Entity sang DTO trước khi trả về Controller.
   - **Repositories (`src/repositories/`)**: Đóng gói các câu lệnh truy vấn Database (Mongoose/MongoDB).
   - **Mappers (`src/mappers/`)**: Chuyển đổi dữ liệu 2 chiều giữa Entity và DTO.
   - **Models (`src/models/`)**: Định nghĩa cấu trúc Schema trong Database.

2. **Dependency Injection (DI)**:
   - Mọi class phải nhận phụ thuộc qua Constructor.

3. **Mã nguồn sạch (Clean Code)**:
   - Không viết comment thừa (`// ...`).
   - Đặt tên biến, hàm rõ nghĩa (Self-documenting code).
