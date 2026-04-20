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
    highlight: "LMS", rest: " Architecture & Development",
    annotations: [
      { pos: "tl", text: "Custom Course Builder" },
      { pos: "tr", text: "Multi-tenant Organisation" },
      { pos: "bl", text: "SCORM & xAPI Support" },
      { pos: "br", text: "White-label Platform" },
    ],
    items: ["Custom LMS development", "Multi-tenant architecture", "SCORM & xAPI compliance", "White-label & branding"],
  },
  {
    highlight: "Adaptive", rest: " Learning Engines",
    annotations: [
      { pos: "tl", text: "Learner Progress Tracking" },
      { pos: "tr", text: "Personalised Content Paths" },
      { pos: "bl", text: "Competency-based Pacing" },
      { pos: "br", text: "AI Difficulty Adjustment" },
    ],
    items: ["Adaptive content pathways", "Competency-based pacing", "AI difficulty adjustment", "Learner progress tracking"],
  },
  {
    highlight: "Assessment", rest: " & Credentialing",
    annotations: [
      { pos: "tl", text: "Automated Quiz Engines" },
      { pos: "tr", text: "Proctoring Integration" },
      { pos: "bl", text: "Digital Credential Issuance" },
      { pos: "br", text: "Anti-cheat Detection" },
    ],
    items: ["Automated assessment engines", "Proctoring integration", "Digital credential issuance", "Anti-cheat detection"],
  },
  {
    highlight: "Analytics", rest: " & Learner Insights",
    annotations: [
      { pos: "tl", text: "Engagement Heatmaps" },
      { pos: "tr", text: "Cohort Performance Tracking" },
      { pos: "bl", text: "Drop-off Prediction" },
      { pos: "br", text: "Instructor Dashboards" },
    ],
    items: ["Learner engagement analytics", "Cohort performance tracking", "Drop-off prediction models", "Instructor dashboards"],
  },
  {
    highlight: "Live", rest: " & Async Learning",
    annotations: [
      { pos: "tl", text: "Video Streaming Platform" },
      { pos: "tr", text: "Interactive Webinar Tools" },
      { pos: "bl", text: "Discussion Forums" },
      { pos: "br", text: "Recorded Session Management" },
    ],
    items: ["Video streaming infrastructure", "Interactive webinar tools", "Discussion & forum systems", "Async content management"],
  },
  {
    highlight: "Integration", rest: " & Ecosystem",
    annotations: [
      { pos: "tl", text: "SIS Integration" },
      { pos: "tr", text: "HR & Payroll Connectors" },
      { pos: "bl", text: "SSO & Identity Management" },
      { pos: "br", text: "Third-party Content APIs" },
    ],
    items: ["Student information system sync", "HR & payroll connectors", "SSO & identity management", "Third-party content APIs"],
  },
];

const modules = [
  { icon: "▶", type: "Video", title: "Platform Architecture", progress: 85 },
  { icon: "✎", type: "Quiz", title: "API Design Patterns", progress: 60 },
  { icon: "⊞", type: "Interactive", title: "Database Optimisation", progress: 40 },
  { icon: "◉", type: "Analytics", title: "System Monitoring", progress: 90 },
  { icon: "⊟", type: "Reading", title: "Security Fundamentals", progress: 20 },
  { icon: "✓", type: "Certificate", title: "Cloud Architecture", progress: 100 },
];

export default function EdtechPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveModule((i) => (i + 1) % 6), 1800);
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
            Education platforms that<br />actually teach at scale.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From LMS architecture to adaptive learning engines, we build the software that delivers
            measurable educational outcomes across millions of learners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=edtech" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an EdTech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by educational institutions reaching millions of learners.</p>
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
                  Legacy LMS platforms cap your learner growth.{" "}
                  <span className="text-white/35">Most institutions only notice when engagement drops.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every clunky course upload, every learner who drops off mid-module, every report that
                  takes a week to generate — that&apos;s educational debt compounding silently.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built learning platforms serving millions of learners, focusing on the engagement
                  and performance architecture that drives real outcomes.
                </p>
                <Link href="/contact?type=edtech" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to an EdTech Engineer
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
            <p className="text-white/40 text-base">Built across the modern EdTech stack</p>
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
              <span className="text-white">Is your educational platform </span>
              <span className="text-white/30">failing to make the grade?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive LMS architecture reviews — examining your content delivery
              performance, learner data pipelines, and scalability limits — to identify what&apos;s
              capping your growth.
            </p>
            <Link href="/contact?type=edtech-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Book a Platform Review
            </Link>
          </div>

          {/* Learning module card grid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Course Dashboard</span>
              <span className="text-[10px] text-[#e8341c]/70 font-mono">6 modules</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {modules.map((mod, i) => (
                <div key={mod.title} className={`rounded-xl border p-3 transition-all duration-300 ${activeModule === i ? "border-[#e8341c]/40 bg-[#e8341c]/[0.06]" : "border-white/[0.06] bg-[#111420]"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-white/50">{mod.icon}</span>
                    <span className="text-[9px] text-white/30 uppercase font-mono">{mod.type}</span>
                  </div>
                  <p className="text-white/75 text-xs font-medium mb-2 leading-snug">{mod.title}</p>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${mod.progress === 100 ? "bg-green-500" : activeModule === i ? "bg-[#e8341c]" : "bg-white/20"}`}
                      style={{ width: `${mod.progress}%` }}
                    />
                  </div>
                  <p className="text-[9px] text-white/25 mt-1 font-mono">{mod.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From monolithic LMS to a learning platform built for outcomes
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t patch existing platforms. Every engagement starts with your learner
              journey and institutional goals.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Learning Audit", desc: "We map your existing LMS architecture, content delivery performance, learner engagement data, and integration landscape before any code is written.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design for scale: CDN-first content delivery, event-driven analytics, and modular course management that grows with your catalogue.", align: "right" },
              { num: "03", title: "Build & Validate", desc: "We develop with accessibility, performance, and SCORM compliance as first-class requirements woven into every sprint.", align: "left" },
              { num: "04", title: "Launch & Iterate", desc: "Phased migration of your course library and learner data, then continuous optimisation based on real engagement signals.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Learning Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your learners</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built learning infrastructure eliminates the friction that caps engagement
                  and completion rates. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=edtech" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Learner Retention", desc: "Adaptive pathways, progress tracking, and timely nudges keep learners engaged through to module completion." },
              { num: "02", title: "Content Performance", desc: "Analytics-driven insights reveal which modules drive outcomes and which lose learners, enabling continuous improvement." },
              { num: "03", title: "Platform Scalability", desc: "Architecture that handles peak enrolment spikes without degrading the learning experience for any cohort." },
              { num: "04", title: "Institutional Insight", desc: "Real-time dashboards give instructors and administrators the visibility to intervene before learners fall behind." },
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

      <CaseStudiesSection pageSlug="edtech" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">10M+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Learners on platforms built</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">94%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Average completion rate</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">50+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Integrations delivered</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">3x</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Engagement improvement avg.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="edtech" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your learners deserve<br />
            <span className="text-white/35">better than buffering.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you serve 1,000 or 10 million learners, we build the platform infrastructure
            that delivers education at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=edtech" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Talk to an EdTech engineer
            </Link>
            <Link href="/contact?type=edtech-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
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
