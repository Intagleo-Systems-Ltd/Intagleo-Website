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
    highlight: "Payment", rest: " Infrastructure",
    urlSlug: "payment-infrastructure",
    tiles: [
      { name: "Multi-rail Processing", desc: "Stripe, ACH, SEPA routing", color: "blue" },
      { name: "PCI DSS Compliance", desc: "Card data security layer", color: "blue" },
      { name: "Fraud Detection", desc: "Real-time ML scoring", color: "purple" },
      { name: "Reconciliation", desc: "Automated settlement", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Rails Live",
      rows: [
        { label: "Stripe Gateway", value: "Online", stat: "14ms" },
        { label: "ACH Rail", value: "Online", stat: "8ms" },
        { label: "SEPA Network", value: "Online", stat: "22ms" },
        { label: "SWIFT Bridge", value: "Online", stat: "31ms" },
      ],
      chartLabel: "TX Volume\n24h",
      bars: [42,38,55,61,48,52,70,78,65,72,80,74,68,76,83,79,85,88,72,90,84,78,86,92],
    },
  },
  {
    highlight: "Banking", rest: " & Core Systems",
    urlSlug: "banking-core-systems",
    tiles: [
      { name: "Core Banking", desc: "Integration layer", color: "blue" },
      { name: "Open Banking APIs", desc: "PSD2 & beyond", color: "blue" },
      { name: "Ledger Architecture", desc: "Double-entry systems", color: "purple" },
      { name: "Account Management", desc: "Full lifecycle workflows", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines running",
      pipelines: [
        { label: "Core Tx Processing", pct: 94, rate: "12.4k/s", color: "#5b7fff" },
        { label: "Batch Settlement", pct: 78, rate: "Nightly", color: "#3B82F6" },
        { label: "Ledger Reconcile", pct: 100, rate: "Real-time", color: "#34d399" },
        { label: "Account Sync", pct: 86, rate: "Event-driven", color: "#a78bfa" },
      ],
      metrics: [
        { label: "Journals Today", value: "2.4M" },
        { label: "Active Accounts", value: "184K" },
        { label: "Error Rate", value: "0.002%" },
      ],
    },
  },
  {
    highlight: "Lending", rest: " & Credit Platforms",
    urlSlug: "lending-credit",
    tiles: [
      { name: "Credit Scoring", desc: "Custom ML models", color: "blue" },
      { name: "Loan Origination", desc: "End-to-end LOS", color: "blue" },
      { name: "Collections", desc: "Automated workflows", color: "purple" },
      { name: "Bureau Integration", desc: "Equifax, Experian", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Model Accuracy", pct: 97, color: "#5b7fff" },
        { label: "Bureau Match", pct: 99, color: "#34d399" },
        { label: "Auto-Approval", pct: 74, color: "#a78bfa" },
        { label: "Collection Rate", pct: 88, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:02", text: "Loan #8821 approved" },
        { time: "09:13:10", text: "Bureau refresh complete" },
        { time: "09:12:44", text: "Score model retrained" },
      ],
      footer: "Updated every 15 min",
    },
  },
  {
    highlight: "Compliance", rest: " & RegTech",
    urlSlug: "compliance-regtech",
    tiles: [
      { name: "KYC/AML Workflows", desc: "Automated checks", color: "blue" },
      { name: "Transaction Monitor", desc: "Real-time screening", color: "blue" },
      { name: "Regulatory Reporting", desc: "Automated pipelines", color: "purple" },
      { name: "Sanctions Screening", desc: "PEP & OFAC lists", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "AML Engine v4.2",
      inferences: [
        { label: "Fraud Detection", pct: 99, color: "#ef4444", level: "Critical" },
        { label: "AML Risk Score", pct: 87, color: "#f59e0b", level: "High" },
        { label: "KYC Confidence", pct: 96, color: "#5b7fff", level: "High" },
        { label: "Sanctions Match", pct: 100, color: "#34d399", level: "Clear" },
      ],
      alertsLabel: "Live Signals",
      alerts: [
        { time: "09:15:01", text: "Suspicious pattern on TXN-9912", sev: "#ef4444" },
        { time: "09:12:33", text: "KYC review passed for Entity-774", sev: "#34d399" },
        { time: "09:10:18", text: "OFAC list updated – 3 new entries", sev: "#f59e0b" },
      ],
      footer: "Monitored 24/7",
    },
  },
  {
    highlight: "Data", rest: " & Risk Analytics",
    urlSlug: "data-risk-analytics",
    tiles: [
      { name: "Risk Dashboards", desc: "Real-time scoring", color: "blue" },
      { name: "Portfolio Analytics", desc: "Exposure tracking", color: "blue" },
      { name: "Anomaly Detection", desc: "ML-based monitoring", color: "purple" },
      { name: "Stress Testing", desc: "Regulatory models", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "Risk Hub",
      nodes: [
        { x: 118, y: 28, label: "Credit Bureau", sub: "FICO / VantageScore", color: "#5b7fff" },
        { x: 198, y: 72, label: "Market Data", sub: "Bloomberg feeds", color: "#a78bfa" },
        { x: 208, y: 148, label: "TX Ledger", sub: "Event stream", color: "#34d399" },
        { x: 140, y: 188, label: "Stress Models", sub: "Basel III engine", color: "#3B82F6" },
        { x: 42, y: 152, label: "Fraud Engine", sub: "ML scoring", color: "#f59e0b" },
      ],
      footer: "5 data feeds · 60s refresh",
    },
  },
  {
    highlight: "Embedded", rest: " Finance & BaaS",
    urlSlug: "embedded-finance-baas",
    tiles: [
      { name: "BaaS APIs", desc: "Banking-as-a-Service", color: "blue" },
      { name: "Card Issuing", desc: "White-label programs", color: "blue" },
      { name: "Wallet Infrastructure", desc: "Digital wallets", color: "purple" },
      { name: "Financial Data APIs", desc: "Data aggregation", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 API Sessions Active",
      sessions: [
        { initials: "SH", name: "Shopify Connect", color: "#5b7fff", qual: 3, live: true, secs: 1240 },
        { initials: "UB", name: "Uber Money API", color: "#a78bfa", qual: 2, live: true, secs: 3820 },
        { initials: "WP", name: "Wallet Processor", color: "#34d399", qual: 3, live: true, secs: 542 },
        { initials: "CA", name: "Card Issuer Auth", color: "#3B82F6", qual: 3, live: false, secs: 7234 },
      ],
      footerStats: ["API uptime: 99.99%", "Latency: 12ms p50", "4 tenants"],
    },
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
      <section className="relative min-h-[85vh] flex flex-col items-center pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium customHeading leading-[1.07] tracking-tight mb-5">
            Financial technology built<br />for trust at every transaction.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From payment infrastructure to compliance automation and embedded finance APIs,
            we build the fintech software that moves money safely and scales without friction.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=fintech" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a Fintech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern fintech stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
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
            <Link href="/contact?type=fintech-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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
                    <span className={`text-[9px] font-mono ${item.up ? "text-green-400" : "text-[#3B82F6]"}`}>{item.change}</span>
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
                      <span className={row.type === "Credit" ? "text-green-400/70" : "text-[#3B82F6]/70"}>{row.type}</span>
                      <span className={`font-medium ${row.type === "Credit" ? "text-green-400" : "text-[#3B82F6]"}`}>{row.amount}</span>
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
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From compliance liability to a financial platform built for scale
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t bolt compliance onto existing systems. Every engagement starts with your
              regulatory obligations and the payment flows that must never fail.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Compliance & Tech Audit", desc: "We map your payment architecture, KYC/AML workflows, data residency requirements, and the compliance gaps your current setup creates.", align: "left" },
    { num: "02", title: "Architecture Design", desc: "We design for regulatory confidence: immutable audit trails, real-time transaction monitoring, and payment infrastructure that survives scrutiny.", align: "right" },
    { num: "03", title: "Build & Certify", desc: "We develop with PCI DSS, SOC 2, and regional financial regulations as primary design constraints - not afterthoughts.", align: "left" },
    { num: "04", title: "Deploy & Monitor", desc: "Staged go-live with compliance monitoring live from day one, then continuous improvement of fraud detection and operational efficiency.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Fintech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your financial operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built financial infrastructure eliminates the manual processes and compliance
                  gaps that create risk and slow growth. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=fintech" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
            Compliance gaps discovered<br />
            <span className="text-white/35">by regulators cost far more than fixing them.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving millions or billions, we build the financial infrastructure
            that keeps every transaction compliant, secure, and on time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=fintech" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to a fintech engineer
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


