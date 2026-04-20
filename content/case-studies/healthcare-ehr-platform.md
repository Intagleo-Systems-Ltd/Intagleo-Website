---
title: "Building a FHIR-Compliant EHR Integration Platform for a 14-Hospital NHS Trust"
slug: "healthcare-ehr-platform"
client: "Northern Health NHS Trust"
industry: "Healthcare / NHS"
cover_image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop"
challenge: "14 hospitals ran 6 different EHR systems with no interoperability. Clinicians treating patients transferred between hospitals had no access to prior records, creating patient safety risks and duplicated investigations."
solution: "We designed and built an HL7 FHIR R4 integration platform that aggregates patient records from all 6 EHR systems into a unified patient timeline, accessible to authorised clinicians across the trust via a secure API and clinical portal."
results: "All 14 hospitals connected to the unified patient record platform within 8 months. Duplicate investigation rate reduced by 34%. Average time to access complete patient history at admission: 4 seconds. Zero reportable data incidents in 18 months of operation."
seo_description: "How Intagleo built an NHS FHIR integration platform connecting 14 hospitals, reducing duplicate investigations by 34% and delivering unified patient records in 4 seconds."
show_on_homepage: false
pages:
  - healthcare
  - data-analytics
---

## The Clinical Problem

A patient arriving at a Trust hospital via emergency transfer had, on average, previously attended 2.3 other Trust sites. Clinicians had no way to access records from other sites without telephoning the records department - a process that took hours or was impossible outside business hours.

The result: repeat blood tests, repeat imaging, medication errors from incomplete drug history, and delayed treatment decisions.

![FHIR-compliant patient record platform showing unified timeline across multiple hospital systems](https://images.unsplash.com/photo-1559523161-0fc0d8b814b4?w=1200&q=80&auto=format&fit=crop)

## Technical Architecture

**FHIR R4 as the canonical model** - all six source EHR systems (Cerner, EMIS, SystemOne, Meditech, Lorenzo, an in-house legacy system) expose data through custom adapters that translate to FHIR R4 resources: Patient, Encounter, Observation, MedicationRequest, DiagnosticReport, AllergyIntolerance.

**Identity resolution** - patients appear under different NHS numbers or with name variations across systems. A probabilistic matching algorithm (Jaro-Winkler on names, NHS number cross-reference, date of birth) achieves 99.2% correct patient matching with a manual review queue for low-confidence matches.

**Real-time sync with event-driven architecture** - rather than nightly batch synchronisation, the platform uses HL7 v2 ADT feeds from each EHR for real-time patient events (admissions, transfers, discharges). New observations and results sync within 60 seconds of creation in the source system.

**Clinical portal and API** - a purpose-built clinical interface provides a chronological patient timeline with source system attribution. A SMART-on-FHIR API allows authorised clinical applications to query the unified record programmatically.

## Compliance and Security

The platform operates under an NHS Data Security and Protection Toolkit submission. All data encrypted at rest and in transit. Full audit trail of every clinician access to every patient record. Data never leaves NHS network boundaries.
