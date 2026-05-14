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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>

        {/* Centre content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] text-[#3B82F6] text-xs font-medium tracking-wide">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14V6l6-4 6 4v8H2z" />
                <path d="M6 14v-4h4v4" />
              </svg>
              Real Estate Technology
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              Real estate software that<br />
              <span className="text-white/35">closes deals faster.</span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              From intelligent property search to end-to-end transaction management, we build
              the platforms that move buyers, sellers, and agents through every deal with confidence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact?type=real-estate" className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                Talk to a PropTech Engineer
              </Link>
              <a href="#process" className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
                See How We Work
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["Property Search & Listings", "CRM & Lead Management", "Virtual Tours & Media", "Transaction Management", "Market Analytics"].map((feat) => (
                <span key={feat} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40 text-[11px] font-medium">
                  {feat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 px-6 pb-12 section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-white/[0.07] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "200K+", label: "Listings Powered" },
                { value: "3×",    label: "Faster Deal Cycles" },
                { value: "40+",   label: "PropTech Platforms" },
                { value: "99.9%", label: "Platform Uptime" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-1 customHeading">{s.value}</div>
                  <div className="text-white/35 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern PropTech stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your property platform </span>
              <span className="text-white/30">built on a cracking foundation?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive PropTech architecture reviews - examining your listing pipelines,
              CRM integrations, and transaction workflows - to identify what&apos;s slowing deals down.
            </p>
            <Link href="/contact?type=real-estate-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book a Platform Review
            </Link>
          </div>

          {/* CSS 3D wireframe building */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5 flex flex-col" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Building Overview</span>
              <span className="text-[10px] text-[#3B82F6]/70 font-mono">{FLOORS} floors · {FLOORS * UNITS_PER_FLOOR} units</span>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-1">
              {Array.from({ length: FLOORS })
                .map((_, fi) => FLOORS - 1 - fi)
                .map((floorIdx) => {
                  const isHovered = hoveredFloor === floorIdx;
                  const occupancy = [75, 100, 50, 88, 62, 100][floorIdx] ?? 80;
                  return (
                    <div
                      key={floorIdx}
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredFloor(floorIdx)}
                      onMouseLeave={() => setHoveredFloor(null)}
                    >
                      <div className={`rounded border transition-all duration-200 p-2 flex items-center gap-2 ${isHovered ? "border-[#3B82F6]/50 bg-[#3B82F6]/[0.07]" : "border-white/[0.07] bg-white/[0.02]"}`}>
                        <span className="text-[9px] font-mono text-white/30 w-8 flex-shrink-0">F{floorIdx + 1}</span>
                        <div className="flex gap-1 flex-1">
                          {Array.from({ length: UNITS_PER_FLOOR }).map((_, ui) => {
                            const unitOccupied = (ui / UNITS_PER_FLOOR) * 100 < occupancy;
                            return (
                              <div
                                key={ui}
                                className={`flex-1 rounded-sm transition-all duration-200 ${unitOccupied ? (isHovered ? "bg-[#3B82F6]/60" : "bg-white/20") : "bg-white/[0.04] border border-white/[0.06]"}`}
                                style={{ height: "20px" }}
                              />
                            );
                          })}
                        </div>
                        <span className={`text-[9px] font-mono w-8 text-right flex-shrink-0 transition-colors ${isHovered ? "text-[#3B82F6]/80" : "text-white/25"}`}>{occupancy}%</span>
                      </div>
                    </div>
                  );
                })}
            </div>
            {hoveredFloor !== null && (
              <div className="mt-3 border-t border-white/[0.06] pt-3 flex items-center gap-4">
                <span className="text-[10px] text-white/40 font-mono">Floor {hoveredFloor + 1}</span>
                <span className="text-[10px] text-[#3B82F6]/70 font-mono">{[75, 100, 50, 88, 62, 100][hoveredFloor]}% occupancy</span>
                <span className="text-[10px] text-white/30 font-mono">{UNITS_PER_FLOOR} units</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From disconnected tools to a property platform that closes
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t build generic CRMs. Every engagement starts with your deal flow
              and the moments that make or lose a transaction.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Platform Audit", desc: "We map your current tech stack, integration points, manual workflow gaps, and the data quality issues that slow your pipeline.", align: "left" },
    { num: "02", title: "Architecture Design", desc: "We design for transaction velocity: real-time listing sync, automated follow-up infrastructure, and document management that removes friction from every close.", align: "right" },
    { num: "03", title: "Build & Integrate", desc: "We develop against your MLS feed, CRM data model, and compliance requirements - with performance and search UX as primary deliverables.", align: "left" },
    { num: "04", title: "Launch & Expand", desc: "Phased rollout to your agent network with training support, then expansion of features driven by real deal-cycle bottlenecks.", align: "right" },
  ]} />
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">PropTech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your deal velocity</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built property infrastructure removes the friction that extends deal cycles
                  and erodes margins. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=real-estate" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Listing Velocity", desc: "Automated MLS sync and media processing get properties live in minutes, not hours, so you never lose a buyer to a slow listing." },
              { num: "02", title: "Lead Conversion", desc: "AI-scored leads, automated sequences, and real-time agent alerts ensure every serious enquiry gets a response before competitors do." },
              { num: "03", title: "Transaction Speed", desc: "Digital document management and e-signature workflows compress closing timelines and eliminate the paper-chase that kills momentum." },
              { num: "04", title: "Portfolio Intelligence", desc: "Real-time occupancy, maintenance, and financial dashboards give property managers the visibility to act before issues become costs." },
            ].map((item) => (
              <div key={item.title} className="flex-1 flex items-start gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200">
                <span className="text-xs font-mono text-[#3B82F6]/70 mt-0.5 flex-shrink-0 w-6">{item.num}</span>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection pageSlug="real-estate" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">250K+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Property listings managed</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">42%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Faster deal cycle average</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">30+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">MLS & portal integrations</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">$8B+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Property value transacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="real-estate" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
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
