# 🏛️ Architecture Health Checklist

- [ ] Unidirectional dependency flow respected (Routes -> Controllers -> Services -> Repositories -> Models).
- [ ] No direct database access or manual validation in Controllers.
- [ ] Dependency Injection via constructor utilized consistently.
- [ ] Bounded contexts and Database-per-Service principles maintained.
- [ ] No circular dependencies in module graph.
