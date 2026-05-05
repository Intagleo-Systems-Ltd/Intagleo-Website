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

/* ── Tech capabilities ─────────────────────────────────────────────────── */
const techCaps: CapItem[] = [
  {
    highlight: "Content", rest: " Management Systems",
    urlSlug: "content-management",
    tiles: [
      { name: "Asset Control", desc: "Granular permissions", color: "blue" },
      { name: "Scheduled Playback", desc: "Time & rule-based", color: "blue" },
      { name: "Multi-tenant", desc: "Isolated orgs", color: "purple" },
      { name: "Template Libraries", desc: "Reusable layouts", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "CMS Active",
      rows: [
        { label: "Content API", value: "Online", stat: "8ms" },
        { label: "Scheduler Engine", value: "Running", stat: "12K slots" },
        { label: "Asset CDN", value: "Online", stat: "99.98%" },
        { label: "Playback Queue", value: "Active", stat: "4.8K items" },
      ],
      chartLabel: "Plays\nLast 24h",
      bars: [55,60,72,68,80,76,88,84,76,90,86,80,92,88,84,76,88,92,86,80,92,88,94,96],
    },
  },
  {
    highlight: "Device", rest: " & Fleet Management",
    urlSlug: "device-fleet-management",
    tiles: [
      { name: "Remote Provisioning", desc: "Zero-touch setup", color: "blue" },
      { name: "Fleet Health", desc: "Live status dashboard", color: "blue" },
      { name: "OTA Firmware", desc: "Safe update pipeline", color: "purple" },
      { name: "Offline Sync", desc: "Resilient delivery", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "Fleet NOC",
      nodes: [
        { x: 118, y: 28, label: "EU-North Zone", sub: "2,400 screens", color: "#5b7fff" },
        { x: 198, y: 70, label: "US-East Zone", sub: "1,840 screens", color: "#a78bfa" },
        { x: 208, y: 148, label: "APAC Zone", sub: "920 screens", color: "#34d399" },
        { x: 140, y: 188, label: "ME Zone", sub: "640 screens", color: "#3B82F6" },
        { x: 42, y: 152, label: "OTA Server", sub: "Firmware hub", color: "#f59e0b" },
      ],
      footer: "5,800 devices · 4 regions",
    },
  },
  {
    highlight: "Player", rest: " Software & Firmware",
    urlSlug: "player-software",
    tiles: [
      { name: "Cross-platform Builds", desc: "Android, Linux, Windows", color: "blue" },
      { name: "Hardware-agnostic", desc: "Any SoC support", color: "blue" },
      { name: "Crash Recovery", desc: "Auto-heal on failure", color: "purple" },
      { name: "Offline-first", desc: "Local cache fallback", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 release pipelines",
      pipelines: [
        { label: "Android Player v14", pct: 100, rate: "Deployed", color: "#34d399" },
        { label: "Linux Player v9", pct: 88, rate: "Staged", color: "#5b7fff" },
        { label: "Windows Player v7", pct: 72, rate: "QA testing", color: "#a78bfa" },
        { label: "WebOS Player v3", pct: 55, rate: "In review", color: "#3B82F6" },
      ],
      metrics: [
        { label: "Crash Rate", value: "0.04%" },
        { label: "Recovery", value: "<30s" },
        { label: "Platforms", value: "4" },
      ],
    },
  },
  {
    highlight: "Real-time", rest: " Analytics & Proof of Play",
    urlSlug: "analytics-proof-of-play",
    tiles: [
      { name: "Playback Verification", desc: "Live confirmation", color: "blue" },
      { name: "Audience Measurement", desc: "Impression counting", color: "blue" },
      { name: "Advertiser Portals", desc: "Campaign dashboards", color: "purple" },
      { name: "Campaign Reports", desc: "Automated delivery", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Play Accuracy", pct: 99, color: "#34d399" },
        { label: "Uptime SLA", pct: 100, color: "#5b7fff" },
        { label: "Audience Reach", pct: 87, color: "#a78bfa" },
        { label: "Report Delivery", pct: 98, color: "#3B82F6" },
      ],
      events: [
        { time: "09:15:00", text: "Campaign A proof delivered" },
        { time: "09:08:22", text: "1,240 plays verified this hour" },
        { time: "09:01:45", text: "Audience count: 84K impressions" },
      ],
      footer: "Verified every 60s",
    },
  },
  {
    highlight: "API", rest: " & Integration Layer",
    urlSlug: "api-integration",
    tiles: [
      { name: "REST & WebSocket", desc: "Real-time push APIs", color: "blue" },
      { name: "Data Feed Connectors", desc: "Live data sources", color: "blue" },
      { name: "Ad-tech Integrations", desc: "DSP & SSP connectors", color: "purple" },
      { name: "CMS Bridges", desc: "Third-party ingestion", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "API Gateway v3",
      inferences: [
        { label: "REST Latency", pct: 98, color: "#34d399", level: "Excellent" },
        { label: "WebSocket Uptime", pct: 100, color: "#5b7fff", level: "Optimal" },
        { label: "Feed Parse Rate", pct: 94, color: "#a78bfa", level: "High" },
        { label: "Ad-tech Match", pct: 89, color: "#3B82F6", level: "Strong" },
      ],
      alertsLabel: "API Signals",
      alerts: [
        { time: "09:30:00", text: "Weather feed updated for 320 zones", sev: "#5b7fff" },
        { time: "09:22:10", text: "DSP campaign ingested — 1.2K slots", sev: "#34d399" },
        { time: "09:15:44", text: "WebSocket reconnect on Node-88", sev: "#f59e0b" },
      ],
      footer: "14M API calls/day",
    },
  },
  {
    highlight: "Network", rest: " Operations & Monitoring",
    urlSlug: "network-operations",
    tiles: [
      { name: "NOC Dashboards", desc: "Centralised control", color: "blue" },
      { name: "SLA Monitoring", desc: "Threshold alerting", color: "blue" },
      { name: "White-label Support", desc: "Custom branding", color: "purple" },
      { name: "Auto-remediation", desc: "Incident response", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Regions Monitored",
      sessions: [
        { initials: "EU", name: "EU-North NOC", color: "#5b7fff", qual: 3, live: true, secs: 86400 },
        { initials: "US", name: "US-East NOC", color: "#34d399", qual: 3, live: true, secs: 86400 },
        { initials: "AP", name: "APAC NOC", color: "#a78bfa", qual: 2, live: true, secs: 86400 },
        { initials: "ME", name: "ME NOC", color: "#3B82F6", qual: 2, live: false, secs: 86400 },
      ],
      footerStats: ["SLA: 99.95%", "Incidents: 0 open", "4 regions"],
    },
  },
  {
    highlight: "Multi-site", rest: " Orchestration",
    urlSlug: "multi-site-orchestration",
    tiles: [
      { name: "Zone Targeting", desc: "Content per location", color: "blue" },
      { name: "Geo & Time Rules", desc: "Contextual scheduling", color: "blue" },
      { name: "Bulk Management", desc: "Screen group actions", color: "purple" },
      { name: "Role-based Access", desc: "Permission layers", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Zones Active",
      rows: [
        { label: "Airport Zone A", value: "18 screens", stat: "Playing" },
        { label: "Retail Network B", value: "124 screens", stat: "Playing" },
        { label: "Transit Zone C", value: "72 screens", stat: "Playing" },
        { label: "Corporate D", value: "36 screens", stat: "Paused" },
      ],
      chartLabel: "Active\nScreens",
      bars: [88,90,86,92,88,84,90,94,88,92,86,90,94,88,84,90,92,88,86,92,90,88,94,96],
    },
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
      <section className="relative min-h-[85vh] flex flex-col items-center pt-32 pb-24 px-6 text-center overflow-hidden">

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
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium customHeading leading-[1.07] tracking-tight mb-5">
            Screens that tells Stories!!<br />
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From CMS platforms to device management at scale, we build the software that keeps
            digital signage networks running reliably, across every screen and every site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?type=digital-signage"
              className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
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


      </section>

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern digital signage stack" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* RUNNING A SIGNAGE NETWORK                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />
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
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From first screen to a network that runs itself
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t retrofit signage software onto generic platforms. Every engagement
              starts with your network topology and works outward from there.
            </p>
          </div>

          {/* Timeline */}
          <ScrollTimeline steps={[
    { num: "01", title: "Network Audit", desc: "We map your existing hardware, player versions, content workflows, and failure points before writing a single line of code.", align: "left" },
    { num: "02", title: "Architecture Design", desc: "We define the CMS structure, device management layer, and data flows - built to scale from hundreds to tens of thousands of screens.", align: "right" },
    { num: "03", title: "Build & Harden", desc: "We develop with resilience as the baseline: offline-first players, automated recovery, OTA update pipelines, and end-to-end monitoring.", align: "left" },
    { num: "04", title: "Launch & Operate", desc: "We migrate your network to the new platform with zero dark screens, then provide ongoing performance oversight and continuous improvement.", align: "right" },
  ]} />

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
              src="/ds.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
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
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer"
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
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
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
              className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Talk to a Signage Expert
            </Link>
                        <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>

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


