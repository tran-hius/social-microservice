---
workflow: bug-fix
target_services:
  - auth-service
  - api-gateway
  - shared
required_skills:
  - .agent/skills/testing/SKILL.md
  - .agent/skills/backend-development/SKILL.md
lazy_load_context:
  - .agent/knowledge/dependency-map.md
---

# 🐛 Bug Fixing Workflow

A root-cause-driven, regression-proof workflow for diagnosing and fixing software bugs.

---

## Execution Steps

```text
1. Reproduce Issue with minimal test scenario
   ↓
2. Identify Expected Behavior vs Actual Behavior
   ↓
3. Trace Full Execution Path across layers
   ↓
4. Find True Root Cause (Distinguish Symptom vs Cause)
   ↓
5. Avoid Symptom-Only Quick Fixes
   ↓
6. Implement Minimal, Targeted Fix
   ↓
7. Add Automated Regression Test reproducing the defect
   ↓
8. Run Test Suite (npm test)
   ↓
9. Review Side Effects on Related Modules
   ↓
10. Verify Fix against original bug scenario
   ↓
11. Auto Commit & Push (fix(scope): ...)
```
