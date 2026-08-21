# 🗺️ Dependency Map

```mermaid
graph TD
    Client["Client (Browser/Mobile/CLI)"] -->|HTTP / HTTPS| Gateway["api-gateway (:8000)"]
    
    Gateway -->|HTTP Proxy /auth/*| Auth["auth-service (:8001)"]
    Gateway -->|HTTP Proxy /docs/*| Docs["doc-service (:8002 - Planned)"]
    
    Auth -->|Mongoose Driver| MongoDB[("MongoDB (:27017)\nsocial_auth_db")]
    Auth -->|ioredis| Redis[("Redis (:6379)\nCache & Tokens")]
    Auth -->|amqplib| RabbitMQ{{"RabbitMQ (:5672)\nsocial.events"}}
    
    Docs -.->|Events Consumed| RabbitMQ
    Docs -.->|Postgres Client| Postgres[("PostgreSQL (:5432)\ndocs_db")]
```

## Failure Dependency Analysis
- **If MongoDB fails**: `auth-service` cannot authenticate or register users. Returns HTTP 500 error safely.
- **If Redis fails**: `auth-service` gracefully degrades and falls back directly to MongoDB without crashing.
- **If RabbitMQ fails**: `auth-service` logs a warning and retries asynchronous event publishing without blocking synchronous HTTP responses.
