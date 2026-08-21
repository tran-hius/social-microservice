# 🎯 Correctness & Concurrency Review

## 1. Tính Đúng đắn của Logic (Logical Correctness)
- Kiểm tra các điều kiện rẽ nhánh (`if / else`): Có bị sót trường hợp biên (Edge Cases: `null`, `undefined`, chuỗi rỗng `""`, mảng rỗng `[]`) không?
- Kiểm tra thứ tự thực thi: Các thao tác bất đồng bộ có được `await` đầy đủ không? (Tránh quên `await` dẫn đến Promise không được giải quyết).

## 2. Race Conditions & Tính Bất biến
- Hai request đồng thời cùng đăng ký cùng 1 email $\rightarrow$ Database có bị trùng không? (Phải có Unique Index ở Database).
- Cập nhật số liệu đếm (Likes, Views, Balances) $\rightarrow$ Có dùng atomic update (`$inc`) thay vì đọc ra rồi gán lại không?
