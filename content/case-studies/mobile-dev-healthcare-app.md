---
title: "Patient-Facing Mobile App Reducing GP No-Shows by 41% Across a Primary Care Network"
slug: "mobile-dev-healthcare-app"
client: "Greenway Primary Care Network"
industry: "Healthcare / Mobile"
cover_image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop"
challenge: "Greenway PCN — 8 GP practices serving 94,000 patients — had a 19% appointment no-show rate, costing 740 wasted clinical hours monthly. Appointment booking was via phone only (average hold time: 18 minutes). Repeat prescription requests required a 48-hour processing window with phone-only submission. Patient satisfaction with access scored 41% positive."
solution: "We built a React Native patient app with NHS login integration: online appointment booking with real-time slot availability, appointment reminders with one-tap rescheduling, digital repeat prescription requests, and a symptom checker triage tool directing patients to the appropriate care pathway."
results: "GP appointment no-show rate reduced from 19% to 11.2% — saving 540 clinical hours monthly. Online appointment bookings: 68% of all bookings within 6 weeks of launch. Average patient hold time eliminated for online-suitable requests. Repeat prescription digital submission: 71% of requests. Patient access satisfaction: 41% → 74% positive."
seo_description: "How Intagleo built a patient mobile app for a primary care network, cutting GP no-shows 41% and moving 68% of appointment bookings online."
show_on_homepage: false
pages:
  - mobile-dev
  - healthcare
---

## The Access Problem in Primary Care

NHS primary care is under sustained demand pressure. Every missed appointment compounds the problem: a wasted slot cannot be reclaimed and the clinical need remains unmet. For Greenway, with 740 wasted appointments per month, addressing no-shows was equivalent to adding a full-time GP to the network's capacity.

The root cause of no-shows was largely logistical: patients forgot, circumstances changed, and the friction of rescheduling (calling during opening hours, holding for 18 minutes) made cancellation feel harder than simply not attending.

![Patient healthcare mobile app showing appointment booking, prescription requests and health record access](https://images.unsplash.com/photo-1559523161-0fc0d8b814b4?w=1200&q=80&auto=format&fit=crop)

## NHS Login Integration

A core design constraint was NHS login — the national digital identity for healthcare. Using NHS login means patients authenticate once and their demographics, NHS number, and GP registration are automatically confirmed. No separate account creation, no identity verification burden on the practice.

The integration required NHS Digital partnership registration and a 12-week assurance process, which we managed on behalf of the PCN.

## Appointment Booking

Real-time slot availability via EMIS Web (the practices' clinical system) using the EMIS Partner API. Patients see available slots across all 8 practices, can filter by GP preference, appointment type, and location.

**Reminder and rescheduling flow**: 48-hour and 2-hour push notifications with a deep link directly to the reschedule flow. One-tap rescheduling releases the original slot back into availability immediately. This single feature accounts for the majority of the no-show reduction.

## Repeat Prescription Flow

Prescription requests submitted via the app are received directly into EMIS Web as a structured task, eliminating manual data entry at reception. Patients receive a push notification when the prescription is ready at their nominated pharmacy. The 48-hour processing window is maintained; the app eliminates the phone call at both ends.

## Symptom Checker Triage

A pathway tool directing patients to the right care level based on symptom input: emergency services, urgent treatment centre, same-day GP appointment, routine appointment, or self-care advice. Built on NHS Pathways clinical decision logic. Reduces inappropriate urgent appointment demand by filtering self-care suitable presentations.
