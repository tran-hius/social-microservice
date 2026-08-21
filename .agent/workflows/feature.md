# 🚀 Feature Implementation Workflow

A structured 16-step procedural workflow for developing new features across backend microservices.

---

## Execution Steps

```text
1. Understand Request
   ↓
2. Inspect Project & Existing Codebase
   ↓
3. Identify Affected Modules & Services
   ↓
4. Inspect Architecture & Conventions
   ↓
5. Identify Dependencies & Interfaces
   ↓
6. Identify Database Changes (Schema, Index, Migrations)
   ↓
7. Identify API Changes (Contracts, DTOs, Routes)
   ↓
8. Identify Security Implications (Auth, RBAC, Data Leaks)
   ↓
9. Identify Concurrency & Distributed-System Concerns
   ↓
10. Create Implementation Plan
   ↓
11. Implement Code (DTO -> Repository -> Service -> Controller -> Route)
   ↓
12. Write Behavior-Driven Tests (Unit & Integration)
   ↓
13. Run Tests & Verify Typecheck (npm run build & npm test)
   ↓
14. Review Implementation (Self Code Review)
   ↓
15. Check for Regressions
   ↓
16. Auto Commit & Push (Conventional Commits) & Final Summary
```

---

## Applicable Skills
- Primary: `backend-development`
- Supporting: `database`, `security`, `testing`, `microservices`
