---
workflow: refactor
target_services:
  - auth-service
  - api-gateway
  - shared
required_skills:
  - .agent/skills/backend-development/SKILL.md
  - .agent/skills/code-review/SKILL.md
lazy_load_context:
  - .agent/architecture/fitness-rules.md
  - .agent/architecture/architecture-rules.md
---

# 🔄 Refactoring Workflow

A disciplined workflow for restructuring code while strictly preserving external behavior.

---

## Core Rules
1. **Preserve Behavior**: Never alter external API contracts or business rules during a refactor unless explicitly instructed.
2. **Safety Net First**: Ensure test suites exist before refactoring high-risk modules.
3. **Incremental Execution**: Refactor in small, atomic steps. Run typecheck and tests after each step.
4. **Remove Dead Code Safely**: Delete unused files, obsolete methods, and redundant comments with certainty.

---

## Execution Steps
1. Identify the motivation for refactoring (e.g. reduce coupling, introduce DI, split monolithic service).
2. Document existing behavior and invariants.
3. Verify baseline tests are passing.
4. Apply structural changes incrementally.
5. Verify build (`npm run build`) and tests (`npm test`) after each modification.
6. Review refactored code against cleanliness and architectural standards.
7. Auto Commit & Push (`refactor(scope): ...`).
