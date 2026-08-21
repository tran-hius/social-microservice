# 🚨 Incident Post-Mortem Report: [Incident Title]

- **Incident Date & Time**: YYYY-MM-DD HH:mm UTC
- **Severity**: Sev1 / Sev2 / Sev3 / Sev4
- **Incident Commander**: ...
- **Affected Services**: `api-gateway`, `auth-service`, etc.

---

## 1. Executive Summary
Brief non-technical explanation of what occurred, user impact, and duration of outage.

---

## 2. Timeline
- **HH:mm** - Anomaly detected via alerting / error spike.
- **HH:mm** - Investigation initiated; correlation ID traced.
- **HH:mm** - Mitigation applied (e.g. rollback, circuit breaker tripped).
- **HH:mm** - Service metrics restored to normal baseline.

---

## 3. Root Cause Analysis (5 Whys)
Detailed technical investigation into why the failure occurred.

---

## 4. Corrective & Preventive Actions
| Action Item | Owner | Target Date | Status |
| :--- | :--- | :--- | :--- |
| Add automated regression test | QA Engineer | YYYY-MM-DD | Open |
| Add circuit breaker fallback | Backend Team | YYYY-MM-DD | Open |
