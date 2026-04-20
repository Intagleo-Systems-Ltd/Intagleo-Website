---
title: "Property Portal Architecture: Building High-Availability Real Estate Platforms"
date: "2026-01-08"
author: "Intagleo Engineering"
cover_image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop"
excerpt: "A property portal that goes down during a seasonal peak loses listings and user trust permanently. Here's the architecture that keeps real estate platforms available and fast under load."
seo_description: "Architecture guide for high-availability property portals - search infrastructure, CDN strategy, photo storage, agent CRM integration, and scaling for seasonal traffic peaks."
show_on_homepage: false
pages:
  - real-estate
  - custom-software
  - cloud-devops
---

A property portal that goes down during a seasonal peak loses listings and user trust permanently. Here's the architecture that keeps real estate platforms available and fast under load.

## Traffic Patterns in Real Estate

Property portals have predictable but extreme seasonality. Spring and autumn selling seasons drive 3–5x normal traffic. Sunday evenings see the highest engagement. Auction events can generate instantaneous 20x spikes. Your architecture must handle these peaks without degrading for the majority of users on low-traffic days.

![Cloud architecture diagram for a high-availability property portal with CDN and search clusters](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop)

## Search Infrastructure

Property search is the core workload of a portal. It combines full-text search (description, area names), faceted filtering (bedrooms, price, type), and geospatial queries (polygon, radius) simultaneously.

**Elasticsearch** is the dominant choice for property search: it handles all three query types, scales horizontally, and supports real-time index updates as listings are added or modified. Key design decisions:

- **Shard count** - size shards to 20–40GB for optimal query performance
- **Dedicated coordinating nodes** - separate request routing from data nodes under heavy search load
- **Search templates** - parametrised queries improve security and enable query plan caching

## Photo and Media Pipeline

A portal with 1 million active listings, each with 15 photos at 5MB each, requires 75TB of photo storage. The media pipeline must:

- Accept upload in multiple formats, normalise to WebP
- Generate multiple size variants (thumbnail, card, full-screen)
- Serve via CDN with aggressive caching (photos change rarely after listing)
- Handle agent bulk uploads without degrading portal performance

## Agent CRM Integration

Most listings originate in agent CRM systems (Alto, Rex, Vault, Salesforce). Real-time feed integration via API ensures new listings appear on the portal within minutes. Webhook-based event streams (listing created, price changed, status changed, sold) are more reliable than polling.

## CDN and Edge Caching Strategy

Property portals are ideal CDN targets: listing pages are deterministic, photo assets are immutable once created, and search results can be cached for short windows. A well-configured CDN can absorb 70–80% of portal traffic at the edge, dramatically reducing origin load during peaks.
