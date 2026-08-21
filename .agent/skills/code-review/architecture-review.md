# 🏛️ Architecture & Coupling Review

## 1. Các lỗi Vi phạm Kiến trúc Cần Bắt
- **Bỏ qua tầng (Layer Bypassing)**: Controller gọi thẳng Mongoose Model / Database Query thay vì đi qua Repository.
- **Trộn lẫn Nghiệp vụ (Logic Pollution)**: Viết logic tính toán, phân quyền hoặc validate thủ công ngay trong Controller.
- **Leaky Abstraction**: Service trả Mongoose Document thô ra Controller, làm lộ các phương thức DB nội bộ (`.save()`, `.populate()`) ra ngoài.
- **Hardcoded Dependencies**: Tự ý khởi tạo dependencies bằng từ khóa `new` cứng bên trong class thay vì truyền qua Constructor Injection.
