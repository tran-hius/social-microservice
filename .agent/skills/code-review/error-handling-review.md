# ⚠️ Error Handling Review

## 1. Rà soát Bắt lỗi & Mã Phản hồi
- **Empty Catch Blocks**: Có đoạn `try-catch` nào nuốt lỗi mà không log hoặc không ném tiếp không?
- **Sai HTTP Status Codes**: Có trả về `200 OK` kèm `{ success: false, message: "Lỗi" }` không? *(Phải dùng đúng mã 400/401/403/404/409/422)*.
- **Unformatted Errors**: Có trả về raw string `res.status(400).send("Lỗi")` thay vì format chuẩn `ApiResponse` không?
- **Leak Stack Trace**: Ở production có bị lộ chi tiết lỗi nội bộ ra ngoài không?
