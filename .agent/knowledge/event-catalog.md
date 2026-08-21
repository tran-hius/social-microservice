# 📨 Event Catalog

## Asynchronous Domain Events (RabbitMQ Topic Exchange: `social.events`)

| Event Topic | Producer | Consumers | Payload Schema | Delivery Guarantee |
| :--- | :--- | :--- | :--- | :--- |
| `auth.user.registered` | `auth-service` | `doc-service`, `notification-service` | `{ userId, email, username, role, createdAt }` | At-least-once (Idempotent receiver) |
| `auth.user.logged_in` | `auth-service` | `audit-service`, `analytics` | `{ userId, email, role, loginAt }` | At-least-once |
| `doc.article.published`| `doc-service` (Planned) | `search-service`, `notification-service` | `{ articleId, slug, title, authorId, publishedAt }` | At-least-once (Idempotent receiver) |
