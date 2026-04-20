"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

/* ── Solutions ──────────────────────────────────────────────────────────── */
const solutions = [
  {
    title: "Custom LLM applications",
    desc: "GPT-4, Claude, and open-source models wired into your product, trained on your data, constrained by your rules.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 11h4M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="21" cy="11" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "AI-powered automation",
    desc: "Eliminate repetitive workflows. Document processing, data extraction, approval routing, and reporting, automated end-to-end.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path d="M6 14a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 6V3M14 25v-3M22 14h3M3 14h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Predictive analytics",
    desc: "Move from dashboards that describe the past to models that forecast the future, churn, demand, risk, and opportunity.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path d="M4 20l5-6 4 3 5-8 6 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 9l4 3-4 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Computer vision",
    desc: "Image classification, object detection, document OCR, and visual QA, deployed to web, mobile, or edge devices.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 14s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "AI strategy & readiness",
    desc: "A structured audit of your data, workflows, and competitive landscape, resulting in a 12-month AI roadmap with clear ROI targets.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI integration & MLOps",
    desc: "Model deployment, monitoring, retraining pipelines, and drift detection, so your AI keeps working months after launch.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <rect x="4" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="16" y="4" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="4" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="16" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 12v4M20 12v4M12 8h4M12 20h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ── Transformation scenarios ───────────────────────────────────────────── */
const scenarios = [
  {
    before: "Sales team spends 3 hours/day writing proposals",
    after:  "AI drafts proposals in 90 seconds, tailored to each client",
    tag:    "Sales & RevOps",
  },
  {
    before: "Support handles 500 tickets/week, 70% are repeat questions",
    after:  "AI resolves 65% of tickets instantly, 24/7, in any language",
    tag:    "Customer Support",
  },
  {
    before: "Finance team manually reconciles 10,000 rows of data monthly",
    after:  "AI reconciles, flags anomalies, and generates reports in minutes",
    tag:    "Finance & Ops",
  },
  {
    before: "Engineers spend 30% of their time reviewing and writing docs",
    after:  "AI generates, updates, and reviews documentation from the codebase",
    tag:    "Engineering",
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Opportunity mapping",
    desc: "We audit your workflows, data sources, and competitive landscape to identify where AI delivers the highest ROI in the shortest time.",
    align: "left",
  },
  {
    num: "02",
    title: "Prototype in 2 weeks",
    desc: "A working proof of concept against your real data and real workflows, so you see results before committing to a full build.",
    align: "right",
  },
  {
    num: "03",
    title: "Production build",
    desc: "We harden the prototype into a production-grade system, with auth, observability, guardrails, and integrations to your existing stack.",
    align: "left",
  },
  {
    num: "04",
    title: "Monitor & improve",
    desc: "Deployed models degrade. We set up drift detection, feedback loops, and retraining pipelines so your AI gets better over time.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "2wks",  label: "Avg. time to working prototype" },
  { big: "10×",   label: "Productivity gain in automated workflows" },
  { big: "40%",   label: "Avg. operational cost reduction" },
  { big: "200+",  label: "AI features shipped to production" },
];

/* ── LLM / AI tool icons ────────────────────────────────────────────────── */
const aiTools = [
  {
    name: "OpenAI",
    lp: 14.0, tp: 27.75,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 8a12 12 0 1 1 0 24A12 12 0 0 1 20 8zm0 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 3l2.5 5h5l-4 3 1.5 5L20 24l-5 3 1.5-5-4-3h5L20 14z" fill="white" fillOpacity="0.85"/></svg>,
  },
  {
    name: "Claude",
    lp: 84.0, tp: 31.16,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M12 28l4-12h2l2 6 2-6h2l4 12h-2.5l-2.5-8-2.5 8h-1l-2.5-8-2.5 8H12z" fill="#CC9B7A"/></svg>,
  },
  {
    name: "LangChain",
    lp: 20.0, tp: 42.52,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 20h6l2-4 2 8 2-5 2 3h6" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="2" fill="#1C3C3C"/><circle cx="30" cy="20" r="2" fill="#1C3C3C"/></svg>,
  },
  {
    name: "Pinecone",
    lp: 88.5, tp: 50.67,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 8l3 7h7l-5.5 4 2 7L20 22l-6.5 4 2-7L10 15h7L20 8z" fill="#1A1A2E" stroke="#6B4FBB" strokeWidth="1.2"/></svg>,
  },
  {
    name: "Hugging Face",
    lp: 8.5, tp: 55.77,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="12" stroke="#FFD21E" strokeWidth="1.5"/><circle cx="16" cy="17" r="1.5" fill="#FFD21E"/><circle cx="24" cy="17" r="1.5" fill="#FFD21E"/><path d="M14 23c1.5 3 10.5 3 12 0" stroke="#FFD21E" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 15c1-2 3-2 4 0M23 15c1-2 3-2 4 0" stroke="#FFD21E" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    name: "Python",
    lp: 72.38, tp: 60.52,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 10C15 10 13 12 13 15v3h7v1H11C8 19 6 21 6 24c0 3 2 5 5 5h2v-3c0-2.5 2-4 5-4s5 1.5 5 4v3h2c3 0 5-2 5-5 0-3-2-5-5-5h-7v-1h7v-3c0-3-2-5-5-5zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB"/><path d="M20 30c5 0 7-2 7-5v-3h-7v-1h9c3 0 5-2 5-5 0-3-2-5-5-5h-2v3c0 2.5-2 4-5 4s-5-1.5-5-4v-3H15c-3 0-5 2-5 5 0 3 2 5 5 5h7v1h-7v3c0 3 2 5 7 5zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD43B"/></svg>,
  },
  {
    name: "Llama",
    lp: 25.0, tp: 65.18,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M14 28V18c0-4 2-7 6-7s6 3 6 7v2c0 2-1 3-3 3h-3" stroke="#0467DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 28v-5" stroke="#0467DF" strokeWidth="1.5" strokeLinecap="round"/><circle cx="17" cy="15" r="1" fill="#0467DF"/></svg>,
  },
  {
    name: "PyTorch",
    lp: 73.16, tp: 27.04,
    icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 8C15 13 13 16 13 20a7 7 0 0 0 14 0c0-2-.7-3.8-2-5.5C23.5 16.5 22 18 22 20a2 2 0 0 1-4 0C18 16.5 19 13 20 8z" fill="#EE4C2C"/><circle cx="23" cy="13" r="1.5" fill="#EE4C2C"/></svg>,
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function AITransformationPage() {
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <div className="relative min-h-screen" style={{ background: "#050914" }}>
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.45 }}
          />
          {/* Deep navy-purple base */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,9,20,0.9) 0%, rgba(15,7,35,0.82) 50%, rgba(5,9,20,0.9) 100%)" }} />
          {/* Large central glow orb */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)" }} />
          {/* Subtle red accent at bottom-left */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 30% at 10% 80%, rgba(232,52,28,0.08) 0%, transparent 60%)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #05091a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-56" style={{ background: "linear-gradient(to top, #050914 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(to right, rgba(5,9,20,0.7), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(to left, rgba(5,9,20,0.7), transparent)" }} />
        </div>

        {/* Headline content */}
        <div className="relative z-10 max-w-4xl mx-auto pb-12">
          {/* Badge pill */}
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 backdrop-blur-sm" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(196,181,253,0.8)" }}>AI Transformation</span>
          </div> */}

          <h1
            className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-6"
            style={{ }}
          >
            AI is Moving Fast!!<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #e8341c 0%, #f97316 35%, #8B5CF6 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 32px rgba(139,92,246,0.35))",
              }}
            >
              Are You?
            </span>
            <br />
            {/* <span style={{ color: "rgba(255,255,255,0.22)" }}>operating system.</span> */}
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We help businesses identify, build, and deploy AI solutions that compound over time,
            reducing cost, accelerating output, and opening revenue channels that didn&apos;t exist before.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/contact?type=ai-transformation"
              className="px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                boxShadow: "0 0 24px rgba(139,92,246,0.3), 0 2px 8px rgba(0,0,0,0.4)",
                
              }}
            >
              Book an AI strategy call
            </Link>
            <Link
              href="#what-changes"
              className="px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
              style={{
                border: "1px solid rgba(139,92,246,0.2)",
                color: "rgba(196,181,253,0.7)",
                
              }}
            >
              See what changes
            </Link>
          </div>

          {/* Trusted by strip */}
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/25 text-sm">Trusted by teams building the next generation of their products.</p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
                { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
                { name: "Red Bull",    src: "/logos/red-bull.png",    invert: true  },
                { name: "KIA",         src: "/logos/kia.png",         invert: true  },
                { name: "Emaar",       src: "/logos/emaar.png",       invert: false },
                { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-35 hover:opacity-60 transition-opacity duration-300"
                  style={{ filter: logo.invert ? "brightness(0) invert(1)" : "none", maxWidth: "110px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hanging card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div
            className="rounded-t-2xl overflow-hidden"
            style={{ background: "#0d0f1e", border: "1px solid rgba(139,92,246,0.1)", borderBottom: "none" }}
          >
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4" style={{ background: "#090b18" }}>
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
                  <img src="/emp3.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4" style={{ }}>
                  Your competitors aren&apos;t waiting<br />
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>for AI to mature.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  The gap between AI-native businesses and everyone else is widening every quarter.
                  We help you move from &quot;evaluating AI&quot; to shipping AI-powered features,
                  automations, and products, with the engineering rigour to make them last.
                </p>
                <Link
                  href="/contact?type=ai-transformation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                    boxShadow: "0 0 18px rgba(139,92,246,0.25)",
                    
                  }}
                >
                  Talk to an AI engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT CHANGES — before/after scenarios                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="what-changes" className="relative section-padding py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(120,60,220,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Real impact</p>
            <h2 className="text-3xl md:text-[42px] font-bold text-white mb-4 leading-tight">
              What actually changes<br />when you add AI.
            </h2>
            <p className="text-white/40 max-w-md mx-auto text-sm">
              Not theoretical benchmarks. Real workflow shifts we have delivered for teams like yours.
            </p>
          </div>

          {/* Scenario selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveScenario(i)}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  background: activeScenario === i ? "rgba(232,52,28,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeScenario === i ? "rgba(232,52,28,0.4)" : "rgba(255,255,255,0.08)"}`,
                  color: activeScenario === i ? "#e8341c" : "rgba(255,255,255,0.45)",
                }}
              >
                {s.tag}
              </button>
            ))}
          </div>

          {/* Before / After card */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              {/* Before */}
              <div className="p-8 md:p-10" style={{ background: "#0d0e18" }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-xs text-white/30 uppercase tracking-widest">Before</span>
                </div>
                <p className="text-white/55 text-lg leading-relaxed">
                  {scenarios[activeScenario].before}
                </p>
              </div>
              {/* After */}
              <div className="p-8 md:p-10 relative overflow-hidden" style={{ background: "#0d0e18" }}>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(232,52,28,0.06) 0%, transparent 60%)" }}
                />
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#e8341c]" />
                  <span className="text-xs text-[#e8341c]/70 uppercase tracking-widest">After AI</span>
                </div>
                <p className="relative z-10 text-white text-lg leading-relaxed">
                  {scenarios[activeScenario].after}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE BUILD                                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24" style={{ background: "#050914" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(15,20,60,0.4) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-px" style={{ background: "rgba(232,52,28,0.5)" }} />
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(251,146,60,0.6)" }}>Solutions</p>
              <div className="w-5 h-px" style={{ background: "rgba(232,52,28,0.5)" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ }}>What We Build</h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
              AI solutions designed for production, not just demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="relative rounded-2xl overflow-hidden flex flex-col p-7 group"
                style={{ minHeight: "210px", background: "#0d0f1e", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.07) 0%, transparent 60%)" }}
                />
                {/* Top corner accent */}
                <div className="absolute top-0 left-0 w-16 h-px" style={{ background: "linear-gradient(to right, rgba(139,92,246,0.4), transparent)" }} />
                <div className="absolute top-0 left-0 w-px h-16" style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.4), transparent)" }} />

                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: "rgba(232,52,28,0.1)", color: "#e8341c", border: "1px solid rgba(232,52,28,0.18)" }}
                >
                  {s.icon}
                </div>
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug mb-3" style={{ }}>
                  {s.title}
                </h3>
                <p className="relative z-10 text-white/40 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mini CTA */}
          <div className="flex items-center justify-center mt-10">
            <Link
              href="/contact?type=ai-transformation"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                
              }}
            >
              See what we can build for you
              <svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* DO YOU KNOW                                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-padding py-6">
        <div
          className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(139,92,246,0.15)", background: "#0a0c1c" }}
        >
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight" style={{ }}>
              <span style={{ color: "#8B5CF6" }}>Do you know</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ }}>
              which of your workflows AI could eliminate this quarter?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Most businesses have 3-5 high-value automation opportunities hiding in plain sight.
              We find them in a single discovery session.
            </p>
            <Link
              href="/contact?type=ai-transformation"
              className="w-fit px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                boxShadow: "0 0 20px rgba(139,92,246,0.25)",
                
              }}
            >
              Book a free AI discovery session
            </Link>
          </div>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/staffaug1.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-50"
            />
            <div
              className="absolute inset-y-0 left-0 w-28 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0a0c1c, transparent)" }}
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS                                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how-it-works" className="relative section-padding py-28" style={{ background: "#060a1a" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-px" style={{ background: "rgba(139,92,246,0.5)" }} />
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(196,181,253,0.5)" }}>Our process</p>
              <div className="w-5 h-px" style={{ background: "rgba(139,92,246,0.5)" }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ }}>
              From idea to shipped AI,{" "}
              <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.35)" }}>in weeks.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              A proven process that de-risks AI projects and delivers value fast.
            </p>
          </div>
          <div className="relative">
            {/* Gradient vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, #e8341c, #8B5CF6, rgba(139,92,246,0.1))" }}
            />
            <div className="space-y-20">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span
                      className="text-7xl font-bold leading-none"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 16px rgba(139,92,246,0.3))",
                        
                      }}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-white font-bold text-xl mt-3 mb-3" style={{ }}>{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Step dot with glow */}
                  <div
                    className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: "#8B5CF6", boxShadow: "0 0 12px rgba(139,92,246,0.7)", border: "2px solid rgba(139,92,246,0.4)" }}
                  />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* AI TECH STACK                                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 overflow-hidden" style={{ background: "#050914" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "conic-gradient(from 180deg at 50% 110%, rgba(139,92,246,0.22) 0%, rgba(232,52,28,0.1) 12%, transparent 28%)"
        }} />
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 0% 60%, rgba(139,92,246,0.12) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 100% 60%, rgba(232,52,28,0.12) 0%, transparent 70%)"
        }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ }}>
            We work with the models that matter
          </h2>
          <p className="text-white/40 text-sm">
            From frontier LLMs to open-source frameworks, we use the right tool for your use case.
          </p>
        </div>

        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1117" preserveAspectRatio="xMidYMid meet" fill="none">
            <defs>
              <linearGradient id="og1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.4"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.3"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.8"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
            </defs>
            <rect x="121" y="89" width="1678" height="1153" rx="191" fill="url(#og1)" stroke="rgba(139,92,246,0.1)" strokeWidth="1"/>
            <rect x="240" y="209" width="1439" height="1033" rx="163" fill="url(#og2)" stroke="rgba(139,92,246,0.08)" strokeWidth="1"/>
            <rect x="366" y="336" width="1188" height="906" rx="145" fill="url(#og3)" stroke="rgba(139,92,246,0.07)" strokeWidth="1"/>
            <rect x="487" y="457" width="946" height="785" rx="145" fill="url(#og4)" stroke="rgba(232,52,28,0.07)" strokeWidth="1"/>
            <rect x="619" y="586" width="682" height="656" rx="116" fill="url(#og5)" stroke="rgba(232,52,28,0.06)" strokeWidth="1"/>
            <rect x="827" y="372" width="266" height="262" rx="52" fill="url(#ogInner)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741" y="684" width="438" height="307" rx="116" fill="url(#ogBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <path d="M960,503 C750,503 430,430 269,310" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1540,440 1613,348" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 500,475 384,475" stroke="rgba(232,52,28,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1620,503 1699,566" stroke="rgba(232,52,28,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 330,550 163,623" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,580 1390,676" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 540,640 480,728" stroke="rgba(232,52,28,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,380 1405,302" stroke="rgba(232,52,28,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>

          {aiTools.map((tool) => (
            <div key={tool.name} className="absolute z-10" style={{ left: `${tool.lp}%`, top: `${tool.tp}%`, transform: "translate(-50%,-50%)" }}>
              <div
                className="rounded-[18px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                style={{
                  width: "clamp(52px, 4.22vw, 82px)",
                  height: "clamp(52px, 4.22vw, 82px)",
                  padding: "clamp(10px, 0.8vw, 16px)",
                  backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  boxShadow: "0px 1px 14px 0px rgba(139,92,246,0.15)",
                  backdropFilter: "blur(3px)",
                }}
              >
                {tool.icon}
              </div>
              <p className="text-center text-white/30 mt-1.5" style={{ fontSize: "clamp(9px, 0.7vw, 12px)" }}>{tool.name}</p>
            </div>
          ))}

          {/* Center card */}
          <div className="absolute z-20" style={{ left: "49.9%", top: "45%", transform: "translate(-50%,-50%)" }}>
            <div
              className="rounded-[22px] flex items-center justify-center"
              style={{
                width: "clamp(80px, 12.66vw, 244px)",
                height: "clamp(80px, 12.55vw, 241px)",
                padding: "clamp(14px, 1.8vw, 30px)",
                backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "0px 1px 24px 0px rgba(139,92,246,0.2)",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-static.png" alt="Intagleo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Pill */}
          <div className="absolute z-20" style={{ left: "50%", top: "78%", transform: "translate(-50%,-50%)" }}>
            <div
              className="rounded-[58px] flex items-center justify-center"
              style={{
                padding: "clamp(8px, 1.5vw, 29px) clamp(20px, 3vw, 58px)",
                background: "linear-gradient(to bottom, #050914, rgba(5,9,20,0.6))",
                border: "1px solid rgba(139,92,246,0.15)",
              }}
            >
              <span
                className="whitespace-nowrap font-normal"
                style={{
                  fontSize: "clamp(13px, 1.25vw, 24px)",
                  backgroundImage: "linear-gradient(120deg, rgb(230,242,255) 20%, rgb(139,92,246) 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  
                }}
              >
                AI Models & Frameworks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* STATS                                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-8" style={{ background: "#060a1a" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.15), transparent)" }} />
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            {[
              { ...stats[0], span: true },
              { ...stats[1], span: false },
              { ...stats[3], span: true },
              { ...stats[2], span: false },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${stat.span ? "md:row-span-2" : ""} relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10`}
                style={{
                  minHeight: stat.span ? "200px" : "180px",
                  background: "linear-gradient(135deg, #141627 0%, #0d0f1e 100%)",
                  border: "1px solid rgba(139,92,246,0.08)",
                }}
              >
                {/* Dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='rgba(139,92,246,0.3)'/%3E%3C/svg%3E\")", backgroundSize: "32px 32px" }} />
                {/* Subtle corner glow */}
                <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
                <div className="relative z-10 text-center">
                  <p
                    className={`font-semibold leading-none tracking-[-2px] ${stat.span ? "text-[clamp(56px,6vw,96px)]" : "text-[clamp(48px,5vw,80px)]"}`}
                    style={{
                      backgroundImage: "linear-gradient(135deg, #e6f2ff 35%, #8B5CF6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 20px rgba(139,92,246,0.3))",
                      
                    }}
                  >
                    {stat.big}
                  </p>
                  <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/45">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FLEXIBLE WAYS                                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24" style={{ background: "#050914", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-[42px] font-semibold tracking-tight"
              style={{
                backgroundImage: "linear-gradient(162deg, rgb(230,242,255) 44%, rgb(139,92,246) 111%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                
              }}
            >
              Flexible ways to work together.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "Fixed-term / Discovery",
                title: "AI opportunity sprint",
                desc: "A 2-week engagement to map your highest-value AI opportunities, validate feasibility, and produce a prioritised roadmap with ROI projections.",
              },
              {
                badge: "Project-based / Delivery",
                title: "AI product build",
                desc: "Full-cycle development of your AI feature or product, from architecture to production deployment, with guardrails, observability, and documentation.",
              },
              {
                badge: "Retainer / Embedded",
                title: "AI engineering team",
                desc: "Dedicated AI engineers embedded in your team, continuously building, fine-tuning, and improving your AI systems as your product and data grow.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative rounded-[28px] overflow-hidden flex flex-col justify-end"
                style={{
                  border: "1.4px solid rgba(139,92,246,0.2)",
                  background: "linear-gradient(to bottom, #1a1530, rgba(14,11,25,0))",
                  minHeight: "360px",
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* Purple grid pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                      opacity: 0.9,
                    }}
                  />
                  {/* Top glow orb */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(5,9,20,0), #050914)" }} />
                </div>
                <div className="absolute top-8 left-8 z-10">
                  <div
                    className="px-4 py-2 rounded-full text-white text-xs font-medium whitespace-nowrap"
                    style={{ background: "rgba(139,92,246,0.18)", border: "1px solid rgba(139,92,246,0.3)" }}
                  >
                    {card.badge}
                  </div>
                </div>
                <div className="relative z-10 p-8 pt-0">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-snug" style={{ }}>{card.title}</h3>
                  <p className="text-[#d6d8d8] text-sm leading-relaxed opacity-55">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="ai-transformation" />
      <InsightsSection pageSlug="ai-transformation" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer_CTA.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50"
        />
        {/* Purple-tinted dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(5,9,20,0.82) 0%, rgba(15,7,40,0.72) 50%, rgba(5,9,20,0.82) 100%)" }} />
        {/* Central glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 65%)" }} />

        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "rgba(139,92,246,0.4)" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(196,181,253,0.45)" }}>Get started</span>
            <div className="w-8 h-px" style={{ background: "rgba(139,92,246,0.4)" }} />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ }}
          >
            The best time to start<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 24px rgba(139,92,246,0.4))",
              }}
            >
              building with AI
            </span>
            <br />
            was last year.
          </h2>
          <p className="text-white/45 mb-10 text-lg leading-relaxed">
            The second best time is a conversation with us.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=ai-transformation"
              className="px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                boxShadow: "0 0 32px rgba(139,92,246,0.35), 0 2px 12px rgba(0,0,0,0.5)",
                
              }}
            >
              Book an AI strategy call
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-8 py-3.5 rounded-full text-sm font-medium transition-colors hover:text-white"
              style={{
                border: "1px solid rgba(139,92,246,0.25)",
                color: "rgba(196,181,253,0.7)",
                
              }}
            >
              See case studies first
            </Link>
          </div>

          <p className="text-white/25 text-xs tracking-wide">
            No sales pitch. Just an honest conversation about where AI fits your business.
          </p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
