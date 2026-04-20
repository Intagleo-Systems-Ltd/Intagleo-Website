---
title: "HIPAA Compliance in the Cloud: A Practical Guide for Healthcare Software Teams"
date: "2026-03-25"
author: "Intagleo Engineering"
cover_image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop"
excerpt: "HIPAA compliance is not a checklist you tick once. It is an ongoing programme of technical controls, policies, and monitoring. Here's how to build it properly from the start."
seo_description: "HIPAA compliance guide for cloud-based healthcare software — PHI handling, encryption requirements, BAA agreements, audit logging, disaster recovery, and security monitoring."
show_on_homepage: false
pages:
  - healthcare
  - cloud-devops
  - qa-services
---

HIPAA compliance is not a checklist you tick once. It is an ongoing programme of technical controls, policies, and monitoring. Here's how to build it properly from the start.

## What HIPAA Actually Requires

The Security Rule requires covered entities and their business associates to implement administrative, physical, and technical safeguards to protect electronic Protected Health Information (ePHI). The specific technical requirements are:

- **Access control** — unique user identification, automatic logoff, encryption/decryption
- **Audit controls** — activity logging on systems that contain ePHI
- **Integrity** — mechanisms to authenticate ePHI and prevent improper alteration or destruction
- **Transmission security** — encryption for ePHI in transit

The Breach Notification Rule requires notification within 60 days of discovery of a breach affecting 500+ individuals.

![Healthcare cloud infrastructure diagram showing HIPAA-compliant architecture with encryption and audit logging](https://images.unsplash.com/photo-1559523161-0fc0d8b814b4?w=1200&q=80&auto=format&fit=crop)

## Cloud Architecture for HIPAA

All major cloud providers (AWS, Azure, GCP) offer HIPAA-eligible services and will sign a Business Associate Agreement (BAA). This does not mean all services are automatically HIPAA compliant — it means the provider commits to its security obligations. You are still responsible for configuring those services correctly.

Key AWS services for HIPAA workloads: EC2, RDS, S3 (with encryption enabled), KMS, CloudTrail, CloudWatch, Macie (for ePHI detection in S3).

**Architecture principles:**
- PHI never in non-production environments unless de-identified
- All storage encrypted at rest (AES-256 minimum)
- All data encrypted in transit (TLS 1.2+)
- PHI access gated by role-based controls with least-privilege principle
- Network segmentation: PHI systems in private subnets, no direct internet access

## Audit Logging Requirements

Every access to ePHI must be logged: who accessed what, when, from where. Logs must be:

- **Tamper-evident** — use append-only storage, ideally with cryptographic integrity verification
- **Retained** for a minimum of 6 years
- **Monitored** — alerts on unusual access patterns, bulk exports, or policy violations

CloudTrail (API activity) + CloudWatch Logs + an SIEM integration is the standard architecture.

## Incident Response Planning

HIPAA requires a documented incident response plan. Test it at least annually. The plan must address: breach identification, escalation, legal notification obligations, and recovery procedures. A breach discovered in year 3 that is traceable to a misconfiguration in year 1 is expensive to defend without documented evidence of good faith compliance effort.

## Penetration Testing and Vulnerability Management

Annual penetration testing of HIPAA-scoped systems is expected. Findings must be tracked, prioritised, and remediated within defined SLAs (critical vulnerabilities within 30 days is standard practice).
