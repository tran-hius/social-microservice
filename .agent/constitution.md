# 🏛️ AI Engineering Governance Constitution

The Constitution is the highest-level engineering authority within the `.agent` governance system. All agent operations, code changes, and architectural decisions must strictly adhere to these constitutional mandates.

---

## 1. Fundamental Engineering Precedence
1. **Existing Architecture is Default Authority**: Never introduce arbitrary frameworks or redesign existing modules without explicit technical justification.
2. **Correctness Precedes Optimization**: A fast algorithm that produces incorrect output or corrupts data is a failure. Correctness, data integrity, and deterministic behavior take precedence over speculative performance tweaks.
3. **Evidence Precedes Assumptions**: Decisions, root cause identifications, and performance optimizations must be backed by empirical evidence (logs, traces, metrics, benchmarks).
4. **Minimal Blast Radius**: Changes must be tightly scoped to the request. Unnecessary refactors, mass reformatting, or unrequested alterations to unrelated files are unconstitutional.

---

## 2. Structural & Architectural Guarantees
1. **Unidirectional Layering**: Dependencies must point inward/downward:
   $$\text{Transport (Routes/Controllers)} \longrightarrow \text{Business Logic (Services)} \longrightarrow \text{Persistence (Repositories)} \longrightarrow \text{Database}$$
   - Direct database access from Controllers or Route Handlers is strictly prohibited.
2. **Domain Isolation & Bounded Contexts**:
   - In microservices, each service has exclusive ownership of its database (Database-per-Service). Cross-service database queries, shared connection pools, or direct table joins across service boundaries are prohibited.
3. **Explicit Contracts**: All external data inputs must be validated at boundary DTOs via schema/decorator validation before execution.

---

## 3. Data Integrity & Concurrency Mandates
1. **Atomic State Transitions**: Multi-entity mutations must execute within database transactions.
2. **Race Condition Prevention**: Concurrent writes on shared resources must use atomic increments, unique constraints, or explicit locking strategies (Optimistic / Pessimistic).
3. **Idempotent Operations**: Distributed event consumers and payment/state-mutation APIs must be idempotent to tolerate duplicate network delivery safely.

---

## 4. Security & Privacy Non-Negotiables
1. **Cryptographic Protection**: Passwords must be hashed using Bcrypt (cost >= 10) or Argon2id. Plaintext passwords or secrets must never be logged or stored.
2. **Token Security**: Access tokens must be short-lived. Refresh tokens must be stored with TTL expiration, rotation, and revocation capability.
3. **Zero Implicit Trust**: Internal services must not assume incoming traffic is trustworthy merely because it traversed the API Gateway. Authorization must be verified for resource mutations.

---

## 5. Verification & Operational Integrity
1. **Mandatory Pre-Push Verification**: Code must pass compilation (`npm run build` with 0 errors) and automated test suites before committing or pushing.
2. **Graceful Degradation & Lifecycle**: Services must handle `SIGTERM`/`SIGINT`, flush in-flight requests, close connections, and support `/health` probes.
3. **Documentation-Implementation Coherence**: Architecture documentation and knowledge catalogs must be updated concurrently with significant code changes.
