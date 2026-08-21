# 📐 Architecture Rules

## 1. Layering Rules
- Controllers must strictly delegate to Services.
- Services must strictly delegate persistence to Repositories.
- Repositories must strictly encapsulate database queries.

## 2. Dependency Inversion Rules
- Classes must depend on Interfaces (`IUserRepository`, `IAuthService`, `ICacheService`).
- Dependencies must be injected via constructors.

## 3. Boundary & Error Rules
- Controllers must never perform manual field validation; use DTO middleware schemas.
- Domain errors must inherit from `AppError` and serialize through `ApiResponse`.
