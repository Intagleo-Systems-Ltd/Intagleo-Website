// Static content for the U.S. SLED microsite. Ported from the design's
// window.SLED object. Case studies are NOT here — they come from Sanity.
// Placeholder phone numbers from the mock are intentionally omitted to match
// the main site (phones were recently removed from the footer).

export const sledContact = {
  email: "sled@intagleo.com",
  office1: "2670 S White Road, Suite 125",
  office2: "San Jose, California 95148",
  leadName: "Asad Ijaz",
  leadTitle: "Director, U.S. SLED",
};

export const naics = ["541512", "541511", "541519"];
export const nigp = ["918-24", "918-00", "918-46"];

export const stats = [
  { value: 22, suffix: "+", label: "Years operating" },
  { value: 200, suffix: "+", label: "Engineers on bench" },
  { value: 150, suffix: "+", label: "Engagements shipped" },
  { value: 99, suffix: "%", label: "On-time delivery" },
];

export interface Service {
  no: string;
  tag: string;
  title: string;
  body: string;
  chips: string[];
}

export const services: Service[] = [
  {
    no: "01",
    tag: "Legacy",
    title: "Legacy system modernization",
    body: "Mainframe, AS/400, and aging .NET monoliths unwound into service-oriented architectures without a high-risk big-bang cutover.",
    chips: ["Strangler-Fig", "COBOL", "Parallel-Run"],
  },
  {
    no: "02",
    tag: "Cloud",
    title: "Agency cloud migration",
    body: "StateRAMP-aligned migrations onto AWS GovCloud, Azure Government, and on-prem hybrid landing zones with workload-risk tiering.",
    chips: ["AWS GovCloud", "Azure Gov", "Landing Zones"],
  },
  {
    no: "03",
    tag: "Strategy",
    title: "State IT strategic planning",
    body: "Multi-year roadmaps grounded in enterprise architecture, federal funding cycles, and the legislative calendars that determine what gets built.",
    chips: ["EA Frameworks", "Roadmaps", "Funding Alignment"],
  },
  {
    no: "04",
    tag: "CX",
    title: "Government customer experience",
    body: "Citizen-facing portals, benefits applications, and license workflows that meet WCAG 2.1 AA and reduce phone-channel deflection measurably.",
    chips: ["WCAG 2.1 AA", "Plain Language", "Self-Service Portals", "Benefits Workflows"],
  },
  {
    no: "05",
    tag: "Data",
    title: "State data governance",
    body: "End-to-end frameworks for classification, stewardship, master-data management, and privacy controls aligned to state CIO directives.",
    chips: ["Data Classification", "MDM", "Privacy Controls", "Federated Reporting"],
  },
];

export interface Sector {
  no: string;
  kicker: string;
  title: string;
  body: string;
  pursuits: string[];
}

export const sectors: Sector[] = [
  {
    no: "01",
    kicker: "State",
    title: "State government",
    body: "Cabinet agencies, multi-program platforms, and the legacy systems that statutorily cannot be turned off.",
    pursuits: ["HHS modernization", "Licensing & revenue platforms", "Cross-agency identity"],
  },
  {
    no: "02",
    kicker: "Local",
    title: "Cities & counties",
    body: "Public works, code enforcement, 311 modernization, and resident-facing portals that have to work the first time.",
    pursuits: ["Resident services portals", "Public-works workflows", "311 & case management"],
  },
  {
    no: "03",
    kicker: "Higher Ed",
    title: "Higher education",
    body: "Student information systems, registrar-grade integrations, and the long modernizations that span a chancellor's term.",
    pursuits: ["SIS & ERP modernization", "Research administration", "SSO consolidation"],
  },
  {
    no: "04",
    kicker: "K–12",
    title: "K–12 districts",
    body: "State education agencies and large districts; FERPA-careful platforms that have to survive a board meeting.",
    pursuits: ["Assessment platforms", "Parent & family portals", "Longitudinal data systems"],
  },
  {
    no: "05",
    kicker: "Utilities",
    title: "Municipal utilities",
    body: "Water, wastewater, and power utilities: operational technology that does not have the luxury of a maintenance window.",
    pursuits: ["Customer billing portals", "SCADA-adjacent integration", "Regulatory reporting"],
  },
];

export const teamingPoints = [
  { t: "Flexible teaming structures.", d: "Standard NDA walk-ins through full mentor-protégé arrangements." },
  { t: "Capture support.", d: "Past-performance write-ups, staffing plans, and pricing inputs against your proposal calendar." },
  { t: "No IP friction.", d: "Work-for-hire by default. Your IP, your customer relationship, your renewal." },
  { t: "One business day intake.", d: "NDAs and capability documents move on the same business day, U.S. Pacific time." },
];

export const teamingOpen = [
  { t: "SI / Federal Primes", d: "Tier-1 integrators" },
  { t: "8(a) / SDB Primes", d: "Set-aside vehicles" },
  { t: "Vertical SaaS", d: "Platform implementation" },
];

export interface Compliance {
  t: string;
  s: string;
  state: "held" | "building";
}

export const compliance: Compliance[] = [
  { t: "ISO 27001", s: "Certified", state: "held" },
  { t: "SOC 2 Type II", s: "Active annual audit", state: "held" },
  { t: "CMMI Level 3", s: "Appraised engineering", state: "held" },
  { t: "HIPAA", s: "Delivery experience", state: "held" },
  { t: "WCAG 2.1 AA", s: "Embedded in delivery", state: "held" },
  { t: "CMMC", s: "Aware · roadmap 2026", state: "building" },
  { t: "FedRAMP", s: "Aligned via partners", state: "building" },
  { t: "StateRAMP", s: "Aligned · control mapping", state: "building" },
];

export const why = [
  {
    t: "Senior engineers stay on the work",
    d: "The architect who scopes the engagement is the architect on the standup three months in. No bait-and-switch staffing. The proposal team is delivery-accountable, by policy.",
  },
  {
    t: "Follow-the-sun delivery",
    d: "Four delivery centers across three time zones mean production incidents are owned around the clock without the rate premium of an all-U.S. bench.",
  },
  {
    t: "Built to be sub-able",
    d: "Standard work-for-hire IP terms, fast NDA intake, capture artifacts on request. Easy for your contracts team to clear us into a proposal.",
  },
  {
    t: "Twenty-two years, three cycles",
    d: "We have shipped through 2008, COVID, and the current rate-driven contraction. The firm a state CIO can call again in 2032 and find the same lights on.",
  },
];
