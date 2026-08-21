# 🏛️ System Context & Architecture Overview

## 1. System Topology (C4 Context Model)
The system is a distributed microservices platform engineered for technical documentation and developer articles.

```text
[ Readers / Developers ] ───┐
                            ├──> [ API Gateway (:8000) ] ───> [ Auth Service (:8001) ] ───> [ MongoDB ]
[ Admin / Tech Authors ] ───┘            │
                                         └───> [ Doc Service (:8002) ] ───> [ PostgreSQL ]
                                                        │
                                                        └───> [ RabbitMQ Event Bus ]
```

## 2. Core Architectural Decisions
- **Microservices Partitioning**: Segregation based on bounded contexts (`auth` vs `doc`).
- **Communication Protocol**: Synchronous REST for external client requests; Asynchronous AMQP for inter-service domain event broadcasting.
- **Stateless Gateway**: `api-gateway` performs lightweight stateless token verification and request forwarding with correlation ID propagation.
