# 🧪 Test Plan: [Feature Name]

## 1. Phạm vi Kiểm thử
- **Service**: ...
- **Loại kiểm thử**: Unit Test, Integration Test, E2E Test

## 2. Danh sách Ca Kiểm thử (Test Cases)
| ID | Kịch bản | Dữ liệu đầu vào | Kết quả mong đợi | Loại |
| :--- | :--- | :--- | :--- | :--- |
| TC01 | Đăng ký thành công | Valid DTO | 201 Created + Token | Unit |
| TC02 | Trùng email | Duplicate Email | 409 ConflictError | Unit |
| TC03 | Sai mật khẩu | Wrong Pass | 401 Unauthorized | Unit |

## 3. Kết quả Thực thi
- **Passed**: ... / ...
- **Failed**: 0
