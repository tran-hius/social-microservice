# 🚢 Production Readiness Checklist

Before marking any major feature or service ready for production:

- [ ] **Correctness**: Happy path and failure paths verified through automated tests.
- [ ] **Security**: Passwords hashed, secrets stored in env, JWT tokens validated and rotated.
- [ ] **Database**: Indexes present on queried fields, no N+1 query patterns.
- [ ] **Concurrency**: Atomic updates or optimistic locks used on shared mutable records.
- [ ] **Distributed Systems**: Idempotent message consumers, retry backoffs, DLQs configured.
- [ ] **Observability**: Structured JSON logging, correlation IDs propagated, `/health` endpoint responding.
- [ ] **Lifecycle**: Graceful shutdown (`SIGTERM`/`SIGINT`) properly flushes connections.
- [ ] **Build & Test**: `npm run build` succeeds with 0 errors and `npm test` achieves 100% pass rate.
