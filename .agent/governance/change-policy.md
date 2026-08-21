# 🔄 Change Management Policy

## 1. Impact Mapping
Before modifying existing code, the Agent must map the change propagation path:
$$\text{Target Change} \longrightarrow \text{Direct Dependents} \longrightarrow \text{Reverse Dependents} \longrightarrow \text{API Consumers} \longrightarrow \text{Event Consumers}$$

## 2. Backward Compatibility Guarantee
- Existing API endpoints must remain compatible unless explicitly requested as a major version upgrade.
- Internal refactorings must preserve 100% of existing behavior and pass all regression tests.
