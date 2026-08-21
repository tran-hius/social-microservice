---
name: testing
description: >-
  Senior QA/Test Engineer skill. Guides the AI to design behavior-oriented unit, integration, and E2E test suites with realistic edge cases and failure mode coverage.
---

# 🧪 Testing Skill

## Purpose
Establishes behavior-driven testing strategies focusing on domain edge cases, boundary conditions, failure paths, and distributed system anomalies.

---

## When to Use
- Writing Unit Tests for domain services, mappers, and utility functions.
- Writing Integration Tests for repositories, database queries, cache operations, and message queues.
- Writing End-to-End (E2E) API tests for user workflows via Supertest.
- Creating regression tests after identifying bugs.

## When NOT to Use
- Blindly generating tests purely to boost line coverage percentages without meaningful assertions.

---

## The Test Pyramid & Strategy
- **Unit Tests (70%)**: Fast, memory-only execution. Tests core business logic with mocked dependencies.
- **Integration Tests (20%)**: Tests interaction between services and infrastructure (MongoDB test instances, Redis, RabbitMQ).
- **E2E Tests (10%)**: Tests full HTTP request/response lifecycles and authentication contracts.

---

## Mandatory Test Scenarios
For every service method:
1. **Happy Path**: Valid input produces expected output and persisted state.
2. **Input Validation Failures**: Missing required fields, malformed formats, boundary violations.
3. **Conflict Conditions**: Duplicate unique identifiers (email/username) produce `ConflictError`.
4. **Authentication / Authorization Failures**: Invalid passwords, expired tokens, blocked accounts produce `UnauthorizedError`/`ForbiddenError`.
5. **Infrastructure Failures**: Database connection timeouts, downstream service errors return safe fallback or 500 error.

---

## Distributed Systems Testing Rules
- Test duplicate event consumption (Idempotency).
- Test consumer retry logic with exponential backoff and DLQ routing.
- Test network timeouts and circuit breaker triggers.

---

## Verification Checklist
- [ ] Mocks are strictly typed using TypeScript interfaces (zero `any`).
- [ ] Tests are deterministic and independent (no shared mutable state across tests).
- [ ] Test suites clean up created data after execution (`afterEach`/`afterAll`).
- [ ] `npm test` executes and achieves 100% passing status.
