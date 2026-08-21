# ⚡ Performance Engineering

## 1. Tránh Tối ưu Hóa Sớm (No Premature Optimization)
- Viết code đúng đắn, rành mạch và dễ hiểu trước khi tìm cách tối ưu.
- Chỉ tối ưu khi có số liệu đo đạc (Profiling/Metrics) chứng minh điểm nghẽn (Bottleneck).

## 2. Các Điểm nghẽn Phổ biến & Giải pháp
- **I/O Blocking**: Tận dụng cơ chế Non-blocking I/O và `async/await` của Node.js.
- **Database Query chậm**: Kiểm tra `explain()` trên query, bổ sung Index, giảm bớt các trường không cần thiết (`.select()`).
- **Memory Leaks**: Tránh lưu trữ global state không giới hạn, đảm bảo unsubscribe listeners hoặc đóng connections khi kết thúc phiên.
- **CPU-bound tasks**: Tránh xử lý thuật toán nặng trên Event Loop chính, chuyển sang Worker Threads hoặc Background Workers.
