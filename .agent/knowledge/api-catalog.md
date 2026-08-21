# 🌐 API Catalog

## Auth Service Endpoints (`auth-service`)

| Method | Route | Description | Auth Required | Request DTO | Response DTO |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user | No | `RegisterDto` (`email`, `username`, `password`, `role`) | `201` + `AuthResponseDto` |
| `POST` | `/auth/login` | Login with identifier & password | No | `LoginDto` (`identifier`, `password`) | `200` + `AuthResponseDto` |
| `POST` | `/auth/refresh` | Refresh access & refresh tokens | No | `RefreshTokenDto` (`refreshToken`) | `200` + `AuthTokensDto` |
| `POST` | `/auth/logout` | Revoke a single refresh token | No | `{ refreshToken: string }` | `200` + `null` |
| `POST` | `/auth/logout-all`| Revoke all sessions for a user | Yes (`x-user-id`) | Empty | `200` + `null` |
| `GET` | `/auth/me` | Retrieve authenticated user profile | Yes (`x-user-id`) | Empty | `200` + `UserResponseDto` |
| `GET` | `/health` | Liveness and readiness healthcheck | No | Empty | `200` + `{ status: 'healthy' }` |
