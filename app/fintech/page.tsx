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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Compliance gaps cost more<br />
            <span className="text-white/35">when regulators find them first.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you&apos;re moving millions or billions, we build the financial infrastructure
            that keeps every transaction compliant, secure, and on time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=fintech" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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


