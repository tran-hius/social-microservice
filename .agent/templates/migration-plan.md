# 🚚 Database Migration Plan: [Migration Name]

- **Target Database**: PostgreSQL (`docs_db`) / MongoDB (`social_auth_db`)
- **Estimated Execution Time**: ...
- **Locking Impact**: Non-blocking (Concurrent) / Brief exclusive lock

---

## 1. Migration Goals & Target State
Describe the new schema columns, indexes, or collection structures.

---

## 2. Four-Phase Expand-Contract Strategy
1. **Expand**: ...
2. **Backfill**: ...
3. **Switch**: ...
4. **Contract**: ...

---

## 3. Rollback Plan
Specific SQL/script steps to revert the database state if migration fails.
