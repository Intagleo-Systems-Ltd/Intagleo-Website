---
title: "Personalisation Engine Increasing Travel Upsell Revenue by £2.1M Annually"
slug: "travel-personalization-engine"
client: "Solara Holidays"
industry: "Travel / Data & AI"
cover_image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop"
challenge: "Solara, a mid-market package holiday operator, had a 6.3% ancillary attachment rate - far below the industry benchmark of 18–22%. Post-booking upsell emails had a 2.1% click rate. Customer data was held in 4 disconnected systems (booking engine, CRM, email platform, customer service). No personalisation capability."
solution: "We built a customer data platform (CDP) unifying all four data sources, a behaviour-based segmentation model, and a real-time personalisation layer serving individualised upsell recommendations across email, the customer portal, and the mobile app."
results: "Ancillary attachment rate increased from 6.3% to 16.8% in 9 months. Post-booking email click rate increased from 2.1% to 9.4%. Upsell revenue increased by £2.1M in the first year. Airport transfer attachment rate (the highest-margin ancillary) increased from 11% to 34%."
seo_description: "How Intagleo built a travel personalisation engine for Solara Holidays, increasing ancillary attachment from 6.3% to 16.8% and generating £2.1M in additional upsell revenue."
show_on_homepage: false
pages:
  - travel
  - data-analytics
---

## The Ancillary Revenue Gap

In package holiday operations, ancillary revenue - transfers, seat upgrades, travel insurance, excursions, baggage - can represent 30–40% of total gross profit. Solara was leaving significant margin on the table not because customers didn't want these services, but because the recommendations were generic and poorly timed.

A customer travelling to the Maldives was receiving the same post-booking email as a customer going to Benidorm. Transfer upsells were going to customers who'd already booked transfers at checkout.

![Travel personalisation dashboard showing customer segments, recommendation performance and revenue attribution](https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200&q=80&auto=format&fit=crop)

## Customer Data Platform

The CDP ingestion layer unifies data from:
- **Booking engine**: destination, dates, party composition, room type, board basis
- **CRM**: booking history, customer lifetime value, complaint history, loyalty tier
- **Email platform**: email open and click history, unsubscribe preferences
- **Customer service**: contact reasons, issues raised, resolution outcomes

A unified customer profile is maintained per customer with a 7-year lookback window. Profiles update in near real-time as new bookings and interactions occur.

## Segmentation and Recommendation Model

Customer segments are defined by a combination of:
- **Destination type** (beach, city, adventure, cruise)
- **Travel party** (family, couples, solo, group)
- **Booking behaviour** (early booker, last-minute, repeat destination, explorer)
- **Ancillary propensity score** (trained on past purchase patterns per segment)

The recommendation engine ranks available ancillaries per customer by predicted purchase probability, filters out already-purchased items, and selects the top 3 for each communication touchpoint.

## Timing and Channel Optimisation

Personalisation is only as good as its timing. We analysed 18 months of post-booking interaction data to identify optimal upsell windows:

- **Transfers**: best offered 48–72 hours post-booking (urgency not yet felt; excitement high)
- **Seat upgrades**: highest conversion 6–8 weeks before departure
- **Excursions**: best offered 3–4 weeks before departure via mobile app
- **Travel insurance**: must be offered within 48 hours of booking (regulatory constraint and propensity cliff)

Each recommendation now triggers at the statistically optimal window per ancillary type.
