---
title: "Strangler Fig vs. Big Bang: Choosing the Right Legacy Modernisation Strategy"
date: "2026-02-08"
author: "Intagleo Engineering"
cover_image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80&auto=format&fit=crop"
excerpt: "Rewriting a legacy system is one of the highest-risk decisions in software engineering. The approach you choose determines whether you succeed or spend three years going backwards."
seo_description: "Legacy modernisation strategy guide - strangler fig pattern vs. big bang rewrite, parallel running, database migration, risk management, and how to choose the right approach."
show_on_homepage: false
pages:
  - legacy-modernization
  - cloud-devops
  - custom-software
---

Rewriting a legacy system is one of the highest-risk decisions in software engineering. The approach you choose determines whether you succeed or spend three years going backwards.

## Why "Rewrite It All" Usually Fails

The siren call of the clean slate is seductive. The legacy system is slow to change, nobody understands it, and the new framework would be so much better. So the team starts over - and 18 months later, the new system still doesn't do half of what the old one does, the business has lost patience, and the original system is still running in production.

This pattern is so common it has a name: the "Second System Effect." The legacy system contains decades of accumulated business logic, edge cases, and hard-won institutional knowledge. A rewrite discards all of it and rebuilds from memory.

![Legacy code being incrementally replaced with modern microservices using strangler fig pattern](https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80&auto=format&fit=crop)

## The Strangler Fig Pattern

Martin Fowler named this pattern after a tree that grows around a host tree, gradually replacing it while the host remains functional. Applied to software:

1. Identify a discrete, well-bounded piece of functionality at the boundary of the legacy system
2. Build it new - as a separate service, with modern architecture
3. Route traffic for that function to the new implementation
4. Repeat until the legacy system handles nothing

The key advantage: at every step, the system remains in production. There is no "big cutover" that fails catastrophically.

## The Anti-Corruption Layer

When the new system must interact with the legacy system during migration, an anti-corruption layer (ACL) translates between the legacy data model and the new one. The ACL is the seam between old and new - it prevents legacy concepts from leaking into the new architecture while you're still dependent on the old system.

## Database Migration Strategy

The hardest part of most legacy modernisations is the database. Approaches:

- **Dual-write**: write to both old and new schemas simultaneously; migrate reads progressively
- **Shadow copy**: replicate legacy data to the new schema via ETL; cut over reads when ready
- **Event sourcing**: rebuild state in the new system from an event stream of all historical transactions

## When Big Bang Is Appropriate

For small systems (under 50K lines of code), short-lived platforms (2–3 year lifespan), or systems with excellent test coverage, a full rewrite may be faster than incremental migration. The decision threshold: if you can accurately scope the rewrite to under 6 months, it may be the right call.
