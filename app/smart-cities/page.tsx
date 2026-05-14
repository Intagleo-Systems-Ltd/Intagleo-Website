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
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
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


