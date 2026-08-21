# 🏛️ Senior Backend Engineering Agent System

The `.agent` system provides high-discipline, production-grade engineering intelligence for AI agents working across monolithic and microservice architectures.

---

## 📂 System Organization

```text
.agent/
├── README.md                      # System overview and interaction model
├── instructions.md                # 18 Core behavioral rules and decision framework
├── AGENTS.md                      # Project-specific coding rules and pre-push mandates
│
├── skills/                        # Modular, composable engineering domain knowledge
│   ├── backend-development/       # Layered/modular architecture, REST APIs, DTOs, domain logic
│   ├── code-review/               # Multi-dimensional code review (correctness, security, database)
│   ├── testing/                   # Behavior-driven testing, failure modes, test pyramid
│   ├── database/                  # Schema design, indexing, transactions, locking, optimization
│   ├── security/                  # RBAC/ABAC, JWT, hashing, trust boundaries, injection prevention
│   ├── microservices/             # Bounded contexts, async events, outbox, saga, idempotent consumers
│   ├── system-design/             # Scalability, trade-off analysis, capacity, non-functional requirements
│   ├── performance/               # Profiling, bottleneck analysis, caching, connection pooling
│   └── devops/                    # Docker, health checks, graceful shutdown, CI/CD, observability
│
└── workflows/                     # Step-by-step execution procedures for standard tasks
    ├── feature.md                 # 16-step feature development pipeline
    ├── bug-fix.md                 # Root-cause analysis and regression-proof bug fixing
    ├── refactor.md                # Behavior-preserving incremental refactoring
    ├── code-review.md             # Comprehensive multi-file holistic review process
    └── production-debug.md        # Evidence-driven incident investigation runbook
```

---

## 🔄 Interaction Model: Workflows vs Skills

- **Workflows** define **HOW** the agent conducts a task (the step-by-step procedural lifecycle).
- **Skills** define **WHAT** engineering knowledge, trade-offs, and rules the agent applies during execution.

### Composition Matrix:
| Workflow | Primary Skills Activated | Supporting Skills |
| :--- | :--- | :--- |
| **Feature Development** | `backend-development` | `database`, `security`, `testing`, `microservices` |
| **Bug Fixing** | `testing`, `backend-development` | `database`, `security`, `performance` |
| **Code Review** | `code-review` | `database`, `security`, `performance`, `microservices` |
| **Refactoring** | `backend-development`, `code-review` | `testing`, `architecture` |
| **Production Debugging** | `devops`, `performance` | `database`, `microservices`, `security` |

---

## 🎯 Engineering Quality Standard

1. **Evidence Over Assumptions**: Never guess root causes or optimize prematurely without profiling metrics.
2. **Behavior Over Line Coverage**: Tests must cover failure paths, edge cases, and concurrency boundaries.
3. **Defense in Depth**: Secure internal service-to-service boundaries; do not blindly trust gateway headers.
4. **Resilience by Design**: Assume network calls, message queues, and database connections can and will fail.
