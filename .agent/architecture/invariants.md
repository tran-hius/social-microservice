# 🔒 Architecture Invariants

An invariant is a business, data, or architectural property that **MUST NEVER** be violated under any circumstance.

---

## 1. Security Invariants
- **INV-SEC-01**: Passwords stored in the database must always be one-way cryptographically hashed with Bcrypt (salt rounds >= 10). Plain-text passwords must never touch disk or log streams.
- **INV-SEC-02**: Access tokens must have a strict expiration of <= 15 minutes.
- **INV-SEC-03**: Refresh tokens must be revocable independently and support full multi-device logout (`logout-all`).

## 2. Data & Concurrency Invariants
- **INV-DAT-01**: Email addresses and usernames in `social_auth_db.users` must be strictly unique, enforced by database unique indexes.
- **INV-DAT-02**: Only the owning service (`auth-service`) has write authority over its database.

## 3. Distributed Invariants
- **INV-DIS-01**: Every HTTP request across microservices and every asynchronous event message must carry a traceable `x-correlation-id`.
- **INV-DIS-02**: Message consumers must be idempotent to tolerate duplicate delivery without corrupting application state.
