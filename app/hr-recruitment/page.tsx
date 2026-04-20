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
    highlight: "ATS", rest: " & Hiring Pipelines",
    annotations: [
      { pos: "tl", text: "Multi-source Job Distribution" },
      { pos: "tr", text: "Candidate Pipeline Tracking" },
      { pos: "bl", text: "Interview Scheduling" },
      { pos: "br", text: "Offer Management" },
    ],
    items: ["Custom ATS development", "Multi-source job distribution", "Automated interview scheduling", "Offer & contract management"],
  },
  {
    highlight: "AI", rest: " Screening & Matching",
    annotations: [
      { pos: "tl", text: "CV Parsing Engine" },
      { pos: "tr", text: "Skills Graph Matching" },
      { pos: "bl", text: "Bias Reduction Tools" },
      { pos: "br", text: "Scoring & Ranking" },
    ],
    items: ["AI CV parsing & enrichment", "Skills graph matching", "Bias reduction tooling", "Candidate scoring & ranking"],
  },
  {
    highlight: "HRIS", rest: " & People Platforms",
    annotations: [
      { pos: "tl", text: "Employee Data Management" },
      { pos: "tr", text: "Org Chart & Reporting Lines" },
      { pos: "bl", text: "Benefits Administration" },
      { pos: "br", text: "Payroll Integration" },
    ],
    items: ["Employee data management", "Org chart & hierarchy", "Benefits administration", "Payroll system integration"],
  },
  {
    highlight: "Onboarding", rest: " & Lifecycle",
    annotations: [
      { pos: "tl", text: "Digital Onboarding Workflows" },
      { pos: "tr", text: "Document Collection" },
      { pos: "bl", text: "Equipment & Access Provisioning" },
      { pos: "br", text: "90-day Milestones" },
    ],
    items: ["Digital onboarding workflows", "Automated document collection", "Access & equipment provisioning", "New hire milestone tracking"],
  },
  {
    highlight: "Performance", rest: " & Engagement",
    annotations: [
      { pos: "tl", text: "OKR & Goal Tracking" },
      { pos: "tr", text: "360° Feedback Cycles" },
      { pos: "bl", text: "Pulse Survey Engine" },
      { pos: "br", text: "Retention Risk Prediction" },
    ],
    items: ["OKR & goal management", "360° feedback systems", "Pulse survey engine", "Retention risk modelling"],
  },
  {
    highlight: "Analytics", rest: " & Workforce Intelligence",
    annotations: [
      { pos: "tl", text: "Headcount Planning Models" },
      { pos: "tr", text: "Time-to-hire Dashboards" },
      { pos: "bl", text: "Diversity & Inclusion Metrics" },
      { pos: "br", text: "Cost-per-hire Reporting" },
    ],
    items: ["Headcount planning dashboards", "Recruitment funnel analytics", "D&I metrics & reporting", "Cost-per-hire analysis"],
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
  const [activeTab, setActiveTab] = useState(0);
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
            HR technology that finds<br />and keeps the best people.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From AI-powered applicant tracking to full HRIS platforms and workforce analytics,
            we build the people technology that turns hiring into a competitive advantage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=hr-recruitment" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an HR Tech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by HR teams managing thousands of hires and hundreds of thousands of employees.</p>
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
                  Slow hiring pipelines and disconnected HRIS data are costing you top candidates.{" "}
                  <span className="text-white/35">The best people accept offers in days, not weeks.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every CV that falls through the cracks, every interview that takes two weeks to schedule,
                  every onboarding form still handled over email — that&apos;s compounding talent loss
                  and HR overhead that doesn&apos;t show up until retention data does.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built HR platforms for organisations at every scale, focused on the hiring
                  velocity and people data infrastructure that modern talent competition demands.
                </p>
                <Link href="/contact?type=hr-recruitment" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to an HR Tech Engineer
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
            <p className="text-white/40 text-base">Built across the modern HR technology stack</p>
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
              <span className="text-white">Is your hiring pipeline </span>
              <span className="text-white/30">losing candidates at every stage?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive HR tech reviews — mapping your ATS configuration, HRIS integration
              gaps, and the hiring workflow friction that&apos;s adding days to your time-to-offer.
            </p>
            <Link href="/contact?type=hr-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Book an HR Tech Review
            </Link>
          </div>

          {/* Kanban board */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-4" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Hiring Pipeline</span>
              <span className="text-[10px] text-[#e8341c]/60 font-mono">{INITIAL_CARDS.length} candidates</span>
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
                              ${isMoving ? "border-[#e8341c]/60 bg-[#e8341c]/[0.08] scale-[1.02]" : "border-white/[0.07] bg-white/[0.02]"}`}
                          >
                            <p className="text-[10px] text-white/70 font-medium leading-snug">{card.name}</p>
                            <p className="text-[8px] text-white/30 mt-0.5">{card.role}</p>
                            {isMoving && (
                              <div className="mt-1.5 h-0.5 bg-[#e8341c]/40 rounded-full overflow-hidden">
                                <div className="h-full bg-[#e8341c] rounded-full animate-pulse w-full" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From spreadsheet chaos to a people platform that scales with your business
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t configure off-the-shelf ATS tools. Every engagement starts with your
              hiring process and the talent outcomes you need to achieve.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "HR Tech Audit", desc: "We map your current hiring pipeline, HRIS data model, integration gaps, and the manual steps adding weeks to your time-to-offer.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design for hiring velocity: AI-assisted screening, automated scheduling, and a people data model that connects hiring to retention analytics.", align: "right" },
              { num: "03", title: "Build & Integrate", desc: "We develop against your job boards, payroll systems, and SSO infrastructure with candidate experience and recruiter efficiency as primary metrics.", align: "left" },
              { num: "04", title: "Roll Out & Iterate", desc: "Phased rollout to your recruiting team with change management support, then continuous optimisation driven by time-to-hire and quality-of-hire data.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">HR Tech Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your talent operations</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built HR infrastructure removes the manual overhead and pipeline friction
                  that costs you top candidates and keeps teams from scaling. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=hr-recruitment" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Top candidates don&apos;t wait<br />
            <span className="text-white/35">for slow hiring pipelines.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you hire 100 or 100,000 people a year, we build the HR technology
            that gives you a measurable edge in every talent market.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=hr-recruitment" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an HR tech engineer
            </Link>
            <Link href="/contact?type=hr-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book an HR tech review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
