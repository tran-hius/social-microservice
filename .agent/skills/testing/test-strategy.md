# 📐 Test Strategy & The Test Pyramid

## 1. Kim tự tháp Kiểm thử (The Test Pyramid)
- **70% Unit Tests**: Kiểm tra logic nghiệp vụ nhanh, không phụ thuộc I/O.
- **20% Integration Tests**: Kiểm tra Database, Cache, Message Queue.
- **10% E2E Tests**: Kiểm tra các luồng API quan trọng nhất từ phía Client.

## 2. Tính Xác định (Deterministic Tests)
- Tránh viết test phụ thuộc vào thời gian thực (`Date.now()` không cố định) hoặc ngẫu nhiên không kiểm soát.
