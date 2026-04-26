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
    highlight: "Fleet", rest: " Management & Tracking",
    annotations: [
      { pos: "tl", text: "Real-time GPS Tracking" },
      { pos: "tr", text: "Driver Behaviour Analytics" },
      { pos: "bl", text: "Vehicle Health Monitoring" },
      { pos: "br", text: "Route Deviation Alerts" },
    ],
    items: ["Real-time GPS fleet tracking", "Driver behaviour analytics", "Vehicle health monitoring", "Route deviation alerts"],
  },
  {
    highlight: "Route", rest: " Optimisation",
    annotations: [
      { pos: "tl", text: "Dynamic Re-routing" },
      { pos: "tr", text: "Multi-stop Optimisation" },
      { pos: "bl", text: "Traffic & Weather Integration" },
      { pos: "br", text: "Fuel Efficiency Modelling" },
    ],
    items: ["Dynamic route re-routing", "Multi-stop optimisation", "Traffic & weather integration", "Fuel efficiency modelling"],
  },
  {
    highlight: "Dispatch", rest: " & Operations",
    annotations: [
      { pos: "tl", text: "Automated Load Assignment" },
      { pos: "tr", text: "Driver Communication Hub" },
      { pos: "bl", text: "Shift & Capacity Planning" },
      { pos: "br", text: "SLA Monitoring" },
    ],
    items: ["Automated load assignment", "Driver communication hub", "Shift & capacity planning", "SLA monitoring & alerts"],
  },
  {
    highlight: "Supply", rest: " Chain Visibility",
    annotations: [
      { pos: "tl", text: "End-to-end Shipment Tracking" },
      { pos: "tr", text: "Carrier Performance Metrics" },
      { pos: "bl", text: "Exception Management" },
      { pos: "br", text: "Customer Tracking Portals" },
    ],
    items: ["End-to-end shipment tracking", "Carrier performance metrics", "Exception management", "Customer-facing tracking portals"],
  },
  {
    highlight: "Analytics", rest: " & Reporting",
    annotations: [
      { pos: "tl", text: "On-time Delivery Rates" },
      { pos: "tr", text: "Cost per Mile Analysis" },
      { pos: "bl", text: "Utilisation Reporting" },
      { pos: "br", text: "CO2 Emission Tracking" },
    ],
    items: ["On-time delivery analytics", "Cost-per-mile analysis", "Fleet utilisation reporting", "CO2 emission tracking"],
  },
  {
    highlight: "Integration", rest: " & API Layer",
    annotations: [
      { pos: "tl", text: "TMS Integration" },
      { pos: "tr", text: "ERP Connectors" },
      { pos: "bl", text: "Carrier API Aggregation" },
      { pos: "br", text: "Customs & Compliance APIs" },
    ],
    items: ["TMS & WMS integration", "ERP connectors", "Carrier API aggregation", "Customs & compliance APIs"],
  },
];

export default function TransportationPage() {
  const [activeTab, setActiveTab] = useState(0);
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
            Logistics that move.<br />Software that keeps up.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From route optimisation to real-time fleet visibility, we build the platforms that
            keep transportation networks moving efficiently, at any scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=transportation" className="px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Talk to a Logistics Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by logistics operators managing thousands of routes daily.</p>
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
                  Logistics tech debt costs you time and money.{" "}
                  <span className="text-white/35">Most operators don&apos;t see it until a delivery fails.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every manual dispatch decision, every route that isn&apos;t optimised, every tracking update
                  that arrives late - that&apos;s operational cost compounding across your fleet.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built logistics platforms handling millions of shipments, focusing on the real-time
                  data infrastructure that keeps networks profitable.
                </p>
                <Link href="/contact?type=transportation" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Logistics Engineer
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
            <p className="text-white/40 text-base">Built across the modern logistics stack</p>
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/70 flex-shrink-0" />{item}
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
              <span className="text-white">Are your logistics </span>
              <span className="text-white/30">getting lost in transit?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We review your logistics platform end-to-end - from tracking latency to dispatch
              bottlenecks - and deliver a roadmap to handle the complexity of a growing network.
            </p>
            <Link href="/contact?type=transport-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
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
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.major ? "#6366f1" : "#1c1d24"} stroke={node.major ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From fragmented fleet data to a unified logistics intelligence platform
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t add features to broken systems. Every engagement starts with your network
              topology and operational constraints.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Network Audit", desc: "We map your fleet size, dispatch workflows, carrier integrations, and tracking gaps before any architecture decisions.", align: "left" },
              { num: "02", title: "Platform Design", desc: "We define the real-time data pipelines, event-driven dispatch logic, and carrier API strategy built for your scale.", align: "right" },
              { num: "03", title: "Build & Integrate", desc: "We develop with reliability as the baseline: sub-second tracking updates, fault-tolerant event processing, and automated alerting.", align: "left" },
              { num: "04", title: "Go Live & Optimise", desc: "Phased migration from legacy systems with zero operational disruption, then ongoing performance tuning as your network grows.", align: "right" },
            ].map((step) => (
              <div key={step.num} className={`relative flex mb-16 last:mb-0 ${step.align === "right" ? "justify-end" : "justify-start"}`}>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border border-white/30 z-10" />
                <div className={`w-[44%] ${step.align === "right" ? "text-left pl-8" : "text-right pr-8"}`}>
                  <span className="text-[#6366f1] text-4xl font-bold leading-none block mb-2">{step.num}</span>
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
              <Link href="/contact?type=transportation" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors cursor-pointer">
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
                <span className="text-xs font-mono text-[#6366f1]/70 mt-0.5 flex-shrink-0 w-6">{item.num}</span>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your network is growing.<br />
            <span className="text-white/35">Your platform should too.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage 100 vehicles or 100,000 shipments, we build the logistics
            infrastructure that scales with your operation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=transportation" className="px-7 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Talk to a logistics engineer
            </Link>
            <Link href="/contact?type=transport-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book a platform review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
