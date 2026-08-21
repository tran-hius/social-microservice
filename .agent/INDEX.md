# 📑 Master Knowledge & Governance Index (RAG Router)

Use this high-density router index to locate and dynamically load ONLY the specific documentation file required for the current task. Do NOT load all files at once.

---

## 🎯 Task-to-File Routing Map

| Domain / Task | Primary Target Workflow | Primary Domain Skill | Lazy-Loaded Context |
| :--- | :--- | :--- | :--- |
| **Feature Development** | `.agent/workflows/feature.md` | `.agent/skills/backend-development/SKILL.md` | `.agent/knowledge/api-catalog.md` |
| **Bug Fixing & Diagnostics** | `.agent/workflows/bug-fix.md` | `.agent/skills/testing/SKILL.md` | `.agent/knowledge/dependency-map.md` |
| **Code Review & Auditing** | `.agent/workflows/code-review.md` | `.agent/skills/code-review/SKILL.md` | `.agent/checklists/security.md` |
| **Refactoring** | `.agent/workflows/refactor.md` | `.agent/skills/backend-development/SKILL.md` | `.agent/architecture/fitness-rules.md` |
| **Production Incident / Outage**| `.agent/workflows/incident-response.md` | `.agent/skills/reliability/SKILL.md` | `.agent/knowledge/dependency-map.md` |
| **Architecture Modification** | `.agent/workflows/architecture-change.md` | `.agent/skills/system-design/SKILL.md` | `.agent/architecture/architecture-rules.md` |
| **Database Schema / Migration** | `.agent/workflows/database-migration.md` | `.agent/skills/database/SKILL.md` | `.agent/knowledge/data-ownership.md` |
| **Security Audit / Auth Check** | `.agent/workflows/security-review.md` | `.agent/skills/security/SKILL.md` | `.agent/checklists/security.md` |
| **Performance Optimization** | `.agent/workflows/refactor.md` | `.agent/skills/performance/SKILL.md` | `.agent/checklists/production-readiness.md` |

---

## 📚 Direct Resource Index

### 1. 🧠 Knowledge & Project Facts (`.agent/knowledge/`)
- **System Topography & Ports**: `.agent/knowledge/project-map.md`
- **Service Specs & Responsibilities**: `.agent/knowledge/service-catalog.md`
- **Service Dependencies & Failure Modes**: `.agent/knowledge/dependency-map.md`
- **Database & Table Ownership**: `.agent/knowledge/data-ownership.md`
- **API Endpoints & Contracts**: `.agent/knowledge/api-catalog.md`
- **Domain Event Topics & Payloads**: `.agent/knowledge/event-catalog.md`

### 2. 🏛️ Architecture & Rules (`.agent/architecture/`)
- **System Context & Topology**: `.agent/architecture/system-context.md`
- **Layering & Import Rules**: `.agent/architecture/architecture-rules.md`
- **Non-Negotiable Invariants**: `.agent/architecture/invariants.md`
- **Machine Fitness Checks**: `.agent/architecture/fitness-rules.md`

### 3. 🛠️ Specialized Skills (`.agent/skills/`)
- **Backend Architecture & APIs**: `.agent/skills/backend-development/SKILL.md`
- **Code Review Standards**: `.agent/skills/code-review/SKILL.md`
- **Testing & Test Pyramid**: `.agent/skills/testing/SKILL.md`
- **PostgreSQL & MongoDB Design**: `.agent/skills/database/SKILL.md`
- **Security, JWT & Auth**: `.agent/skills/security/SKILL.md`
- **Microservices & Event Bus**: `.agent/skills/microservices/SKILL.md`
- **System Design & Trade-offs**: `.agent/skills/system-design/SKILL.md`
- **Performance & Profiling**: `.agent/skills/performance/SKILL.md`
- **DevOps, Docker & Health**: `.agent/skills/devops/SKILL.md`
- **Concurrency & Race Conditions**: `.agent/skills/concurrency/SKILL.md`
- **Logging & Tracing**: `.agent/skills/observability/SKILL.md`
- **API Contracts & Versioning**: `.agent/skills/api-contracts/SKILL.md`
- **Safe DB Migrations**: `.agent/skills/migration/SKILL.md`
- **STRIDE Threat Modeling**: `.agent/skills/threat-modeling/SKILL.md`
- **Reliability & Circuit Breakers**: `.agent/skills/reliability/SKILL.md`

### 4. ⚖️ Governance & Checklists (`.agent/governance/`, `.agent/checklists/`)
- **Risk Classification Engine**: `.agent/governance/risk-classification.md`
- **Approval & Escalation Policy**: `.agent/governance/approval-policy.md`
- **Change Management Policy**: `.agent/governance/change-policy.md`
- **Dependency Addition Policy**: `.agent/governance/dependency-policy.md`
- **Production Readiness Check**: `.agent/checklists/production-readiness.md`
- **Security Check**: `.agent/checklists/security.md`
- **Database Check**: `.agent/checklists/database.md`
- **API Design Check**: `.agent/checklists/api.md`
- **Distributed Systems Check**: `.agent/checklists/distributed-system.md`
- **Architecture Health Check**: `.agent/checklists/architecture.md`

### 5. 📝 Templates (`.agent/templates/`)
- **Implementation Plan**: `.agent/templates/implementation-plan.md`
- **Code Review Report**: `.agent/templates/code-review-report.md`
- **Architecture Decision (ADR)**: `.agent/templates/architecture-decision.md`
- **Incident Post-Mortem**: `.agent/templates/incident-report.md`
- **Migration Plan**: `.agent/templates/migration-plan.md`
- **Risk Assessment**: `.agent/templates/risk-assessment.md`
