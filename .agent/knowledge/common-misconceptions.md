# ⚠️ Common Engineering Misconceptions Database

Most learning plateaus and production bugs stem not from a lack of knowledge, but from **flawed mental models**. The Senior Mentor MUST actively reference this database to detect and dismantle misconceptions during mentoring.

---

## 📑 Domain Misconception Catalog

### 1. Redis & Caching

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"Redis is just a cache."* | Most tutorials only use Redis for simple `SET/GET` key-value pairs. | Redis is an in-memory data structure platform (Hashes, Sorted Sets, Streams, Bitmaps, Pub/Sub, Geospatial). | Teach Redis data structures matching specific business problems (Leaderboards, Rate Limiters, Queues). |
| *"Adding Redis cache always makes apps faster."* | RAM read time (nanoseconds) is faster than Disk read time (milliseconds). | Network serialization + Redis round-trip latency + cache misses can make poorly-cached requests slower than direct DB indexed queries. | Teach cache hit ratios, payload sizes, and cache-aside patterns. |
| *"Setting TTL guarantees memory will never run out."* | TTL ensures keys expire after a specified duration. | High write velocity can exhaust Redis memory long before TTL expires unless an eviction policy (`allkeys-lru`, `volatile-lru`) is configured. | Explain memory allocation limits, `maxmemory-policy`, and OOM kill risks. |

---

### 2. Message Queues & RabbitMQ

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"Message Queues guarantee Exactly-Once delivery."* | In a perfect world, a message is published once and consumed once. | Network hiccups, crashes before Ack, and retries mean almost all distributed brokers provide **At-Least-Once** delivery. | Mandate **Idempotent Consumers** and deduplication strategies. |
| *"Message queues eliminate all failure modes."* | Asynchronous queues decouple caller from callee. | Queues can back up, consumers can crash in crash-loops, and unhandled poison pills fill Dead Letter Queues. | Teach Backpressure, Consumer Concurrency, and Dead Letter Exchange patterns. |

---

### 3. Microservices & Distributed Architecture

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"More microservices automatically improve scalability."* | Splitting code into independent deployable units looks clean on diagrams. | Operational complexity, network overhead, distributed failure modes, and deployment coordination grow exponentially. | Teach Modular Monolith first; justify microservice splitting only by distinct scaling or organizational boundaries. |
| *"Microservices can share a common database if they use different tables."* | Reusing the same database server saves cloud infrastructure costs. | Direct DB sharing destroys service encapsulation and creates catastrophic runtime schema coupling. | Enforce strictly: **One Database per Microservice**. |

---

### 4. Databases & Indexing

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"Indexes always improve database performance."* | Indexes allow $O(\log N)$ B-Tree lookups instead of full table scans ($O(N)$). | Every index slows down `INSERT`, `UPDATE`, and `DELETE` operations and consumes substantial RAM/Disk space. | Teach `EXPLAIN ANALYZE`, composite index column order, and index pruning. |
| *"MongoDB / NoSQL is inherently faster than PostgreSQL / SQL."* | NoSQL doesn't enforce rigid schema checks or table joins by default. | PostgreSQL with proper indexing, connection pooling, and JSONB matches or outperforms MongoDB for most transactional workloads. | Teach ACID guarantees, relational integrity, and document normalization trade-offs. |

---

### 5. Authentication & Security

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"JWT is secure and encrypted by default."* | JWT strings look like random encrypted base64 strings. | Standard JWTs are **signed, NOT encrypted**. Anyone can decode the payload on `jwt.io` and read sensitive fields. | Never store sensitive data (passwords, PII) in JWT payloads; use HTTPS and signed verification. |
| *"Storing JWTs in browser localStorage is standard practice."* | `localStorage` is easy to access via JavaScript `localStorage.getItem('token')`. | Any XSS (Cross-Site Scripting) vulnerability allows malicious scripts to steal the token instantly. | Teach `httpOnly`, `Secure`, `SameSite` cookies with short-lived tokens and refresh token rotation. |

---

### 6. Concurrency & Node.js

| Misconception | Why It Sounds Reasonable | Reality in Production | Senior Mentor Remedy |
| :--- | :--- | :--- | :--- |
| *"Node.js is single-threaded, so race conditions cannot happen."* | Node.js executes JavaScript code on a single main Event Loop thread. | Asynchronous I/O interleaved operations across `await` points create classic check-then-act race conditions. | Teach Atomic database operations (`$inc`, `UPDATE ... WHERE`), Redis transactions/Lua scripts, and Distributed Locks. |

---

## 🛠️ Misconception Dismantling Protocol

When a misconception is detected in a user's prompt or reasoning:
1. **Name it explicitly**: State the assumption clearly without judgment.
2. **Validate why it seems intuitive**: Explain the partial truth that led to the misconception.
3. **Show where it breaks in production**: Demonstrate the specific failure scenario, race condition, or bottleneck.
4. **Provide the production-grade mental model**: Guide the learner to the resilient engineering pattern.
