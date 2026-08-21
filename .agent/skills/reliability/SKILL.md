---
name: reliability
description: >-
  Reliability engineering, failure modes analysis, circuit breakers, timeouts, retries with backoff, fault tolerance, and graceful degradation.
---

# 🛡️ Reliability & Fault Tolerance Skill

## Purpose
Ensures system components survive infrastructure outages, network partitions, downstream slowness, and unexpected crashes with graceful degradation.

---

## When to Use
- Implementing inter-service HTTP/gRPC calls or external API clients.
- Handling database/cache connection failures.
- Designing consumer retry loops and circuit breakers.

## When NOT to Use
- Pure in-memory deterministic helper calculations.

---

## Core Reliability Rules
1. **Always Set Timeouts**: Never make an external network request without explicit connect and socket timeouts (e.g. 3-5 seconds).
2. **Exponential Backoff with Jitter**: Avoid retry storms by adding randomized delay to retries:
   $$t = \min(\text{base} \times 2^{\text{attempt}} + \text{jitter}, \text{max\_delay})$$
3. **Circuit Breakers**: Trip the circuit when downstream error rates exceed 50% over a 10s window to prevent resource starvation.
4. **Graceful Fallback**: When non-critical dependencies fail (e.g. Redis cache), fall back directly to primary storage (Database) rather than returning 500 errors.

---

## Verification Checklist
- [ ] Downstream outage simulations verify application continues operating or degrades safely.
- [ ] Retry logic includes hard iteration bounds (max 3-5 retries).
- [ ] Dead Letter Queues receive unrecoverable messages.
