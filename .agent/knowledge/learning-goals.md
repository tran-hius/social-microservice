# 🎯 Engineering Learning Goals & Roadmap Tracker

This document establishes the strategic, goal-driven north star for technical mentoring. The mentor guides every technical answer to advance these active learning goals rather than just answering questions reactively.

---

## 🏆 Long-Term North Star Goal

> **Become a Staff-Level Backend & Distributed Systems Engineer** capable of designing, building, and operating resilient, high-throughput microservices under extreme ambiguity.

---

## 📍 Active Strategic Milestones

```mermaid
graph LR
    M1["Milestone 1: Clean OOP Infrastructure\n(Shared Module, Redis, DI)"] --> M2["Milestone 2: Distributed Event Architecture\n(RabbitMQ, Outbox, Saga)"]
    M2 --> M3["Milestone 3: Data Integrity & Storage\n(MongoDB, PostgreSQL, Migrations)"]
    M3 --> M4["Milestone 4: High-Load & Observability\n(Tracing, Circuit Breakers, Metrics)"]

    style M1 fill:#4CAF50,stroke:#388E3C,color:#fff
    style M2 fill:#2196F3,stroke:#1976D2,color:#fff
    style M3 fill:#FF9800,stroke:#F57C00,color:#fff
    style M4 fill:#9E9E9E,stroke:#616161,color:#fff
```

---

## 🚦 Roadmap Progress Matrix

### 🟢 Completed Milestones
- [x] **HTTP & REST Fundamentals**: Status codes, idempotency, HTTP methods, headers.
- [x] **Layered Clean Architecture**: Strict DTO $\rightarrow$ Controller $\rightarrow$ Service $\rightarrow$ Repository separation.
- [x] **Authentication & Token Lifecycle**: JWT sign/verify, Refresh Token models, Password hashing.
- [x] **Automated Pre-Push Quality Gate**: 100% TypeScript typecheck and test verification before push.

### 🟡 Active Focus (In Progress)
- [ ] **Milestone 1: Clean Shared Infrastructure (OOP Redis Service)**:
  - [x] Abstract `IRedisService` interface & `RedisService` class.
  - [ ] Connect lifecycle integration into `auth-service` and API Gateway rate limiting.
  - [ ] TTL Jitter and Cache Avalanche prevention.
- [ ] **Milestone 2: Event-Driven Infrastructure (RabbitMQ Broker)**:
  - [ ] Abstract `IEventBus` interface.
  - [ ] Idempotent event consumers with deduplication.
  - [ ] Dead Letter Exchange & Poison Pill handling.

### ⚪ Next Up
- [ ] **Distributed Transactions**: Transactional Outbox Pattern & Saga Orchestration.
- [ ] **Database Deep-Dive**: PostgreSQL indexing, transaction isolation, MongoDB document schemas.
- [ ] **Reliability Engineering**: Circuit Breakers (`opossum`), Distributed Tracing (`OpenTelemetry`).

---

## 🧭 Goal-Driven Mentoring Pipeline

Whenever the learner asks a question, the mentor executes:

$$\text{Long-Term Goal} \longrightarrow \text{Active Milestone} \longrightarrow \text{Prerequisite Check} \longrightarrow \text{Targeted Answer} \longrightarrow \text{Milestone Progress Check}$$
