# 🧪 Architecture Fitness Rules

Architecture fitness rules are mechanical verifications to prevent architectural drift over time.

---

## 1. Forbidden Import Patterns
- ❌ `src/controllers/*` importing from `src/models/*` (Direct DB access from controller).
- ❌ `src/controllers/*` importing Mongoose or raw database drivers.
- ❌ `src/repositories/*` importing from `src/services/*` or `src/controllers/*` (Circular or inverted dependency).
- ❌ Microservice A importing source files from Microservice B directly (Cross-boundary code leak).

## 2. Permitted Import Directions
- `routes` $\longrightarrow$ `controllers` $\longrightarrow$ `services` $\longrightarrow$ `repositories` $\longrightarrow$ `models`
- `services` $\longleftrightarrow$ `mappers` $\longleftrightarrow$ `dtos`
- All layers $\longrightarrow$ `interfaces` & `utils`
