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
    highlight: "ATS", rest: " & Hiring Pipelines",
    urlSlug: "ats-hiring",
    tiles: [
      { name: "Job Distribution", desc: "Multi-source posting & syndication", color: "blue" },
      { name: "Pipeline Tracking", desc: "Stage-by-stage candidate flow", color: "purple" },
      { name: "Interview Scheduling", desc: "Automated calendar coordination", color: "blue" },
      { name: "Offer Management", desc: "Digital offer & contract workflows", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines active",
      pipelines: [
        { label: "Job Distribution",    pct: 100, rate: "18 boards",  color: "#5b7fff" },
        { label: "CV Parsing",          pct: 94,  rate: "Real-time",  color: "#34d399" },
        { label: "Interview Scheduler", pct: 87,  rate: "Automated",  color: "#a78bfa" },
        { label: "Offer Management",    pct: 72,  rate: "In progress", color: "#3B82F6" },
      ],
      metrics: [
        { label: "Active Roles",  value: "142"    },
        { label: "Candidates",    value: "3.2K"   },
        { label: "Time-to-offer", value: "8 days" },
      ],
    },
  },
  {
    highlight: "AI", rest: " Screening & Matching",
    urlSlug: "ai-screening",
    tiles: [
      { name: "CV Parsing", desc: "Structured data extraction", color: "blue" },
      { name: "Skills Graph", desc: "Competency-based matching", color: "purple" },
      { name: "Bias Reduction", desc: "Fairness-aware ranking", color: "blue" },
      { name: "Scoring Engine", desc: "Multi-signal candidate ranking", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Screening Engine v3.1",
      inferences: [
        { label: "CV Parsing",   pct: 97, color: "#5b7fff", level: "Excellent" },
        { label: "Skills Match", pct: 91, color: "#34d399", level: "High"      },
        { label: "Bias Check",   pct: 99, color: "#a78bfa", level: "Verified"  },
        { label: "Score & Rank", pct: 88, color: "#3B82F6", level: "Strong"    },
      ],
      alertsLabel: "Screening Signals",
      alerts: [
        { time: "09:14:22", text: "Top match found for Senior Engineer", sev: "#34d399" },
        { time: "09:11:08", text: "Bias threshold flagged — Role-221",   sev: "#f59e0b" },
        { time: "09:08:44", text: "CV batch parsed: 124 profiles",       sev: "#5b7fff" },
      ],
      footer: "Screened 2M+ CVs",
    },
  },
  {
    highlight: "HRIS", rest: " & People Platforms",
    urlSlug: "hris-platform",
    tiles: [
      { name: "Employee Data", desc: "Single source of truth", color: "blue" },
      { name: "Org Chart", desc: "Hierarchy & reporting lines", color: "purple" },
      { name: "Benefits Admin", desc: "Enrolment & lifecycle management", color: "blue" },
      { name: "Payroll Integration", desc: "Sync with payroll systems", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "HRIS Core",
      nodes: [
        { x: 118, y: 28,  label: "Employee Data", sub: "300K+ records",      color: "#5b7fff" },
        { x: 198, y: 72,  label: "Org Chart",     sub: "Hierarchy sync",     color: "#a78bfa" },
        { x: 208, y: 148, label: "Benefits Admin", sub: "Enrolment engine",  color: "#34d399" },
        { x: 140, y: 188, label: "Payroll Sync",   sub: "Daily reconcile",   color: "#3B82F6" },
        { x: 42,  y: 152, label: "SSO / IAM",      sub: "Identity layer",    color: "#f59e0b" },
      ],
      footer: "300K+ employees · 5 integrations",
    },
  },
  {
    highlight: "Onboarding", rest: " & Lifecycle",
    urlSlug: "onboarding",
    tiles: [
      { name: "Digital Onboarding", desc: "Automated new-hire workflows", color: "blue" },
      { name: "Document Collection", desc: "E-sign & secure storage", color: "purple" },
      { name: "Access Provisioning", desc: "Equipment & system access", color: "blue" },
      { name: "Milestone Tracking", desc: "30/60/90-day check-ins", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Journeys Active",
      sessions: [
        { initials: "DO", name: "Digital Onboarding",  color: "#5b7fff", qual: 3, live: true,  secs: 86400 },
        { initials: "DC", name: "Doc Collection",      color: "#34d399", qual: 3, live: true,  secs: 43200 },
        { initials: "AP", name: "Access Provisioning", color: "#a78bfa", qual: 2, live: true,  secs: 21600 },
        { initials: "MS", name: "Milestone Tracking",  color: "#3B82F6", qual: 2, live: false, secs: 7200  },
      ],
      footerStats: ["Day-1 ready", "4 workflows", "Auto-triggered"],
    },
  },
  {
    highlight: "Performance", rest: " & Engagement",
    urlSlug: "performance",
    tiles: [
      { name: "OKR Tracking", desc: "Goal-setting & progress visibility", color: "blue" },
      { name: "360° Feedback", desc: "Structured review cycles", color: "purple" },
      { name: "Pulse Surveys", desc: "Continuous engagement signals", color: "blue" },
      { name: "Retention Risk", desc: "Predictive flight risk modelling", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "OKR Completion", pct: 78, color: "#5b7fff" },
        { label: "Feedback Score", pct: 84, color: "#34d399" },
        { label: "Engagement",     pct: 72, color: "#a78bfa" },
        { label: "Retention Rate", pct: 91, color: "#3B82F6" },
      ],
      events: [
        { time: "09:14:02", text: "Q2 OKR review cycle completed"          },
        { time: "09:10:18", text: "Pulse survey response rate: 74%"        },
        { time: "09:07:44", text: "Flight risk alert: 3 employees"         },
      ],
      footer: "Updated weekly",
    },
  },
  {
    highlight: "Analytics", rest: " & Workforce Intelligence",
    urlSlug: "workforce-analytics",
    tiles: [
      { name: "Headcount Planning", desc: "Capacity modelling & forecasts", color: "blue" },
      { name: "Time-to-hire", desc: "Funnel velocity dashboards", color: "purple" },
      { name: "D&I Metrics", desc: "Diversity & inclusion reporting", color: "blue" },
      { name: "Cost-per-hire", desc: "ROI & spend analytics", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "4 Dashboards Live",
      rows: [
        { label: "Headcount Plan", value: "On track",  stat: "2,840 FTE" },
        { label: "Time-to-hire",   value: "8 days avg", stat: "↓ 55%"   },
        { label: "D&I Score",      value: "Improving",  stat: "74/100"   },
        { label: "Cost-per-hire",  value: "$3,200",     stat: "↓ 18%"   },
      ],
      chartLabel: "Hire\nVelocity",
      bars: [52,58,64,60,72,68,76,80,74,84,78,82,88,84,80,88,84,90,86,80,88,92,86,90],
    },
  },
];

type KanbanCard = { id: string; name: string; role: string; stage: string };

const STAGES = ["Applied", "Screening", "Interview", "Offer"];
const INITIAL_CARDS: KanbanCard[] = [
  { id: "c1", name: "A. Mitchell", role: "Senior Engineer", stage: "Applied" },
  { id: "c2", name: "R. Patel", role: "Product Manager", stage: "Applied" },
  { id: "c3", name: "S. Kim", role: "UX Designer", stage: "Screening" },
  { id: "c4", name: "J. Okafor", role: "Data Analyst", stage: "Screening" },
  { id: "c5", name: "L. Torres", role: "DevOps Engineer", stage: "Interview" },
  { id: "c6", name: "M. Chen", role: "Backend Dev", stage: "Offer" },
];

export default function HrRecruitmentPage() {
  const [cards, setCards] = useState<KanbanCard[]>(INITIAL_CARDS);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveCard((i) => (i + 1) % INITIAL_CARDS.length);
    }, 1400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const card = INITIAL_CARDS[activeCard];
    const stageIdx = STAGES.indexOf(card.stage);
    if (stageIdx < STAGES.length - 1) {
      const nextStage = STAGES[stageIdx + 1];
      const timer = setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.id === card.id ? { ...c, stage: nextStage } : c))
        );
        setTimeout(() => {
          setCards(INITIAL_CARDS.map((ic) => ({ ...ic })));
        }, 800);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeCard]);

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
            HR technology that finds<br />and keeps the best people.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From AI-powered applicant tracking to full HRIS platforms and workforce analytics,
            we build the people technology that turns hiring into a competitive advantage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=hr-recruitment" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to an HR Tech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      {/* TECH CAPABILITIES */}
      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern HR technology stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your hiring pipeline </span>
              <span className="text-white/30">losing candidates at every stage?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive HR tech reviews - mapping your ATS configuration, HRIS integration
              gaps, and the hiring workflow friction that&apos;s adding days to your time-to-offer.
            </p>
            <Link href="/contact?type=hr-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book an HR Tech Review
            </Link>
          </div>

          {/* Kanban board */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-4" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Hiring Pipeline</span>
              <span className="text-[10px] text-[#3B82F6]/60 font-mono">{INITIAL_CARDS.length} candidates</span>
            </div>
            <div className="grid grid-cols-4 gap-2 h-[calc(100%-36px)]">
              {STAGES.map((stage) => {
                const stageCards = cards.filter((c) => c.stage === stage);
                const totalForStage = INITIAL_CARDS.filter((c) => c.stage === stage).length;
                return (
                  <div key={stage} className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono text-white/35 uppercase tracking-wider">{stage}</span>
                      <span className="text-[9px] font-mono text-white/20">{totalForStage}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      {stageCards.map((card) => {
                        const origCard = INITIAL_CARDS.find((c) => c.id === card.id)!;
                        const isMoving = activeCard === INITIAL_CARDS.indexOf(origCard) && card.stage !== origCard.stage;
                        return (
                          <div
                            key={card.id}
                            className={`rounded-lg border p-2 transition-all duration-500
                              ${isMoving ? "border-[#3B82F6]/60 bg-[#3B82F6]/[0.08] scale-[1.02]" : "border-white/[0.07] bg-white/[0.02]"}`}
                          >
                            <p className="text-[10px] text-white/70 font-medium leading-snug">{card.name}</p>
                            <p className="text-[8px] text-white/30 mt-0.5">{card.role}</p>
                            {isMoving && (
                              <div className="mt-1.5 h-0.5 bg-[#3B82F6]/40 rounded-full overflow-hidden">
                                <div className="h-full bg-[#3B82F6] rounded-full animate-pulse w-full" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
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
              From spreadsheet chaos to a people platform that scales with your business
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t configure off-the-shelf ATS tools. Every engagement starts with your
              hiring process and the talent outcomes you need to achieve.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "HR Tech Audit", desc: "We map your current hiring pipeline, HRIS data model, integration gaps, and the manual steps adding weeks to your time-to-offer.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design for hiring velocity: AI-assisted screening, automated scheduling, and a people data model that connects hiring to retention analytics.", align: "right" },
    { num: "03", title: "Build & Integrate", desc: "We develop against your job boards, payroll systems, and SSO infrastructure with candidate experience and recruiter efficiency as primary metrics.", align: "left" },
    { num: "04", title: "Roll Out & Iterate", desc: "Phased rollout to your recruiting team with change management support, then continuous optimisation driven by time-to-hire and quality-of-hire data.", align: "right" },
  ]} />
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">HR Tech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your talent operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built HR infrastructure removes the manual overhead and pipeline friction
                  that costs you top candidates and keeps teams from scaling. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=hr-recruitment" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Hiring Velocity", desc: "Automated screening, AI-matched shortlisting, and one-click interview scheduling compress time-to-offer from weeks to days." },
              { num: "02", title: "Candidate Quality", desc: "Skills-based matching and structured assessment workflows surface the candidates who perform, not just the ones who interview well." },
              { num: "03", title: "Onboarding Efficiency", desc: "Automated document collection, access provisioning, and milestone tracking get new hires productive faster with less HR overhead." },
              { num: "04", title: "Retention Intelligence", desc: "Continuous engagement signals and predictive retention modelling identify flight risk before high-performers start looking elsewhere." },
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

      <CaseStudiesSection pageSlug="hr-recruitment" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">2M+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Candidates processed annually</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">55%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Reduction in time-to-hire</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">300K+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Employees on HRIS platforms built</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">4.2x</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Recruiter productivity improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="hr-recruitment" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
            Top candidates don&apos;t wait<br />
            <span className="text-white/35">for slow hiring pipelines.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you hire 100 or 100,000 people a year, we build the HR technology
            that gives you a measurable edge in every talent market.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=hr-recruitment" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to an HR tech engineer
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


