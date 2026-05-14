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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hex-mesh-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ opacity: 0.55 }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(5,9,20,0.6)" }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(139,92,246,0.22) 0%, transparent 65%)" }}
        />
        <div
          className="absolute left-0 bottom-0 w-[50%] h-[60%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 10% 90%, rgba(232,52,28,0.08) 0%, transparent 55%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #050914)" }}
        />

        {/* Centre content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            {/* Badge pill — purple theme */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.22)" }}>
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "rgba(196,181,253,0.9)" }} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1l1.5 3h3l-2.5 2 1 3L8 7.5 5 9l1-3L3.5 4h3z" />
              </svg>
              <span className="text-xs font-medium tracking-wide" style={{ color: "rgba(196,181,253,0.85)" }}>AI Transformation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.07] tracking-tight">
              AI is moving fast.<br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #e8341c 0%, #f97316 35%, #8B5CF6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 32px rgba(139,92,246,0.35))",
                }}
              >
                Are you?
              </span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              We help businesses identify, build, and deploy AI solutions that compound over time —
              reducing cost, accelerating output, and opening revenue channels that didn&apos;t exist before.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?type=ai-transformation"
                className="px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
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

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["AI Strategy & Roadmap", "LLM Integration", "ML Ops & Deployment", "AI Governance & Ethics", "Workflow Automation"].map((feat) => (
                <span key={feat} className="px-3 py-1 rounded-full text-[11px] font-medium" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.12)", color: "rgba(196,181,253,0.5)" }}>
                  {feat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 px-6 pb-12 section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" style={{ borderTop: "1px solid rgba(139,92,246,0.12)" }}>
              {[
                { value: "10×",  label: "Productivity Gains" },
                { value: "60%",  label: "Manual Work Eliminated" },
                { value: "3mo",  label: "Avg. Time to First ROI" },
                { value: "50+",  label: "AI Projects Delivered" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-1 customHeading">{s.value}</div>
                  <div className="text-xs" style={{ color: "rgba(196,181,253,0.35)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT CHANGES - live terminal race                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="what-changes" className="relative section-padding py-24" style={{ background: "#050914" }}>
        <style>{`
          @keyframes scanline {
            0%   { top: 0%; opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          .ai-scanline { animation: scanline 2.8s linear infinite; }
        `}</style>

        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(100,50,220,0.09) 0%, transparent 65%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-medium text-white mb-4 leading-tight">
              What actually changes<br />when you add AI.
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: activeScenario === i ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeScenario === i ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.07)"}`,
                  color: activeScenario === i ? "#c4b5fd" : "rgba(255,255,255,0.4)",
                  boxShadow: activeScenario === i ? "0 0 18px rgba(139,92,246,0.18)" : "none",
                }}
              >
                {s.tag}
              </button>
            ))}
          </div>

          {/* Terminal race card */}
          {(() => {
            const sc = scenarios[activeScenario];
            return (
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#07080f" }}>

                {/* Three-column layout */}
                <div className="grid md:grid-cols-[1fr_160px_1fr]">

                  {/* LEFT — Manual terminal */}
                  <div className="p-6 md:p-8" style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,90,90,0.5)" }} />
                          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,190,50,0.5)" }} />
                          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(50,210,100,0.25)" }} />
                        </div>
                        <span className="text-[10px] text-white/25 uppercase tracking-widest font-mono ml-1">Without AI</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
                        {sc.timeManual}
                      </span>
                    </div>

                    {/* Steps */}
                    <div className="font-mono text-sm space-y-2.5 mb-6" style={{ minHeight: "140px" }}>
                      {sc.manualSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-2 transition-all duration-400"
                          style={{ opacity: i < visibleManual ? 1 : 0, transform: i < visibleManual ? "none" : "translateY(6px)", transitionDuration: "350ms" }}>
                          <span className="mt-px flex-shrink-0" style={{ color: "rgba(255,255,255,0.18)" }}>›</span>
                          <span style={{ color: "rgba(255,255,255,0.42)" }}>{step}</span>
                          {i === visibleManual - 1 && (
                            <span className="inline-block w-[7px] h-[14px] rounded-[1px] animate-pulse flex-shrink-0" style={{ background: "rgba(255,255,255,0.35)", marginTop: "1px" }} />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] text-white/20 font-mono">Progress</span>
                        <span className="text-[10px] text-white/30 font-mono">{manualBarPct}%</span>
                      </div>
                      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className="h-full rounded-full transition-all duration-200" style={{ width: `${manualBarPct}%`, background: "rgba(255,255,255,0.18)" }} />
                      </div>
                      <span className="text-[10px] text-white/18 font-mono mt-1.5 block" style={{ color: "rgba(255,255,255,0.18)" }}>Still processing...</span>
                    </div>

                    <p className="text-white/30 text-xs leading-relaxed mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>{sc.before}</p>
                  </div>

                  {/* CENTER — Time saved */}
                  <div className="flex flex-col items-center justify-center py-8 px-4 text-center" style={{ borderRight: "1px solid rgba(255,255,255,0.05)", background: "rgba(139,92,246,0.03)" }}>
                    <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest mb-3">saved</span>
                    <div
                      className="font-bold leading-none tabular-nums"
                      style={{
                        fontSize: "clamp(40px, 4vw, 62px)",
                        backgroundImage: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 18px rgba(139,92,246,0.55))",
                      }}
                    >
                      {savedCount}%
                    </div>
                    <div className="w-px my-4" style={{ height: "32px", background: "linear-gradient(to bottom, rgba(139,92,246,0.4), transparent)" }} />
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono line-through" style={{ color: "rgba(255,255,255,0.2)" }}>{sc.timeManual}</div>
                      <div className="text-[11px] font-semibold font-mono" style={{ color: "#c4b5fd" }}>{sc.timeAI}</div>
                    </div>
                  </div>

                  {/* RIGHT — AI terminal */}
                  <div className="p-6 md:p-8 relative overflow-hidden">
                    {/* Scanline */}
                    <div className="ai-scanline absolute left-0 right-0 h-px pointer-events-none z-10"
                      style={{ background: "linear-gradient(to right, transparent 5%, rgba(139,92,246,0.45) 50%, transparent 95%)" }} />

                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(139,92,246,0.04), transparent)" }} />

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,90,90,0.25)" }} />
                          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,190,50,0.25)" }} />
                          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#8B5CF6" }} />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-mono ml-1" style={{ color: "rgba(139,92,246,0.65)" }}>With AI</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded" style={{ background: "rgba(139,92,246,0.12)", color: "#c4b5fd", border: "1px solid rgba(139,92,246,0.2)" }}>
                        {sc.timeAI}
                      </span>
                    </div>

                    {/* Steps — all at once */}
                    <div className="font-mono text-sm space-y-2.5 mb-6" style={{ minHeight: "140px" }}>
                      {sc.aiSteps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2 transition-all duration-300"
                          style={{ opacity: aiDone ? 1 : 0, transform: aiDone ? "none" : "translateY(4px)", transitionDelay: `${i * 70}ms` }}>
                          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="6" stroke="#8B5CF6" strokeWidth="1" />
                            <path d="M4 7l2.2 2.2L10 5" stroke="#8B5CF6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span style={{ color: "rgba(196,181,253,0.75)" }}>{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress — instant 100% */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono" style={{ color: "rgba(139,92,246,0.45)" }}>Progress</span>
                        <span className="text-[10px] font-mono transition-all duration-300" style={{ color: aiDone ? "#c4b5fd" : "rgba(255,255,255,0.2)" }}>
                          {aiDone ? "100%" : "—"}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(139,92,246,0.1)" }}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: aiDone ? "100%" : "0%", background: "linear-gradient(to right, #e8341c, #8B5CF6)", boxShadow: aiDone ? "0 0 10px rgba(139,92,246,0.7)" : "none" }} />
                      </div>
                      <span className="text-[10px] font-mono mt-1.5 block transition-all duration-300" style={{ color: aiDone ? "rgba(139,92,246,0.7)" : "rgba(255,255,255,0.1)" }}>
                        {aiDone ? "✓ Complete" : "Waiting..."}
                      </span>
                    </div>

                    <p className="text-white/55 text-xs leading-relaxed mt-5 pt-5" style={{ borderTop: "1px solid rgba(139,92,246,0.08)" }}>{sc.after}</p>
                  </div>
                </div>
              </div>
            );
          })()}
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">What We Build</h2>
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
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
              src="/Staffaug1.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50"
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
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
              From idea to shipped AI,{" "}
              <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.35)" }}>in weeks.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              A proven process that de-risks AI projects and delivers value fast.
            </p>
          </div>
          <ScrollTimeline
            steps={steps}
            numColor="#8B5CF6"
            numGradient="linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)"
            lineColor="linear-gradient(to bottom, #e8341c, #8B5CF6, rgba(139,92,246,0.1))"
          />
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
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"
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

