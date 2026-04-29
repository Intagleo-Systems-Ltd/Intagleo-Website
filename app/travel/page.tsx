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
    highlight: "Booking", rest: " Engine Development",
    urlSlug: "booking-engine",
    tiles: [
      { name: "Multi-provider", desc: "Aggregated availability at scale", color: "blue" },
      { name: "Real-time Availability", desc: "Live sync across all suppliers", color: "purple" },
      { name: "Dynamic Pricing", desc: "Rule-based fare computation", color: "blue" },
      { name: "Group & Corporate", desc: "Negotiated rate management", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Systems Live",
      rows: [
        { label: "Flight Search",    value: "Online", stat: "180ms avg"   },
        { label: "Hotel Avail",      value: "Online", stat: "240ms avg"   },
        { label: "Dynamic Pricing",  value: "Active", stat: "Real-time"   },
        { label: "Group Booking",    value: "Online", stat: "98.4% uptime" },
      ],
      chartLabel: "Bookings\n24h",
      bars: [44,52,60,56,70,66,78,74,68,82,78,84,90,86,80,88,84,90,86,80,92,88,86,94],
    },
  },
  {
    highlight: "GDS", rest: " & API Integration",
    urlSlug: "gds-integration",
    tiles: [
      { name: "Amadeus & Sabre", desc: "Full GDS connectivity", color: "blue" },
      { name: "NDC Airline APIs", desc: "Direct airline content", color: "purple" },
      { name: "Hotel Bed Banks", desc: "Multi-bed-bank aggregation", color: "blue" },
      { name: "Car & Transfers", desc: "Ground transport APIs", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "GDS Core",
      nodes: [
        { x: 118, y: 28,  label: "Amadeus GDS",     sub: "Full content",      color: "#5b7fff" },
        { x: 198, y: 72,  label: "NDC Airlines",    sub: "Direct connect",    color: "#a78bfa" },
        { x: 208, y: 148, label: "Hotel Bed Banks", sub: "Multi-aggregate",   color: "#34d399" },
        { x: 140, y: 188, label: "Car & Transfers", sub: "Ground transport",  color: "#3B82F6" },
        { x: 42,  y: 152, label: "Sabre GDS",       sub: "Fallback rail",     color: "#f59e0b" },
      ],
      footer: "15+ GDS & supplier integrations",
    },
  },
  {
    highlight: "Traveller", rest: " Experience Platforms",
    urlSlug: "traveller-experience",
    tiles: [
      { name: "Itinerary Builder", desc: "Personalised trip planning", color: "blue" },
      { name: "In-trip Alerts", desc: "Real-time disruption notifications", color: "purple" },
      { name: "Mobile Check-in", desc: "Digital boarding flows", color: "blue" },
      { name: "Loyalty Integration", desc: "Points earn & redemption", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Journeys Active",
      sessions: [
        { initials: "IT", name: "Itinerary Builder", color: "#5b7fff", qual: 3, live: true,  secs: 3600 },
        { initials: "NT", name: "In-trip Alerts",    color: "#34d399", qual: 3, live: true,  secs: 1800 },
        { initials: "MC", name: "Mobile Check-in",   color: "#a78bfa", qual: 2, live: true,  secs: 900  },
        { initials: "LP", name: "Loyalty API",       color: "#3B82F6", qual: 2, live: false, secs: 7200 },
      ],
      footerStats: ["80M+ bookings", "15+ suppliers", "Real-time"],
    },
  },
  {
    highlight: "Revenue", rest: " Management",
    urlSlug: "revenue-management",
    tiles: [
      { name: "Ancillary Upsell", desc: "Automated ancillary sequencing", color: "blue" },
      { name: "Fare Optimisation", desc: "Class-level yield modelling", color: "purple" },
      { name: "Yield Management", desc: "Demand-driven pricing tools", color: "blue" },
      { name: "Commission Tracking", desc: "Agent & channel payments", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Ancillary Attach", pct: 74, color: "#5b7fff" },
        { label: "Fare Utilisation", pct: 88, color: "#34d399" },
        { label: "Yield Score",      pct: 82, color: "#a78bfa" },
        { label: "Commission Acc",   pct: 99, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:02", text: "Seat upsell rate: 38% on LHR-DXB"         },
        { time: "09:11:30", text: "Yield model updated for school holidays"   },
        { time: "09:08:18", text: "Commission batch settled: $84K"            },
      ],
      footer: "Updated every 15 min",
    },
  },
  {
    highlight: "Operations", rest: " & Back-office",
    urlSlug: "operations",
    tiles: [
      { name: "Agent Tools", desc: "Desktop booking & servicing", color: "blue" },
      { name: "Disruption Mgmt", desc: "Automated rebooking flows", color: "purple" },
      { name: "Supplier Recon", desc: "Invoice & payment matching", color: "blue" },
      { name: "Reporting", desc: "Operational dashboards", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines active",
      pipelines: [
        { label: "Agent Desktop",     pct: 100, rate: "Always-on",  color: "#5b7fff" },
        { label: "Disruption Engine", pct: 88,  rate: "Real-time",  color: "#34d399" },
        { label: "Supplier Recon",    pct: 76,  rate: "Daily batch", color: "#a78bfa" },
        { label: "Reporting Suite",   pct: 94,  rate: "On demand",  color: "#3B82F6" },
      ],
      metrics: [
        { label: "Disruptions",    value: "24 active" },
        { label: "Recon Match",    value: "99.7%"     },
        { label: "Agent Sessions", value: "1,840"     },
      ],
    },
  },
  {
    highlight: "Analytics", rest: " & Intelligence",
    urlSlug: "analytics-intelligence",
    tiles: [
      { name: "Funnel Analytics", desc: "Booking conversion insights", color: "blue" },
      { name: "Demand Forecasting", desc: "ML-driven demand models", color: "purple" },
      { name: "Customer LTV", desc: "Lifetime value segmentation", color: "blue" },
      { name: "Route Performance", desc: "Inventory & yield analytics", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Travel Intelligence v2.4",
      inferences: [
        { label: "Funnel Analysis", pct: 92, color: "#5b7fff", level: "High"   },
        { label: "Demand Forecast", pct: 87, color: "#34d399", level: "Strong" },
        { label: "Customer LTV",    pct: 84, color: "#a78bfa", level: "Strong" },
        { label: "Route Perf AI",   pct: 89, color: "#3B82F6", level: "High"   },
      ],
      alertsLabel: "Intelligence Signals",
      alerts: [
        { time: "09:16:02", text: "Summer demand spike detected: +22%", sev: "#34d399" },
        { time: "09:12:30", text: "LTV model: Segment A churning",      sev: "#f59e0b" },
        { time: "09:08:44", text: "Route DXB-SIN underperforming",      sev: "#ef4444" },
      ],
      footer: "Analysed 80M+ bookings",
    },
  },
];

const DEPARTURES = [
  { time: "06:15", dest: "Dubai", flight: "EK007", gate: "B12", status: "Boarding" },
  { time: "07:40", dest: "London", flight: "BA108", gate: "A04", status: "On Time" },
  { time: "08:05", dest: "New York", flight: "AA202", gate: "C22", status: "Delayed" },
  { time: "09:30", dest: "Singapore", flight: "SQ421", gate: "D07", status: "On Time" },
  { time: "10:15", dest: "Tokyo", flight: "NH815", gate: "E03", status: "On Time" },
  { time: "11:50", dest: "Paris", flight: "AF112", gate: "A11", status: "Boarding" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

function ScrambleChar({ target, tick }: { target: string; tick: number }) {
  const settled = tick > 6;
  const char = settled ? target : CHARS[Math.floor((tick * 7 + target.charCodeAt(0)) % CHARS.length)];
  return <span className={settled ? "text-white" : "text-white/30"}>{char}</span>;
}

export default function TravelPage() {
  const [tick, setTick] = useState(0);
  const [activeDep, setActiveDep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((prev) => {
        if (prev >= 10) {
          setActiveDep((d) => (d + 1) % DEPARTURES.length);
          return 0;
        }
        return prev + 1;
      });
    }, 120);
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
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold heading-gradient leading-[1.07] tracking-tight mb-5">
            Travel technology that<br />moves as fast as your travellers.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From booking engine architecture to GDS integration and in-trip experience platforms,
            we build the travel software that keeps every journey on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=travel" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a Travel Tech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
       
      
      </section>

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern travel technology stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your booking infrastructure </span>
              <span className="text-white/30">losing travellers mid-journey?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your entire travel tech stack - booking engine latency, GDS connectivity,
              and supplier fallback logic - to pinpoint exactly where travellers drop off and revenue leaks.
            </p>
            <Link href="/contact?type=travel-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book a Tech Stack Review
            </Link>
          </div>

          {/* Split-flap departures board */}
          <div className="relative rounded-2xl overflow-hidden bg-[#060810] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4 border-b border-white/[0.06] pb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Departures</span>
              <span className="text-[10px] text-[#3B82F6]/60 font-mono animate-pulse">Live</span>
            </div>
            {/* Header row */}
            <div className="grid grid-cols-[60px_1fr_80px_50px_80px] gap-2 mb-2 px-1">
              {["TIME", "DESTINATION", "FLIGHT", "GATE", "STATUS"].map((h) => (
                <span key={h} className="text-[8px] text-white/20 uppercase font-mono tracking-widest">{h}</span>
              ))}
            </div>
            {/* Rows */}
            <div className="flex flex-col gap-1">
              {DEPARTURES.map((dep, i) => {
                const isActive = activeDep === i;
                const isUpdating = isActive && tick < 8;
                return (
                  <div
                    key={dep.flight}
                    className={`grid grid-cols-[60px_1fr_80px_50px_80px] gap-2 items-center px-2 py-2 rounded-lg transition-all duration-200 font-mono text-xs
                      ${isActive ? "bg-white/[0.06] border border-white/[0.1]" : "border border-transparent"}`}
                  >
                    <span className={`font-bold ${isActive ? "text-[#3B82F6]" : "text-white/70"}`}>
                      {isUpdating
                        ? dep.time.split("").map((c, ci) => <ScrambleChar key={ci} target={c} tick={tick + ci} />)
                        : dep.time}
                    </span>
                    <span className={`truncate ${isActive ? "text-white" : "text-white/60"}`}>
                      {isUpdating
                        ? dep.dest.split("").map((c, ci) => <ScrambleChar key={ci} target={c} tick={tick + ci} />)
                        : dep.dest}
                    </span>
                    <span className="text-white/35">{dep.flight}</span>
                    <span className="text-white/35">{dep.gate}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono text-center
                      ${dep.status === "Boarding" ? "bg-green-500/20 text-green-400" :
                        dep.status === "Delayed" ? "bg-[#3B82F6]/20 text-[#3B82F6]" :
                        "bg-white/[0.06] text-white/40"}`}>
                      {dep.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 leading-tight">
              From slow booking engine to travel infrastructure that scales
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t patch GDS connectors onto legacy foundations. Every engagement starts with
              your traveller journey and the revenue moments that matter.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Stack Audit", desc: "We map your booking engine performance, supplier connectivity, fallback logic, and the funnel drop-off points costing you bookings.", align: "left" },
    { num: "02", title: "Architecture Design", desc: "We design for booking speed: sub-200ms search responses, resilient multi-GDS failover, and content aggregation that covers every segment.", align: "right" },
    { num: "03", title: "Build & Integrate", desc: "We develop against live GDS sandboxes with booking accuracy, payment security, and PCI compliance woven into every sprint.", align: "left" },
    { num: "04", title: "Launch & Optimise", desc: "Phased cutover from legacy booking paths, then continuous optimisation against real booking funnel conversion signals.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Travel Tech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your booking revenue</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built travel infrastructure removes the latency and fragmentation that
                  drives abandonment at every booking step. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=travel" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Search Performance", desc: "Sub-200ms availability searches with multi-source aggregation mean travellers find and book before they consider alternatives." },
              { num: "02", title: "Booking Conversion", desc: "Streamlined checkout, smart upsell sequencing, and abandoned-booking recovery extract maximum value from every search session." },
              { num: "03", title: "Supplier Resilience", desc: "Multi-GDS failover and content fallback logic ensure availability and pricing integrity even when a primary supplier goes down." },
              { num: "04", title: "Operational Efficiency", desc: "Automated disruption management, supplier reconciliation, and agent tooling reduce back-office cost per booking significantly." },
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

      <CaseStudiesSection pageSlug="travel" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">80M+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Bookings processed annually</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">&lt;200ms</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Search response time</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">15+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">GDS & supplier integrations</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">31%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Booking conversion improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="travel" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient leading-tight mb-5">
            Slow search results<br />
            <span className="text-white/35">send travellers to competitors.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re booking flights, hotels, or full itineraries, we build the
            travel infrastructure that converts searchers into passengers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=travel" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a travel tech engineer
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


