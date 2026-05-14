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
    highlight: "Booking", rest: " Engine Development",
    urlSlug: "booking-engine",
    tiles: [
      { name: "Multi-provider", desc: "Aggregated availability at scale", color: "blue" },
      { name: "Real-time Availability", desc: "Live sync across all suppliers", color: "purple" },
      { name: "Dynamic Pricing", desc: "Rule-based fare computation", color: "blue" },
      { name: "Group & Corporate", desc: "Negotiated rate management", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Systems Live",
      rows: [
        { label: "Flight Search",    value: "Online", stat: "180ms avg"   },
        { label: "Hotel Avail",      value: "Online", stat: "240ms avg"   },
        { label: "Dynamic Pricing",  value: "Active", stat: "Real-time"   },
        { label: "Group Booking",    value: "Online", stat: "98.4% uptime" },
      ],
      chartLabel: "Bookings\n24h",
      bars: [44,52,60,56,70,66,78,74,68,82,78,84,90,86,80,88,84,90,86,80,92,88,86,94],
    },
  },
  {
    highlight: "GDS", rest: " & API Integration",
    urlSlug: "gds-integration",
    tiles: [
      { name: "Amadeus & Sabre", desc: "Full GDS connectivity", color: "blue" },
      { name: "NDC Airline APIs", desc: "Direct airline content", color: "purple" },
      { name: "Hotel Bed Banks", desc: "Multi-bed-bank aggregation", color: "blue" },
      { name: "Car & Transfers", desc: "Ground transport APIs", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "GDS Core",
      nodes: [
        { x: 118, y: 28,  label: "Amadeus GDS",     sub: "Full content",      color: "#5b7fff" },
        { x: 198, y: 72,  label: "NDC Airlines",    sub: "Direct connect",    color: "#a78bfa" },
        { x: 208, y: 148, label: "Hotel Bed Banks", sub: "Multi-aggregate",   color: "#34d399" },
        { x: 140, y: 188, label: "Car & Transfers", sub: "Ground transport",  color: "#3B82F6" },
        { x: 42,  y: 152, label: "Sabre GDS",       sub: "Fallback rail",     color: "#f59e0b" },
      ],
      footer: "15+ GDS & supplier integrations",
    },
  },
  {
    highlight: "Traveller", rest: " Experience Platforms",
    urlSlug: "traveller-experience",
    tiles: [
      { name: "Itinerary Builder", desc: "Personalised trip planning", color: "blue" },
      { name: "In-trip Alerts", desc: "Real-time disruption notifications", color: "purple" },
      { name: "Mobile Check-in", desc: "Digital boarding flows", color: "blue" },
      { name: "Loyalty Integration", desc: "Points earn & redemption", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Journeys Active",
      sessions: [
        { initials: "IT", name: "Itinerary Builder", color: "#5b7fff", qual: 3, live: true,  secs: 3600 },
        { initials: "NT", name: "In-trip Alerts",    color: "#34d399", qual: 3, live: true,  secs: 1800 },
        { initials: "MC", name: "Mobile Check-in",   color: "#a78bfa", qual: 2, live: true,  secs: 900  },
        { initials: "LP", name: "Loyalty API",       color: "#3B82F6", qual: 2, live: false, secs: 7200 },
      ],
      footerStats: ["80M+ bookings", "15+ suppliers", "Real-time"],
    },
  },
  {
    highlight: "Revenue", rest: " Management",
    urlSlug: "revenue-management",
    tiles: [
      { name: "Ancillary Upsell", desc: "Automated ancillary sequencing", color: "blue" },
      { name: "Fare Optimisation", desc: "Class-level yield modelling", color: "purple" },
      { name: "Yield Management", desc: "Demand-driven pricing tools", color: "blue" },
      { name: "Commission Tracking", desc: "Agent & channel payments", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Ancillary Attach", pct: 74, color: "#5b7fff" },
        { label: "Fare Utilisation", pct: 88, color: "#34d399" },
        { label: "Yield Score",      pct: 82, color: "#a78bfa" },
        { label: "Commission Acc",   pct: 99, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:02", text: "Seat upsell rate: 38% on LHR-DXB"         },
        { time: "09:11:30", text: "Yield model updated for school holidays"   },
        { time: "09:08:18", text: "Commission batch settled: $84K"            },
      ],
      footer: "Updated every 15 min",
    },
  },
  {
    highlight: "Operations", rest: " & Back-office",
    urlSlug: "operations",
    tiles: [
      { name: "Agent Tools", desc: "Desktop booking & servicing", color: "blue" },
      { name: "Disruption Mgmt", desc: "Automated rebooking flows", color: "purple" },
      { name: "Supplier Recon", desc: "Invoice & payment matching", color: "blue" },
      { name: "Reporting", desc: "Operational dashboards", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines active",
      pipelines: [
        { label: "Agent Desktop",     pct: 100, rate: "Always-on",  color: "#5b7fff" },
        { label: "Disruption Engine", pct: 88,  rate: "Real-time",  color: "#34d399" },
        { label: "Supplier Recon",    pct: 76,  rate: "Daily batch", color: "#a78bfa" },
        { label: "Reporting Suite",   pct: 94,  rate: "On demand",  color: "#3B82F6" },
      ],
      metrics: [
        { label: "Disruptions",    value: "24 active" },
        { label: "Recon Match",    value: "99.7%"     },
        { label: "Agent Sessions", value: "1,840"     },
      ],
    },
  },
  {
    highlight: "Analytics", rest: " & Intelligence",
    urlSlug: "analytics-intelligence",
    tiles: [
      { name: "Funnel Analytics", desc: "Booking conversion insights", color: "blue" },
      { name: "Demand Forecasting", desc: "ML-driven demand models", color: "purple" },
      { name: "Customer LTV", desc: "Lifetime value segmentation", color: "blue" },
      { name: "Route Performance", desc: "Inventory & yield analytics", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Travel Intelligence v2.4",
      inferences: [
        { label: "Funnel Analysis", pct: 92, color: "#5b7fff", level: "High"   },
        { label: "Demand Forecast", pct: 87, color: "#34d399", level: "Strong" },
        { label: "Customer LTV",    pct: 84, color: "#a78bfa", level: "Strong" },
        { label: "Route Perf AI",   pct: 89, color: "#3B82F6", level: "High"   },
      ],
      alertsLabel: "Intelligence Signals",
      alerts: [
        { time: "09:16:02", text: "Summer demand spike detected: +22%", sev: "#34d399" },
        { time: "09:12:30", text: "LTV model: Segment A churning",      sev: "#f59e0b" },
        { time: "09:08:44", text: "Route DXB-SIN underperforming",      sev: "#ef4444" },
      ],
      footer: "Analysed 80M+ bookings",
    },
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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Slow search results<br />
            <span className="text-white/35">send travellers to competitors.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re booking flights, hotels, or full itineraries, we build the
            travel infrastructure that converts searchers into passengers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=travel" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a travel tech engineer
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


