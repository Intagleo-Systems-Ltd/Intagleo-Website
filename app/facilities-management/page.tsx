"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";

const techCaps = [
  {
    highlight: "Building", rest: " Automation Systems",
    annotations: [
      { pos: "tl", text: "HVAC Integration" },
      { pos: "tr", text: "Lighting Control Networks" },
      { pos: "bl", text: "Energy Management Systems" },
      { pos: "br", text: "Smart Sensor Orchestration" },
    ],
    items: ["IoT sensor integration", "HVAC & lighting automation", "Energy consumption analytics", "Predictive maintenance triggers"],
  },
  {
    highlight: "Asset", rest: " & Maintenance Management",
    annotations: [
      { pos: "tl", text: "Work Order Automation" },
      { pos: "tr", text: "Preventive Maintenance" },
      { pos: "bl", text: "Asset Lifecycle Tracking" },
      { pos: "br", text: "Vendor Management" },
    ],
    items: ["Automated work orders", "Asset lifecycle tracking", "Vendor management portals", "Compliance documentation"],
  },
  {
    highlight: "Access", rest: " Control & Security",
    annotations: [
      { pos: "tl", text: "Role-based Entry Systems" },
      { pos: "tr", text: "Visitor Management" },
      { pos: "bl", text: "Audit Trail Logging" },
      { pos: "br", text: "Multi-site Synchronisation" },
    ],
    items: ["Role-based access control", "Visitor management", "Real-time audit logs", "Multi-site sync"],
  },
  {
    highlight: "Energy", rest: " & Sustainability",
    annotations: [
      { pos: "tl", text: "Consumption Dashboards" },
      { pos: "tr", text: "Carbon Footprint Tracking" },
      { pos: "bl", text: "Utility Billing Integration" },
      { pos: "br", text: "Green Certification Reports" },
    ],
    items: ["Real-time consumption dashboards", "Carbon tracking", "Utility billing integration", "Sustainability reporting"],
  },
  {
    highlight: "Space", rest: " Utilisation & Planning",
    annotations: [
      { pos: "tl", text: "Occupancy Analytics" },
      { pos: "tr", text: "Room Booking Systems" },
      { pos: "bl", text: "Floor Plan Management" },
      { pos: "br", text: "Capacity Forecasting" },
    ],
    items: ["Occupancy sensor analytics", "Room & desk booking", "Floor plan management", "Capacity forecasting"],
  },
  {
    highlight: "Compliance", rest: " & Reporting",
    annotations: [
      { pos: "tl", text: "Regulatory Audit Trails" },
      { pos: "tr", text: "Incident Reporting" },
      { pos: "bl", text: "Certificate Management" },
      { pos: "br", text: "SLA Dashboards" },
    ],
    items: ["Regulatory compliance tracking", "Automated incident reports", "Certificate management", "SLA monitoring dashboards"],
  },
];

export default function FacilitiesManagementPage() {
  const [activeTab, setActiveTab] = useState(0);

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
            Smart buildings deserve<br />smarter software.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From HVAC controls to access management, we build the platforms that keep your buildings
            running efficiently, safely, and at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=facilities" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a Facilities Expert
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by facilities operators managing thousands of sites.</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { name: "Samsung", src: "/logos/samsung.png" },
              { name: "IBM", src: "/logos/ibm.png" },
              { name: "TCL", src: "/logos/tcl.png" },
              { name: "KIA", src: "/logos/kia.png" },
            ].map((logo) => (
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
                  Facilities tech debt compounds silently.{" "}
                  <span className="text-white/35">Most operators don&apos;t notice until a system fails.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every manual override your team has built, every sensor that needs physical inspection,
                  every maintenance ticket handled by spreadsheet — that&apos;s operational debt compounding.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built facilities management software for operators spanning hundreds of buildings,
                  focusing on the architectural integrity that keeps buildings profitable.
                </p>
                <Link href="/contact?type=facilities" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Facilities Expert
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
            <p className="text-white/40 text-base">Built across the modern facilities stack</p>
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
              <span className="text-white">Is your building&apos;s management </span>
              <span className="text-white/30">as complex as its blueprint?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We offer deep-dive platform architecture reviews to identify inefficiencies in your
              building management stack — from legacy BMS integrations to IoT sensor overload.
            </p>
            <Link href="/contact?type=facilities-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
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
                  <div className="w-3 h-3 rounded-full bg-[#e8341c] relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-[#e8341c]/40 animate-ping" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From isolated systems to a unified building intelligence platform
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt software onto existing infrastructure. Every engagement starts with
              your building&apos;s operational model and works inward from there.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Systems Audit", desc: "We map your existing BMS, IoT sensors, access systems, and maintenance workflows to identify integration gaps and failure points.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design a unified data layer that connects all building systems, enabling real-time visibility and automated workflows across every floor.", align: "right" },
              { num: "03", title: "Integration & Testing", desc: "We build with reliability as the baseline: fault-tolerant integrations, redundant data paths, and automated alerting across all systems.", align: "left" },
              { num: "04", title: "Go Live & Operate", desc: "Seamless cutover from legacy systems with zero operational disruption, followed by ongoing performance optimisation.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Business Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your facilities</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built facilities software eliminates the manual overhead that bleeds
                  operational margin. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=facilities" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your building&apos;s complexity<br />
            <span className="text-white/35">shouldn&apos;t be your problem.</span>
          </h2>
          <p className="text-white/45 mb-10">
            We build the software that makes every floor, system, and sensor manageable from a single platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=facilities" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a facilities engineer
            </Link>
            <Link href="/contact?type=facilities-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
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
