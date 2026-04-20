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
    highlight: "Commerce", rest: " Platform Engineering",
    annotations: [
      { pos: "tl", text: "Headless Storefront" },
      { pos: "tr", text: "Multi-currency Checkout" },
      { pos: "bl", text: "Custom Cart Logic" },
      { pos: "br", text: "Payment Gateway Integration" },
    ],
    items: ["Headless commerce architecture", "Custom checkout flows", "Multi-currency & tax", "Payment gateway integration"],
  },
  {
    highlight: "Inventory", rest: " & Order Management",
    annotations: [
      { pos: "tl", text: "Real-time Stock Sync" },
      { pos: "tr", text: "Multi-warehouse Routing" },
      { pos: "bl", text: "Backorder Handling" },
      { pos: "br", text: "Supplier Integration" },
    ],
    items: ["Real-time inventory sync", "Multi-warehouse routing", "Backorder & pre-order logic", "Supplier & 3PL integration"],
  },
  {
    highlight: "Personalisation", rest: " & Merchandising",
    annotations: [
      { pos: "tl", text: "AI Recommendation Engine" },
      { pos: "tr", text: "Dynamic Pricing Rules" },
      { pos: "bl", text: "Behavioural Segmentation" },
      { pos: "br", text: "A/B Testing Framework" },
    ],
    items: ["AI product recommendations", "Dynamic pricing rules", "Behavioural segmentation", "A/B testing infrastructure"],
  },
  {
    highlight: "Analytics", rest: " & Revenue Intelligence",
    annotations: [
      { pos: "tl", text: "Conversion Funnel Tracking" },
      { pos: "tr", text: "Customer LTV Modelling" },
      { pos: "bl", text: "Cart Abandonment Signals" },
      { pos: "br", text: "Revenue Attribution" },
    ],
    items: ["Conversion funnel analytics", "Customer LTV modelling", "Cart abandonment recovery", "Revenue attribution"],
  },
  {
    highlight: "Omnichannel", rest: " & Marketplace",
    annotations: [
      { pos: "tl", text: "POS System Integration" },
      { pos: "tr", text: "Amazon & eBay Sync" },
      { pos: "bl", text: "Social Commerce APIs" },
      { pos: "br", text: "Unified Customer View" },
    ],
    items: ["POS & in-store integration", "Marketplace syndication", "Social commerce channels", "Unified customer profiles"],
  },
  {
    highlight: "Performance", rest: " & Scalability",
    annotations: [
      { pos: "tl", text: "CDN-first Architecture" },
      { pos: "tr", text: "Peak Load Handling" },
      { pos: "bl", text: "Edge Caching Strategy" },
      { pos: "br", text: "Core Web Vitals Optimisation" },
    ],
    items: ["CDN-first delivery", "Peak load architecture", "Edge caching strategy", "Core Web Vitals optimisation"],
  },
];

const GRID_COLS = 6;
const GRID_ROWS = 4;

export default function EcommerceRetailPage() {
  const [activeTab, setActiveTab] = useState(0);
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
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Commerce infrastructure that<br />converts at any scale.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From headless storefronts to AI-driven merchandising, we build the retail software
            that turns browsers into buyers — and buyers into loyal customers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=ecommerce" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a Commerce Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by retailers processing millions in transactions daily.</p>
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
                  Slow checkouts and fragmented inventory are silently killing your revenue.{" "}
                  <span className="text-white/35">Most retailers only notice when CAC spikes.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every abandoned cart, every out-of-stock error, every page that takes 4 seconds to load — that&apos;s
                  compounding revenue loss that doesn&apos;t show up cleanly in your dashboard.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built commerce platforms for brands at every scale, focusing on the conversion and
                  inventory architecture that drives sustainable retail growth.
                </p>
                <Link href="/contact?type=ecommerce" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Commerce Engineer
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
            <p className="text-white/40 text-base">Built across the modern commerce stack</p>
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
              <span className="text-white">Is your commerce stack </span>
              <span className="text-white/30">leaking revenue at every layer?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We audit your entire commerce infrastructure — from storefront performance
              to order pipeline bottlenecks — and map the exact points where revenue
              is being left on the table.
            </p>
            <Link href="/contact?type=ecommerce-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Book a Commerce Review
            </Link>
          </div>

          {/* Isometric warehouse box grid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Warehouse Grid View</span>
              <span className="text-[10px] text-[#e8341c]/70 font-mono">{GRID_COLS * GRID_ROWS} locations</span>
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
                      ${isActive ? "bg-[#e8341c]/30 border border-[#e8341c]/60" :
                        isPrev ? "bg-[#e8341c]/10 border border-[#e8341c]/20" :
                        fill ? "bg-white/[0.06] border border-white/[0.05]" : "bg-transparent border border-white/[0.03]"}`}
                  >
                    {fill && !isActive && <span className="text-[6px] text-white/20 font-mono">SKU</span>}
                    {isActive && (
                      <svg className="w-3 h-3 text-[#e8341c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From fragmented stack to a commerce engine built for growth
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt features onto broken foundations. Every engagement starts with your
              customer journey and revenue goals.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Commerce Audit", desc: "We map your storefront performance, checkout conversion, inventory accuracy, and integration landscape before any code is written.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design for conversion: CDN-first delivery, headless flexibility, event-driven inventory, and personalisation infrastructure that scales.", align: "right" },
              { num: "03", title: "Build & Validate", desc: "We develop with performance, accessibility, and payment security as first-class requirements embedded in every sprint.", align: "left" },
              { num: "04", title: "Launch & Optimise", desc: "Phased migration of your catalogue and customer data, then continuous optimisation driven by real conversion signals.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Commerce Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your revenue</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built commerce infrastructure eliminates the friction that caps conversion
                  and customer lifetime value. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=ecommerce" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Carts abandoned today<br />
            <span className="text-white/35">are revenue lost forever.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving $1M or $1B in GMV, we build the commerce infrastructure
            that converts at every touchpoint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=ecommerce" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a commerce engineer
            </Link>
            <Link href="/contact?type=ecommerce-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book a platform review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
