---
name: security
description: >-
  Security engineering, authentication, authorization (RBAC/ABAC), cryptographic hashing, token lifecycle, input validation, and attack prevention.
---

# 🔒 Security Skill

## Purpose
Enforces security engineering practices, authentication protocols, granular authorization, cryptographic security, and defense against common web vulnerabilities.

---

## When to Use
- Implementing user registration, authentication, password reset, and session management.
- Implementing role-based (RBAC) or attribute-based (ABAC) access control.
- Securing service-to-service communication and API endpoints.
- Sanitizing user input to prevent injection attacks (SQL, NoSQL, SSRF, XSS).

## When NOT to Use
- For general non-security-related application features.

---

## Core Security Rules
1. **Password Security**:
   - Always hash passwords using Bcrypt (cost factor >= 10) or Argon2id.
   - Never store or log plain-text passwords or secret keys.
2. **JWT & Token Lifecycle**:
   - Access Tokens must have short expiration periods (e.g. 15 minutes).
   - Refresh Tokens must have separate secrets, be stored in database/Redis with TTL, and support rotation and revocation (`logout`/`logout-all`).
3. **Trust Boundaries & Defense in Depth**:
   - Do NOT assume that requests from an API Gateway are automatically authorized. Downstream services must verify resource ownership (e.g. `user.id === resource.authorId`).
4. **Input Sanitization & Mass Assignment**:
   - Whitelist all allowed input properties via DTO validation schemas.
   - Disallow client assignment of privileged fields (e.g. `role: 'admin'`).
5. **Secure Headers & Rate Limiting**:
   - Apply Helmet for HTTP security headers.
   - Apply Rate Limiting on authentication and public endpoints to mitigate brute-force attacks.

---

## Vulnerability Checklist
- [ ] Injection attacks prevented via parameterized queries or ORM/ODM sanitization.
- [ ] Sensitive fields (`password`, `refreshToken`) excluded from API responses and schema outputs (`select: false`).
- [ ] CORS policies restrict origins to authorized domains.
- [ ] Passwords and secrets managed exclusively through environment variables.
