---
title: "AI Traffic Management Platform Reducing Peak Congestion 31% Across a City Centre"
slug: "smart-city-traffic-platform"
client: "Metropolitan Council of Valeton"
industry: "Smart Cities / Transportation"
cover_image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop"
challenge: "Valeton's city centre experienced peak congestion costing an estimated £87M annually in lost productivity. The existing traffic signal network ran on fixed timing plans set in 2009, with no real-time adaptation. 340 signalised junctions operated independently with no coordination. Air quality in two zones exceeded legal limits."
solution: "We deployed an adaptive traffic management system: 1,200 inductive loop and ANPR sensors providing real-time vehicle counts, a traffic signal coordination platform connecting all 340 junctions, an AI optimisation engine adjusting signal timing in real-time, and a public transport priority system for buses."
results: "Peak hour journey times through the city centre reduced by 31%. Bus punctuality on 12 priority routes improved from 64% to 84%. NO₂ concentrations in the two non-compliant zones reduced by 19%, bringing both into legal compliance. Emergency vehicle response times through the city centre reduced by 22%."
seo_description: "How Intagleo built an AI adaptive traffic management system for Valeton, reducing peak congestion 31% and bringing two air quality non-compliance zones into legal limits."
show_on_homepage: false
pages:
  - smart-cities
  - embedded-iot
---

## Fixed Timing Plans in a Dynamic City

Traffic signal timing plans designed in 2009 cannot account for Valeton's current travel patterns: two new residential developments, a relocated hospital, changed retail patterns post-pandemic, and significant growth in cycling and e-scooter journeys. Fixed plans that optimised for the old demand pattern were actively creating congestion under the new one.

The political imperative was air quality compliance. Legal notices from the Environment Agency gave the council 18 months to demonstrate measurable improvement.

![Smart city traffic management dashboard showing real-time junction status, queue lengths and signal timing optimisation](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop)

## Sensor Infrastructure

**Inductive loop counters** — installed at 890 approach lanes across 340 junctions, providing per-lane vehicle counts and occupancy at 1-second resolution. Data transmitted via 4G to the central traffic management system.

**ANPR cameras** — 186 cameras at key network entry points providing origin-destination data and journey time measurement between camera pairs. Data anonymised at point of capture; only vehicle class and timestamp retained.

**Bus AVL integration** — real-time bus position data from the regional bus operator's AVL system, used to calculate bus delay relative to timetable and trigger priority signal phases.

**Environmental sensors** — NO₂ and particulate sensors at 24 roadside locations, feeding into a real-time air quality index used to trigger low-emission signal strategies during high-pollution episodes.

## Adaptive Signal Control

The signal optimisation engine runs a SCOOT-derived algorithm enhanced with machine learning predictions:

- **Rolling demand prediction**: 15-minute ahead traffic demand forecasted by junction approach using historical patterns and current count data
- **Network-wide coordination**: green wave coordination across arterial routes, extending green phases progressively ahead of platoons
- **Incident response**: automatic plan switching when upstream sensor data indicates blockage or incident
- **Bus priority**: conditional signal extension and early green for buses running 3+ minutes behind schedule

## Air Quality Mode

During high-pollution episodes (NO₂ above 75% of legal limit), the system automatically activates a low-emission signal strategy: longer cycle times, reduced stop-line idling, and active diversion of through-traffic to outer ring routes. This mode has been triggered on 23 occasions since deployment, with average NO₂ reduction of 14% during activation periods.
