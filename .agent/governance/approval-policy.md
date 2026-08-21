# ✍️ Decision Escalation & Approval Policy

## 1. Autonomous Scope
The AI Agent operates autonomously for:
- Implementing requested features that comply with established architecture.
- Writing unit, integration, and E2E tests.
- Fixing localized bugs and refactoring code without breaking external API contracts.
- Executing pre-push build checks and conventional commit pushes.

## 2. Mandatory Escalation Triggers
The AI Agent **MUST ESCALATE** and request explicit confirmation before:
- Replacing core infrastructure components (e.g. replacing RabbitMQ with Kafka, replacing Mongoose with Prisma).
- Deleting or dropping database tables, collections, or production data.
- Introducing breaking changes to existing public API endpoints or event schemas.
- Changing authentication mechanisms or security trust boundaries.
