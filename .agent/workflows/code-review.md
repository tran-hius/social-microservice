---
workflow: code-review
target_services:
  - auth-service
  - api-gateway
  - shared
required_skills:
  - .agent/skills/code-review/SKILL.md
  - .agent/skills/security/SKILL.md
  - .agent/skills/database/SKILL.md
lazy_load_context:
  - .agent/checklists/security.md
  - .agent/checklists/database.md
---

# 🔍 Code Review Workflow

A comprehensive multi-dimensional review workflow for examining code changes across full execution flows.

---

## Execution Steps
1. Understand the overarching feature or problem being solved.
2. Understand the architecture context and service boundaries.
3. Inspect all modified files and their callers/callees.
4. Trace the complete execution flow from Controller to Database.
5. Review **Correctness**: Logic bugs, edge cases, race conditions.
6. Review **Security**: Auth bypass, injection, data leakage, secrets.
7. Review **Database**: N+1 queries, indexing, transactions, locking.
8. Review **Performance**: Blocking I/O, memory leaks, caching.
9. Review **Concurrency & Distributed Systems**: Idempotency, retries, correlation IDs.
10. Review **Tests**: Realistic failure scenarios and assertions.
11. Generate structured review report categorized by severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFO`).
