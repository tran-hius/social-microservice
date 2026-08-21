---
name: threat-modeling
description: >-
  Threat modeling, STRIDE methodology, attack surface identification, trust boundaries, and risk mitigation design.
---

# 🛡️ Threat Modeling Skill

## Purpose
Systematically analyzes potential threats, attack surfaces, vulnerabilities, and abuse cases before implementing security-sensitive features.

---

## When to Use
- Designing authentication, authorization, payment, password reset, or permission systems.
- Introducing external public integrations or third-party webhooks.
- Changing security trust boundaries between microservices.

## When NOT to Use
- Standard non-sensitive CRUD operations.

---

## STRIDE Threat Modeling Framework
1. **Spoofing**: Can an attacker forge identities? *Mitigation: Strong JWT verification with asymmetric or secret keys.*
2. **Tampering**: Can data in transit or storage be modified? *Mitigation: TLS, HTTPS, HMAC signatures on payloads.*
3. **Repudiation**: Can a user deny an action occurred? *Mitigation: Audit logging with correlation IDs.*
4. **Information Disclosure**: Can secrets or PII leak? *Mitigation: Encryption at rest, selective DTO projection.*
5. **Denial of Service**: Can resources be exhausted? *Mitigation: Rate limiting, pagination bounds, request timeouts.*
6. **Elevation of Privilege**: Can a reader execute admin actions? *Mitigation: Strict RBAC verification in Service layer.*

---

## Verification Checklist
- [ ] Assets, actors, and trust boundaries clearly diagrammed.
- [ ] Mitigations implemented for all identified high/critical threats.
- [ ] Residual risk evaluated and accepted by engineering leads.
