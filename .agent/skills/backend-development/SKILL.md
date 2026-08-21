---
name: backend-development
description: >-
  Senior-level backend engineering skill. Guides the AI to design and implement robust, scalable, secure, and production-ready backend microservices and APIs.
---

# 🚀 Backend Development Skill

## Purpose
Provides disciplined guidelines for designing, implementing, and maintaining server-side applications, REST APIs, business services, and domain models.

---

## When to Use
- Implementing new backend endpoints, use cases, or domain logic.
- Designing API contracts, DTOs, and input validation schemas.
- Refactoring application layers or introducing Dependency Injection (DI).
- Setting up error handling, structured logging, and configuration management.

## When NOT to Use
- For purely operational/infrastructure issues without code changes (use `devops`).
- For dedicated security audits without feature implementation (use `security` or `code-review`).

---

## Core Principles
1. **Separation of Concerns**: Isolate transport (Controllers/Routes), business logic (Services/Use Cases), and persistence (Repositories/Models).
2. **Explicit Dependency Injection**: Inject dependencies via constructors to enable unit testing and loose coupling.
3. **Fail Fast at Boundaries**: Validate external inputs immediately at the DTO layer using decorators or schemas (`class-validator`/`zod`) before touching domain logic.
4. **Information Hiding**: Transform internal models into explicit Response DTOs using Mappers; never leak database entities directly to API consumers.

---

## Architecture & Layering Rules
- **Controller Layer**: Extracts parameters, calls Services, returns `ApiResponse`. Contains **zero** manual validation or database queries.
- **Service Layer**: Orchestrates business rules, transactions, and event emission. Coordinates with Repositories and Mappers.
- **Repository Layer**: Encapsulates all query syntax (Mongoose, Prisma, raw SQL).
- **Mapper Layer**: Explicitly converts between Database Entities and DTOs.

---

## Failure Modes & Mitigation
- **Leaking Sensitive Fields**: Password hashes or internal IDs exposed in responses. *Mitigation: Strict DTO mappings and `select: false` in schema.*
- **Unhandled Async Rejections**: Unhandled promises crashing Node process. *Mitigation: Centralized error handling middleware and async route wrappers.*
- **Memory Leaks from Global State**: Caches without TTL or unclosed event listeners. *Mitigation: Time-bound caches and lifecycle management.*

---

## Anti-Patterns to Avoid
- Querying the database directly inside Controllers or Express route handlers.
- Catching exceptions only to ignore them or log without returning/propagating.
- Using `any` types to bypass TypeScript compile-time safety.
- Hardcoding magic strings or configuration secrets in source files.

---

## Verification Checklist
- [ ] DTO schema validates all incoming fields (types, formats, constraints).
- [ ] Dependencies are injected via constructor.
- [ ] Custom `AppError` subclasses are used with appropriate HTTP status codes (200, 201, 400, 401, 403, 404, 409, 422).
- [ ] Structured logging includes correlation IDs for request tracing.
- [ ] `npm run build` passes with 0 TypeScript compilation errors.
