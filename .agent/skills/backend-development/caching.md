# 💾 Caching Strategies

## 1. Mẫu Cache-Aside Pattern
- **Đọc (Read)**: Kiểm tra Redis trước $\rightarrow$ Nếu có (Cache Hit): Trả về ngay $\rightarrow$ Nếu không có (Cache Miss): Query Database $\rightarrow$ Lưu vào Redis kèm TTL $\rightarrow$ Trả về.
- **Ghi (Write)**: Cập nhật Database $\rightarrow$ Xóa (Invalidate) key tương ứng trong Redis.

## 2. Phòng tránh Sự cố Caching
- **Cache Stampede / Thundering Herd**: Đặt TTL ngẫu nhiên (Jitter) hoặc sử dụng Distributed Lock khi tính toán lại dữ liệu đắt đỏ.
- **Cache Invalidation**: Ưu tiên xóa key hơn là cố gắng cập nhật key để tránh sai lệch dữ liệu đồng thời.
- **TTL Bắt buộc**: Mọi key trong Redis bắt buộc phải có thời gian sống (TTL), không lưu trữ key vĩnh viễn không kiểm soát.
