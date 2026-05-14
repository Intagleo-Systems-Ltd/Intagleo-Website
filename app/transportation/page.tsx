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
    highlight: "Fleet", rest: " Management & Tracking",
    urlSlug: "fleet-management",
    tiles: [
      { name: "GPS Tracking", desc: "Sub-second real-time location", color: "blue" },
      { name: "Driver Analytics", desc: "Behaviour scoring & coaching", color: "purple" },
      { name: "Vehicle Health", desc: "Predictive maintenance signals", color: "blue" },
      { name: "Route Alerts", desc: "Deviation & ETA notifications", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "Fleet Hub",
      nodes: [
        { x: 118, y: 28,  label: "GPS Tracking",   sub: "50K vehicles live",  color: "#5b7fff" },
        { x: 198, y: 72,  label: "Driver Analytics", sub: "Behaviour scores", color: "#a78bfa" },
        { x: 208, y: 148, label: "Vehicle Health",  sub: "OBD telemetry",     color: "#34d399" },
        { x: 140, y: 188, label: "Route Alerts",    sub: "ETA deviations",    color: "#3B82F6" },
        { x: 42,  y: 152, label: "Fuel Monitor",    sub: "Efficiency model",  color: "#f59e0b" },
      ],
      footer: "50K vehicles · 6 continents",
    },
  },
  {
    highlight: "Route", rest: " Optimisation",
    urlSlug: "route-optimisation",
    tiles: [
      { name: "Dynamic Re-routing", desc: "Live traffic-aware rerouting", color: "blue" },
      { name: "Multi-stop", desc: "Vehicle routing algorithms", color: "purple" },
      { name: "Traffic & Weather", desc: "Real-time condition feeds", color: "blue" },
      { name: "Fuel Modelling", desc: "Efficiency-first route scoring", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "Traffic Data Ingest", pct: 100, rate: "Real-time",    color: "#5b7fff" },
        { label: "Route Calc Engine",   pct: 96,  rate: "<200ms",       color: "#34d399" },
        { label: "Fuel Model",          pct: 88,  rate: "Per vehicle",  color: "#a78bfa" },
        { label: "ETA Engine",          pct: 92,  rate: "Continuous",   color: "#3B82F6" },
      ],
      metrics: [
        { label: "Routes/min", value: "12K" },
        { label: "Fuel Save",  value: "18%" },
        { label: "On-time",    value: "94%" },
      ],
    },
  },
  {
    highlight: "Dispatch", rest: " & Operations",
    urlSlug: "dispatch-operations",
    tiles: [
      { name: "Load Assignment", desc: "Automated dispatch logic", color: "blue" },
      { name: "Driver Comms", desc: "In-app messaging & tasks", color: "purple" },
      { name: "Capacity Planning", desc: "Shift & resource scheduling", color: "blue" },
      { name: "SLA Monitoring", desc: "Breach alerts & escalations", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Ops Regions Live",
      sessions: [
        { initials: "EU", name: "EU Dispatch",  color: "#5b7fff", qual: 3, live: true,  secs: 28800 },
        { initials: "US", name: "US-East Ops",  color: "#34d399", qual: 3, live: true,  secs: 14400 },
        { initials: "AS", name: "APAC Fleet",   color: "#a78bfa", qual: 2, live: true,  secs: 43200 },
        { initials: "ME", name: "ME Dispatch",  color: "#3B82F6", qual: 2, live: false, secs: 7200  },
      ],
      footerStats: ["Auto-assigned", "4 regions", "SLA: 99.8%"],
    },
  },
  {
    highlight: "Supply", rest: " Chain Visibility",
    urlSlug: "supply-chain",
    tiles: [
      { name: "Shipment Tracking", desc: "End-to-end milestone visibility", color: "blue" },
      { name: "Carrier Metrics", desc: "Performance benchmarking", color: "purple" },
      { name: "Exception Mgmt", desc: "Proactive disruption handling", color: "blue" },
      { name: "Tracking Portals", desc: "Customer-facing live updates", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Rails Live",
      rows: [
        { label: "Shipment Tracking", value: "Online", stat: "50M tracked"   },
        { label: "Carrier Network",   value: "Online", stat: "340 carriers"  },
        { label: "Exception Engine",  value: "Active", stat: "12 open"       },
        { label: "Customer Portal",   value: "Live",   stat: "99.9% uptime"  },
      ],
      chartLabel: "Shipment\nVolume",
      bars: [68,72,76,70,80,74,82,78,84,80,88,84,78,88,90,86,82,88,92,86,82,90,88,92],
    },
  },
  {
    highlight: "Analytics", rest: " & Reporting",
    urlSlug: "analytics-reporting",
    tiles: [
      { name: "Delivery Analytics", desc: "On-time rate dashboards", color: "blue" },
      { name: "Cost-per-Mile", desc: "Route economics analysis", color: "purple" },
      { name: "Utilisation", desc: "Fleet asset efficiency", color: "blue" },
      { name: "CO2 Tracking", desc: "Emissions & ESG reporting", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "On-time Rate",   pct: 94, color: "#34d399" },
        { label: "Fuel Efficiency", pct: 81, color: "#5b7fff" },
        { label: "Utilisation",    pct: 87, color: "#a78bfa" },
        { label: "CO2 Reduction",  pct: 68, color: "#3B82F6" },
      ],
      events: [
        { time: "09:15:22", text: "Route #8821 optimised — saved 14%"      },
        { time: "09:12:08", text: "Carrier SLA breach alert: Carrier 44"   },
        { time: "09:08:44", text: "Fleet utilisation report generated"      },
      ],
      footer: "Updated hourly",
    },
  },
  {
    highlight: "Integration", rest: " & API Layer",
    urlSlug: "integration-api",
    tiles: [
      { name: "TMS & WMS", desc: "Warehouse & transport mgmt sync", color: "blue" },
      { name: "ERP Connectors", desc: "SAP, Oracle, NetSuite links", color: "purple" },
      { name: "Carrier APIs", desc: "Multi-carrier aggregation layer", color: "blue" },
      { name: "Customs APIs", desc: "Compliance & clearance hooks", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "API Gateway v4.1",
      inferences: [
        { label: "TMS Connector", pct: 99,  color: "#5b7fff", level: "Optimal" },
        { label: "ERP Sync",      pct: 97,  color: "#34d399", level: "Healthy" },
        { label: "Carrier API",   pct: 94,  color: "#a78bfa", level: "High"    },
        { label: "Customs Check", pct: 100, color: "#3B82F6", level: "Clear"   },
      ],
      alertsLabel: "API Signals",
      alerts: [
        { time: "09:18:02", text: "SAP ERP sync complete — 8.4K records", sev: "#34d399" },
        { time: "09:14:30", text: "Carrier API rate limit warning",        sev: "#f59e0b" },
        { time: "09:10:44", text: "Customs API v3 deployed",               sev: "#5b7fff" },
      ],
      footer: "24M API calls/day",
    },
  },
];

export default function TransportationPage() {
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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your network is growing.<br />
            <span className="text-white/35">Your platform should too.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you manage 100 vehicles or 100,000 shipments, we build the logistics
            infrastructure that scales with your operation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=transportation" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a logistics engineer
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


