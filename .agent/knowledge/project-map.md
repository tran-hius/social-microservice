# 🗺️ Project Knowledge Map

## 1. Project Overview
- **Domain**: Developer Tech Documentation & Tech Blog Platform (Admin authors, Reader developers).
- **Architecture**: Distributed Multi-Service Workspace (`D:/social`).
- **Language & Runtime**: TypeScript / Node.js (v20+), Express.js.
- **Repository Strategy**: Multi-Service Repository with Docker Container Orchestration.

---

## 2. System Directory Map
```text
D:/social/
├── .agent/                      # AI Engineering Governance System
│   ├── constitution.md          # Highest engineering authority
│   ├── instructions.md          # 18 behavioral rules & decision framework
│   ├── knowledge/               # Discovered facts & catalogs
│   ├── architecture/            # Invariants, fitness rules, context, ADRs
│   ├── skills/                  # 15 domain engineering skills
│   ├── workflows/               # 10 execution workflows
│   ├── governance/              # Risk & approval policies
│   ├── checklists/              # Quality gates
│   └── templates/               # Standardized engineering templates
│
├── api-gateway/                 # Reverse Proxy & Edge Gateway (Port 8000)
│   ├── src/index.ts             # Routing proxy & correlation ID injection
│   └── Dockerfile               # Multi-stage container runner
│
├── auth-service/                # Authentication & User Management Service (Port 8001)
│   ├── src/models/              # MongoDB Models (User, RefreshToken)
│   ├── src/repositories/        # Data Access Layers (UserRepository, RefreshTokenRepository)
│   ├── src/services/            # Modular Business Logic (Register, Login, Token, Profile)
│   ├── src/controllers/         # Granular HTTP Controllers
│   ├── src/routes/              # Feature-based Routers
│   ├── src/dtos/                # class-validator DTOs
│   ├── src/middlewares/         # Validation & Error Handlers
│   └── Dockerfile               # Multi-stage container runner
│
├── shared/                      # Shared reusable libraries (Cache, Messaging, Utils)
├── infrastructure/              # Database initialization scripts
└── docker-compose.yml           # Root orchestration for containers & infrastructure
```

---

## 3. Infrastructure & Network Map
- **MongoDB 7.0**: Port `27017` (`social-mongodb`, Database `social_auth_db`).
- **PostgreSQL 16**: Port `5432` (`social-postgres`, Databases `auth_db`, `user_db`, `post_db`).
- **Redis 7**: Port `6379` (`social-redis`, In-memory cache & session store).
- **RabbitMQ 3**: AMQP Port `5672`, Web UI Port `15672` (`social-rabbitmq`, Topic exchange `social.events`).
- **Docker Network**: `social-network` (bridge driver).
