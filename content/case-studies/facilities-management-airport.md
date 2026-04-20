---
title: "IoT-Driven Facilities Management: Cutting Maintenance Costs 38% at a Major Airport"
slug: "facilities-management-airport"
client: "Aerolia International Airport"
industry: "Facilities Management / Aviation"
cover_image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop"
challenge: "Aerolia's facilities team operated 1.4 million sq ft of terminal space with a reactive maintenance model. Equipment failures - particularly HVAC, escalators, and baggage systems - caused passenger disruption and expensive emergency call-outs. Annual unplanned maintenance spend: £4.2M."
solution: "We deployed an IoT sensor network across 340 critical assets (HVAC units, escalators, passenger lifts, baggage handling motors), integrated with a predictive maintenance platform that uses vibration, temperature, and power consumption data to identify failure signatures 2–4 weeks before breakdown."
results: "Unplanned maintenance incidents reduced by 52% in the first year. Annual maintenance spend reduced from £4.2M to £2.6M. Average response time to confirmed fault alerts: 18 minutes. Escalator and lift availability improved from 94.2% to 99.1%."
seo_description: "How Intagleo deployed IoT predictive maintenance at an international airport, reducing unplanned maintenance by 52% and cutting annual maintenance costs from £4.2M to £2.6M."
show_on_homepage: true
pages:
  - facilities-management
  - smart-cities
---

## The Cost of Reactive Maintenance in a 24/7 Environment

An airport cannot close. When an escalator fails at 6am during a peak departure wave, the consequences are immediate: passenger congestion, complaint escalation, and a premium-rate emergency engineering call-out. Aerolia experienced an average of 23 unplanned escalator and lift failures per month.

The facilities director's brief was clear: reduce unplanned failures by at least 40% within 18 months.

![IoT monitoring dashboard showing real-time equipment health for airport facilities assets](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop)

## Sensor Deployment

We instrumented 340 assets across 5 categories:

- **HVAC units** - vibration sensors on compressors and fans; temperature/humidity probes; power consumption monitoring
- **Escalators** - vibration on drive motors and handrail drive; chain tension monitoring; step gap sensors
- **Passenger lifts** - motor current signatures; door cycle counts; levelling accuracy monitoring
- **Baggage handling motors** - vibration and thermal imaging at drive units
- **Electrical panels** - power quality monitoring for harmonic distortion and imbalance

Each asset type required a different sensor specification and placement protocol. Sensor installation was phased over 14 weeks to minimise operational disruption.

## Predictive Model Development

For each asset class, we built failure prediction models trained on:
- 3 years of historical maintenance records (fault type, severity, preceding sensor readings)
- Manufacturer data on failure modes and associated sensor signatures
- Operational data (usage cycles, load profiles, environmental conditions)

The models generate a daily health score for each asset and alert the maintenance team when the score crosses a threshold indicating elevated failure risk within the next 14 days.

## Integration with CMMS

Alerts from the predictive platform automatically generate work orders in the existing CMMS (IBM Maximo). Maintenance planners see a prioritised queue of predictive interventions alongside reactive work orders, enabling optimised scheduling.
