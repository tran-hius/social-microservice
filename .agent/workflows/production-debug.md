---
workflow: production-debug
target_services:
  - auth-service
  - api-gateway
  - shared
required_skills:
  - .agent/skills/devops/SKILL.md
  - .agent/skills/performance/SKILL.md
  - .agent/skills/reliability/SKILL.md
lazy_load_context:
  - .agent/knowledge/dependency-map.md
---

# 🚨 Production Debugging Workflow

An evidence-driven incident investigation and root-cause analysis runbook.

---

## Execution Steps

```text
1. Establish Incident Symptoms (Error rates, latency spikes, dropped messages)
   ↓
2. Establish Precise Incident Timeline
   ↓
3. Identify Affected Components & Microservices
   ↓
4. Gather Evidence (Logs, Metrics, Traces, Correlation IDs, DB State, Queue State)
   ↓
5. Formulate Testable Hypotheses
   ↓
6. Validate Hypotheses against metrics and logs (Never guess without data)
   ↓
7. Identify Definite Root Cause
   ↓
8. Execute Safe Mitigation (Rollback, rate limit, cache purge, circuit breaker)
   ↓
9. Verify System Recovery
   ↓
10. Implement Permanent Fix
   ↓
11. Add Automated Regression Tests & Monitoring Alerts
   ↓
12. Document Post-Mortem Report
```
