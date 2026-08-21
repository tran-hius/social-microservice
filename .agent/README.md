# 🏛️ Senior Backend Engineering .agent System

Hệ thống hướng dẫn và quy chuẩn kỹ thuật cấp cao (Principal/Senior Backend Engineer) dành cho AI Agent trong việc phát triển, rà soát mã nguồn (Code Review) và kiểm thử (Testing) cho các hệ thống Backend và Microservices.

---

## 📂 Cấu trúc Hệ thống `.agent/`

```text
.agent/
├── README.md                           # Giới thiệu tổng quan hệ thống .agent
├── instructions.md                     # Hướng dẫn quy trình ra quyết định và tư duy kỹ thuật
│
├── skills/
│   ├── backend-development/            # [Skill 1] Phát triển Backend chuyên sâu
│   │   ├── SKILL.md                    # Workflow và chỉ dẫn chính
│   │   ├── architecture.md             # Kiến trúc phân lớp, Clean, Modular, Bounded Contexts
│   │   ├── api-design.md               # Thiết kế REST, DTOs, Idempotency, Status codes
│   │   ├── database.md                 # Thiết kế DB, Indexes, Transactions, N+1, Locking
│   │   ├── security.md                 # RBAC, JWT, Hashing, Brute-force, Trust boundaries
│   │   ├── error-handling.md           # Phân loại lỗi, Domain/App/Infra error, Safe responses
│   │   ├── observability.md            # Structured logging, Correlation IDs, Tracing, Health checks
│   │   ├── performance.md              # Caching, DB bottlenecks, Async, Connection pools
│   │   ├── messaging.md                # RabbitMQ/Kafka, Idempotent consumer, Retries, DLQ
│   │   ├── caching.md                  # Cache-aside, Invalidation, Stampede, TTL
│   │   └── production-readiness.md     # Bảng kiểm tra điều kiện xuất bản Production
│   │
│   ├── code-review/                    # [Skill 2] Rà soát mã nguồn cấp cao
│   │   ├── SKILL.md                    # Workflow review toàn diện
│   │   ├── architecture-review.md      # Kiểm tra vi phạm kiến trúc, coupling, abstraction
│   │   ├── correctness.md              # Lỗi logic, Race conditions, Transaction bugs
│   │   ├── security-review.md          # Lỗ hổng bảo mật, Auth bypass, Data leaks
│   │   ├── performance-review.md       # N+1 queries, Memory leaks, Blocking I/O
│   │   ├── database-review.md          # Indexing, Missing constraints, Deadlocks
│   │   ├── error-handling-review.md    # Unhandled exceptions, Status codes, Error leaks
│   │   ├── maintainability.md          # Readability, DRY, Duplication, Naming
│   │   └── review-checklist.md         # Bảng kiểm tra review phân loại theo mức độ
│   │
│   └── testing/                        # [Skill 3] Chiến lược kiểm thử tự động
│       ├── SKILL.md                    # Workflow kiểm thử theo hành vi
│       ├── unit-testing.md             # Unit test nghiệp vụ, Pure functions, Mocking
│       ├── integration-testing.md      # Test Database, Repositories, Redis, Message Queues
│       ├── e2e-testing.md              # Test luồng API hoàn chỉnh, Supertest
│       ├── mocking.md                  # Chiến lược mock phụ thuộc đúng đắn
│       ├── test-database.md            # Quản lý dữ liệu test, Fixtures, Isolation
│       ├── edge-cases.md               # Danh mục trường hợp biên (Null, Concurrency, Retries)
│       ├── test-strategy.md            # Kim tự tháp test (Test Pyramid), Determinism
│       └── coverage.md                 # Chiến lược độ phủ có ý nghĩa
│
└── templates/                          # Mẫu tài liệu chuẩn
    ├── implementation-plan.md          # Mẫu kế hoạch triển khai tính năng
    ├── code-review-report.md           # Mẫu báo cáo đánh giá mã nguồn
    ├── test-plan.md                    # Mẫu kế hoạch kiểm thử
    └── architecture-review.md          # Mẫu đánh giá kiến trúc hệ thống
```

---

## 🎯 3 Vai trò Cốt lõi của AI Agent

1. **Senior Backend Engineer**: Thiết kế và triển khai giải pháp nhỏ nhất, chính xác, an toàn, tuân thủ kiến trúc và phân tách ranh giới rõ ràng.
2. **Senior Code Reviewer**: Đánh giá toàn diện luồng dữ liệu (Controller $\rightarrow$ Service $\rightarrow$ Repository $\rightarrow$ Database), phân biệt rõ lỗi logic, rủi ro bảo mật và góp ý thiết kế.
3. **Senior QA / Test Engineer**: Thiết kế các ca kiểm thử dựa trên hành vi và các điểm lỗi tiềm ẩn (Failure Modes), không chỉ chạy theo số % coverage mù quáng.
