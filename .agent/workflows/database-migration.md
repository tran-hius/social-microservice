# 🚚 Database Migration Workflow

A zero-downtime, safe workflow for executing database schema and data transformations.

---

## Workflow Steps

```text
1. Define Target Schema Changes
   ↓
2. Check Table Locking & Data Volume Implications
   ↓
3. Design Expand-Contract Phases
   ↓
4. Author Reversible Migration Scripts (Up & Down)
   ↓
5. Test Migration on Realistic Staging Dataset
   ↓
6. Test Rollback Procedure
   ↓
7. Deploy Phase 1: Expand (Add new columns as optional)
   ↓
8. Deploy Phase 2: Backfill Data in batches
   ↓
9. Deploy Phase 3: Switch Application Reads/Writes to new schema
   ↓
10. Deploy Phase 4: Contract (Drop legacy columns)
   ↓
11. Update Data Ownership & Schema Documentation
```

---

## Applicable Skills
- Primary: `migration`, `database`
- Supporting: `backend-development`, `devops`
