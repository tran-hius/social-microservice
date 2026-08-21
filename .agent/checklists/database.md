# 🗄️ Database Verification Checklist

- [ ] Unique constraints indexed at database level (`email`, `username`).
- [ ] Foreign keys and indexed lookup columns configured.
- [ ] No queries executed inside `for`/`map` loops (Zero N+1 queries).
- [ ] Pagination (`limit`/`skip` or cursor) enforced on all list queries.
- [ ] Multi-table/collection write operations enclosed in transactions.
- [ ] Connection pool parameters configured with graceful disconnect on shutdown.
