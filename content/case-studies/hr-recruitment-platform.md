---
title: "AI Recruitment Platform Reducing Time-to-Hire from 34 to 12 Days for a 6,000-Employee Retailer"
slug: "hr-recruitment-platform"
client: "Stratton Retail Group"
industry: "HR / Retail"
cover_image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80&auto=format&fit=crop"
challenge: "Stratton hired 4,800 people annually across 120 retail sites. Their process ran through a legacy ATS with manual CV screening. Hiring managers spent an average of 6.2 hours per vacancy on CV review. Time-to-hire averaged 34 days. Peak trading (Christmas and summer) saw vacancy backlogs of 600+ unfilled positions, costing an estimated £1.4M in lost sales."
solution: "We built an AI-assisted recruitment platform: automated job posting to 14 job boards, AI candidate screening scoring CVs against role requirements, automated video interview scheduling, a hiring manager workflow app, and an analytics dashboard tracking pipeline velocity by site and role type."
results: "Time-to-hire reduced from 34 to 12 days. Hiring manager CV review time reduced from 6.2 to 1.4 hours per vacancy. Candidate quality score (manager-rated) increased from 3.1 to 4.2/5. Peak trading vacancy backlog eliminated. Cost per hire reduced 28%."
seo_description: "How Intagleo built an AI recruitment platform for Stratton Retail Group, cutting time-to-hire from 34 to 12 days and eliminating peak trading vacancy backlogs."
show_on_homepage: false
pages:
  - hr-recruitment
  - ai-transformation
---

## The Cost of Slow Hiring in Retail

A vacant sales assistant role in a high-traffic retail environment costs approximately £180 per day in lost revenue and overtime for existing staff. With 600 vacancies during peak periods, Stratton was losing £108,000 per day. The bottleneck was not candidate availability - it was process speed.

The previous ATS had been implemented in 2013. It had no mobile application, required candidates to create accounts before applying, and had no integration with modern job boards.

![HR recruitment platform showing candidate pipeline with AI screening scores, interview scheduling and hiring manager workflow](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop)

## Platform Architecture

**Candidate application layer** - mobile-first application flow requiring no account creation. One-page application with CV upload (optional - structured questions can substitute). Apply via LinkedIn single sign-on. Average completion time: 4 minutes.

**Multi-board distribution** - single job posting publishes automatically to Indeed, Reed, Totaljobs, CV-Library, and 10 additional boards via an aggregated posting API. Board performance tracked at vacancy level.

**AI screening engine** - CV and application response analysis against a role profile, scoring candidates on required criteria (availability, location, relevant experience, right-to-work). Configurable threshold score for automatic progression vs. manual review. Screening bias audit: model tested quarterly against demographic distribution of hired candidates.

**Video interview integration** - Spark Hire integration for asynchronous video interviews. High-volume roles use a 3-question structured video screen before hiring manager CV review. Reduces live interview volume by 58%.

## Hiring Manager App

A React Native app for the 340 hiring managers across 120 sites. Features:
- Push notifications for new screened candidates above threshold
- CV and video interview review with single-tap shortlist/reject
- Interview scheduling with candidate calendar integration
- Offer generation from configurable offer templates
- Real-time vacancy status and pipeline view per site

## Compliance and Fair Hiring

Right-to-work verification integrated via Yoti identity check for all offer-stage candidates. All shortlisting decisions logged with audit trail. Automatic GDPR deletion of unsuccessful candidate data at 6-month mark.
