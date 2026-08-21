# 📑 Master Knowledge & Governance Index (RAG Router)

Use this high-density router index to locate and dynamically load ONLY the specific documentation file required for the current task. Do NOT load all files at once.

---

## 🎯 Task-to-File Routing Map

| Domain / Task | Primary Target File | Supporting Target File |
| :--- | :--- | :--- |
| **Feature Development** | `.agent/workflows/feature.md` | `.agent/skills/backend-development/SKILL.md` |
| **Bug Fixing & Diagnostics** | `.agent/workflows/bug-fix.md` | `.agent/skills/testing/SKILL.md` |
| **Code Review & Auditing** | `.agent/workflows/code-review.md` | `.agent/skills/code-review/SKILL.md` |
| **Refactoring** | `.agent/workflows/refactor.md` | `.agent/architecture/fitness-rules.md` |
| **Production Incident / Outage**| `.agent/workflows/incident-response.md` | `.agent/workflows/production-debug.md` |
| **Architecture Modification** | `.agent/workflows/architecture-change.md` | `.agent/architecture/architecture-rules.md` |
| **Database Schema / Migration** | `.agent/workflows/database-migration.md` | `.agent/skills/database/SKILL.md` |
| **Security Audit / Auth Check** | `.agent/workflows/security-review.md` | `.agent/skills/security/SKILL.md` |

---

## 📚 Direct Resource Index

### 1. 🧠 Knowledge & Project Facts (`.agent/knowledge/`)
- **System Topography & Ports**: `knowledge/project-map.md`
- **Service Specs & Responsibilities**: `knowledge/service-catalog.md`
- **Service Dependencies & Failure Modes**: `knowledge/dependency-map.md`
- **Database & Table Ownership**: `knowledge/data-ownership.md`
- **API Endpoints & Contracts**: `knowledge/api-catalog.md`
- **Domain Event Topics & Payloads**: `knowledge/event-catalog.md`

### 2. 🏛️ Architecture & Rules (`.agent/architecture/`)
- **System Context & Topology**: `architecture/system-context.md`
- **Layering & Import Rules**: `architecture/architecture-rules.md`
- **Non-Negotiable Invariants**: `architecture/invariants.md`
- **Machine Fitness Checks**: `architecture/fitness-rules.md`

### 3. 🛠️ Specialized Skills (`.agent/skills/`)
- **Backend Architecture & APIs**: `skills/backend-development/SKILL.md`
- **Code Review Standards**: `skills/code-review/SKILL.md`
- **Testing & Test Pyramid**: `skills/testing/SKILL.md`
- **PostgreSQL & MongoDB Design**: `skills/database/SKILL.md`
- **Security, JWT & Auth**: `skills/security/SKILL.md`
- **Microservices & Event Bus**: `skills/microservices/SKILL.md`
- **System Design & Trade-offs**: `skills/system-design/SKILL.md`
- **Performance & Profiling**: `skills/performance/SKILL.md`
- **DevOps, Docker & Health**: `skills/devops/SKILL.md`
- **Concurrency & Race Conditions**: `skills/concurrency/SKILL.md`
- **Logging & Tracing**: `skills/observability/SKILL.md`
- **API Contracts & Versioning**: `skills/api-contracts/SKILL.md`
- **Safe DB Migrations**: `skills/migration/SKILL.md`
- **STRIDE Threat Modeling**: `skills/threat-modeling/SKILL.md`
- **Reliability & Circuit Breakers**: `skills/reliability/SKILL.md`

### 4. ⚖️ Governance & Checklists (`.agent/governance/`, `.agent/checklists/`)
- **Risk Classification Engine**: `governance/risk-classification.md`
- **Approval & Escalation Policy**: `governance/approval-policy.md`
- **Change Management Policy**: `governance/change-policy.md`
- **Dependency Addition Policy**: `governance/dependency-policy.md`
- **Production Readiness Check**: `checklists/production-readiness.md`
- **Security Check**: `checklists/security.md`
- **Database Check**: `checklists/database.md`
- **API Design Check**: `checklists/api.md`
- **Distributed Systems Check**: `checklists/distributed-system.md`
- **Architecture Health Check**: `checklists/architecture.md`

### 5. 📝 Templates (`.agent/templates/`)
- **Implementation Plan**: `templates/implementation-plan.md`
- **Code Review Report**: `templates/code-review-report.md`
- **Architecture Decision (ADR)**: `templates/architecture-decision.md`
- **Incident Post-Mortem**: `templates/incident-report.md`
- **Migration Plan**: `templates/migration-plan.md`
- **Risk Assessment**: `templates/risk-assessment.md`
