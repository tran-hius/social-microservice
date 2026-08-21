---
name: microservices
description: >-
  Microservices architecture, distributed systems, event-driven messaging, saga pattern, transactional outbox, and service communication.
---

# 🌐 Microservices Skill

## Purpose
Governs distributed system design, service boundaries, asynchronous event-driven messaging, eventual consistency, and inter-service communication.

---

## When to Use
- Designing service boundaries and Bounded Contexts.
- Implementing asynchronous messaging via RabbitMQ (Topic Exchanges) or Kafka.
- Implementing distributed transactions, Saga patterns, or Transactional Outbox patterns.
- Propagating Correlation IDs across distributed HTTP requests and message broker events.

## When NOT to Use
- When building a monolithic application without distributed components.

---

## Core Engineering Rules
1. **Database-per-Service**: Each microservice owns its database exclusively. Cross-service database queries or joins are strictly forbidden.
2. **Asynchronous by Default**: Prefer asynchronous messaging for state propagation and side effects; use synchronous HTTP/gRPC only when immediate response data is strictly required.
3. **Idempotent Consumers**:
   - Message delivery is at-least-once. Every consumer must track processed `eventId` or check current entity state before executing mutations.
4. **Resilience & Dead Lettering**:
   - Consumers must implement retry mechanisms with exponential backoff.
   - Unrecoverable messages must be routed to a Dead Letter Queue (DLQ) for engineering analysis.
5. **Correlation ID & Tracing**:
   - Propagate `x-correlation-id` from API Gateway through every HTTP call and message header to ensure end-to-end distributed observability.

---

## Failure Scenarios & Mitigations
- **Event Publishing Failure after DB Commit**: DB write succeeds, but message broker crashes before publish. *Mitigation: Transactional Outbox pattern.*
- **Network Partitions & Cascading Failures**: Downstream service slow/unresponsive. *Mitigation: Timeouts, Circuit Breakers, and Graceful Degradation.*

---

## Verification Checklist
- [ ] Service boundaries align with domain concepts.
- [ ] Consumers handle duplicate and out-of-order messages safely.
- [ ] Correlation IDs are injected and forwarded across all service boundaries.
- [ ] Graceful shutdown handles in-flight messages and active connections.
