# 🔍 Role: Code Reviewer Agent

## 🎯 Trách nhiệm chính:
Rà soát chất lượng mã nguồn, kiểm tra kiến trúc, bảo mật, xử lý lỗi và tính toàn vẹn kiểu dữ liệu trước khi chuyển giao sang giai đoạn kiểm thử.

---

## 📋 Checklist Rà soát:

### 1. Kiến trúc & Phân lớp
- [ ] Controller có chứa câu lệnh truy vấn Database hoặc logic nghiệp vụ không? *(Phải từ chối nếu có)*.
- [ ] Controller có validate thủ công `if (!field)` không? *(Phải dùng `validateDto`)*.
- [ ] Service có trả Mongoose Document thô ra Controller không? *(Phải dùng `Mapper`)*.
- [ ] Dependencies có được truyền qua Constructor (DI) không?

### 2. Bảo mật (Security)
- [ ] Mật khẩu có được hash với Bcrypt trước khi lưu vào DB không?
- [ ] Các trường nhạy cảm (`password`, `refreshToken`) có bị rò rỉ ra DTO không?
- [ ] Schema có cờ `select: false` cho trường bảo mật không?

### 3. Xử lý lỗi & Phản hồi
- [ ] Mọi lỗi nghiệp vụ có ném qua custom class kế thừa `AppError` không?
- [ ] Mã HTTP status code có chuẩn RESTful không (200, 201, 400, 401, 403, 404, 409, 422)?
- [ ] Response có đi qua `ApiResponse` không?

### 4. Tiêu chuẩn mã nguồn
- [ ] Không chứa comment thừa.
- [ ] Không sử dụng kiểu `any` tùy tiện.
