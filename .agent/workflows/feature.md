---
workflow: feature-development
target_services:
  - auth-service
  - api-gateway
  - shared
required_skills:
  - .agent/skills/backend-development/SKILL.md
  - .agent/skills/database/SKILL.md
  - .agent/skills/security/SKILL.md
  - .agent/skills/testing/SKILL.md
lazy_load_context:
  - .agent/knowledge/api-catalog.md
  - .agent/architecture/invariants.md
---

# 🚀 Feature Implementation Workflow

A structured 16-step procedural workflow for developing new features across backend microservices.

---

## Execution Steps

```text
1. Understand Request
   ↓
2. Inspect Project & Target Service Files
   ↓
3. Identify Affected Modules & Interfaces
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
