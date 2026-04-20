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
    highlight: "Booking", rest: " Engine Development",
    annotations: [
      { pos: "tl", text: "Multi-provider Aggregation" },
      { pos: "tr", text: "Real-time Availability" },
      { pos: "bl", text: "Dynamic Pricing Engine" },
      { pos: "br", text: "Group & Corporate Booking" },
    ],
    items: ["Multi-provider aggregation", "Real-time availability sync", "Dynamic pricing rules", "Group & corporate booking"],
  },
  {
    highlight: "GDS", rest: " & API Integration",
    annotations: [
      { pos: "tl", text: "Amadeus & Sabre Connectivity" },
      { pos: "tr", text: "NDC Airline APIs" },
      { pos: "bl", text: "Hotel Bed Banks" },
      { pos: "br", text: "Car & Transfer APIs" },
    ],
    items: ["Amadeus & Sabre integration", "NDC airline direct connect", "Hotel bed bank connectivity", "Car & transfer APIs"],
  },
  {
    highlight: "Traveller", rest: " Experience Platforms",
    annotations: [
      { pos: "tl", text: "Personalised Itineraries" },
      { pos: "tr", text: "In-trip Notifications" },
      { pos: "bl", text: "Mobile Check-in Flows" },
      { pos: "br", text: "Loyalty Programme Integration" },
    ],
    items: ["Personalised itinerary builder", "Real-time trip notifications", "Mobile check-in & boarding", "Loyalty programme integration"],
  },
  {
    highlight: "Revenue", rest: " Management",
    annotations: [
      { pos: "tl", text: "Ancillary Upsell Engine" },
      { pos: "tr", text: "Fare Class Optimisation" },
      { pos: "bl", text: "Yield Management Tools" },
      { pos: "br", text: "Commission Tracking" },
    ],
    items: ["Ancillary upsell automation", "Fare class optimisation", "Yield management systems", "Commission & payment tracking"],
  },
  {
    highlight: "Operations", rest: " & Back-office",
    annotations: [
      { pos: "tl", text: "Agent Booking Tools" },
      { pos: "tr", text: "Disruption Management" },
      { pos: "bl", text: "Supplier Reconciliation" },
      { pos: "br", text: "Reporting Dashboards" },
    ],
    items: ["Agent desktop tools", "Disruption & rebooking flows", "Supplier reconciliation", "Operational dashboards"],
  },
  {
    highlight: "Analytics", rest: " & Intelligence",
    annotations: [
      { pos: "tl", text: "Booking Funnel Analysis" },
      { pos: "tr", text: "Demand Forecasting" },
      { pos: "bl", text: "Customer LTV Modelling" },
      { pos: "br", text: "Route Performance Data" },
    ],
    items: ["Booking funnel analytics", "Demand forecasting models", "Customer LTV modelling", "Route & inventory performance"],
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
  const [activeTab, setActiveTab] = useState(0);
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
            Travel technology that<br />moves as fast as your travellers.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From booking engine architecture to GDS integration and in-trip experience platforms,
            we build the travel software that keeps every journey on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=travel" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a Travel Tech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by travel brands serving millions of journeys annually.</p>
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
                  Slow booking engines and fragmented supplier connectivity are costing you bookings.{" "}
                  <span className="text-white/35">Travellers abandon in milliseconds.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every extra second at search, every failed availability check, every upsell opportunity
                  missed — that&apos;s compounding revenue loss hidden behind your booking funnel.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built travel platforms for OTAs, airlines, and tour operators at scale, focused
                  on the booking performance and supplier integration that modern travel demands.
                </p>
                <Link href="/contact?type=travel" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Travel Tech Engineer
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
            <p className="text-white/40 text-base">Built across the modern travel technology stack</p>
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
              <span className="text-white">Is your booking infrastructure </span>
              <span className="text-white/30">losing travellers mid-journey?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your entire travel tech stack — booking engine latency, GDS connectivity,
              and supplier fallback logic — to pinpoint exactly where travellers drop off and revenue leaks.
            </p>
            <Link href="/contact?type=travel-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Book a Tech Stack Review
            </Link>
          </div>

          {/* Split-flap departures board */}
          <div className="relative rounded-2xl overflow-hidden bg-[#060810] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4 border-b border-white/[0.06] pb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Departures</span>
              <span className="text-[10px] text-[#e8341c]/60 font-mono animate-pulse">Live</span>
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
                    <span className={`font-bold ${isActive ? "text-[#e8341c]" : "text-white/70"}`}>
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
                        dep.status === "Delayed" ? "bg-[#e8341c]/20 text-[#e8341c]" :
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From slow booking engine to travel infrastructure that scales
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t patch GDS connectors onto legacy foundations. Every engagement starts with
              your traveller journey and the revenue moments that matter.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Stack Audit", desc: "We map your booking engine performance, supplier connectivity, fallback logic, and the funnel drop-off points costing you bookings.", align: "left" },
              { num: "02", title: "Architecture Design", desc: "We design for booking speed: sub-200ms search responses, resilient multi-GDS failover, and content aggregation that covers every segment.", align: "right" },
              { num: "03", title: "Build & Integrate", desc: "We develop against live GDS sandboxes with booking accuracy, payment security, and PCI compliance woven into every sprint.", align: "left" },
              { num: "04", title: "Launch & Optimise", desc: "Phased cutover from legacy booking paths, then continuous optimisation against real booking funnel conversion signals.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Travel Tech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your booking revenue</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built travel infrastructure removes the latency and fragmentation that
                  drives abandonment at every booking step. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=travel" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Slow search results<br />
            <span className="text-white/35">send travellers to competitors.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re booking flights, hotels, or full itineraries, we build the
            travel infrastructure that converts searchers into passengers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=travel" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a travel tech engineer
            </Link>
            <Link href="/contact?type=travel-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book a stack review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
