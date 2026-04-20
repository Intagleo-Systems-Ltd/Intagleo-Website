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
    highlight: "Payment", rest: " Infrastructure",
    annotations: [
      { pos: "tl", text: "Multi-rail Payment Processing" },
      { pos: "tr", text: "PCI DSS Compliance" },
      { pos: "bl", text: "Fraud Detection Engine" },
      { pos: "br", text: "Reconciliation Automation" },
    ],
    items: ["Multi-rail payment processing", "PCI DSS compliance", "Real-time fraud detection", "Automated reconciliation"],
  },
  {
    highlight: "Banking", rest: " & Core Systems",
    annotations: [
      { pos: "tl", text: "Core Banking Integration" },
      { pos: "tr", text: "Open Banking APIs" },
      { pos: "bl", text: "Ledger Architecture" },
      { pos: "br", text: "Account Management" },
    ],
    items: ["Core banking integration", "Open banking API layer", "Double-entry ledger systems", "Account lifecycle management"],
  },
  {
    highlight: "Lending", rest: " & Credit Platforms",
    annotations: [
      { pos: "tl", text: "Credit Scoring Engine" },
      { pos: "tr", text: "Loan Origination System" },
      { pos: "bl", text: "Collections Automation" },
      { pos: "br", text: "Bureau Integration" },
    ],
    items: ["Custom credit scoring models", "Loan origination systems", "Collections automation", "Credit bureau integration"],
  },
  {
    highlight: "Compliance", rest: " & RegTech",
    annotations: [
      { pos: "tl", text: "KYC/AML Workflows" },
      { pos: "tr", text: "Transaction Monitoring" },
      { pos: "bl", text: "Regulatory Reporting" },
      { pos: "br", text: "Sanctions Screening" },
    ],
    items: ["KYC/AML workflow automation", "Real-time transaction monitoring", "Regulatory reporting pipelines", "Sanctions & PEP screening"],
  },
  {
    highlight: "Data", rest: " & Risk Analytics",
    annotations: [
      { pos: "tl", text: "Risk Scoring Dashboards" },
      { pos: "tr", text: "Portfolio Analytics" },
      { pos: "bl", text: "Anomaly Detection" },
      { pos: "br", text: "Stress Testing Models" },
    ],
    items: ["Risk scoring systems", "Portfolio analytics", "Anomaly detection models", "Regulatory stress testing"],
  },
  {
    highlight: "Embedded", rest: " Finance & BaaS",
    annotations: [
      { pos: "tl", text: "Banking-as-a-Service APIs" },
      { pos: "tr", text: "White-label Card Issuing" },
      { pos: "bl", text: "Wallet Infrastructure" },
      { pos: "br", text: "Financial Data APIs" },
    ],
    items: ["Banking-as-a-service APIs", "White-label card issuing", "Digital wallet infrastructure", "Financial data aggregation"],
  },
];

const TICKER_ITEMS = [
  { symbol: "BTC/USD", price: "67,432.10", change: "+2.4%", up: true },
  { symbol: "ETH/USD", price: "3,521.88", change: "+1.8%", up: true },
  { symbol: "GBP/USD", price: "1.2734", change: "-0.3%", up: false },
  { symbol: "EUR/USD", price: "1.0892", change: "+0.1%", up: true },
  { symbol: "AAPL", price: "182.63", change: "+0.6%", up: true },
  { symbol: "JPY/USD", price: "0.00663", change: "-0.5%", up: false },
];

const LEDGER_ROWS = [
  { id: "TXN-8821", type: "Credit", amount: "+$12,450.00", status: "Settled", time: "09:14:02" },
  { id: "TXN-8820", type: "Debit", amount: "-$3,200.00", status: "Settled", time: "09:13:55" },
  { id: "TXN-8819", type: "Credit", amount: "+$890.50", status: "Pending", time: "09:13:40" },
  { id: "TXN-8818", type: "Debit", amount: "-$45,000.00", status: "Settled", time: "09:12:18" },
  { id: "TXN-8817", type: "Credit", amount: "+$7,125.00", status: "Settled", time: "09:11:05" },
];

export default function FintechPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [tickerOffset, setTickerOffset] = useState(0);
  const [activeLedger, setActiveLedger] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTickerOffset((o) => o + 1), 30);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveLedger((i) => (i + 1) % LEDGER_ROWS.length), 1200);
    return () => clearInterval(t);
  }, []);

  const TICKER_WIDTH = 120;
  const totalWidth = TICKER_ITEMS.length * TICKER_WIDTH;

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
            Financial technology built<br />for trust at every transaction.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From payment infrastructure to compliance automation and embedded finance APIs,
            we build the fintech software that moves money safely and scales without friction.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=fintech" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a Fintech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by financial institutions processing billions in transactions.</p>
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
                  Legacy payment rails and compliance gaps are silently increasing your risk exposure.{" "}
                  <span className="text-white/35">Most firms only find out during a failed audit.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every manual reconciliation step, every KYC bottleneck, every payment failure that
                  can&apos;t be traced - that&apos;s regulatory risk and operational cost accumulating in the dark.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built financial platforms trusted by institutions processing billions in transactions,
                  focused on the compliance architecture and payment reliability that finance demands.
                </p>
                <Link href="/contact?type=fintech" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Fintech Engineer
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
            <p className="text-white/40 text-base">Built across the modern fintech stack</p>
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
              <span className="text-white">Are compliance gaps hiding </span>
              <span className="text-white/30">inside your payment stack?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive fintech architecture reviews - examining your payment rails,
              KYC/AML workflows, and audit trail integrity - before a regulator or incident forces
              the conversation.
            </p>
            <Link href="/contact?type=fintech-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Book a Fintech Architecture Review
            </Link>
          </div>

          {/* Ticker + Ledger */}
          <div className="relative rounded-2xl overflow-hidden bg-[#060810] border border-white/[0.07] flex flex-col" style={{ height: "380px" }}>
            {/* Scrolling ticker */}
            <div className="border-b border-white/[0.06] py-2 overflow-hidden relative flex-shrink-0">
              <div
                className="flex gap-0 absolute"
                style={{ transform: `translateX(-${tickerOffset % totalWidth}px)`, whiteSpace: "nowrap" }}
              >
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 border-r border-white/[0.05]" style={{ width: `${TICKER_WIDTH}px` }}>
                    <span className="text-[10px] font-mono text-white/40">{item.symbol}</span>
                    <span className="text-[10px] font-mono text-white/70">{item.price}</span>
                    <span className={`text-[9px] font-mono ${item.up ? "text-green-400" : "text-[#e8341c]"}`}>{item.change}</span>
                  </div>
                ))}
              </div>
              <div className="h-6" />
            </div>

            {/* Ledger */}
            <div className="flex-1 flex flex-col p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Transaction Ledger</span>
                <span className="flex items-center gap-1 text-[10px] text-green-400/60 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Live
                </span>
              </div>
              {/* Header */}
              <div className="grid grid-cols-[80px_60px_100px_70px_70px] gap-2 mb-2 px-2">
                {["TX ID", "TYPE", "AMOUNT", "STATUS", "TIME"].map((h) => (
                  <span key={h} className="text-[8px] text-white/20 uppercase font-mono tracking-widest">{h}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {LEDGER_ROWS.map((row, i) => {
                  const isActive = activeLedger === i;
                  return (
                    <div key={row.id} className={`grid grid-cols-[80px_60px_100px_70px_70px] gap-2 items-center px-2 py-1.5 rounded-lg font-mono text-[11px] transition-all duration-200
                      ${isActive ? "bg-white/[0.05] border border-white/[0.09]" : "border border-transparent"}`}>
                      <span className="text-white/30 truncate">{row.id}</span>
                      <span className={row.type === "Credit" ? "text-green-400/70" : "text-[#e8341c]/70"}>{row.type}</span>
                      <span className={`font-medium ${row.type === "Credit" ? "text-green-400" : "text-[#e8341c]"}`}>{row.amount}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded text-center ${row.status === "Settled" ? "bg-green-500/10 text-green-400/70" : "bg-yellow-500/10 text-yellow-400/70"}`}>{row.status}</span>
                      <span className="text-white/25">{row.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From compliance liability to a financial platform built for scale
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt compliance onto existing systems. Every engagement starts with your
              regulatory obligations and the payment flows that must never fail.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Compliance & Tech Audit", desc: "We map your payment architecture, KYC/AML workflows, data residency requirements, and the compliance gaps your current setup creates.", align: "left" },
              { num: "02", title: "Architecture Design", desc: "We design for regulatory confidence: immutable audit trails, real-time transaction monitoring, and payment infrastructure that survives scrutiny.", align: "right" },
              { num: "03", title: "Build & Certify", desc: "We develop with PCI DSS, SOC 2, and regional financial regulations as primary design constraints - not afterthoughts.", align: "left" },
              { num: "04", title: "Deploy & Monitor", desc: "Staged go-live with compliance monitoring live from day one, then continuous improvement of fraud detection and operational efficiency.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Fintech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your financial operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built financial infrastructure eliminates the manual processes and compliance
                  gaps that create risk and slow growth. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=fintech" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Payment Reliability", desc: "Multi-rail architecture with intelligent fallback routing ensures transactions complete even when a primary processor has issues." },
              { num: "02", title: "Compliance Confidence", desc: "Automated KYC/AML workflows, real-time transaction monitoring, and immutable audit trails mean you&apos;re always audit-ready." },
              { num: "03", title: "Fraud Reduction", desc: "ML-based fraud detection trained on your transaction patterns catches anomalies in real time, reducing chargebacks and losses." },
              { num: "04", title: "Operational Efficiency", desc: "Automated reconciliation, exception handling, and reporting eliminate the manual back-office work that consumes finance teams." },
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

      <CaseStudiesSection pageSlug="fintech" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">$50B+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Transactions processed annually</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.99%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Payment uptime delivered</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">60%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Reduction in fraud losses avg.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">25+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Regulated markets served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="fintech" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Compliance gaps discovered<br />
            <span className="text-white/35">by regulators cost far more than fixing them.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving millions or billions, we build the financial infrastructure
            that keeps every transaction compliant, secure, and on time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=fintech" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to a fintech engineer
            </Link>
            <Link href="/contact?type=fintech-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book an architecture review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
