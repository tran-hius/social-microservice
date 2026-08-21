---
workflow: architecture-audit
target_services:
  - all
required_skills:
  - .agent/skills/system-design/SKILL.md
  - .agent/skills/code-review/SKILL.md
lazy_load_context:
  - .agent/architecture/fitness-rules.md
  - .agent/architecture/architecture-rules.md
---

# 🧐 Architecture Audit Workflow

A periodic health assessment procedure to detect architectural drift, boundary violations, and code rot.

---

## Workflow Steps

```text
1. Scan Import Directions against Architecture Fitness Rules
   ↓
2. Verify Bounded Contexts & Database-per-Service Boundaries
   ↓
3. Check for Direct Database Calls bypassing Repositories
   ↓
4. Check for Manual Validation bypassing DTO Schemas
   ↓
5. Check for Hardcoded Secrets or Missing Env Configurations
   ↓
6. Audit Dependency Graph for Circular Dependencies
   ↓
7. Check Documentation-Implementation Drift against Knowledge Catalogs
   ↓
8. Output Overall Architecture Health Rating (PASS / WARNING / FAIL)
```
