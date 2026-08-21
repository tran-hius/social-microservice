# 🔒 Security Verification Checklist

- [ ] All user inputs validated through DTO validation schemas (`class-validator`/`zod`).
- [ ] Authentication required on protected endpoints (`x-user-id` context check).
- [ ] Resource authorization verified at service layer (`authorId === userId`).
- [ ] Passwords hashed using Bcrypt (cost factor >= 10).
- [ ] Refresh tokens stored separately with TTL expiration.
- [ ] Sensitive fields excluded from responses (`select: false`).
- [ ] Helmet security headers active.
- [ ] Zero plain-text credentials in logs or source files.
