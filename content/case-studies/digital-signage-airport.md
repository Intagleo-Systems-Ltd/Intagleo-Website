---
title: "Real-Time Passenger Information Systems for a 28-Gate International Airport"
slug: "digital-signage-airport"
client: "Aerolia International Airport"
industry: "Aviation / Digital Signage"
cover_image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop"
challenge: "Aerolia's passenger information displays were a patchwork of legacy systems from 3 different vendors, each managed independently. Flight data from the AODB took up to 8 minutes to propagate to gate displays. Gate changes weren't reliably communicated. Passenger complaints about information failures were the airport's second-highest complaint category."
solution: "We replaced the fragmented system with a unified digital signage platform: single CMS for all 340 screens across the terminal, direct AODB integration with sub-30-second propagation, automated gate change cascade updating all relevant screens simultaneously."
results: "Flight data propagation reduced from 8 minutes to 23 seconds. Gate change information cascades across all relevant screens in under 15 seconds. Passenger information complaints reduced by 71% in the first year. Single operations team now manages all displays vs. three separate vendor relationships."
seo_description: "How Intagleo unified a fragmented airport digital signage system, reducing flight data propagation from 8 minutes to 23 seconds and cutting passenger information complaints by 71%."
show_on_homepage: false
pages:
  - digital-signage
  - transportation
---

## The Fragmentation Problem

Aerolia's terminal had been built in phases over 15 years. The original 1990s system handled departures boards. A second system was installed in 2008 for gate information. A third system added in 2014 covered arrivals and baggage carousels. Each ran on different hardware, different software, and different operational processes.

When a flight was delayed or a gate changed, operations staff had to log in to three separate systems and make the update three times. Errors were common. Response time was slow.

![Airport digital information system showing real-time flight departures, gate information and wayfinding](https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=1200&q=80&auto=format&fit=crop)

## Integration Architecture

**AODB real-time feed** - the Airport Operational Database is the system of record for all flight movements. We implemented an AODB message listener that processes SSIM/AIDX format flight messages and translates them to display update events within 5 seconds.

**Cascade logic** - a gate change triggers a cascade: the original gate's screens update to show the gate change message, the new gate's screens update to add the flight, the departures board updates, and the relevant check-in desk display updates. All in a single atomic operation.

**Passenger wayfinding integration** - screen content adapts to passenger location context: screens near security show queue times; screens at gates show boarding status; screens in baggage reclaim show carousel assignments.

**Emergency broadcast** - a single-button emergency override broadcasts predefined messages to all screens simultaneously, bypassing normal content scheduling. Required for security alerts and evacuation scenarios.

## Operational Impact

The operations team reduced from 6 display operators across 3 vendor systems to 2 operators on a single platform. Freed capacity was redeployed to passenger assistance roles.
