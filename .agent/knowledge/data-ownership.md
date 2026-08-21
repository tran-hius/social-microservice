# 🗄️ Data Ownership & Storage Registry

## 1. Data Ownership Principle
Each database collection or table has **exactly one owning service** with sole write authority. External services may only access data through public APIs or asynchronous event streams.

---

## 2. Collection & Table Ownership

| Database Engine | Database Name | Collection / Table | Owner Service | Write Authority | Read Access | Retention / Expiration |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **MongoDB** | `social_auth_db` | `users` | `auth-service` | `auth-service` only | `auth-service` only | Permanent |
| **MongoDB** | `social_auth_db` | `refresh_tokens` | `auth-service` | `auth-service` only | `auth-service` only | 7 Days (MongoDB TTL Index) |
| **PostgreSQL** | `docs_db` (Planned) | `articles` | `doc-service` | `doc-service` only | `doc-service` only | Permanent |
| **Redis** | In-Memory | `auth:user:*` | `auth-service` | `auth-service` only | `auth-service` only | 300 Seconds (TTL) |
