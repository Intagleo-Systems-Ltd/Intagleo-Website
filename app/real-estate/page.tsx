"use client";

import { useState } from "react";
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
    highlight: "Property", rest: " Listing & Search",
    urlSlug: "property-listing-search",
    tiles: [
      { name: "MLS & Portal Sync", desc: "Real-time listing feeds", color: "blue" },
      { name: "Geo-spatial Search", desc: "Map-based discovery", color: "blue" },
      { name: "Saved Search Alerts", desc: "Push notifications", color: "purple" },
      { name: "AI Price Estimation", desc: "Valuation models", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Feeds Live",
      rows: [
        { label: "MLS Feed", value: "Synced", stat: "4s ago" },
        { label: "Zillow Connect", value: "Active", stat: "Real-time" },
        { label: "Geo Search API", value: "Online", stat: "18ms" },
        { label: "Alert Engine", value: "Running", stat: "4.2K/hr" },
      ],
      chartLabel: "Listings\nIndexed",
      bars: [40,48,55,60,52,68,74,70,82,78,88,84,76,90,86,80,92,88,84,94,90,86,92,96],
    },
  },
  {
    highlight: "CRM", rest: " & Lead Management",
    urlSlug: "crm-lead-management",
    tiles: [
      { name: "Agent Pipeline", desc: "Stage-based tracking", color: "blue" },
      { name: "Lead Scoring", desc: "Automated ML ranking", color: "blue" },
      { name: "Nurture Sequences", desc: "SMS & email flows", color: "purple" },
      { name: "Deal Automation", desc: "Stage change triggers", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines active",
      pipelines: [
        { label: "Lead Qualification", pct: 88, rate: "Auto-scored", color: "#5b7fff" },
        { label: "Email Sequences", pct: 72, rate: "Drip sends", color: "#3B82F6" },
        { label: "Agent Assignment", pct: 100, rate: "Instant", color: "#34d399" },
        { label: "Deal Stage Sync", pct: 91, rate: "Real-time", color: "#a78bfa" },
      ],
      metrics: [
        { label: "Leads Active", value: "3.2K" },
        { label: "Avg Score", value: "72/100" },
        { label: "Conversion", value: "4.8%" },
      ],
    },
  },
  {
    highlight: "Virtual", rest: " Tours & Media",
    urlSlug: "virtual-tours-media",
    tiles: [
      { name: "3D Walkthroughs", desc: "Matterport integration", color: "blue" },
      { name: "360° Media", desc: "Processing pipeline", color: "blue" },
      { name: "AR Floor Plans", desc: "Overlay rendering", color: "purple" },
      { name: "Video Tours", desc: "Adaptive streaming", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Tours Active",
      sessions: [
        { initials: "3D", name: "42 Oak St Walkthrough", color: "#5b7fff", qual: 3, live: true, secs: 384 },
        { initials: "VR", name: "Penthouse 12A Tour", color: "#a78bfa", qual: 2, live: true, secs: 1847 },
        { initials: "AR", name: "Floor Plan — Unit 7B", color: "#34d399", qual: 3, live: true, secs: 92 },
        { initials: "VM", name: "Video — 18 Elm Close", color: "#3B82F6", qual: 2, live: false, secs: 2310 },
      ],
      footerStats: ["Avg session: 4m 12s", "CDN: 99.98%", "4 active"],
    },
  },
  {
    highlight: "Transaction", rest: " & Document Management",
    urlSlug: "transaction-documents",
    tiles: [
      { name: "e-Signature", desc: "DocuSign & HelloSign", color: "blue" },
      { name: "Contract Versioning", desc: "Full audit trail", color: "blue" },
      { name: "Escrow Tracking", desc: "Closing milestones", color: "purple" },
      { name: "Compliance Checklists", desc: "Jurisdiction-specific", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Docs Signed", pct: 94, color: "#5b7fff" },
        { label: "Escrow On Track", pct: 87, color: "#34d399" },
        { label: "Compliance Pass", pct: 100, color: "#a78bfa" },
        { label: "Close Rate", pct: 68, color: "#3B82F6" },
      ],
      events: [
        { time: "14:22:08", text: "Contract signed — 42 Oak St" },
        { time: "14:15:33", text: "Escrow released — Unit 3F" },
        { time: "14:08:50", text: "Compliance check passed" },
      ],
      footer: "24 deals in progress",
    },
  },
  {
    highlight: "Analytics", rest: " & Market Intelligence",
    urlSlug: "market-analytics",
    tiles: [
      { name: "Market Trends", desc: "Price movement data", color: "blue" },
      { name: "Comp Market Analysis", desc: "CMA generation", color: "blue" },
      { name: "ROI Modelling", desc: "Investment scenarios", color: "purple" },
      { name: "Neighbourhood Data", desc: "Demographics & scores", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Valuation AI v2.8",
      inferences: [
        { label: "Price Accuracy", pct: 96, color: "#34d399", level: "Excellent" },
        { label: "Demand Signal", pct: 82, color: "#5b7fff", level: "High" },
        { label: "ROI Confidence", pct: 88, color: "#a78bfa", level: "Strong" },
        { label: "Market Timing", pct: 71, color: "#f59e0b", level: "Good" },
      ],
      alertsLabel: "Market Signals",
      alerts: [
        { time: "10:30:00", text: "Price surge detected — SW6 postcodes", sev: "#ef4444" },
        { time: "10:22:14", text: "New comp sold at £740K — Oak Hill", sev: "#5b7fff" },
        { time: "10:15:08", text: "Demand index up 12% week-on-week", sev: "#34d399" },
      ],
      footer: "Data from 8 sources",
    },
  },
  {
    highlight: "Property", rest: " Management Portals",
    urlSlug: "property-management",
    tiles: [
      { name: "Tenant Hub", desc: "Communication portal", color: "blue" },
      { name: "Maintenance", desc: "Request tracking", color: "blue" },
      { name: "Rent Collection", desc: "Automated payments", color: "purple" },
      { name: "Owner Reporting", desc: "Financial dashboards", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "PM Platform",
      nodes: [
        { x: 118, y: 28, label: "Tenant Portal", sub: "Self-service hub", color: "#5b7fff" },
        { x: 198, y: 70, label: "Maintenance", sub: "Work orders", color: "#a78bfa" },
        { x: 208, y: 148, label: "Rent Ledger", sub: "Auto-collect", color: "#34d399" },
        { x: 140, y: 188, label: "Owner App", sub: "Financial reports", color: "#3B82F6" },
        { x: 42, y: 152, label: "Contractors", sub: "Vendor network", color: "#f59e0b" },
      ],
      footer: "180 units · 6 properties",
    },
  },
];

const FLOORS = 6;
const UNITS_PER_FLOOR = 4;

export default function RealEstatePage() {
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);

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
            Deals stall when<br />
            <span className="text-white/35">your platform can&apos;t keep up.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage 100 listings or 100,000, we build the property platform
            that accelerates every step from enquiry to close.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=real-estate" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a PropTech engineer
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
