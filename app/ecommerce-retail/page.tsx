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
    highlight: "Commerce", rest: " Platform Engineering",
    urlSlug: "commerce-platform",
    tiles: [
      { name: "Headless Storefront", desc: "Decoupled architecture", color: "blue" },
      { name: "Multi-currency Checkout", desc: "Global tax handling", color: "blue" },
      { name: "Custom Cart Logic", desc: "Rules engine", color: "purple" },
      { name: "Payment Gateways", desc: "Stripe, Adyen, Braintree", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "Store Live",
      rows: [
        { label: "Storefront CDN", value: "Online", stat: "38ms" },
        { label: "Checkout API", value: "Online", stat: "12ms" },
        { label: "Payment Gateway", value: "Online", stat: "95ms" },
        { label: "Cart Service", value: "Online", stat: "6ms" },
      ],
      chartLabel: "Checkouts\nToday",
      bars: [22,30,38,45,52,48,60,72,68,80,85,78,90,84,76,88,92,86,80,74,82,78,88,94],
    },
  },
  {
    highlight: "Inventory", rest: " & Order Management",
    urlSlug: "inventory-order-management",
    tiles: [
      { name: "Real-time Stock Sync", desc: "Across all channels", color: "blue" },
      { name: "Multi-warehouse", desc: "Intelligent routing", color: "blue" },
      { name: "Backorder Logic", desc: "Pre-order workflows", color: "purple" },
      { name: "3PL Integration", desc: "Supplier APIs", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "Stock Sync", pct: 100, rate: "Real-time", color: "#34d399" },
        { label: "Order Routing", pct: 88, rate: "Automated", color: "#5b7fff" },
        { label: "3PL Handoff", pct: 72, rate: "On-demand", color: "#a78bfa" },
        { label: "Returns Processing", pct: 65, rate: "Batch", color: "#3B82F6" },
      ],
      metrics: [
        { label: "Orders Today", value: "14.2K" },
        { label: "SKUs Tracked", value: "82K" },
        { label: "Accuracy", value: "99.8%" },
      ],
    },
  },
  {
    highlight: "Personalisation", rest: " & Merchandising",
    urlSlug: "personalisation-merchandising",
    tiles: [
      { name: "AI Recommendations", desc: "Collaborative filtering", color: "blue" },
      { name: "Dynamic Pricing", desc: "Rule-based engine", color: "blue" },
      { name: "Behavioural Segments", desc: "ML clustering", color: "purple" },
      { name: "A/B Testing", desc: "Experimentation platform", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Rec Engine v6.0",
      inferences: [
        { label: "Click-through Rate", pct: 34, color: "#5b7fff", level: "High" },
        { label: "Add-to-cart Rate", pct: 22, color: "#a78bfa", level: "High" },
        { label: "Cross-sell Match", pct: 91, color: "#34d399", level: "Strong" },
        { label: "Price Sensitivity", pct: 78, color: "#f59e0b", level: "Medium" },
      ],
      alertsLabel: "Live Signals",
      alerts: [
        { time: "10:34:02", text: "Segment A: CTR up 18% vs baseline", sev: "#34d399" },
        { time: "10:28:19", text: "Price rule triggered for Category 12", sev: "#5b7fff" },
        { time: "10:22:44", text: "A/B test variant B reached significance", sev: "#a78bfa" },
      ],
      footer: "Models retrain nightly",
    },
  },
  {
    highlight: "Analytics", rest: " & Revenue Intelligence",
    urlSlug: "revenue-analytics",
    tiles: [
      { name: "Conversion Funnels", desc: "End-to-end tracking", color: "blue" },
      { name: "Customer LTV", desc: "Lifetime value models", color: "blue" },
      { name: "Cart Abandonment", desc: "Recovery signals", color: "purple" },
      { name: "Revenue Attribution", desc: "Multi-touch models", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "CVR Overall", pct: 3, color: "#5b7fff" },
        { label: "Cart Recovery", pct: 18, color: "#a78bfa" },
        { label: "Repeat Purchase", pct: 42, color: "#34d399" },
        { label: "AOV Growth", pct: 12, color: "#3B82F6" },
      ],
      events: [
        { time: "10:45:00", text: "Funnel CVR improved 0.4%" },
        { time: "10:38:12", text: "Recovery email batch sent" },
        { time: "10:30:55", text: "LTV model recalculated" },
      ],
      footer: "Reports refresh hourly",
    },
  },
  {
    highlight: "Omnichannel", rest: " & Marketplace",
    urlSlug: "omnichannel-marketplace",
    tiles: [
      { name: "POS Integration", desc: "In-store systems", color: "blue" },
      { name: "Marketplace Sync", desc: "Amazon & eBay", color: "blue" },
      { name: "Social Commerce", desc: "Instagram, TikTok", color: "purple" },
      { name: "Unified Profiles", desc: "Single customer view", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "Commerce Hub",
      nodes: [
        { x: 118, y: 28, label: "Amazon", sub: "Marketplace sync", color: "#f59e0b" },
        { x: 198, y: 70, label: "POS / Till", sub: "In-store integration", color: "#5b7fff" },
        { x: 208, y: 148, label: "Instagram", sub: "Social commerce", color: "#a78bfa" },
        { x: 140, y: 188, label: "eBay", sub: "Catalogue sync", color: "#3B82F6" },
        { x: 42, y: 152, label: "TikTok Shop", sub: "Live commerce", color: "#ef4444" },
      ],
      footer: "5 channels · unified inventory",
    },
  },
  {
    highlight: "Performance", rest: " & Scalability",
    urlSlug: "performance-scalability",
    tiles: [
      { name: "CDN-first Delivery", desc: "Edge-optimised", color: "blue" },
      { name: "Peak Load Handling", desc: "Black Friday ready", color: "blue" },
      { name: "Edge Caching", desc: "Dynamic + static", color: "purple" },
      { name: "Core Web Vitals", desc: "LCP, CLS, INP", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Edge Regions Active",
      sessions: [
        { initials: "US", name: "US-East (Cloudflare)", color: "#5b7fff", qual: 3, live: true, secs: 86400 },
        { initials: "EU", name: "EU-West (Cloudflare)", color: "#34d399", qual: 3, live: true, secs: 86400 },
        { initials: "AP", name: "APAC (Fastly)", color: "#a78bfa", qual: 2, live: true, secs: 86400 },
        { initials: "ME", name: "ME-South (Akamai)", color: "#3B82F6", qual: 2, live: false, secs: 86400 },
      ],
      footerStats: ["Cache hit: 98.4%", "LCP: 0.9s", "4 PoPs"],
    },
  },
];

const GRID_COLS = 6;
const GRID_ROWS = 4;

export default function EcommerceRetailPage() {
  const [activeBox, setActiveBox] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveBox((i) => (i + 1) % (GRID_COLS * GRID_ROWS)), 220);
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
            Carts abandoned today<br />
            <span className="text-white/35">are revenue lost forever.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving $1M or $1B in GMV, we build the commerce infrastructure
            that converts at every touchpoint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=ecommerce" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a commerce engineer
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
