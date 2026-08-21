# 📨 Distributed Systems Verification Checklist

- [ ] Correlation ID (`x-correlation-id`) forwarded through HTTP headers and message properties.
- [ ] Message consumers are idempotent (can process duplicate messages safely).
- [ ] Retries utilize exponential backoff and route unrecoverable messages to a Dead Letter Queue (DLQ).
- [ ] Distributed locks (Redis) have safety TTL expirations.
- [ ] Network timeouts and circuit breaker fallbacks defined on inter-service calls.
