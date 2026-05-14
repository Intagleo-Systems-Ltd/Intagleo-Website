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
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
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
              className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
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


