---
name: backend-development
description: >-
  Use this skill when implementing new backend features, APIs, database models, services, or refactoring microservice components.
---

# 🚀 Backend Development Skill

Hướng dẫn quy trình viết code backend chuẩn Layered Architecture và Dependency Injection.

## Các bước triển khai:

1. **Định nghĩa DTO & Validation**:
   - Tạo DTO trong `src/dtos/` với các decorators từ `class-validator`.
2. **Tạo Database Model & Interfaces**:
   - Tạo Mongoose Model trong `src/models/`.
   - Tạo Interface Repository/Service trong `src/interfaces/`.
3. **Triển khai Repository Layer**:
   - Tạo class trong `src/repositories/`, nhận Model qua Constructor.
4. **Triển khai Service Layer**:
   - Tạo class trong `src/services/`, nhận Repository qua Constructor.
   - Sử dụng `src/mappers/` để chuyển đổi Entity sang DTO.
5. **Triển khai Controller & Routes**:
   - Tạo Controller trong `src/controllers/`, nhận Service qua Constructor.
   - Gắn `validateDto(DtoClass)` vào router trong `src/routes/`.
   - Không viết comment thừa trong code.
