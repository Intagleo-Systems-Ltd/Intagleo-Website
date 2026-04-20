---
title: "IIoT Platform Cutting Manufacturing Downtime 47% Across 6 Production Lines"
slug: "embedded-iot-manufacturing"
client: "Calvert Precision Engineering"
industry: "Manufacturing / Industrial IoT"
cover_image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80&auto=format&fit=crop"
challenge: "Calvert operated 6 CNC machining production lines with an OEE (Overall Equipment Effectiveness) of 54% — significantly below the industry benchmark of 72–75%. Unplanned downtime averaged 4.2 hours per line per day. Machine operators recorded downtime causes on paper forms, resulting in incomplete data. Maintenance was purely reactive."
solution: "We deployed an IIoT platform: edge computing units on all 23 CNC machines collecting spindle load, vibration, thermal, and cycle data at 100Hz. A real-time OEE dashboard for production managers. Predictive maintenance models for the 6 highest-downtime failure modes. Integration with the existing ERP system for maintenance work order generation."
results: "OEE improved from 54% to 71% in 8 months. Unplanned downtime reduced from 4.2 to 2.2 hours per line per day — a 47% reduction. Tool change optimisation alone saved £180K annually in premature tool replacement. Maintenance work order response time reduced from 4.2 hours to 47 minutes."
seo_description: "How Intagleo deployed an IIoT platform at Calvert Precision Engineering, cutting unplanned manufacturing downtime 47% and improving OEE from 54% to 71%."
show_on_homepage: false
pages:
  - embedded-iot
  - custom-software
---

## The OEE Gap

An OEE of 54% means that 46% of available production capacity is being lost to downtime, speed losses, or quality defects. For Calvert, running at 85% capacity utilisation, the gap between their 54% OEE and the 71% target represented approximately £2.8M of annual production capacity.

The paper-based downtime recording meant that management had no reliable data on where losses were occurring. Maintenance teams were responding to breakdowns rather than preventing them.

![Industrial IoT manufacturing dashboard showing OEE metrics, machine status and predictive maintenance alerts across production lines](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop)

## Edge Computing Architecture

Each CNC machine was fitted with an industrial edge unit (Advantech UNO-2473G) collecting data from:
- **Spindle load sensor** — current draw monitoring detecting cutting load anomalies
- **3-axis accelerometer** — vibration signature analysis for bearing and spindle health
- **Thermal camera** — hotspot detection on motor housings and electrical panels
- **Cycle counter** — direct integration with CNC controller via OPC-UA for cycle time and program ID

Edge units process data locally at 100Hz, sending aggregated metrics to the cloud at 1Hz and raw burst data on trigger events (anomaly detection). This reduces data transmission costs by 94% vs. raw streaming while preserving full-resolution data for anomaly analysis.

## OEE Dashboard

Real-time OEE displayed per machine and per line, decomposed into:
- **Availability** (scheduled vs. unscheduled stops)
- **Performance** (actual vs. ideal cycle time)
- **Quality** (first-pass yield, scrap rate)

Downtime reasons now captured digitally via a tablet at each machine station: operators select from a structured reason tree in under 15 seconds. This replaced paper forms and transformed downtime data quality from ~40% complete to >95%.

## Predictive Maintenance Models

Six failure mode prediction models, each trained on 18–36 months of historical maintenance records combined with the new sensor data:

1. Spindle bearing wear (vibration signature drift)
2. Coolant pump failure (flow rate and pressure pattern)
3. Tool wear (spindle load increase over run hours)
4. Chuck jaw wear (grip pressure deviation)
5. Ball screw backlash (positional repeatability degradation)
6. Hydraulic system pressure decay

Models generate 5–14 day advance warnings, giving the maintenance team sufficient lead time to schedule intervention during planned maintenance windows rather than responding to failures.
