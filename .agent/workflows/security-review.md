# 🔒 Security Review Workflow

A methodical procedure for auditing codebases, authentication flows, and data boundaries against security threats.

---

## Workflow Steps

```text
1. Map Assets, Actors & Trust Boundaries
   ↓
2. Perform STRIDE Threat Model Analysis
   ↓
3. Audit Authentication & Token Management (JWT, Refresh, Rotation)
   ↓
4. Audit Authorization & RBAC/ABAC Boundary Checks
   ↓
5. Inspect Input Validation Schemas (DTO Injection Prevention)
   ↓
6. Audit Cryptographic Practices (Bcrypt salts, Secret storage)
   ↓
7. Check Sensitive Data Leakage in Logs & Responses
   ↓
8. Verify Secure HTTP Headers & Rate Limiting
   ↓
9. Generate Security Audit Report with Remediation Plans
```

---

## Applicable Skills
- Primary: `security`, `threat-modeling`
- Supporting: `code-review`, `backend-development`
