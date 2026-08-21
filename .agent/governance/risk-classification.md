# ⚖️ Risk Classification Engine

## Risk Levels & Evaluation Matrix

| Risk Level | Definition & Criteria | Action & Verification Level |
| :--- | :--- | :--- |
| **LOW** | Minor internal refactor, typo fix, logging enhancement, internal helper update. Zero external API or schema impact. | Autonomous execution with pre-push build & test verification. |
| **MEDIUM** | Adding optional API fields, new read-only endpoints, adding indexes, minor non-breaking DTO changes. | Autonomous execution with clear impact reporting in summary. |
| **HIGH** | Modifying transaction boundaries, altering caching layers, changing database schema, updating core authentication rules. | Detailed implementation plan & risk assessment required before execution. |
| **CRITICAL** | Deleting production tables/collections, altering payment/financial logic, breaking public API contracts, changing cross-service message protocols. | Mandatory escalation & explicit human approval required before execution. |
