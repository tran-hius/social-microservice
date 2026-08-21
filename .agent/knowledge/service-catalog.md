# 📋 Service Catalog

## 1. Active Microservices

### 🔹 API Gateway (`api-gateway`)
- **Port**: `8000`
- **Role**: Edge entry point, SSL termination, Helmet security headers, CORS management, `x-correlation-id` generation and injection, reverse proxy routing via `http-proxy-middleware`.
- **Downstream Targets**:
  - `/api/auth/*` $\longrightarrow$ `http://auth-service:8001/auth/*`
  - `/api/docs/*` $\longrightarrow$ `http://doc-service:8002/docs/*` (Planned)
- **Failure Impact**: Total external API downtime.

### 🔹 Auth Service (`auth-service`)
- **Port**: `8001`
- **Role**: User identity, credential verification (Bcrypt), JWT token generation and rotation, session revocation, user profile management.
- **Owned Data**: MongoDB `social_auth_db` (`users`, `refresh_tokens`).
- **Dependencies**: MongoDB, Redis (optional caching), RabbitMQ (event publishing).
- **Failure Impact**: Users cannot register, login, or refresh authentication sessions.

---

## 2. Planned / Future Services

### 🔹 Doc / Article Service (`doc-service`)
- **Port**: `8002` (Planned)
- **Role**: CRUD technical documentation, categories, tags, markdown content versioning, reader bookmarks.
- **Owned Data**: PostgreSQL / MongoDB (`articles`, `categories`, `revisions`).
