---
name: database
description: >-
  Database architecture, schema design, query optimization, indexing, transactions, and data integrity for PostgreSQL and MongoDB.
---

# 🗄️ Database Skill

## Purpose
Guides schema design, query optimization, indexing strategy, transaction management, and connection handling across relational (PostgreSQL) and document (MongoDB) databases.

---

## When to Use
- Designing new database schemas, tables, collections, or migrations.
- Adding indexes to optimize slow queries.
- Managing multi-entity write operations requiring ACID transactions.
- Designing pagination, soft-deletes, and TTL-based expiration.

## When NOT to Use
- Designing purely in-memory data structures without persistent storage requirements.

---

## Core Engineering Rules
1. **Indexing Strategy**:
   - Always place unique indexes on candidate keys (`email`, `username`, `slug`).
   - Add indexes for fields used in `WHERE`, `ORDER BY`, or foreign key relationships.
   - Use TTL indexes for ephemeral collections (refresh tokens, OTPs, session stores).
2. **Prevent N+1 Queries**:
   - Never execute database queries inside iteration loops (`for`, `map`, `forEach`).
   - Use batch queries (`$in`, `WHERE IN`) or dataloaders.
3. **Transaction Boundaries**:
   - Wrap multi-table/collection updates in atomic transactions.
   - Choose locking strategy wisely: Optimistic locking (version fields) for low-conflict paths; Pessimistic locking for high-contention operations (balances, inventory).
4. **Pagination & Query Bounds**:
   - Always enforce hard limits on query results using keyset/cursor pagination or offset-limit.

---

## Failure Modes & Mitigations
- **Connection Pool Exhaustion**: Too many open connections without release. *Mitigation: Configure `maxPoolSize` and ensure connections return to pool.*
- **Unindexed Table Scans**: CPU spikes during table scans. *Mitigation: Run `EXPLAIN ANALYZE` or MongoDB `.explain()` on all queries.*
- **Deadlocks in Concurrent Transactions**: Multiple transactions acquiring locks in different orders. *Mitigation: Standardize lock acquisition order across transactions.*

---

## Verification Checklist
- [ ] Primary keys, foreign keys, and unique constraints are defined.
- [ ] Frequently queried fields have appropriate single/compound indexes.
- [ ] Schema migrations are reversible and tested.
- [ ] MongoDB connection strings and PostgreSQL credentials use environment variables.
