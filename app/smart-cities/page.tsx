"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";

const techCaps = [
  {
    highlight: "IoT", rest: " Platform & Device Management",
    annotations: [
      { pos: "tl", text: "Device Provisioning" },
      { pos: "tr", text: "OTA Firmware Updates" },
      { pos: "bl", text: "Fleet Health Monitoring" },
      { pos: "br", text: "Edge Processing" },
    ],
    items: ["Device provisioning at scale", "OTA firmware management", "Fleet health monitoring", "Edge compute orchestration"],
  },
  {
    highlight: "Data", rest: " Ingestion & Pipelines",
    annotations: [
      { pos: "tl", text: "MQTT & CoAP Brokers" },
      { pos: "tr", text: "Time-series Data Stores" },
      { pos: "bl", text: "Stream Processing" },
      { pos: "br", text: "Data Lake Architecture" },
    ],
    items: ["MQTT & CoAP broker setup", "Time-series data pipelines", "Real-time stream processing", "Data lake architecture"],
  },
  {
    highlight: "Smart", rest: " Infrastructure Control",
    annotations: [
      { pos: "tl", text: "Traffic Signal Management" },
      { pos: "tr", text: "Utility Grid Monitoring" },
      { pos: "bl", text: "Smart Lighting Control" },
      { pos: "br", text: "Environmental Sensors" },
    ],
    items: ["Traffic management systems", "Utility grid monitoring", "Smart lighting control", "Environmental sensor networks"],
  },
  {
    highlight: "Analytics", rest: " & City Intelligence",
    annotations: [
      { pos: "tl", text: "Urban Mobility Insights" },
      { pos: "tr", text: "Predictive Maintenance" },
      { pos: "bl", text: "Energy Optimisation AI" },
      { pos: "br", text: "Citizen Services Dashboards" },
    ],
    items: ["Urban mobility analytics", "Predictive maintenance models", "Energy optimisation AI", "Citizen services dashboards"],
  },
  {
    highlight: "Security", rest: " & Compliance",
    annotations: [
      { pos: "tl", text: "Device Authentication" },
      { pos: "tr", text: "Encrypted Data Transit" },
      { pos: "bl", text: "Access Control Policies" },
      { pos: "br", text: "Audit & Compliance Logs" },
    ],
    items: ["Device-level authentication", "End-to-end encryption", "Role-based access policies", "Compliance audit trails"],
  },
  {
    highlight: "Integration", rest: " & Open Standards",
    annotations: [
      { pos: "tl", text: "FIWARE & CityGML" },
      { pos: "tr", text: "Digital Twin APIs" },
      { pos: "bl", text: "GIS & Mapping Integration" },
      { pos: "br", text: "Citizen App APIs" },
    ],
    items: ["FIWARE & open city standards", "Digital twin development", "GIS & mapping integration", "Citizen-facing APIs"],
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
  const [activeTab, setActiveTab] = useState(0);
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
    { label: "Traffic", value: "1,247", unit: "vehicles/min", color: "#3b82f6" },
    { label: "Energy", value: "84.2", unit: "MW consumed", color: "#10b981" },
    { label: "Air Quality", value: "42", unit: "AQI index", color: "#f59e0b" },
    { label: "Incidents", value: "3", unit: "active alerts", color: "#e8341c" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            IoT infrastructure that<br />makes cities smarter.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From device management platforms to urban data pipelines and smart infrastructure
            control, we build the IoT software that connects cities and drives efficiency at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=smart-cities" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an IoT Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by governments and operators managing millions of connected devices.</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[{ name: "Samsung", src: "/logos/samsung.png" }, { name: "IBM", src: "/logos/ibm.png" }, { name: "TCL", src: "/logos/tcl.png" }].map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-7 w-auto object-contain opacity-35 hover:opacity-60 transition-opacity duration-300" style={{ filter: "brightness(0) invert(1)", maxWidth: "110px" }} />
            ))}
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#13141a] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#111218]">
                <div className="col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ minHeight: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp1.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp2.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp3.png" alt="" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>
              <div className="flex flex-col justify-center text-left p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Siloed sensor data and fragmented device management are creating blind spots.{" "}
                  <span className="text-white/35">Most cities only find out during an outage.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every unmonitored device, every data stream that doesn&apos;t feed the right dashboard,
                  every infrastructure failure that wasn&apos;t predicted — that&apos;s compounding operational
                  risk and wasted public resource.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built IoT platforms managing millions of connected endpoints, focused on the
                  data architecture and real-time control that smart city operations require.
                </p>
                <Link href="/contact?type=smart-cities" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to an IoT Engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH CAPABILITIES */}
      <section className="section-padding py-24" id="capabilities">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Core Capabilities</h2>
            <p className="text-white/40 text-base">Built across the modern IoT and smart city stack</p>
          </div>
          <div className="grid lg:grid-cols-[320px_1fr] gap-4 items-stretch">
            <div className="flex flex-col gap-2">
              {techCaps.map((cap, i) => (
                <button key={i} onClick={() => setActiveTab(i)} className={`text-left px-5 py-4 rounded-xl transition-all duration-200 border ${activeTab === i ? "bg-white/[0.08] border-white/[0.1] shadow-sm" : "bg-white/[0.02] border-transparent hover:bg-white/[0.04]"}`}>
                  <span className="font-bold text-white text-sm md:text-[15px]">{cap.highlight}</span>
                  <span className={`text-sm md:text-[15px] transition-colors ${activeTab === i ? "text-white/65" : "text-white/35"}`}>{cap.rest}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-0">
              <div className="relative bg-[#13141a] border border-white/[0.07] rounded-t-2xl overflow-hidden flex items-center justify-center p-10" style={{ minHeight: "360px" }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v1h40V0zM0 40V0H1v40H0z' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E\")" }} />
                <div className="relative z-10 w-full" style={{ maxWidth: "calc(100% - 180px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/intvue-mockup.png" alt="Platform mockup" className="w-full rounded-xl shadow-2xl" />
                </div>
                {techCaps[activeTab].annotations.map((a) => (
                  <div key={a.pos} className={`absolute z-20 bg-[#13141a]/90 border border-white/[0.1] rounded-lg px-3 py-2 backdrop-blur-sm max-w-[140px] transition-all duration-300 ${a.pos === "tl" ? "top-5 left-5" : a.pos === "tr" ? "top-5 right-5 text-right" : a.pos === "bl" ? "bottom-5 left-5" : "bottom-5 right-5 text-right"}`}>
                    <p className="text-white/80 text-xs leading-snug">{a.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#13141a] border border-white/[0.07] border-t-0 rounded-b-2xl px-6 py-4 flex flex-wrap gap-x-6 gap-y-2">
                {techCaps[activeTab].items.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8341c]/70 flex-shrink-0" />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE REVIEW */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Are your city systems </span>
              <span className="text-white/30">generating data or generating insight?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your IoT architecture end-to-end — device management, data pipelines, and
              operational dashboards — to identify the gaps between data collected and decisions made.
            </p>
            <Link href="/contact?type=smart-cities-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
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
                      stroke="rgba(232,52,28,0.15)"
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
                  fill={i % 5 === 0 ? "#e8341c" : i % 3 === 0 ? "#3b82f6" : "rgba(255,255,255,0.6)"}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From isolated sensors to a connected city operating system
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t just connect devices. Every engagement starts with your operational
              goals and the outcomes your city needs to achieve.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "IoT Audit", desc: "We map your existing device estate, data flows, integration gaps, and the operational blind spots that create inefficiency and risk.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design for scale and resilience: edge-first processing, time-series data infrastructure, and real-time control planes that handle millions of events.", align: "right" },
              { num: "03", title: "Build & Deploy", desc: "We develop with device security, data integrity, and regulatory compliance built in — not bolted on after deployment.", align: "left" },
              { num: "04", title: "Monitor & Expand", desc: "Phased device onboarding with operational dashboards live from day one, then continuous expansion of the connected infrastructure.", align: "right" },
            ].map((step) => (
              <div key={step.num} className={`relative flex mb-16 last:mb-0 ${step.align === "right" ? "justify-end" : "justify-start"}`}>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border border-white/30 z-10" />
                <div className={`w-[44%] ${step.align === "right" ? "text-left pl-8" : "text-right pr-8"}`}>
                  <span className="text-[#e8341c] text-4xl font-bold leading-none block mb-2">{step.num}</span>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(232,52,28,0.09) 0%, transparent 65%)" }} />
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
              <Link href="/contact?type=smart-cities" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
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
                <span className="text-xs font-mono text-[#e8341c]/70 mt-0.5 flex-shrink-0 w-6">{item.num}</span>
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Connected devices without<br />
            <span className="text-white/35">connected intelligence is just noise.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage a single building or an entire city grid, we build the IoT
            infrastructure that turns sensor data into operational decisions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=smart-cities" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an IoT engineer
            </Link>
            <Link href="/contact?type=smart-cities-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book an architecture review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
