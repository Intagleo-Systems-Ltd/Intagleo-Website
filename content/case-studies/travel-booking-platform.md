---
title: "Multi-Supplier Travel Booking Platform Processing £48M in Annual Transactions"
slug: "travel-booking-platform"
client: "Meridiem Travel"
industry: "Travel / E-Commerce"
cover_image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop"
challenge: "Meridiem, a specialist long-haul travel agency, was manually quoting all itineraries via email and phone. Agents used 11 different supplier portals to check availability and price. A single multi-destination quote took 3–4 hours. Customers expected real-time pricing and online booking; Meridiem was losing business to OTAs offering instant confirmation."
solution: "We built a unified booking platform: a supplier aggregation layer connecting flights (GDS via Amadeus), hotels (Hotelbeds API), tours and transfers, plus a customer-facing booking interface with real-time availability, dynamic packaging, and a payment orchestration layer handling multi-currency transactions."
results: "Average quote turnaround reduced from 3.5 hours to 4 minutes for standard itineraries. Online self-service bookings account for 38% of revenue (from 0%). Agent productivity increased 3.1x (bookings per agent per day). Booking abandonment rate: 31% (vs 67% industry average for complex itineraries). Annual transaction volume: £48M."
seo_description: "How Intagleo built a multi-supplier travel booking platform for Meridiem Travel, reducing quote time from 3.5 hours to 4 minutes and enabling £48M in annual online transactions."
show_on_homepage: false
pages:
  - travel
  - mobile-dev
---

## The Multi-Supplier Complexity

Travel booking is uniquely complex: a single holiday package may involve components from 6–8 different suppliers, each with their own APIs, pricing models, cancellation rules, and availability windows. Aggregating this into a coherent, real-time booking experience requires significant technical infrastructure.

Meridiem's specialist focus on long-haul and multi-destination travel made this harder: unlike point-to-point bookings, these itineraries require flexible date combinations, multi-city routing, and mix-and-match supplier selection.

![Travel booking interface showing multi-destination itinerary builder with flight and hotel options](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop)

## Supplier Integration Architecture

**GDS flight integration** - Amadeus Travel APIs for flight search, availability, pricing, and booking. Handles complex multi-city routings, mixed-cabin itineraries, and fare family upsell options. Real-time seat map and ancillary selection (luggage, seats, meals).

**Hotel aggregation** - Hotelbeds B2B API as primary, with Booking.com Affiliate API as secondary for destinations with limited Hotelbeds coverage. Room-level content normalisation (combining supplier descriptions into a consistent schema).

**Tours and experiences** - Viator API for in-destination experiences and excursions. Transfers via Welcome Pickups and HolidayTaxis APIs.

**Supplier cache layer** - search results cached at 90-second TTL per origin/destination/date combination, reducing GDS query costs by 73% while maintaining acceptable freshness.

## Dynamic Packaging Engine

The packaging engine assembles components from different suppliers into a single itinerary with a single price. Key challenges:

- **Pricing combination**: each component has its own currency and margin rules; the engine computes a single GBP price with configurable per-component markup
- **Cancellation policy synthesis**: complex logic merging supplier-specific cancellation windows into a customer-facing plain-language policy
- **Availability locking**: soft-hold mechanism preventing double-booking during multi-step checkout

## Payment Architecture

Multi-currency payment processing via Stripe, with automatic currency conversion and settlement in GBP. ATOL financial protection logic built into checkout: flights-inclusive packages automatically generate ATOL certificates on booking confirmation.
