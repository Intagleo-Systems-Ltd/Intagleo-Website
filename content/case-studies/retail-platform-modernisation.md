---
slug: "retail-platform-modernisation"
title: "Modernising a Legacy Retail Platform for 10x Traffic"
rive_url: "https://cdn.prod.website-files.com/66e53bf67b6fc1646ce0777e/67eabdfc4740322102620c37_home___stack___userinterface.riv"
client: "Global Retail Group"
industry: "Retail & E-commerce"
cover_image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop"
challenge: "The client's decade-old monolithic platform was failing under peak load during seasonal campaigns. Page load times exceeded 8 seconds and checkout abandonment had reached 34%."
solution: "We decomposed the monolith into twelve domain-driven microservices, migrated the database to a sharded PostgreSQL cluster, and implemented a CDN-backed storefront with sub-200ms TTFB globally."
results: "Peak throughput increased from 800 to 12,000 concurrent users. Checkout abandonment dropped to 11%. Page load time fell to under 1.2 seconds. The platform processed a record £42M in a single campaign weekend."
seo_description: "How Intagleo helped a global retailer scale their legacy platform from 800 to 12,000 concurrent users while cutting checkout abandonment by 23 percentage points."
pages:
  - ecommerce-retail
  - legacy-modernization
---

## Background

![Modern retail platform microservices architecture showing distributed system](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80&auto=format&fit=crop)

Global Retail Group had operated on the same core e-commerce platform since 2013. For most of the year the system performed adequately, but every peak trading period brought instability, failed deployments, and customer complaints.

## The Engineering Challenge

The monolith contained over 1.2 million lines of code with no clear domain boundaries, a single shared database with 400+ tables, and a deployment pipeline that required 4 hours and a maintenance window.

## Our Approach

We applied a strangler-fig pattern — building new services around the legacy core while systematically migrating traffic. This let us ship improvements continuously without a risky big-bang rewrite.

### Phase 1 — Carve Out the Product Catalogue
The product catalogue was the highest-read domain. We extracted it first, built a dedicated service backed by Elasticsearch, and cached aggressively at the edge. This alone reduced database load by 60%.

### Phase 2 — Checkout and Payments
We rebuilt the checkout flow as a stateless saga — each step emitting events consumed by downstream services. Payments moved to a PCI-compliant microservice with retry logic and idempotency guarantees.

### Phase 3 — Decommission
With all traffic flowing through the new services, we ran both systems in parallel for one trading cycle before decommissioning the legacy infrastructure.

## Outcome

The platform is now cloud-native, fully observable, and deployable in under 8 minutes with zero downtime.
