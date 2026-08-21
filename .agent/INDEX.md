# 📑 Master Knowledge & Governance Index (RAG Router)

Use this high-density router index to locate and dynamically load ONLY the specific documentation files required for the current task. Do NOT load all files at once.

---

## 🧭 Multi-Dimensional Routing Pipeline

Every incoming user request MUST pass through this 8-step decision pipeline before loading files or executing code:

```text
User Request
  │
  ▼
1. Intent Classification ──► (Learning | Implementation | Design | Review | Debugging | Optimization | Decision-Making)
  │
  ▼
2. Complexity Assessment ──► (Low | Medium | High | Critical)
  │
  ▼
3. Workflow Selection ─────► (.agent/workflows/*.md)
  │
  ▼
4. Primary Skill Selection ─► (.agent/skills/<primary>/SKILL.md)
  │
  ▼
5. Supporting Discovery ───► Consult .agent/knowledge/skill-dependency-map.md (Up to 3 skills)
  │
  ▼
6. Context Budget Check ───► Enforce hard budget: Total loaded files <= 6
  │
  ▼
7. Lazy Context Loading ───► Load specific .agent/knowledge/* or .agent/architecture/* as needed
  │
  ▼
8. Execution & Verification
```

---

## 🎯 1. Intent Classification Matrix

| Intent | Primary Target Workflow | Primary Skill | Default Supporting Skills | Primary Objectives |
| :--- | :--- | :--- | :--- | :--- |
| **Learning / Mentoring** | `.agent/workflows/feature.md` | `.agent/skills/senior-mentor/SKILL.md` | Domain Skill (`backend-dev`, `database`, etc.) | Build mental models, explain WHY/trade-offs, Socratic quiz |
| **Implementation / Feature** | `.agent/workflows/feature.md` | `.agent/skills/backend-development/SKILL.md` | `database`, `security`, `api-contracts` | Write production-grade code, layered architecture, tests |
| **System / Domain Design** | `.agent/workflows/architecture-change.md` | `.agent/skills/system-design/SKILL.md` | `microservices`, `reliability`, `security` | Cross-service boundaries, capacity planning, trade-off analysis |
| **Code Review & Auditing** | `.agent/workflows/code-review.md` | `.agent/skills/code-review/SKILL.md` | `security`, `testing`, `performance` | PR evaluation, anti-pattern detection, fitness verification |
| **Debugging & Bug Fixing** | `.agent/workflows/bug-fix.md` | `.agent/skills/testing/SKILL.md` | `reliability`, `observability`, `backend-dev` | Root cause analysis, minimal reproduction, regression testing |
| **Performance Tuning** | `.agent/workflows/refactor.md` | `.agent/skills/performance/SKILL.md` | `database`, `concurrency`, `observability` | Query profiling, caching strategies, latency reduction |
| **Incident / Reliability** | `.agent/workflows/incident-response.md` | `.agent/skills/reliability/SKILL.md` | `observability`, `devops`, `concurrency` | Triage outage, circuit breaking, zero data-loss mitigation |
| **Database Migration** | `.agent/workflows/database-migration.md` | `.agent/skills/database/SKILL.md` | `migration`, `concurrency`, `reliability` | Zero-downtime schema evolution, expand-contract pattern |
| **Security & Auth Review** | `.agent/workflows/security-review.md` | `.agent/skills/security/SKILL.md` | `threat-modeling`, `api-contracts`, `database` | STRIDE analysis, JWT lifecycle, RBAC authorization |

---

## 📊 2. Task Complexity Classification

| Complexity Level | Criteria & Scope | Context Budget Limit | Verification Standard |
| :--- | :--- | :--- | :--- |
| **`Low`** | Isolated function/utility, single doc edit, minor syntax/typo fix | $\le 2$ files (1 Primary Skill, 1 File) | Unit test pass |
| **`Medium`** | Single-service feature, standard CRUD (DTO $\rightarrow$ Controller $\rightarrow$ Service $\rightarrow$ Repo), localized bugfix | $\le 4$ files (1 Workflow, 1 Primary, 1-2 Supporting) | 100% Unit/Integration tests, TypeScript 0 errors |
| **`High`** | Cross-service feature, distributed event flow, auth token lifecycle, database migration | $\le 6$ files (1 Workflow, 1 Primary, 2-3 Supporting, 1 Context) | Full test suite, backward compatibility, performance check |
| **`Critical`** | Architecture overhaul, core security/crypto changes, production outage recovery | $\le 6$ files (Strictly enforced limit) | Formal review checklist, fitness check, zero-downtime test |

---

## 💰 3. Context Budget Policy

To avoid **token waste**, **context pollution**, and **reasoning degradation**, the agent MUST enforce the following budget rules:

1. **Mandatory Core (2 files)**:
   - Exactly **1 Workflow** (`.agent/workflows/*.md`)
   - Exactly **1 Primary Domain Skill** (`.agent/skills/<primary>/SKILL.md`)
2. **Optional Supporting (Up to 3 files)**:
   - Up to **3 Supporting Skills** resolved via [`.agent/knowledge/skill-dependency-map.md`](file:///D:/social/.agent/knowledge/skill-dependency-map.md).
3. **Lazy-Loaded Context (1 file maximum)**:
   - Load only the single most relevant domain knowledge or architecture file referenced by the active workflow.
4. **Hard Upper Bound**:
   $$\text{Total Loaded Markdown Files} \le 6$$

---

## 📚 Direct Resource Index

### 1. 🧠 Knowledge & Project Facts (`.agent/knowledge/`)
- **Skill Dependency & Synergy Map**: [`.agent/knowledge/skill-dependency-map.md`](file:///D:/social/.agent/knowledge/skill-dependency-map.md)
- **System Topography & Ports**: [`.agent/knowledge/project-map.md`](file:///D:/social/.agent/knowledge/project-map.md)
- **Service Specs & Responsibilities**: [`.agent/knowledge/service-catalog.md`](file:///D:/social/.agent/knowledge/service-catalog.md)
- **Service Dependencies & Failure Modes**: [`.agent/knowledge/dependency-map.md`](file:///D:/social/.agent/knowledge/dependency-map.md)
- **Database & Table Ownership**: [`.agent/knowledge/data-ownership.md`](file:///D:/social/.agent/knowledge/data-ownership.md)
- **API Endpoints & Contracts**: [`.agent/knowledge/api-catalog.md`](file:///D:/social/.agent/knowledge/api-catalog.md)
- **Domain Event Topics & Payloads**: [`.agent/knowledge/event-catalog.md`](file:///D:/social/.agent/knowledge/event-catalog.md)

### 2. 🏛️ Architecture & Rules (`.agent/architecture/`)
- **System Context & Topology**: [`.agent/architecture/system-context.md`](file:///D:/social/.agent/architecture/system-context.md)
- **Layering & Import Rules**: [`.agent/architecture/architecture-rules.md`](file:///D:/social/.agent/architecture/architecture-rules.md)
- **Non-Negotiable Invariants**: [`.agent/architecture/invariants.md`](file:///D:/social/.agent/architecture/invariants.md)
- **Machine Fitness Checks**: [`.agent/architecture/fitness-rules.md`](file:///D:/social/.agent/architecture/fitness-rules.md)

### 3. 🛠️ Specialized Skills (`.agent/skills/`)
- **Backend Architecture & APIs**: [`.agent/skills/backend-development/SKILL.md`](file:///D:/social/.agent/skills/backend-development/SKILL.md)
- **Technical Mentoring & Education**: [`.agent/skills/senior-mentor/SKILL.md`](file:///D:/social/.agent/skills/senior-mentor/SKILL.md)
- **Code Review Standards**: [`.agent/skills/code-review/SKILL.md`](file:///D:/social/.agent/skills/code-review/SKILL.md)
- **Testing & Test Pyramid**: [`.agent/skills/testing/SKILL.md`](file:///D:/social/.agent/skills/testing/SKILL.md)
- **PostgreSQL & MongoDB Design**: [`.agent/skills/database/SKILL.md`](file:///D:/social/.agent/skills/database/SKILL.md)
- **Security, JWT & Auth**: [`.agent/skills/security/SKILL.md`](file:///D:/social/.agent/skills/security/SKILL.md)
- **Microservices & Event Bus**: [`.agent/skills/microservices/SKILL.md`](file:///D:/social/.agent/skills/microservices/SKILL.md)
- **System Design & Trade-offs**: [`.agent/skills/system-design/SKILL.md`](file:///D:/social/.agent/skills/system-design/SKILL.md)
- **Performance & Profiling**: [`.agent/skills/performance/SKILL.md`](file:///D:/social/.agent/skills/performance/SKILL.md)
- **DevOps, Docker & Health**: [`.agent/skills/devops/SKILL.md`](file:///D:/social/.agent/skills/devops/SKILL.md)
- **Concurrency & Race Conditions**: [`.agent/skills/concurrency/SKILL.md`](file:///D:/social/.agent/skills/concurrency/SKILL.md)
- **Logging & Tracing**: [`.agent/skills/observability/SKILL.md`](file:///D:/social/.agent/skills/observability/SKILL.md)
- **API Contracts & Versioning**: [`.agent/skills/api-contracts/SKILL.md`](file:///D:/social/.agent/skills/api-contracts/SKILL.md)
- **Safe DB Migrations**: [`.agent/skills/migration/SKILL.md`](file:///D:/social/.agent/skills/migration/SKILL.md)
- **STRIDE Threat Modeling**: [`.agent/skills/threat-modeling/SKILL.md`](file:///D:/social/.agent/skills/threat-modeling/SKILL.md)
- **Reliability & Circuit Breakers**: [`.agent/skills/reliability/SKILL.md`](file:///D:/social/.agent/skills/reliability/SKILL.md)

### 4. ⚖️ Governance & Checklists (`.agent/governance/`, `.agent/checklists/`)
- **Risk Classification Engine**: [`.agent/governance/risk-classification.md`](file:///D:/social/.agent/governance/risk-classification.md)
- **Approval & Escalation Policy**: [`.agent/governance/approval-policy.md`](file:///D:/social/.agent/governance/approval-policy.md)
- **Change Management Policy**: [`.agent/governance/change-policy.md`](file:///D:/social/.agent/governance/change-policy.md)
- **Dependency Addition Policy**: [`.agent/governance/dependency-policy.md`](file:///D:/social/.agent/governance/dependency-policy.md)
- **Production Readiness Check**: [`.agent/checklists/production-readiness.md`](file:///D:/social/.agent/checklists/production-readiness.md)
- **Security Check**: [`.agent/checklists/security.md`](file:///D:/social/.agent/checklists/security.md)
- **Database Check**: [`.agent/checklists/database.md`](file:///D:/social/.agent/checklists/database.md)
- **API Design Check**: [`.agent/checklists/api.md`](file:///D:/social/.agent/checklists/api.md)
- **Distributed Systems Check**: [`.agent/checklists/distributed-system.md`](file:///D:/social/.agent/checklists/distributed-system.md)
- **Architecture Health Check**: [`.agent/checklists/architecture.md`](file:///D:/social/.agent/checklists/architecture.md)

### 5. 📝 Templates (`.agent/templates/`)
- **Implementation Plan**: [`.agent/templates/implementation-plan.md`](file:///D:/social/.agent/templates/implementation-plan.md)
- **Code Review Report**: [`.agent/templates/code-review-report.md`](file:///D:/social/.agent/templates/code-review-report.md)
- **Architecture Decision (ADR)**: [`.agent/templates/architecture-decision.md`](file:///D:/social/.agent/templates/architecture-decision.md)
- **Incident Post-Mortem**: [`.agent/templates/incident-report.md`](file:///D:/social/.agent/templates/incident-report.md)
- **Migration Plan**: [`.agent/templates/migration-plan.md`](file:///D:/social/.agent/templates/migration-plan.md)
- **Risk Assessment**: [`.agent/templates/risk-assessment.md`](file:///D:/social/.agent/templates/risk-assessment.md)
