---
title: "Full-Stack Property Portal: From Search to Exchange for a National Estate Agency"
slug: "real-estate-property-platform"
client: "Hargreaves Property Group"
industry: "Real Estate / PropTech"
cover_image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop"
challenge: "Hargreaves operated 47 branches across England and Wales using a 12-year-old property management system. Their website relied on a third-party portal (Rightmove/Zoopla) for all lead generation. No direct buyer relationship, no mobile app, and no ability to offer digital-first services like virtual viewings or online offers."
solution: "We built a full property platform: consumer-facing portal with real-time MLS sync, React Native buyer/seller app, virtual viewing integration, digital offer management, and a branch back-office system replacing the legacy PMS. All connected via a unified property data API."
results: "Direct website leads increased 340% in 12 months. Third-party portal dependency reduced from 91% to 54% of leads. Virtual viewing adoption: 67% of buyers completed at least one virtual viewing before physical visit. Digital offer submission reduced offer-to-acceptance time from 4.2 days to 11 hours. Branch staff administrative time reduced 38%."
seo_description: "How Intagleo built a full-stack property portal for a 47-branch estate agency, increasing direct leads 340% and reducing offer-to-acceptance time from 4.2 days to 11 hours."
show_on_homepage: false
pages:
  - real-estate
  - mobile-dev
---

## The Portal Dependency Problem

Estate agencies that rely entirely on Rightmove and Zoopla for lead generation are in a structurally weak position: they pay increasing listing fees, receive no buyer data, and have no ability to differentiate their service digitally. Hargreaves had watched their portal costs rise 23% year-on-year while conversion rates stagnated.

The strategic goal was clear: own the buyer relationship from first search to completion.

![Modern property search interface showing listings with map view, virtual tour badges and advanced filters](https://images.unsplash.com/photo-1582407947304-fd86f28f2f21?w=1200&q=80&auto=format&fit=crop)

## Platform Architecture

**Property data layer** — a central property API syncing listings from Hargreaves' back-office in real-time. All listing data (photos, floorplans, EPCs, title information) normalised and served via a GraphQL API consumed by web and mobile frontends.

**Consumer portal** — Next.js frontend with server-side rendering for SEO. Property search with map-based interface, saved searches with email/push alerts, and virtual viewing scheduling directly from listing pages.

**React Native app** — iOS and Android app for buyers and vendors. Buyers receive push notifications for new matching listings. Vendors track their listing views, saved counts, and offer pipeline in real-time.

**Virtual viewing integration** — Matterport 3D scan integration for all properties above £300K. Video viewing scheduling via Calendly integration for live agent-hosted remote viewings.

## Digital Offer Management

The offer workflow was the highest-impact feature. Previously, offers were taken by phone and communicated by email — slow, undocumented, and creating disputes about what was agreed.

The digital offer flow:
1. Buyer submits offer via app or portal with supporting documents (mortgage AIP, chain status)
2. Vendor receives push notification with full offer details
3. Vendor accepts, counters, or declines via app — with audit trail
4. Accepted offer triggers automatic progression into the conveyancing workflow

## Legacy PMS Migration

The 12-year-old property management system held 8 years of transaction history, vendor and applicant records, and branch workflow data. We migrated 340,000 records over a 6-week parallel-run period, with branch staff operating both systems simultaneously before cutover.
