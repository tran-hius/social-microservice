🚨 Problem #1: Single-Skill Routing Bias
Current State

Current routing assumes:

Task
↓
Workflow
↓
Primary Skill
↓
Context

Example:

Security Review
↓
security skill
Why This Fails

Real engineering tasks are cross-domain.

Example:

Design Auth Service

requires:

security
database
system-design
reliability
observability

not just:

security
Consequences

The agent may:

Miss important trade-offs.
Miss failure modes.
Produce incomplete designs.
Over-specialize on one domain.
Required Fix

Introduce:

Primary Skill
+
Supporting Skills

selection.

🚨 Problem #2: Intent Ambiguity
Current State

Routing is task-based.

Example:

JWT
↓
security
Why This Fails

These queries require different behavior:

What is JWT?
Implement JWT authentication.
Review JWT security risks.
Design JWT architecture.

All map to:

security

but require different workflows.

Consequences

Wrong response depth.

Wrong response structure.

Wrong skill loading.

Required Fix

Introduce:

Intent Classification Layer

before routing.

Possible intents:

Learning
Implementation
Design
Review
Debugging
Optimization
Decision-Making
🚨 Problem #3: No Explicit Skill Dependency Graph
Current State

Skills are isolated.

The relationship between skills exists only implicitly.

Why This Fails

Example:

microservices

almost always requires:

reliability
observability

Example:

security

often requires:

threat-modeling
system-design
Consequences

The agent loads too little context.

Important concerns remain hidden.

Required Fix

Create:

knowledge/skill-dependency-map.md

Example:

security:
  requires:
    - threat-modeling


microservices:
  requires:
    - observability
    - reliability


system-design:
  requires:
    - security
    - reliability
🚨 Problem #4: Missing Task Complexity Detection
Current State

All tasks are treated equally.

Why This Fails

These are not equivalent:

Explain Redis.
Design a multi-region Redis caching strategy.
Consequences

Either:

Over-engineering

or:

Under-engineering
Required Fix

Add:

Complexity Classification

Levels:

Low
Medium
High
Critical
🚨 Problem #5: Missing Context Budget Management
Current State

The router decides what to load.

But there is no explicit policy for:

How much context may be loaded?
Why This Fails

As the system grows:

20 skills
50 knowledge files
30 workflows

the agent may start loading too much.

Consequences
Context pollution
Token waste
Reduced answer quality
Slower reasoning
Required Fix

Introduce:

Context Budget Policy

Rules:

Always load:
- 1 workflow
- 1 primary skill


Optionally load:
- up to 3 supporting skills


Load knowledge only when referenced by workflow.


Maximum loaded resources:
<= 6 files
🎯 Agent Upgrade Goal

Current system:

Task
↓
Workflow
↓
Skill
↓
Knowledge

Target system:

Task
↓
Intent Classification
↓
Complexity Classification
↓
Workflow Selection
↓
Primary Skill Selection
↓
Supporting Skill Discovery
↓
Dependency Expansion
↓
Context Budget Check
↓
Execution