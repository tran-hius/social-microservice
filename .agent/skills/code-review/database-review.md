# 🗄️ Database Review

## 1. Kiểm tra Schema & Queries
- **Thiếu Index**: Các trường dùng trong điều kiện tìm kiếm hoặc unique constraint đã có index chưa?
- **TTL Index**: Các collection chứa token/session tạm thời đã có TTL index để tự xóa chưa?
- **Data Types**: Có sử dụng đúng kiểu dữ liệu (ObjectId, Date, String, Number) thay vì lưu string lung tung không?
- **Transactions**: Các thao tác cập nhật đồng thời nhiều bảng có được bọc trong Transaction an toàn không?
