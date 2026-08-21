---
workflow: architecture-change
target_services:
  - all
required_skills:
  - .agent/skills/system-design/SKILL.md
  - .agent/skills/backend-development/SKILL.md
lazy_load_context:
  - .agent/architecture/system-context.md
  - .agent/architecture/architecture-rules.md
---

# 🏛️ Architecture Change Workflow

A structured procedure for proposing, validating, and implementing significant architectural shifts.

---

## Workflow Steps

```text
1. Understand Business & Technical Requirements
   ↓
2. Document Current Architecture & Constraints
   ↓
3. Formulate Viable Architectural Options
   ↓
4. Perform Trade-Off & Risk Analysis (SQL vs NoSQL, Sync vs Async)
   ↓
5. Select Optimal Solution
   ↓
6. Author Architecture Decision Record (ADR)
   ↓
7. Seek Escalation / Approval if High/Critical Risk
   ↓
8. Execute Incremental Implementation
   ↓
9. Verify Fitness Rules & Invariants
   ↓
10. Update Knowledge Catalogs & System Map
```
