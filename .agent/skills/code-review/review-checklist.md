# 📋 Code Review Checklist (Senior / Principal Standard)

### 🔴 Critical Severity (Chặn merge/commit ngay lập tức)
- [ ] Lỗ hổng bảo mật: SQL/NoSQL Injection, Authentication Bypass, IDOR.
- [ ] Mật khẩu plain-text lưu vào DB hoặc log ra console.
- [ ] Rò rỉ thông tin nhạy cảm (`password`, `refreshToken`) qua DTO.
- [ ] Bất đồng bộ thiếu `await` dẫn đến mất tính toàn vẹn dữ liệu.

### 🟡 Major Severity (Yêu cầu sửa chữa trước khi hoàn tất)
- [ ] Vi phạm phân lớp: Controller query DB, Controller validate thủ công.
- [ ] Thiếu Dependency Injection: Khởi tạo cứng class thay vì inject qua constructor.
- [ ] Thiếu Index trên trường unique hoặc trường tìm kiếm thường xuyên.
- [ ] Sai mã HTTP Status code hoặc không dùng `AppError` / `ApiResponse`.

### 🟢 Minor Severity (Góp ý tối ưu)
- [ ] Còn comment thừa trong code.
- [ ] Đặt tên chưa tối ưu hoặc magic string chưa đưa vào enum.
- [ ] Tối ưu hóa tái sử dụng hàm (DRY).
