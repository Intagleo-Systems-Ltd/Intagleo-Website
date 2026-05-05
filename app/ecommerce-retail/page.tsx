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
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium customHeading leading-[1.07] tracking-tight mb-5">
            Commerce infrastructure that<br />converts at any scale.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From headless storefronts to AI-driven merchandising, we build the retail software
            that turns browsers into buyers - and buyers into loyal customers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=ecommerce" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a Commerce Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern commerce stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your commerce stack </span>
              <span className="text-white/30">leaking revenue at every layer?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your entire commerce infrastructure - from storefront performance
              to order pipeline bottlenecks - and map the exact points where revenue
              is being left on the table.
            </p>
            <Link href="/contact?type=ecommerce-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book a Commerce Review
            </Link>
          </div>

          {/* Isometric warehouse box grid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Warehouse Grid View</span>
              <span className="text-[10px] text-[#3B82F6]/70 font-mono">{GRID_COLS * GRID_ROWS} locations</span>
            </div>
            <div
              className="grid gap-1.5"
              style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`, gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`, height: "calc(100% - 36px)" }}
            >
              {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => {
                const isActive = activeBox === i;
                const isPrev = (activeBox - 1 + GRID_COLS * GRID_ROWS) % (GRID_COLS * GRID_ROWS) === i;
                const fill = Math.random() > 0.35;
                return (
                  <div
                    key={i}
                    className={`rounded transition-all duration-200 flex items-center justify-center
                      ${isActive ? "bg-[#3B82F6]/30 border border-[#3B82F6]/60" :
                        isPrev ? "bg-[#3B82F6]/10 border border-[#3B82F6]/20" :
                        fill ? "bg-white/[0.06] border border-white/[0.05]" : "bg-transparent border border-white/[0.03]"}`}
                  >
                    {fill && !isActive && <span className="text-[6px] text-white/20 font-mono">SKU</span>}
                    {isActive && (
                      <svg className="w-3 h-3 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
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
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From fragmented stack to a commerce engine built for growth
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt features onto broken foundations. Every engagement starts with your
              customer journey and revenue goals.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Commerce Audit", desc: "We map your storefront performance, checkout conversion, inventory accuracy, and integration landscape before any code is written.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design for conversion: CDN-first delivery, headless flexibility, event-driven inventory, and personalisation infrastructure that scales.", align: "right" },
    { num: "03", title: "Build & Validate", desc: "We develop with performance, accessibility, and payment security as first-class requirements embedded in every sprint.", align: "left" },
    { num: "04", title: "Launch & Optimise", desc: "Phased migration of your catalogue and customer data, then continuous optimisation driven by real conversion signals.", align: "right" },
  ]} />
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fintech.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Commerce Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your revenue</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built commerce infrastructure eliminates the friction that caps conversion
                  and customer lifetime value. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=ecommerce" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Checkout Conversion", desc: "Streamlined, fast checkout flows with intelligent cart recovery reduce abandonment and capture revenue at the final step." },
              { num: "02", title: "Inventory Accuracy", desc: "Real-time stock sync across all channels eliminates overselling, stockout errors, and the customer trust damage they cause." },
              { num: "03", title: "Platform Performance", desc: "Sub-second storefronts and optimised Core Web Vitals directly improve SEO ranking and conversion rate simultaneously." },
              { num: "04", title: "Customer Intelligence", desc: "Unified purchase history and behavioural data power personalisation that increases average order value and repeat purchase rate." },
            ].map((item) => (
              <div key={item.title} className="flex-1 flex items-start gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200">
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

      <CaseStudiesSection pageSlug="ecommerce-retail" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">$2B+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">GMV processed on platforms built</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">38%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Average checkout conversion lift</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">20+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Marketplace integrations delivered</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">&lt;1s</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Storefront load time achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="ecommerce-retail" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
            Carts abandoned today<br />
            <span className="text-white/35">are revenue lost forever.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving $1M or $1B in GMV, we build the commerce infrastructure
            that converts at every touchpoint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=ecommerce" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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
