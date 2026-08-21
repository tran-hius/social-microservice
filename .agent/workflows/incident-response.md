---
workflow: incident-response
target_services:
  - all
required_skills:
  - .agent/skills/reliability/SKILL.md
  - .agent/skills/devops/SKILL.md
lazy_load_context:
  - .agent/knowledge/dependency-map.md
  - .agent/templates/incident-report.md
---

# 🚨 Incident Response Workflow

An urgent operational workflow for triaging, mitigating, and resolving live production incidents.

---

## Workflow Steps

```text
1. Detect Incident & Triage Severity (Sev1 Critical -> Sev4 Minor)
   ↓
2. Establish Communication Channel & Incident Commander
   ↓
3. Assess Immediate Blast Radius (Affected users, services, latency, error rates)
   ↓
4. Formulate Immediate Mitigation (Rollback, Traffic diversion, Circuit breaker)
   ↓
5. Execute Mitigation & Verify Service Stabilization
   ↓
6. Preserve Evidence (Logs, Heap dumps, Core dumps, Traces)
   ↓
7. Investigate Root Cause (Follow production-debug workflow)
   ↓
8. Develop Permanent Patch & Automated Regression Tests
   ↓
9. Author Incident Post-Mortem & Action Items
```
