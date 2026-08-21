---
name: concurrency
description: >-
  Concurrency engineering, race conditions, atomic operations, distributed locks, transaction isolation, and optimistic/pessimistic locking.
---

# ⚡ Concurrency Skill

## Purpose
Prevents lost updates, race conditions, dirty reads, and deadlock situations when concurrent requests or background tasks access shared state simultaneously.

---

## When to Use
- Implementing counter increments (likes, views, balances, inventory).
- Handling simultaneous registration/checkout/booking operations on identical resources.
- Designing distributed locks using Redis for single-execution operations.

## When NOT to Use
- Strictly immutable read-only operations without side effects.

---

## Core Rules
1. **Atomic In-Database Operations**: Always use atomic database operations (`$inc`, `UPDATE ... SET count = count + 1`) instead of reading, calculating in Node memory, and saving back.
2. **Optimistic Locking**: Use version fields (`versionKey` / `__v`) for state entities. Check version during update to reject concurrent conflicting mutations.
3. **Pessimistic Locking**: Use `SELECT ... FOR UPDATE` in PostgreSQL for high-contention financial or critical transactional boundaries.
4. **Distributed Locks**: Use Redlock / Redis locks with finite TTLs for distributed task coordination. Always implement safe release logic.

---

## Verification Checklist
- [ ] Concurrency test executes two simultaneous mutating requests on the same entity.
- [ ] Zero lost updates or negative inventory/balances.
- [ ] Deadlocks prevented by consistent lock acquisition ordering.
