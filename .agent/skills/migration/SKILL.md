---
name: migration
description: >-
  Database migration engineering, zero-downtime schema evolution, expand-contract pattern, large-table locking avoidance, and rollback planning.
---

# 🚚 Migration Engineering Skill

## Purpose
Governs safe, zero-downtime database schema migrations, large dataset transformations, and rollback strategies across production databases.

---

## When to Use
- Adding, renaming, or dropping database columns/tables/indexes.
- Migrating data between schemas or data stores.
- Writing migration scripts for PostgreSQL (e.g. Prisma/Knex/TypeORM) or MongoDB.

## When NOT to Use
- Transient in-memory schema changes.

---

## The Expand-Contract Migration Pattern
1. **Phase 1 (Expand)**: Add the new column/field as optional. Application writes to both old and new columns, reads from old.
2. **Phase 2 (Backfill)**: Run background migration script to populate new column for historical records in batches.
3. **Phase 3 (Switch)**: Deploy application code to read from the new column.
4. **Phase 4 (Contract)**: Drop old column and remove legacy code paths.

---

## Table Locking & Safety Rules
- In PostgreSQL, avoid long-running table locks during index creation (`CREATE INDEX CONCURRENTLY`).
- Always write reversible migration scripts (`up` and `down`).

---

## Verification Checklist
- [ ] Migration script tested on staging data volume.
- [ ] Rollback script verified and confirmed functional.
- [ ] Zero blocking exclusive locks on high-traffic tables.
