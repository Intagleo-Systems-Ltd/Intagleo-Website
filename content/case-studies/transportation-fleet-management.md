---
title: "Real-Time Fleet Intelligence Platform for a 3,200-Vehicle Logistics Operator"
slug: "transportation-fleet-management"
client: "SwiftHaul Logistics"
industry: "Logistics / Transportation"
cover_image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80&auto=format&fit=crop"
challenge: "SwiftHaul operated 3,200 vehicles across the UK with no real-time visibility. Dispatchers worked from phone calls and estimated ETAs. Fuel costs were uncontrolled, driver behaviour was unmonitored, and customer delivery ETA accuracy was 62%."
solution: "We built a real-time fleet intelligence platform integrating IoT telematics hardware on all 3,200 vehicles, a live tracking API processing 2.8M location events daily, AI-powered route optimisation, driver behaviour scoring, and a customer ETA portal with live tracking links."
results: "Customer ETA accuracy improved from 62% to 94%. Fuel consumption reduced 11% through route optimisation and behaviour coaching. Driver incident rate (harsh braking/acceleration events) reduced 43%. Customer satisfaction score increased from 3.2 to 4.6/5."
seo_description: "How Intagleo built a real-time fleet intelligence platform for 3,200 vehicles — improving ETA accuracy to 94%, reducing fuel costs 11%, and cutting driver incidents 43%."
show_on_homepage: true
pages:
  - transportation
  - embedded-iot
---

## The Visibility Problem

SwiftHaul's operations team managed 3,200 vehicles with nothing but mobile phones. A dispatcher wanting to know where a driver was had to call them. Customer queries about delivery ETAs were handled by calling the driver and relaying the answer. Fuel cards had no reporting integration.

The business was growing at 15% annually. The operations team was not scaling with it.

![Real-time fleet tracking dashboard showing vehicle positions, route progress and ETA calculations](https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80&auto=format&fit=crop)

## Telematics Deployment

We selected and deployed a 4G telematics unit to all 3,200 vehicles over 8 weeks. Each unit reports GPS position every 10 seconds, plus CAN bus data (engine RPM, fuel consumption, vehicle speed, harsh event triggers). Installation was performed at SwiftHaul's regional depots by a team of 12 engineers working in parallel.

## Platform Architecture

**Ingestion pipeline** — 2.8M daily position events ingested via a load-balanced MQTT broker, written to Apache Kafka, and processed by a streaming pipeline (Apache Flink) that computes per-vehicle state updates in under 200ms.

**Route optimisation engine** — AI-powered route planning using OSRM for base routing with proprietary adjustments for vehicle type (gross weight, height restrictions), historical traffic patterns by time-of-day and day-of-week, and live traffic feeds from HERE Technologies.

**Driver behaviour scoring** — each driver receives a daily behaviour score based on harsh braking, harsh acceleration, speeding, idle time, and seat belt compliance. Scores feed into a coaching programme managed by depot managers.

**Customer portal** — branded customer-facing portal with live tracking maps and SMS/email ETA updates. Delivery window accuracy SLA now included in customer contracts.

## Business Outcomes

The platform paid back its implementation cost within 11 months through fuel savings alone. The customer satisfaction improvement enabled SwiftHaul to renew three major contracts that had been under review due to service reliability concerns.
