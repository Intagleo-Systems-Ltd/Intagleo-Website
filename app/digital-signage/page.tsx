"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";

/* ── Tech capabilities ─────────────────────────────────────────────────── */
const techCaps = [
  {
    highlight: "Content", rest: " Management Systems",
    annotations: [
      { pos: "tl", text: "Granular Asset Control" },
      { pos: "tr", text: "Targeted Scheduling and Group Orchestration" },
      { pos: "bl", text: "Provision legacy and next-gen players" },
      { pos: "br", text: "Manage devices across network" },
    ],
    items: ["Dynamic content triggers", "Multi-tenant architecture", "Scheduled playback engine", "Template & asset libraries"],
  },
  {
    highlight: "Device", rest: " & Fleet Management",
    annotations: [
      { pos: "tl", text: "Remote Device Provisioning" },
      { pos: "tr", text: "Fleet Health Dashboard" },
      { pos: "bl", text: "OTA Firmware Updates" },
      { pos: "br", text: "Offline-resilient Sync" },
    ],
    items: ["Remote monitoring & control", "OTA firmware updates", "Fleet health dashboards", "Offline-resilient sync"],
  },
  {
    highlight: "Player", rest: " Software & Firmware",
    annotations: [
      { pos: "tl", text: "Cross-platform Player Builds" },
      { pos: "tr", text: "Hardware-agnostic Architecture" },
      { pos: "bl", text: "Crash Recovery & Auto-heal" },
      { pos: "br", text: "Offline-first Playback" },
    ],
    items: ["Cross-platform players", "Hardware-agnostic builds", "Offline-first architecture", "Crash recovery & auto-heal"],
  },
  {
    highlight: "Real-time", rest: " Analytics & Proof of Play",
    annotations: [
      { pos: "tl", text: "Live Playback Verification" },
      { pos: "tr", text: "Audience Measurement" },
      { pos: "bl", text: "Advertiser-facing Portals" },
      { pos: "br", text: "Campaign Performance Reports" },
    ],
    items: ["Real-time playback verification", "Audience measurement", "Advertiser-facing portals", "Campaign performance reporting"],
  },
  {
    highlight: "API", rest: " & Integration Layer",
    annotations: [
      { pos: "tl", text: "REST & WebSocket APIs" },
      { pos: "tr", text: "Data Feed Connectors" },
      { pos: "bl", text: "Ad-tech Integrations" },
      { pos: "br", text: "Third-party CMS Bridges" },
    ],
    items: ["REST and WebSocket APIs", "Data feed connectors", "Ad-tech integrations", "Third-party CMS bridges"],
  },
  {
    highlight: "Network", rest: " Operations & Monitoring",
    annotations: [
      { pos: "tl", text: "Centralised NOC Dashboards" },
      { pos: "tr", text: "SLA Monitoring & Alerting" },
      { pos: "bl", text: "White-label Platform Support" },
      { pos: "br", text: "Incident Auto-remediation" },
    ],
    items: ["Centralised NOC dashboards", "SLA monitoring & alerting", "White-label platform support", "Incident auto-remediation"],
  },
  {
    highlight: "Multi-site", rest: " Orchestration",
    annotations: [
      { pos: "tl", text: "Zone-based Content Targeting" },
      { pos: "tr", text: "Geo & Time-based Rules" },
      { pos: "bl", text: "Bulk Screen Management" },
      { pos: "br", text: "Role-based Access Control" },
    ],
    items: ["Zone-based content targeting", "Geo & time-based scheduling rules", "Bulk screen management", "Role-based access control"],
  },
];


/* ── Process steps ─────────────────────────────────────────────────────── */
const processSteps = [
  {
    num: "01",
    title: "Understand the network",
    desc: "We audit your current hardware, network topology, and content lifecycle to identify the critical failure points and scalability bottlenecks.",
  },
  {
    num: "02",
    title: "Architect for scale",
    desc: "We design a modular system that separates player logic from content delivery, ensuring your network can scale horizontally without increasing latency.",
  },
  {
    num: "03",
    title: "Build and harden",
    desc: "Development focus is on resilience. We implement advanced caching, automated healing, and security protocols that protect every screen.",
  },
  {
    num: "04",
    title: "Launch and operate",
    desc: "Seamless migration from your legacy system to the new platform, followed by 24/7 technical oversight and ongoing performance optimization.",
  },
];



export default function DigitalSignagePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const screenSlides = [
    ["/screen1.png",  "/screen6.png",  "/screen11.png"],
    ["/screen2.png",  "/screen7.png",  "/screen12.png"],
    ["/screen3.png",  "/screen8.png",  "/screen13.png"],
    ["/screen4.png",  "/screen9.png",  "/screen14.png"],
    ["/screen5.png",  "/screen10.png", "/screen15.png"],
  ];
  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % 3), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Screens that tells Stories!!<br />
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From CMS platforms to device management at scale, we build the software that keeps
            digital signage networks running reliably, across every screen and every site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?type=digital-signage"
              className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Talk to Signage Expert
            </Link>
            <a
              href="#process"
              className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
            >
              See How We Work
            </a>
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">
            Trusted by brands running thousands of screens.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
              { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
              { name: "TCL",         src: "/logos/tcl.png",         invert: true  },
              { name: "KIA",         src: "/logos/kia.png",         invert: true  },
              { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
            ].map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-7 w-auto object-contain opacity-35 hover:opacity-60 transition-opacity duration-300"
                style={{ filter: logo.invert ? "brightness(0) invert(1)" : "none", maxWidth: "110px" }}
              />
            ))}
          </div>
        </div>

        {/* Bottom hanging card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#13141a] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">

              {/* Left: photo grid */}
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

              {/* Right: text */}
              <div className="flex flex-col justify-center text-left p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Signage technology debt is a silent network killer.{" "}
                  <span className="text-white/35">Most operators don&apos;t see it until screens go dark.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every workaround your team has built, every player that needs manual rebooting, every
                  content update that takes hours, that&apos;s operational debt compounding silently.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built signage software for networks spanning thousands of screens across multiple
                  continents, focusing on the architectural integrity that keeps networks profitable.
                </p>
                <Link
                  href="/contact?type=digital-signage"
                  className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors"
                >
                  Talk to a Signage Expert
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH CAPABILITIES                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24" id="capabilities">
        <div className="mx-auto max-w-6xl">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Core Capabilities</h2>
            <p className="text-white/40 text-base">Built across the modern stack</p>
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-4 items-stretch">

            {/* Left: tab list */}
            <div className="flex flex-col gap-2">
              {techCaps.map((cap, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-5 py-4 rounded-xl transition-all duration-200 border ${
                    activeTab === i
                      ? "bg-white/[0.08] border-white/[0.1] shadow-sm"
                      : "bg-white/[0.02] border-transparent hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="font-bold text-white text-sm md:text-[15px]">{cap.highlight}</span>
                  <span className={`text-sm md:text-[15px] transition-colors ${activeTab === i ? "text-white/65" : "text-white/35"}`}>{cap.rest}</span>
                </button>
              ))}
            </div>

            {/* Right: visual panel */}
            <div className="flex flex-col gap-0">

              {/* Mockup + annotations panel */}
              <div className="relative bg-[#13141a] border border-white/[0.07] rounded-t-2xl overflow-hidden flex items-center justify-center p-10" style={{ minHeight: "360px" }}>

                {/* Grid bg */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v1h40V0zM0 40V0H1v40H0z' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E\")" }} />

                {/* Mockup - constrained so annotations never overlap */}
                <div className="relative z-10 w-full" style={{ maxWidth: "calc(100% - 180px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/intvue-mockup.png"
                    alt="Platform mockup"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>

                {/* Corner annotations - only top + bottom, no z-fight with items */}
                {techCaps[activeTab].annotations.map((a) => (
                  <div
                    key={a.pos}
                    className={`absolute z-20 bg-[#13141a]/90 border border-white/[0.1] rounded-lg px-3 py-2 backdrop-blur-sm max-w-[140px] transition-all duration-300 ${
                      a.pos === "tl" ? "top-5 left-5" :
                      a.pos === "tr" ? "top-5 right-5 text-right" :
                      a.pos === "bl" ? "bottom-5 left-5" :
                      "bottom-5 right-5 text-right"
                    }`}
                  >
                    <p className="text-white/80 text-xs leading-snug">{a.text}</p>
                  </div>
                ))}
              </div>

              {/* Items strip - completely separate row, zero overlap */}
              <div className="bg-[#13141a] border border-white/[0.07] border-t-0 rounded-b-2xl px-6 py-4 flex flex-wrap gap-x-6 gap-y-2">
                {techCaps[activeTab].items.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8341c]/70 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* RUNNING A SIGNAGE NETWORK                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Running a signage network </span>
              <span className="text-white/30">and hitting limits?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We offer deep-dive platform architecture reviews to identify bottlenecks in scaling
              your network from hundreds to thousands of endpoints.
            </p>
            <Link
              href="/contact?type=signage-review"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Book an Architecture Review
            </Link>
          </div>

          {/* Right: multi-panel canvas */}
          <div className="relative h-72 md:h-96 flex items-center justify-center select-none">
            <div className="relative w-full h-full">

              {/* Large portrait - left-center */}
              <div className="absolute overflow-hidden" style={{ left: "12%", top: "4%", width: "28%", height: "72%", border: "2px solid rgba(255,255,255,0.22)", borderRadius: "3px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                {screenSlides[0].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: slideIndex === i ? 1 : 0 }} />
                ))}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)" }} />
              </div>

              {/* Small landscape - far left, lower */}
              <div className="absolute overflow-hidden" style={{ left: "2%", top: "60%", width: "18%", height: "26%", border: "2px solid rgba(255,255,255,0.18)", borderRadius: "3px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}>
                {screenSlides[1].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: slideIndex === i ? 1 : 0 }} />
                ))}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.2)" }} />
              </div>

              {/* Medium square - center, overlapping portrait */}
              <div className="absolute overflow-hidden" style={{ left: "30%", top: "38%", width: "32%", height: "46%", border: "2px solid rgba(255,255,255,0.22)", borderRadius: "3px", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
                {screenSlides[2].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: slideIndex === i ? 1 : 0 }} />
                ))}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)" }} />
              </div>

              {/* Landscape top-right */}
              <div className="absolute overflow-hidden" style={{ left: "42%", top: "4%", width: "38%", height: "34%", border: "2px solid rgba(255,255,255,0.22)", borderRadius: "3px", boxShadow: "0 8px 28px rgba(0,0,0,0.5)" }}>
                {screenSlides[3].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: slideIndex === i ? 1 : 0 }} />
                ))}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)" }} />
              </div>

              {/* Wide landscape - right, middle */}
              <div className="absolute overflow-hidden" style={{ left: "50%", top: "40%", width: "46%", height: "30%", border: "2px solid rgba(255,255,255,0.22)", borderRadius: "3px", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
                {screenSlides[4].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: slideIndex === i ? 1 : 0 }} />
                ))}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 60%, rgba(0,0,0,0.4) 100%)" }} />
              </div>

              {/* Ambient glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,52,28,0.05) 0%, transparent 70%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* SPLIT CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* DESIGN PHILOSOPHY                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
     

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS                                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From first screen to a network that runs itself
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t retrofit signage software onto generic platforms. Every engagement
              starts with your network topology and works outward from there.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />

            {[
              { num: "01", title: "Network Audit",      desc: "We map your existing hardware, player versions, content workflows, and failure points before writing a single line of code.",     align: "left"  },
              { num: "02", title: "Architecture Design", desc: "We define the CMS structure, device management layer, and data flows - built to scale from hundreds to tens of thousands of screens.", align: "right" },
              { num: "03", title: "Build & Harden",      desc: "We develop with resilience as the baseline: offline-first players, automated recovery, OTA update pipelines, and end-to-end monitoring.", align: "left"  },
              { num: "04", title: "Launch & Operate",    desc: "We migrate your network to the new platform with zero dark screens, then provide ongoing performance oversight and continuous improvement.", align: "right" },
            ].map((step) => (
              <div key={step.num} className={`relative flex mb-16 last:mb-0 ${step.align === "right" ? "justify-end" : "justify-start"}`}>
                {/* Dot */}
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* INLINE CTA                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS                                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* IMPACT                                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">

          {/* Left: visual card */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hex-mesh-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(232,52,28,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Business Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br />
                  <span className="text-white/50 font-normal">on your network</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built signage software eliminates the manual overhead
                  that bleeds operator margin. Here&apos;s what changes.
                </p>
              </div>
              <Link
                href="/contact?type=digital-signage"
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer"
              >
                Start Getting Results
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Right: impact cards */}
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Network Uptime",         desc: "Automated recovery, health monitoring, and OTA updates keep screens live without manual intervention." },
              { num: "02", title: "Content Reliability",    desc: "Offline-first players and local caching ensure content plays even when connectivity drops." },
              { num: "03", title: "Fleet Scalability",      desc: "Architecture that grows from 100 to 100,000 screens without a platform rewrite." },
              { num: "04", title: "Operational Visibility", desc: "Real-time proof-of-play, device telemetry, and NOC dashboards so nothing goes dark unnoticed." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex-1 flex items-start gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200"
              >
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CASE STUDIES                                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="digital-signage" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* STATS BENTO                                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          {/* 3-col bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">

            {/* Left: large square - "20+" */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">20+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Years in signage</p>
              </div>
            </div>

            {/* Middle top: "10k+" */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">10k+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Screens managed</p>
              </div>
            </div>

            {/* Right: large square - "4" */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">4</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Continents</p>
              </div>
            </div>

            {/* Middle bottom: "99.95%" */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.95%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Uptime SLA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <InsightsSection pageSlug="digital-signage" />
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer_CTA.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Screens going dark<br />
            <span className="text-white/35">costs more than you think.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re managing 10 screens or 10,000, we build the platform
            that keeps every display live, every piece of content on schedule.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=digital-signage"
              className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Talk to a Signage Expert
            </Link>
            <Link
              href="/contact?type=signage-review"
              className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors"
            >
              Book an Architecture Review
            </Link>
          </div>

          <p className="text-white/25 text-xs tracking-wide">
            Direct Engineer Access · Response within 1 business day
          </p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
