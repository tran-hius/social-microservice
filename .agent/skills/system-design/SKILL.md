---
name: system-design
description: >-
  System architecture design, scalability, availability, capacity estimation, trade-off analysis, and high-level technical blueprints.
---

# 📐 System Design Skill

## Purpose
Enables structured system architecture design, functional/non-functional requirement decomposition, scalability planning, and objective technical trade-off evaluation.

---

## When to Use
- Designing new systems, services, or major subsystem architectures from high-level requirements.
- Evaluating architectural trade-offs (SQL vs NoSQL, Async vs Sync, Monolith vs Microservices).
- Planning for high throughput, low latency, and high availability (99.9%+ uptime).

## When NOT to Use
- For localized code edits, bug fixes, or minor refactors.

---

## Core Framework
1. **Scope Requirements**:
   - **Functional**: Core user actions, APIs, data flows.
   - **Non-Functional**: Latency targets (p95/p99), Throughput (RPS/QPS), Availability SLA, Consistency model (Strong vs Eventual).
2. **Capacity Estimation**:
   - Estimate Storage requirements, Read/Write ratios, Cache memory sizing, Bandwidth.
3. **High-Level Blueprint**:
   - Client -> CDN / Load Balancer -> API Gateway -> Microservices -> Cache Layer (Redis) -> Persistence (PostgreSQL/MongoDB) -> Message Broker (RabbitMQ/Kafka).
4. **Trade-Off Analysis**:
   - Explicitly justify choices: Why MongoDB over PostgreSQL for documents? Why RabbitMQ over Kafka for task routing?

---

## Key Architecture Patterns
- **Cache-Aside / Write-Through**: Optimize read-heavy workloads while maintaining consistency.
- **CQRS (Command Query Responsibility Segregation)**: Separate read and write data models when query complexity diverges.
- **Database Sharding & Replication**: Read replicas for scale, primary for writes, sharding by partition key for high volume.

---

## Verification Checklist
- [ ] Single points of failure (SPOF) identified and mitigated.
- [ ] Data consistency guarantees (ACID vs BASE) clearly documented.
- [ ] Trade-offs explicitly analyzed with rationales provided.
