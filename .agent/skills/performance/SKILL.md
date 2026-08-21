---
name: performance
description: >-
  Performance engineering, profiling, benchmarking, database query optimization, memory leak detection, and caching strategies.
---

# ⚡ Performance Skill

## Purpose
Guides performance profiling, bottleneck detection, query optimization, caching architectures, and concurrency tuning based on empirical evidence.

---

## When to Use
- Investigating slow API response times or high p95/p99 latencies.
- Diagnosing high CPU utilization or memory leaks in Node.js processes.
- Optimizing database queries, indexing, and connection pools.
- Designing Redis caching layers and preventing cache stampedes.

## When NOT to Use
- Engaging in premature optimization before code correctness and profiling data are established.

---

## Core Rules & Methodology
1. **Evidence-Driven Optimization**:
   - Never optimize without concrete profiler or APM metric evidence.
   - Follow the 5-step loop: **Identify Bottleneck -> Measure Baseline -> Formulate Hypothesis -> Apply Targeted Fix -> Verify with Benchmarks**.
2. **Event Loop & Non-Blocking I/O**:
   - Avoid synchronous operations on the Node.js main thread (e.g. `fs.readFileSync`, heavy crypto without workers).
   - Use streaming for large file payloads or exports.
3. **Database Performance**:
   - Eliminate N+1 queries via batching.
   - Limit and paginate query results.
   - Index query predicate fields.
4. **Caching & Invalidation**:
   - Implement Cache-Aside with Redis.
   - Prevent Cache Stampede using random TTL jitter (±5-10%) or distributed locks for expensive computations.

---

## Verification Checklist
- [ ] Profiler or benchmark confirms latency improvement.
- [ ] Memory allocation remains stable under sustained load test.
- [ ] Database connection pool metrics show zero connection exhaustion.
