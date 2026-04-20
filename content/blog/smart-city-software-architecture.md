---
title: "From Sensors to Dashboards: Software Architecture for Smart City Platforms"
date: "2026-02-28"
author: "Intagleo Engineering"
cover_image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80&auto=format&fit=crop"
excerpt: "A smart city platform ingests data from thousands of sensors, dozens of municipal systems, and millions of citizens. The architecture challenge is not just scale — it is integration."
seo_description: "Smart city platform architecture guide — sensor integration, data lake design, real-time dashboards, citizen services APIs, and the interoperability standards that tie it all together."
show_on_homepage: false
pages:
  - smart-cities
  - embedded-iot
  - cloud-devops
---

A smart city platform ingests data from thousands of sensors, dozens of municipal systems, and millions of citizens. The architecture challenge is not just scale — it is integration.

## The Smart City Data Ecosystem

A city's digital infrastructure spans: traffic management systems, public transit networks, utility grids, environmental monitoring networks, parking management, waste collection fleets, emergency services dispatch, and citizen services portals. These systems were not designed to talk to each other. The smart city platform's first job is to create a unified data layer.

![Smart city operations centre with real-time dashboards showing city-wide sensor data](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&auto=format&fit=crop)

## The Integration Layer

**Standardised APIs over bespoke connectors** — Where possible, mandate NGSI-LD (the FIWARE standard for urban data) for new system integrations. For legacy systems, build adapters that translate to the canonical data model.

**Event-driven integration** — System-of-record changes (traffic signal state, bus position, utility outage) should propagate as events, not polled via batch queries. Apache Kafka as the integration backbone provides durable, replayable event streams.

**Open data publication** — Cities increasingly publish sensor data through open APIs. GTFS for transit, UTM for air mobility, DATEX II for traffic — understanding and implementing these standards reduces custom integration effort significantly.

## The Data Platform

Smart city data has heterogeneous characteristics: high-frequency time-series from IoT sensors, geospatial data from GIS systems, transactional data from citizen services, and unstructured data from social and 311 feeds.

A tiered architecture handles these efficiently:
- **Hot tier** — real-time stream processing (Kafka Streams, Apache Flink) for low-latency dashboards and alerts
- **Warm tier** — time-series database (InfluxDB, TimescaleDB) for recent history and operational analytics
- **Cold tier** — object storage (S3, Azure Blob) for long-term retention and batch ML training

## City Operating Dashboards

Operational dashboards for city managers must balance information density with usability. Key design principles: geospatial context as the primary navigation layer, anomaly highlighting over raw data display, drill-down capability from city view to district to individual asset.

## Citizen-Facing Services

The platform's public interface — 311 services, real-time transit information, parking availability, permit applications — must handle significantly higher traffic than internal systems and comply with public sector accessibility requirements (WCAG 2.1 AA minimum).
