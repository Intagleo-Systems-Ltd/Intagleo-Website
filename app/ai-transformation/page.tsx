"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
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
    tag: "Sales & RevOps",
    before: "Sales team spends 3 hours/day writing proposals",
    after:  "AI drafts proposals in 90 seconds, tailored to each client",
    manualSteps: ["Research client history...", "Pull CRM data manually...", "Draft proposal template...", "Personalise each section...", "Internal review cycle..."],
    aiSteps:     ["Fetch CRM + deal history", "Generate personalised draft", "Apply brand template", "Ready to send"],
    timeManual: "3 hrs/day", timeAI: "90 sec", saved: 97, manualPct: 21,
  },
  {
    tag: "Customer Support",
    before: "Support handles 500 tickets/week, 70% are repeat questions",
    after:  "AI resolves 65% of tickets instantly, 24/7, in any language",
    manualSteps: ["Read & categorise ticket...", "Search knowledge base...", "Draft response...", "Supervisor sign-off...", "Send & log reply..."],
    aiSteps:     ["Classify intent & language", "Match knowledge base", "Generate response", "Auto-resolved & logged"],
    timeManual: "18 min/ticket", timeAI: "4 sec", saved: 96, manualPct: 18,
  },
  {
    tag: "Finance & Ops",
    before: "Finance team manually reconciles 10,000 rows of data monthly",
    after:  "AI reconciles, flags anomalies, and generates reports in minutes",
    manualSteps: ["Export multiple spreadsheets...", "Run VLOOKUP formulas...", "Cross-reference entries...", "Flag discrepancies...", "Build report from scratch..."],
    aiSteps:     ["Ingest all data sources", "Run reconciliation engine", "Flag 12 anomalies", "Report auto-generated"],
    timeManual: "40 hrs/month", timeAI: "8 min", saved: 99, manualPct: 14,
  },
  {
    tag: "Engineering",
    before: "Engineers spend 30% of their time reviewing and writing docs",
    after:  "AI generates, updates, and reviews documentation from the codebase",
    manualSteps: ["Read changed codebase...", "Write function-level docs...", "Update README & guides...", "Peer review accuracy...", "Publish & sync changes..."],
    aiSteps:     ["Scan codebase diff", "Generate doc updates", "Validate against tests", "PR created & merged"],
    timeManual: "12 hrs/week", timeAI: "90 sec", saved: 98, manualPct: 24,
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

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function AITransformationPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [userPaused, setUserPaused]         = useState(false);
  const [visibleManual, setVisibleManual]   = useState(0);
  const [aiDone, setAiDone]                 = useState(false);
  const [manualBarPct, setManualBarPct]     = useState(0);
  const [savedCount, setSavedCount]         = useState(0);

  useEffect(() => {
    if (userPaused) return;
    const t = setInterval(() => setActiveScenario(prev => (prev + 1) % scenarios.length), 5500);
    return () => clearInterval(t);
  }, [userPaused]);

  const handleSelect = (i: number) => { setActiveScenario(i); setUserPaused(true); };

  useEffect(() => {
    const sc = scenarios[activeScenario];
    setVisibleManual(0); setAiDone(false); setManualBarPct(0); setSavedCount(0);

    const tAI = setTimeout(() => setAiDone(true), 420);

    const stepTimers = sc.manualSteps.map((_, i) =>
      setTimeout(() => setVisibleManual(i + 1), 480 + i * 680)
    );

    let bar = 0;
    const barInt = setInterval(() => {
      bar += 1;
      if (bar >= sc.manualPct) { clearInterval(barInt); setManualBarPct(sc.manualPct); return; }
      setManualBarPct(bar);
    }, 55);

    let count = 0;
    const savedInt = setInterval(() => {
      count += 2;
      if (count >= sc.saved) { setSavedCount(sc.saved); clearInterval(savedInt); return; }
      setSavedCount(count);
    }, 14);

    return () => {
      clearTimeout(tAI);
      stepTimers.forEach(clearTimeout);
      clearInterval(barInt);
      clearInterval(savedInt);
    };
  }, [activeScenario]);

  return (
    <div className="relative min-h-screen" style={{ background: "#050914" }}>
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Background layers */}
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
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
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-5 text-white"
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
            <span style={{ color: "rgba(255,255,255,0.45)" }}>was last year.</span>
          </h2>
          <p className="text-white/45 font-normal mb-10 leading-relaxed" style={{ fontSize: '16px' }}>
            The second best time is a conversation with us.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=ai-transformation"
              className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                boxShadow: "0 0 32px rgba(139,92,246,0.35), 0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              Book an AI strategy call
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors hover:text-white"
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

