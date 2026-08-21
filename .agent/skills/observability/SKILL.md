---
name: observability
description: >-
  Structured logging, distributed tracing, correlation IDs, health checks, metrics, and production monitoring.
---

# 📊 Observability Skill

## Purpose
Ensures system behavior is transparent and verifiable in production through structured logging, distributed tracing, correlation IDs, and metrics.

---

## When to Use
- Implementing loggers, request interceptors, and error handlers.
- Adding correlation IDs across HTTP requests and message brokers.
- Exposing `/health` liveness/readiness probes.
- Setting up business and system metrics.

## When NOT to Use
- Local unit test debugging where simple assertions suffice.

---

## Core Rules
1. **JSON Structured Logs**: Every log entry must be JSON with `timestamp`, `level`, `service`, `message`, and `correlationId`.
2. **End-to-End Correlation**: Propagate `x-correlation-id` from API Gateway through every downstream HTTP service call and message broker header.
3. **Sensitive Data Redaction**: Automatically redact passwords, JWT tokens, credit card numbers, and PII from log output.
4. **Health Check Probes**: `GET /health` must verify connection health to databases and message queues before returning 200 OK.

---

## Verification Checklist
- [ ] Correlation ID appears on every request log and response header.
- [ ] No plain-text passwords or secrets in logs.
- [ ] Log levels (`info`, `warn`, `error`, `debug`) used accurately.
