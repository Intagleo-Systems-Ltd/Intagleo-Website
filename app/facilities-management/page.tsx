"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";
import CapabilityCardSection, { type CapItem } from "@/components/CapabilityCardSection";

const techCaps: CapItem[] = [
  {
    highlight: "Building", rest: " Automation Systems",
    urlSlug: "building-automation",
    tiles: [
      { name: "HVAC Integration", desc: "Climate control across all zones", color: "blue" },
      { name: "Lighting Control", desc: "Occupancy-responsive networks", color: "purple" },
      { name: "Energy Management", desc: "Real-time consumption analytics", color: "blue" },
      { name: "Sensor Orchestration", desc: "Smart IoT device coordination", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "BMS Core",
      nodes: [
        { x: 118, y: 28,  label: "HVAC Control", sub: "Climate automation",  color: "#5b7fff" },
        { x: 198, y: 72,  label: "Lighting Net",  sub: "6,200 units",        color: "#a78bfa" },
        { x: 208, y: 148, label: "Energy Mgmt",   sub: "84.2 MW monitored",  color: "#34d399" },
        { x: 140, y: 188, label: "IoT Sensors",   sub: "12K sensor nodes",   color: "#3B82F6" },
        { x: 42,  y: 152, label: "Security Hub",  sub: "Access & CCTV",      color: "#f59e0b" },
      ],
      footer: "500+ buildings · 15+ BMS integrations",
    },
  },
  {
    highlight: "Asset", rest: " & Maintenance Management",
    urlSlug: "asset-maintenance",
    tiles: [
      { name: "Work Orders", desc: "Automated job creation & routing", color: "blue" },
      { name: "Preventive Maint", desc: "Scheduled servicing workflows", color: "purple" },
      { name: "Asset Lifecycle", desc: "End-to-end equipment tracking", color: "blue" },
      { name: "Vendor Portals", desc: "Contractor management & docs", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "Work Order Queue",    pct: 94,  rate: "Auto-assigned", color: "#5b7fff" },
        { label: "Preventive Schedule", pct: 100, rate: "On schedule",   color: "#34d399" },
        { label: "Asset Tracking",      pct: 88,  rate: "Real-time",    color: "#a78bfa" },
        { label: "Vendor Dispatch",     pct: 72,  rate: "In progress",  color: "#3B82F6" },
      ],
      metrics: [
        { label: "Open WOs", value: "142"   },
        { label: "SLA Met",  value: "97.4%" },
        { label: "Assets",   value: "8,400" },
      ],
    },
  },
  {
    highlight: "Access", rest: " Control & Security",
    urlSlug: "access-security",
    tiles: [
      { name: "Role-based Entry", desc: "Granular access permissions", color: "blue" },
      { name: "Visitor Mgmt", desc: "Digital check-in & badge flows", color: "purple" },
      { name: "Audit Logs", desc: "Real-time entry event trails", color: "blue" },
      { name: "Multi-site Sync", desc: "Unified access across locations", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Sites Monitored",
      sessions: [
        { initials: "HQ", name: "HQ Tower",    color: "#5b7fff", qual: 3, live: true,  secs: 86400 },
        { initials: "DT", name: "Data Centre", color: "#34d399", qual: 3, live: true,  secs: 43200 },
        { initials: "WH", name: "Warehouse A", color: "#a78bfa", qual: 2, live: true,  secs: 28800 },
        { initials: "RT", name: "Retail Zones", color: "#3B82F6", qual: 2, live: false, secs: 14400 },
      ],
      footerStats: ["RBAC enabled", "4 sites", "Zero breaches"],
    },
  },
  {
    highlight: "Energy", rest: " & Sustainability",
    urlSlug: "energy-sustainability",
    tiles: [
      { name: "Consumption Dash", desc: "Live energy monitoring", color: "blue" },
      { name: "Carbon Tracking", desc: "Footprint & ESG reporting", color: "purple" },
      { name: "Utility Billing", desc: "Invoice & cost allocation", color: "blue" },
      { name: "Green Certification", desc: "BREEAM/LEED report generation", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Energy Efficiency", pct: 78, color: "#34d399" },
        { label: "Carbon Reduction",  pct: 64, color: "#5b7fff" },
        { label: "Utility Cost Save", pct: 82, color: "#a78bfa" },
        { label: "Green Score",       pct: 91, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:22", text: "HVAC power reduced 12% — Floor 4"     },
        { time: "09:11:08", text: "Monthly CO2 report auto-generated"     },
        { time: "09:08:44", text: "Utility billing reconciled: £142K"     },
      ],
      footer: "30% avg energy reduction",
    },
  },
  {
    highlight: "Space", rest: " Utilisation & Planning",
    urlSlug: "space-utilisation",
    tiles: [
      { name: "Occupancy Analytics", desc: "Sensor-driven usage insights", color: "blue" },
      { name: "Room Booking", desc: "Desk & meeting room scheduling", color: "purple" },
      { name: "Floor Plan Mgmt", desc: "Interactive layout management", color: "blue" },
      { name: "Capacity Forecasting", desc: "Demand-based space planning", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "4 Buildings Live",
      rows: [
        { label: "HQ Tower",    value: "73% occupied", stat: "1,240 desks" },
        { label: "Data Centre", value: "91% capacity", stat: "Restricted"  },
        { label: "Warehouse A", value: "62% used",     stat: "8,400 m²"   },
        { label: "Retail Zones", value: "88% booked",  stat: "42 units"   },
      ],
      chartLabel: "Occupancy\nLast 24h",
      bars: [42,50,62,68,76,80,78,84,86,82,78,80,76,72,68,72,76,80,74,68,62,58,54,48],
    },
  },
  {
    highlight: "Compliance", rest: " & Reporting",
    urlSlug: "compliance-reporting",
    tiles: [
      { name: "Regulatory Audit", desc: "Automated compliance trails", color: "blue" },
      { name: "Incident Reports", desc: "Digital incident management", color: "purple" },
      { name: "Certificate Mgmt", desc: "Expiry tracking & renewals", color: "blue" },
      { name: "SLA Dashboards", desc: "Performance & breach alerting", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Compliance Engine v3.1",
      inferences: [
        { label: "Regulatory Check", pct: 99,  color: "#34d399", level: "Compliant" },
        { label: "Incident Classify", pct: 94, color: "#5b7fff", level: "High"      },
        { label: "Cert Validity",    pct: 100, color: "#a78bfa", level: "Valid"     },
        { label: "SLA Compliance",   pct: 97,  color: "#3B82F6", level: "Strong"   },
      ],
      alertsLabel: "Compliance Signals",
      alerts: [
        { time: "09:16:02", text: "Fire cert renewal due in 14 days",   sev: "#f59e0b" },
        { time: "09:12:30", text: "ISO 9001 audit passed — Site 3",     sev: "#34d399" },
        { time: "09:08:44", text: "Lift inspection report auto-filed",  sev: "#5b7fff" },
      ],
      footer: "Monitored 24/7",
    },
  },
];

export default function FacilitiesManagementPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your building&apos;s complexity<br />
            <span className="text-white/35">shouldn&apos;t be your problem.</span>
          </h2>
          <p className="text-white/45 mb-10">
            We build the software that makes every floor, system, and sensor manageable from a single platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=facilities" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a facilities engineer
            </Link>
                        <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>

          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


