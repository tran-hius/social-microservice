---
name: devops
description: >-
  DevOps, Docker containerization, multi-stage builds, health checks, graceful shutdown, environment configuration, and operational reliability.
---

# 🚢 DevOps Skill

## Purpose
Governs containerization, deployment configuration, operational health checks, graceful shutdown, environment secret management, and CI/CD pipelines.

---

## When to Use
- Writing or optimizing Dockerfiles and Docker Compose files.
- Configuring health checks (`/health`), liveness, and readiness probes.
- Implementing graceful shutdown handling (`SIGTERM`/`SIGINT`).
- Managing environment variables and production runtime configurations.

## When NOT to Use
- Pure application business logic implementation without operational impact.

---

## Core DevOps Rules
1. **Multi-Stage Docker Builds**:
   - Stage 1 (Builder): Installs build tools, compiles TypeScript (`npm run build`), prunes dev dependencies.
   - Stage 2 (Runner): Uses lightweight base images (`node:20-alpine`), copies only production artifacts, runs as non-root `USER node`.
2. **Container Security & Hygiene**:
   - Exclude local `node_modules`, `.git`, `.env`, and test artifacts via `.dockerignore`.
   - Never embed secrets or credentials inside Docker images.
3. **Graceful Shutdown**:
   - Listen for `SIGTERM` and `SIGINT`.
   - Stop accepting new HTTP requests, complete active in-flight requests, flush message queues, and close database/cache connections before exiting with code 0.
4. **Health Checks**:
   - Implement `GET /health` endpoints returning 200 OK when service and downstream dependencies are healthy.

---

## Verification Checklist
- [ ] Dockerfiles build cleanly with zero multi-stage errors.
- [ ] Docker containers run as non-root user.
- [ ] Healthcheck directives properly defined in Docker and Docker Compose.
- [ ] Graceful shutdown successfully tested.
