---
title: "Automating Underwriting Decisions with AI: From 72-Hour Reviews to 4-Minute Approvals"
slug: "ai-transformation-insurance"
client: "Global Shield Insurance"
industry: "Insurance / Financial Services"
cover_image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop"
challenge: "Manual underwriting reviews took 48–72 hours and required 3 senior underwriters per commercial policy. The team was turning away business because capacity couldn't scale with demand."
solution: "We built an AI-powered underwriting engine that ingests structured application data, third-party risk signals (credit bureaux, Companies House, property databases), and historical claims data to produce a risk score and coverage recommendation in under 4 minutes."
results: "Policy approval time reduced from 72 hours to 4 minutes for 78% of applications. Underwriter capacity freed for complex cases requiring human judgement. Straight-through processing rate of 78% with no increase in loss ratio."
seo_description: "How Intagleo built an AI underwriting engine that reduced insurance policy approval time from 72 hours to 4 minutes with 78% straight-through processing."
show_on_homepage: false
pages:
  - ai-transformation
  - data-analytics
---

## The Underwriting Bottleneck

Global Shield processed 400 commercial property applications per month. Each required a senior underwriter to manually review application documents, cross-reference three external databases, apply rating tables, and draft terms. Average review time: 2.4 working days.

Peak periods meant a queue. Brokers who received terms in 72+ hours often placed the business elsewhere.

![AI-powered underwriting dashboard showing risk scoring models and automated decision recommendations](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop)

## What We Built

**Data ingestion pipeline** — API integrations with Dun & Bradstreet, Experian Commercial, OS AddressBase, and the client's claims history database. All data normalised to a canonical risk feature set.

**Risk scoring model** — gradient boosting model trained on 8 years of policy and claims data. Features: industry sector, geographic risk, financials, claims history, property characteristics. Model performance: AUC 0.87 vs. 0.71 for the previous actuarial tables.

**Underwriting recommendation engine** — the model output feeds a rule engine that applies product guidelines, regulatory constraints, and capacity limits to produce a recommendation: approve, refer, or decline, with suggested terms.

**Referral workflow** — the 22% of cases not approved straight-through are routed to underwriters with a pre-populated review pack: the model's score, the key risk factors flagged, and the relevant reference data. Review time for referred cases: 35 minutes (down from 2.4 days).

## Outcomes

| Metric | Before | After |
|---|---|---|
| Average decision time | 72 hours | 4 minutes (STP) / 4 hours (referral) |
| Straight-through rate | 0% | 78% |
| Applications processed per month | 400 | 640 (same team) |
| Loss ratio | 62% | 61.4% |
| Broker NPS | 34 | 67 |
