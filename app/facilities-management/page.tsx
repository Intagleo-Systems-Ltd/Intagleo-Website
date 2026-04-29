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
            Smart buildings deserve<br />smarter software.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From HVAC controls to access management, we build the platforms that keep your buildings
            running efficiently, safely, and at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=facilities" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a Facilities Expert
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern facilities stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your building&apos;s management </span>
              <span className="text-white/30">as complex as its blueprint?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We offer deep-dive platform architecture reviews to identify inefficiencies in your
              building management stack - from legacy BMS integrations to IoT sensor overload.
            </p>
            <Link href="/contact?type=facilities-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book an Architecture Review
            </Link>
          </div>

          {/* Blueprint visual */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07]" style={{ height: "380px" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
              <rect x="20" y="20" width="360" height="260" stroke="rgba(100,149,237,0.25)" strokeWidth="1.5" fill="none" />
              <line x1="160" y1="20" x2="160" y2="180" stroke="rgba(100,149,237,0.18)" strokeWidth="1" />
              <line x1="20" y1="140" x2="160" y2="140" stroke="rgba(100,149,237,0.18)" strokeWidth="1" />
              <line x1="160" y1="180" x2="380" y2="180" stroke="rgba(100,149,237,0.18)" strokeWidth="1" />
              <line x1="280" y1="20" x2="280" y2="180" stroke="rgba(100,149,237,0.18)" strokeWidth="1" />
              <path d="M160 140 Q175 140 175 155" stroke="rgba(100,149,237,0.15)" strokeWidth="0.8" fill="none" />
              <path d="M280 140 Q295 140 295 155" stroke="rgba(100,149,237,0.15)" strokeWidth="0.8" fill="none" />
              <line x1="20" y1="10" x2="380" y2="10" stroke="rgba(100,149,237,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="390" y1="20" x2="390" y2="280" stroke="rgba(100,149,237,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
              {[40, 80, 120, 160, 200, 240, 280, 320, 360].flatMap((x) =>
                [60, 100, 140, 180, 220, 260].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="rgba(100,149,237,0.12)" />
                ))
              )}
              <text x="80" y="85" fill="rgba(100,149,237,0.3)" fontSize="8" fontFamily="monospace">HVAC</text>
              <text x="200" y="55" fill="rgba(100,149,237,0.3)" fontSize="8" fontFamily="monospace">SECURITY</text>
              <text x="55" y="165" fill="rgba(100,149,237,0.3)" fontSize="8" fontFamily="monospace">LIGHTING</text>
              <text x="295" y="205" fill="rgba(100,149,237,0.3)" fontSize="8" fontFamily="monospace">ACCESS</text>
            </svg>

            {[
              { label: "HVAC System", desc: "Automated climate control across all zones", top: "22%", left: "18%" },
              { label: "Security Hub", desc: "Centralised access & surveillance control", top: "22%", right: "22%" },
              { label: "Lighting Control", desc: "Smart occupancy-based lighting zones", bottom: "28%", left: "22%" },
              { label: "Access Points", desc: "Role-based entry management & logs", bottom: "28%", right: "18%" },
            ].map((spot) => (
              <div key={spot.label} className="absolute group cursor-pointer" style={{ top: spot.top, left: (spot as any).left, right: (spot as any).right, bottom: spot.bottom }}>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6] relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-[#3B82F6]/40 animate-ping" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                    <div className="bg-[#13141a] border border-white/[0.12] rounded-lg px-3 py-2 text-center whitespace-nowrap">
                      <p className="text-white text-xs font-medium">{spot.label}</p>
                      <p className="text-white/50 text-[10px] mt-0.5" style={{ maxWidth: "140px", whiteSpace: "normal" }}>{spot.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(100,149,237,0.04) 0%, transparent 70%)" }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 leading-tight">
              From isolated systems to a unified building intelligence platform
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt software onto existing infrastructure. Every engagement starts with
              your building&apos;s operational model and works inward from there.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Systems Audit", desc: "We map your existing BMS, IoT sensors, access systems, and maintenance workflows to identify integration gaps and failure points.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design a unified data layer that connects all building systems, enabling real-time visibility and automated workflows across every floor.", align: "right" },
    { num: "03", title: "Integration & Testing", desc: "We build with reliability as the baseline: fault-tolerant integrations, redundant data paths, and automated alerting across all systems.", align: "left" },
    { num: "04", title: "Go Live & Operate", desc: "Seamless cutover from legacy systems with zero operational disruption, followed by ongoing performance optimisation.", align: "right" },
  ]} />
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/smart-cities.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Business Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your facilities</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built facilities software eliminates the manual overhead that bleeds
                  operational margin. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=facilities" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Operational Efficiency", desc: "Automated workflows reduce manual maintenance tasks by eliminating paper-based processes and reactive-only responses." },
              { num: "02", title: "Energy Savings", desc: "Real-time consumption monitoring and automated controls cut energy waste across the entire building portfolio." },
              { num: "03", title: "Compliance Confidence", desc: "Automated audit trails, certificate tracking, and regulatory reporting remove compliance guesswork permanently." },
              { num: "04", title: "Predictive Maintenance", desc: "Sensor-driven insights catch equipment failures before they cause downtime or costly emergency repairs." },
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

      <CaseStudiesSection pageSlug="facilities-management" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">500+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Buildings managed</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">30%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Energy reduction avg.</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">15+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">BMS platforms integrated</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.9%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">System availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="facilities-management" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient leading-tight mb-5">
            Your building&apos;s complexity<br />
            <span className="text-white/35">shouldn&apos;t be your problem.</span>
          </h2>
          <p className="text-white/45 mb-10">
            We build the software that makes every floor, system, and sensor manageable from a single platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=facilities" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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


