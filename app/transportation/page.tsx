"use client";

import { useState, useEffect } from "react";
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
    highlight: "Fleet", rest: " Management & Tracking",
    urlSlug: "fleet-management",
    tiles: [
      { name: "GPS Tracking", desc: "Sub-second real-time location", color: "blue" },
      { name: "Driver Analytics", desc: "Behaviour scoring & coaching", color: "purple" },
      { name: "Vehicle Health", desc: "Predictive maintenance signals", color: "blue" },
      { name: "Route Alerts", desc: "Deviation & ETA notifications", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "Fleet Hub",
      nodes: [
        { x: 118, y: 28,  label: "GPS Tracking",   sub: "50K vehicles live",  color: "#5b7fff" },
        { x: 198, y: 72,  label: "Driver Analytics", sub: "Behaviour scores", color: "#a78bfa" },
        { x: 208, y: 148, label: "Vehicle Health",  sub: "OBD telemetry",     color: "#34d399" },
        { x: 140, y: 188, label: "Route Alerts",    sub: "ETA deviations",    color: "#3B82F6" },
        { x: 42,  y: 152, label: "Fuel Monitor",    sub: "Efficiency model",  color: "#f59e0b" },
      ],
      footer: "50K vehicles · 6 continents",
    },
  },
  {
    highlight: "Route", rest: " Optimisation",
    urlSlug: "route-optimisation",
    tiles: [
      { name: "Dynamic Re-routing", desc: "Live traffic-aware rerouting", color: "blue" },
      { name: "Multi-stop", desc: "Vehicle routing algorithms", color: "purple" },
      { name: "Traffic & Weather", desc: "Real-time condition feeds", color: "blue" },
      { name: "Fuel Modelling", desc: "Efficiency-first route scoring", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "Traffic Data Ingest", pct: 100, rate: "Real-time",    color: "#5b7fff" },
        { label: "Route Calc Engine",   pct: 96,  rate: "<200ms",       color: "#34d399" },
        { label: "Fuel Model",          pct: 88,  rate: "Per vehicle",  color: "#a78bfa" },
        { label: "ETA Engine",          pct: 92,  rate: "Continuous",   color: "#3B82F6" },
      ],
      metrics: [
        { label: "Routes/min", value: "12K" },
        { label: "Fuel Save",  value: "18%" },
        { label: "On-time",    value: "94%" },
      ],
    },
  },
  {
    highlight: "Dispatch", rest: " & Operations",
    urlSlug: "dispatch-operations",
    tiles: [
      { name: "Load Assignment", desc: "Automated dispatch logic", color: "blue" },
      { name: "Driver Comms", desc: "In-app messaging & tasks", color: "purple" },
      { name: "Capacity Planning", desc: "Shift & resource scheduling", color: "blue" },
      { name: "SLA Monitoring", desc: "Breach alerts & escalations", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Ops Regions Live",
      sessions: [
        { initials: "EU", name: "EU Dispatch",  color: "#5b7fff", qual: 3, live: true,  secs: 28800 },
        { initials: "US", name: "US-East Ops",  color: "#34d399", qual: 3, live: true,  secs: 14400 },
        { initials: "AS", name: "APAC Fleet",   color: "#a78bfa", qual: 2, live: true,  secs: 43200 },
        { initials: "ME", name: "ME Dispatch",  color: "#3B82F6", qual: 2, live: false, secs: 7200  },
      ],
      footerStats: ["Auto-assigned", "4 regions", "SLA: 99.8%"],
    },
  },
  {
    highlight: "Supply", rest: " Chain Visibility",
    urlSlug: "supply-chain",
    tiles: [
      { name: "Shipment Tracking", desc: "End-to-end milestone visibility", color: "blue" },
      { name: "Carrier Metrics", desc: "Performance benchmarking", color: "purple" },
      { name: "Exception Mgmt", desc: "Proactive disruption handling", color: "blue" },
      { name: "Tracking Portals", desc: "Customer-facing live updates", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Rails Live",
      rows: [
        { label: "Shipment Tracking", value: "Online", stat: "50M tracked"   },
        { label: "Carrier Network",   value: "Online", stat: "340 carriers"  },
        { label: "Exception Engine",  value: "Active", stat: "12 open"       },
        { label: "Customer Portal",   value: "Live",   stat: "99.9% uptime"  },
      ],
      chartLabel: "Shipment\nVolume",
      bars: [68,72,76,70,80,74,82,78,84,80,88,84,78,88,90,86,82,88,92,86,82,90,88,92],
    },
  },
  {
    highlight: "Analytics", rest: " & Reporting",
    urlSlug: "analytics-reporting",
    tiles: [
      { name: "Delivery Analytics", desc: "On-time rate dashboards", color: "blue" },
      { name: "Cost-per-Mile", desc: "Route economics analysis", color: "purple" },
      { name: "Utilisation", desc: "Fleet asset efficiency", color: "blue" },
      { name: "CO2 Tracking", desc: "Emissions & ESG reporting", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "On-time Rate",   pct: 94, color: "#34d399" },
        { label: "Fuel Efficiency", pct: 81, color: "#5b7fff" },
        { label: "Utilisation",    pct: 87, color: "#a78bfa" },
        { label: "CO2 Reduction",  pct: 68, color: "#3B82F6" },
      ],
      events: [
        { time: "09:15:22", text: "Route #8821 optimised — saved 14%"      },
        { time: "09:12:08", text: "Carrier SLA breach alert: Carrier 44"   },
        { time: "09:08:44", text: "Fleet utilisation report generated"      },
      ],
      footer: "Updated hourly",
    },
  },
  {
    highlight: "Integration", rest: " & API Layer",
    urlSlug: "integration-api",
    tiles: [
      { name: "TMS & WMS", desc: "Warehouse & transport mgmt sync", color: "blue" },
      { name: "ERP Connectors", desc: "SAP, Oracle, NetSuite links", color: "purple" },
      { name: "Carrier APIs", desc: "Multi-carrier aggregation layer", color: "blue" },
      { name: "Customs APIs", desc: "Compliance & clearance hooks", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "API Gateway v4.1",
      inferences: [
        { label: "TMS Connector", pct: 99,  color: "#5b7fff", level: "Optimal" },
        { label: "ERP Sync",      pct: 97,  color: "#34d399", level: "Healthy" },
        { label: "Carrier API",   pct: 94,  color: "#a78bfa", level: "High"    },
        { label: "Customs Check", pct: 100, color: "#3B82F6", level: "Clear"   },
      ],
      alertsLabel: "API Signals",
      alerts: [
        { time: "09:18:02", text: "SAP ERP sync complete — 8.4K records", sev: "#34d399" },
        { time: "09:14:30", text: "Carrier API rate limit warning",        sev: "#f59e0b" },
        { time: "09:10:44", text: "Customs API v3 deployed",               sev: "#5b7fff" },
      ],
      footer: "24M API calls/day",
    },
  },
];

export default function TransportationPage() {
  const [flowOffset, setFlowOffset] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFlowOffset((p) => (p + 1) % 100), 40);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium customHeading leading-[1.07] tracking-tight mb-5">
            Logistics that move.<br />Software that keeps up.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From route optimisation to real-time fleet visibility, we build the platforms that
            keep transportation networks moving efficiently, at any scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=transportation" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a Logistics Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      
     
      </section>

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern logistics stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Are your logistics </span>
              <span className="text-white/30">getting lost in transit?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We review your logistics platform end-to-end - from tracking latency to dispatch
              bottlenecks - and deliver a roadmap to handle the complexity of a growing network.
            </p>
            <Link href="/contact?type=transport-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book a Logistics Review
            </Link>
          </div>

          {/* Network map visual */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0c14] border border-white/[0.07]" style={{ height: "380px" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 320" fill="none">
              {[
                { x1: 80, y1: 80, x2: 200, y2: 160 },
                { x1: 200, y1: 160, x2: 350, y2: 100 },
                { x1: 200, y1: 160, x2: 320, y2: 240 },
                { x1: 350, y1: 100, x2: 420, y2: 180 },
                { x1: 320, y1: 240, x2: 420, y2: 180 },
                { x1: 80, y1: 80, x2: 130, y2: 200 },
                { x1: 130, y1: 200, x2: 200, y2: 160 },
                { x1: 130, y1: 200, x2: 320, y2: 240 },
              ].map((line, i) => (
                <g key={i}>
                  <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
                  <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" strokeDasharray="8 20" strokeDashoffset={`${-(flowOffset * 2.8 + i * 14)}`} />
                </g>
              ))}
              {[
                { cx: 80, cy: 80, r: 10, label: "London", major: true },
                { cx: 200, cy: 160, r: 14, label: "Frankfurt", major: true },
                { cx: 350, cy: 100, r: 9, label: "Paris", major: false },
                { cx: 320, cy: 240, r: 11, label: "Madrid", major: false },
                { cx: 420, cy: 180, r: 8, label: "Milan", major: false },
                { cx: 130, cy: 200, r: 7, label: "Lyon", major: false },
              ].map((node) => (
                <g key={node.label}>
                  <circle cx={node.cx} cy={node.cy} r={node.r + 6} fill="rgba(99,102,241,0.06)" />
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.major ? "#3B82F6" : "#1c1d24"} stroke={node.major ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" />
                  <text x={node.cx} y={node.cy + node.r + 14} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">{node.label}</text>
                </g>
              ))}
            </svg>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 45% 55%, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From fragmented fleet data to a unified logistics intelligence platform
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t add features to broken systems. Every engagement starts with your network
              topology and operational constraints.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Network Audit", desc: "We map your fleet size, dispatch workflows, carrier integrations, and tracking gaps before any architecture decisions.", align: "left" },
    { num: "02", title: "Platform Design", desc: "We define the real-time data pipelines, event-driven dispatch logic, and carrier API strategy built for your scale.", align: "right" },
    { num: "03", title: "Build & Integrate", desc: "We develop with reliability as the baseline: sub-second tracking updates, fault-tolerant event processing, and automated alerting.", align: "left" },
    { num: "04", title: "Go Live & Optimise", desc: "Phased migration from legacy systems with zero operational disruption, then ongoing performance tuning as your network grows.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Business Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built logistics software eliminates the manual coordination that bleeds
                  fleet efficiency. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=transportation" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "On-time Delivery", desc: "Real-time route optimisation and automated exception management improve delivery performance across the entire network." },
              { num: "02", title: "Fleet Utilisation", desc: "Dynamic load assignment and capacity planning reduce empty miles and maximise asset use across every route." },
              { num: "03", title: "Fuel Efficiency", desc: "Optimised routing, driver behaviour monitoring, and predictive maintenance reduce fuel costs at fleet scale." },
              { num: "04", title: "Customer Visibility", desc: "Real-time tracking portals and proactive exception notifications reduce inbound enquiries and improve satisfaction." },
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

      <CaseStudiesSection pageSlug="transportation" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            {[
              { value: "50M+", label: "Shipments tracked", span: true },
              { value: "99.8%", label: "Tracking uptime", span: false },
              { value: "6", label: "Continents served", span: true },
              { value: "<2s", label: "Location update latency", span: false },
            ].map((stat, i) => (
              <div key={stat.label} className={`${stat.span ? "md:row-span-2" : ""} relative rounded-2xl overflow-hidden flex flex-col justify-center items-center ${stat.span ? "p-10 min-h-[200px]" : "p-8 min-h-[180px]"} md:min-h-0`} style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
                <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
                <div className="relative z-10 text-center">
                  <p className={`font-semibold leading-none tracking-[-2px] text-[#e6f2ff] ${stat.span ? "text-[clamp(56px,6vw,96px)]" : "text-[clamp(48px,5vw,80px)]"}`}>{stat.value}</p>
                  <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="transportation" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
            Your network is growing.<br />
            <span className="text-white/35">Your platform should too.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage 100 vehicles or 100,000 shipments, we build the logistics
            infrastructure that scales with your operation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=transportation" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a logistics engineer
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


