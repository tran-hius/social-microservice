# 📦 Dependency Governance Policy

## 1. Principles for Adding Dependencies
- **No Convenience Libraries**: Do not add a heavy library (e.g. lodash, moment) when native Node.js/TypeScript features suffice.
- **Security & Maintenance**: Check package download count, open vulnerabilities, and active maintenance before proposing a package.
- **License Compliance**: Only MIT, Apache 2.0, BSD, or ISC licenses are permitted for backend services.

## 2. Shared Libraries
- Modules shared across multiple microservices (Cache, Messaging, Custom Errors, Logging) must reside in `shared/` to prevent divergent code implementations.
