---
name: code-review
description: >-
  Senior/Principal-level code review skill. Evaluates code holistically across architecture, security, correctness, database behavior, performance, and maintainability.
---

# 🔍 Code Review Skill

## Purpose
Conducts thorough, holistic code reviews focusing on correctness, architectural integrity, security, data integrity, performance, and maintainability.

---

## When to Use
- Reviewing pull requests, feature branches, or existing modules.
- Performing pre-commit checks before pushing code.
- Auditing legacy code for security vulnerabilities and race conditions.

## When NOT to Use
- Purely for linting or cosmetic formatting (delegate to automated linters).

---

## Core Principles
1. **Holistic Flow Inspection**: Walk the full execution path (`Controller -> Service -> Repository -> Database`) rather than reading isolated diffs.
2. **Fact-Based Findings**: Distinguish between objective defects/vulnerabilities and subjective style preferences.
3. **Actionable Recommendations**: Every finding must explain *what*, *why it matters*, *the failure scenario*, and provide a concrete fix.

---

## Severity Classification
- **CRITICAL**: Immediate security exploit, data corruption, auth bypass, unhandled race conditions. Blocks merge/deployment.
- **HIGH**: Architecture violation, N+1 queries, missing transactions on multi-table writes, improper error handling.
- **MEDIUM**: Suboptimal performance, missing index on frequent query fields, redundant code.
- **LOW**: Minor naming ambiguity, code cleanliness, style consistency.
- **INFO**: Educational notes or non-blocking architecture observations.

---

## Review Dimensions & Checklist
1. **Correctness**: Are edge cases (null, empty strings, boundary numbers) handled? Are async operations properly awaited?
2. **Security**: Are passwords hashed with bcrypt/argon2? Are JWT secrets protected? Are authorizations enforced beyond gateway checks?
3. **Database**: Are queries bounded by pagination? Are indexes present on filter columns? Are transactions used for atomic operations?
4. **Error Handling**: Are errors serialized safely without leaking stack traces in production?
5. **Clean Code**: Are magic numbers replaced with constants/enums? Are obsolete comments removed?
