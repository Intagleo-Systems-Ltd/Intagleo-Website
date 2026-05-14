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
    highlight: "IoT", rest: " Platform & Device Management",
    urlSlug: "iot-platform",
    tiles: [
      { name: "Device Provisioning", desc: "Zero-touch onboarding at scale", color: "blue" },
      { name: "OTA Firmware", desc: "Remote update orchestration", color: "purple" },
      { name: "Fleet Health", desc: "Real-time device monitoring", color: "blue" },
      { name: "Edge Compute", desc: "On-device processing & logic", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "IoT Hub",
      nodes: [
        { x: 118, y: 28,  label: "Device Provisioning", sub: "Zero-touch onboarding", color: "#5b7fff" },
        { x: 198, y: 72,  label: "OTA Firmware",        sub: "Remote update pipeline", color: "#a78bfa" },
        { x: 208, y: 148, label: "Fleet Monitor",        sub: "28K devices online",    color: "#34d399" },
        { x: 140, y: 188, label: "Edge Compute",         sub: "On-device processing",  color: "#3B82F6" },
        { x: 42,  y: 152, label: "Device Registry",      sub: "Provisioning DB",       color: "#f59e0b" },
      ],
      footer: "5M+ devices · 4 zones",
    },
  },
  {
    highlight: "Data", rest: " Ingestion & Pipelines",
    urlSlug: "data-ingestion",
    tiles: [
      { name: "MQTT & CoAP", desc: "High-throughput broker setup", color: "blue" },
      { name: "Time-series DB", desc: "Optimised sensor data stores", color: "purple" },
      { name: "Stream Processing", desc: "Real-time event pipelines", color: "blue" },
      { name: "Data Lake", desc: "Scalable archive architecture", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "MQTT Broker",      pct: 98,  rate: "12K msg/s",    color: "#5b7fff" },
        { label: "Time-series DB",   pct: 100, rate: "Real-time",    color: "#34d399" },
        { label: "Stream Processor", pct: 87,  rate: "Event-driven", color: "#a78bfa" },
        { label: "Data Lake Ingest", pct: 74,  rate: "Batch hourly", color: "#3B82F6" },
      ],
      metrics: [
        { label: "Events/s",  value: "1.8M" },
        { label: "Lag (ms)",  value: "42"   },
        { label: "Topics",    value: "320"  },
      ],
    },
  },
  {
    highlight: "Smart", rest: " Infrastructure Control",
    urlSlug: "smart-infrastructure",
    tiles: [
      { name: "Traffic Control", desc: "Adaptive signal management", color: "blue" },
      { name: "Energy Grid", desc: "Utility monitoring & control", color: "purple" },
      { name: "Smart Lighting", desc: "Demand-responsive lighting", color: "blue" },
      { name: "Env Sensors", desc: "Environmental monitoring nets", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "4 Systems Live",
      rows: [
        { label: "Traffic Control", value: "Optimising", stat: "1,247 signals" },
        { label: "Energy Grid",     value: "Monitoring", stat: "84.2 MW"       },
        { label: "Smart Lighting",  value: "Active",     stat: "6,200 units"   },
        { label: "Env Sensors",     value: "Online",     stat: "420 nodes"     },
      ],
      chartLabel: "Control\nEvents",
      bars: [62,70,68,74,80,76,72,82,78,86,88,84,76,88,90,86,82,88,92,86,80,92,88,90],
    },
  },
  {
    highlight: "Analytics", rest: " & City Intelligence",
    urlSlug: "city-analytics",
    tiles: [
      { name: "Urban Mobility", desc: "Movement pattern analytics", color: "blue" },
      { name: "Predictive Maint", desc: "ML-driven failure prevention", color: "purple" },
      { name: "Energy Opt AI", desc: "Demand-based optimisation", color: "blue" },
      { name: "Citizen Services", desc: "Service delivery dashboards", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Urban Mobility",   pct: 87, color: "#5b7fff" },
        { label: "Predictive Maint", pct: 73, color: "#34d399" },
        { label: "Energy Opt AI",    pct: 91, color: "#a78bfa" },
        { label: "Citizen Services", pct: 78, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:22", text: "Traffic anomaly detected — Sector 7"     },
        { time: "09:12:08", text: "Energy forecast updated for tomorrow"     },
        { time: "09:10:44", text: "Maintenance alert: Pump Station 12"       },
      ],
      footer: "Updated every 5 min",
    },
  },
  {
    highlight: "Security", rest: " & Compliance",
    urlSlug: "security-compliance",
    tiles: [
      { name: "Device Auth", desc: "Certificate-based identity", color: "blue" },
      { name: "Encrypted Transit", desc: "TLS/DTLS end-to-end", color: "purple" },
      { name: "Access Policies", desc: "Role-based control planes", color: "blue" },
      { name: "Audit Logs", desc: "Compliance-ready audit trails", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Security Engine v2.1",
      inferences: [
        { label: "Device Auth",      pct: 99,  color: "#34d399", level: "Secure"  },
        { label: "Data Encryption",  pct: 100, color: "#5b7fff", level: "Optimal" },
        { label: "Access Control",   pct: 95,  color: "#a78bfa", level: "High"    },
        { label: "Audit Compliance", pct: 88,  color: "#3B82F6", level: "Strong"  },
      ],
      alertsLabel: "Security Signals",
      alerts: [
        { time: "09:18:02", text: "Device cert renewed — Node-4821",       sev: "#34d399" },
        { time: "09:15:30", text: "Anomalous access attempt blocked",       sev: "#ef4444" },
        { time: "09:10:44", text: "GDPR audit log exported",               sev: "#5b7fff" },
      ],
      footer: "Monitored 24/7",
    },
  },
  {
    highlight: "Integration", rest: " & Open Standards",
    urlSlug: "integration-standards",
    tiles: [
      { name: "FIWARE & CityGML", desc: "Open city data standards", color: "blue" },
      { name: "Digital Twins", desc: "Real-time asset mirroring", color: "purple" },
      { name: "GIS Integration", desc: "Mapping & spatial layers", color: "blue" },
      { name: "Citizen APIs", desc: "Public-facing data services", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Standards Active",
      sessions: [
        { initials: "FW", name: "FIWARE API",   color: "#5b7fff", qual: 3, live: true,  secs: 3640  },
        { initials: "DT", name: "Digital Twin", color: "#a78bfa", qual: 3, live: true,  secs: 1820  },
        { initials: "GI", name: "GIS Mapping",  color: "#34d399", qual: 2, live: true,  secs: 7200  },
        { initials: "CA", name: "Citizen Apps", color: "#3B82F6", qual: 2, live: true,  secs: 5400  },
      ],
      footerStats: ["FIWARE v1.4", "4 standards", "Open APIs"],
    },
  },
];

type Particle = { x: number; y: number; vx: number; vy: number; size: number; opacity: number };

function initParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 400,
    y: Math.random() * 300,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.2,
  }));
}

export default function SmartCitiesPage() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(initParticles(28));
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;
    const t = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: ((p.x + p.vx + 400) % 400),
          y: ((p.y + p.vy + 300) % 300),
        }))
      );
    }, 40);
    return () => clearInterval(t);
  }, [particles.length]);

  const streams = [
    { label: "Traffic", value: "1,247", unit: "vehicles/min", color: "#3B82F6" },
    { label: "Energy", value: "84.2", unit: "MW consumed", color: "#10b981" },
    { label: "Air Quality", value: "42", unit: "AQI index", color: "#f59e0b" },
    { label: "Incidents", value: "3", unit: "active alerts", color: "#3B82F6" },
  ];

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
                <path d="M8 1l1.5 3h3l-2.5 2 1 3L8 7.5 5 9l1-3L3.5 4h3z" />
                <path d="M3 12h10M4 14h8" />
              </svg>
              Smart Cities & IoT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              IoT infrastructure that<br />
              <span className="text-white/35">makes cities smarter.</span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              From device management platforms to urban data pipelines and smart infrastructure
              control, we build the IoT software that connects cities and drives efficiency at scale.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact?type=smart-cities" className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                Talk to an IoT Engineer
              </Link>
              <a href="#process" className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
                See How We Work
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["Urban Data Pipelines", "Smart Infrastructure Control", "Sensor Network Management", "Real-Time Analytics", "City OS Integration"].map((feat) => (
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
                { value: "500K+", label: "Sensors Managed" },
                { value: "20+",   label: "City Projects" },
                { value: "99.8%", label: "Network Uptime" },
                { value: "40%",   label: "Energy Saved" },
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

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern IoT and smart city stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Are your city systems </span>
              <span className="text-white/30">generating data or generating insight?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your IoT architecture end-to-end - device management, data pipelines, and
              operational dashboards - to identify the gaps between data collected and decisions made.
            </p>
            <Link href="/contact?type=smart-cities-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book an IoT Architecture Review
            </Link>
          </div>

          {/* Particle / data stream visualization */}
          <div className="relative rounded-2xl overflow-hidden bg-[#060810] border border-white/[0.07]" style={{ height: "380px" }}>
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">City Data Streams</span>
              <span className="flex items-center gap-1.5 text-[10px] text-green-400/60 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {particles.length} nodes active
              </span>
            </div>
            {/* Particle canvas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              {/* Connection lines between nearby particles */}
              {particles.map((p, i) =>
                particles.slice(i + 1).map((q, j) => {
                  const dist = Math.hypot(p.x - q.x, p.y - q.y);
                  if (dist > 70) return null;
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={p.x} y1={p.y} x2={q.x} y2={q.y}
                      stroke="rgba(99,102,241,0.15)"
                      strokeWidth="0.5"
                    />
                  );
                })
              )}
              {/* Particles */}
              {particles.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x} cy={p.y} r={p.size}
                  fill={i % 5 === 0 ? "#3B82F6" : i % 3 === 0 ? "#3B82F6" : "rgba(255,255,255,0.6)"}
                  opacity={p.opacity}
                />
              ))}
            </svg>
            {/* Stream stats overlay */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
              {streams.map((s) => (
                <div key={s.label} className="bg-[#0d0e18]/90 rounded-lg border border-white/[0.06] p-2 text-center">
                  <p className="text-[8px] font-mono text-white/30 mb-1">{s.label}</p>
                  <p className="text-xs font-bold font-mono leading-none" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-[7px] font-mono mt-0.5" style={{ color: s.color, opacity: 0.5 }}>{s.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From isolated sensors to a connected city operating system
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t just connect devices. Every engagement starts with your operational
              goals and the outcomes your city needs to achieve.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "IoT Audit", desc: "We map your existing device estate, data flows, integration gaps, and the operational blind spots that create inefficiency and risk.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design for scale and resilience: edge-first processing, time-series data infrastructure, and real-time control planes that handle millions of events.", align: "right" },
    { num: "03", title: "Build & Deploy", desc: "We develop with device security, data integrity, and regulatory compliance built in - not bolted on after deployment.", align: "left" },
    { num: "04", title: "Monitor & Expand", desc: "Phased device onboarding with operational dashboards live from day one, then continuous expansion of the connected infrastructure.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Smart City Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your city operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built IoT infrastructure transforms raw sensor data into the operational
                  intelligence that makes cities genuinely efficient. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=smart-cities" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Operational Visibility", desc: "Unified dashboards across all city systems give operators the real-time awareness to respond to incidents before they become crises." },
              { num: "02", title: "Predictive Maintenance", desc: "ML models trained on sensor telemetry predict infrastructure failures days in advance, replacing reactive repair with planned maintenance." },
              { num: "03", title: "Energy Efficiency", desc: "Intelligent control of lighting, HVAC, and utilities based on real-time occupancy and demand data delivers measurable energy cost reduction." },
              { num: "04", title: "Citizen Services", desc: "Data-driven service delivery means faster response times, more transparent public reporting, and measurable improvements in quality of life." },
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

      <CaseStudiesSection pageSlug="smart-cities" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">5M+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Connected devices managed</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">25%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Average energy cost reduction</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">1B+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Sensor events processed daily</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.95%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Platform uptime delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="smart-cities" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">
          <source src="/footer_CTA.webm" type="video/webm" />
          <source src="/footer_CTA.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Connected devices without<br />
            <span className="text-white/35">connected intelligence is noise.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage a single building or an entire city grid, we build the IoT
            infrastructure that turns sensor data into operational decisions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=smart-cities" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to an IoT engineer
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


