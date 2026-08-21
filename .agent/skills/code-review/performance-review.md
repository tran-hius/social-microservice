# ⚡ Performance Review

## 1. Các Vấn đề Hiệu năng Cần Phát hiện
- **N+1 Database Queries**: Gọi query trong vòng lặp thay vì batching.
- **Unbounded Queries**: Truy vấn danh sách mà không có giới hạn `limit` và `skip` (Pagination).
- **Blocking the Event Loop**: Sử dụng các hàm đồng bộ nặng như `fs.readFileSync`, `crypto.pbkdf2Sync` trên luồng chính.
- **Memory Leaks**: Lưu trữ mảng/Map toàn cục không dọn dẹp, Event Listeners không remove khi xong.
