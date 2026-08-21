---
name: api-contracts
description: >-
  API contract governance, request/response DTOs, versioning, backward compatibility, breaking change detection, and event schemas.
---

# 📜 API Contract Governance Skill

## Purpose
Guarantees backward compatibility, prevents breaking changes, and manages API lifecycle versioning across synchronous endpoints and asynchronous event payloads.

---

## When to Use
- Modifying existing API request or response structures.
- Deprecating endpoints or introducing new API versions (`/api/v1`, `/api/v2`).
- Modifying asynchronous message event schemas.

## When NOT to Use
- Purely internal private helper function modifications.

---

## Core Rules
1. **Never Break Existing Consumers**:
   - Do NOT delete or rename existing response fields.
   - Do NOT make an optional request field mandatory without versioning.
   - Do NOT change data types of existing fields (e.g. string to number).
2. **Additive-Only Evolution**:
   - Add new fields as optional.
   - For major breaking changes, create a new endpoint version (`/v2/articles`).
3. **Event Schema Versioning**:
   - Include schema version in event metadata (`version: 1`).
   - Consumers must ignore unknown fields rather than failing.

---

## Verification Checklist
- [ ] Schema diff confirms zero breaking field removals.
- [ ] New request parameters are marked optional with defaults.
- [ ] API consumer integration tests remain green.
