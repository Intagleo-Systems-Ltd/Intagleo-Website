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
    highlight: "LMS", rest: " Architecture & Development",
    urlSlug: "lms-architecture",
    tiles: [
      { name: "Custom Course Builder", desc: "Drag-and-drop authoring", color: "blue" },
      { name: "Multi-tenant", desc: "Organisation isolation", color: "blue" },
      { name: "SCORM & xAPI", desc: "Standards compliance", color: "purple" },
      { name: "White-label Platform", desc: "Full brand control", color: "purple" },
    ],
    preview: {
      type: "pipeline",
      headline: "4 pipelines active",
      pipelines: [
        { label: "Content Ingestion", pct: 92, rate: "18 MB/s", color: "#5b7fff" },
        { label: "SCORM Processing", pct: 85, rate: "Real-time", color: "#3B82F6" },
        { label: "CDN Distribution", pct: 100, rate: "Global", color: "#34d399" },
        { label: "Tenant Sync", pct: 78, rate: "Event-driven", color: "#a78bfa" },
      ],
      metrics: [
        { label: "Courses Live", value: "4,280" },
        { label: "Tenants", value: "62" },
        { label: "Uptime", value: "99.97%" },
      ],
    },
  },
  {
    highlight: "Adaptive", rest: " Learning Engines",
    urlSlug: "adaptive-learning",
    tiles: [
      { name: "Content Pathways", desc: "AI-driven routing", color: "blue" },
      { name: "Competency Pacing", desc: "Mastery-based progress", color: "blue" },
      { name: "Difficulty Adjustment", desc: "Real-time calibration", color: "purple" },
      { name: "Progress Tracking", desc: "Granular learner data", color: "purple" },
    ],
    preview: {
      type: "ring-gauges",
      scores: [
        { label: "Engagement Rate", pct: 88, color: "#5b7fff" },
        { label: "Completion Rate", pct: 94, color: "#34d399" },
        { label: "Mastery Score", pct: 79, color: "#a78bfa" },
        { label: "Path Accuracy", pct: 96, color: "#3B82F6" },
      ],
      events: [
        { time: "11:42:08", text: "Pathway adjusted for Cohort-12" },
        { time: "11:39:55", text: "Difficulty recalibrated x3" },
        { time: "11:35:20", text: "Competency milestone reached" },
      ],
      footer: "Adapts every 5 min",
    },
  },
  {
    highlight: "Assessment", rest: " & Credentialing",
    urlSlug: "assessment-credentialing",
    tiles: [
      { name: "Quiz Engine", desc: "Automated assessments", color: "blue" },
      { name: "Proctoring", desc: "Remote exam integrity", color: "blue" },
      { name: "Digital Credentials", desc: "Verifiable issuance", color: "purple" },
      { name: "Anti-cheat", desc: "Behavioural detection", color: "purple" },
    ],
    preview: {
      type: "inference",
      accuracyLabel: "Proctoring AI v3.1",
      inferences: [
        { label: "Identity Verification", pct: 99, color: "#34d399", level: "Verified" },
        { label: "Anomaly Detection", pct: 94, color: "#5b7fff", level: "Nominal" },
        { label: "Screen Activity", pct: 87, color: "#a78bfa", level: "Normal" },
        { label: "Cheat Probability", pct: 3, color: "#ef4444", level: "Low" },
      ],
      alertsLabel: "Live Events",
      alerts: [
        { time: "14:22:01", text: "Credential issued to learner #4412", sev: "#34d399" },
        { time: "14:18:44", text: "Tab switch flagged – Session #992", sev: "#f59e0b" },
        { time: "14:15:30", text: "Batch of 120 certs dispatched", sev: "#5b7fff" },
      ],
      footer: "Monitored per session",
    },
  },
  {
    highlight: "Analytics", rest: " & Learner Insights",
    urlSlug: "learner-analytics",
    tiles: [
      { name: "Engagement Heatmaps", desc: "Per-content signals", color: "blue" },
      { name: "Cohort Tracking", desc: "Group performance", color: "blue" },
      { name: "Drop-off Prediction", desc: "Early intervention", color: "purple" },
      { name: "Instructor Dashboards", desc: "Real-time visibility", color: "purple" },
    ],
    preview: {
      type: "status-bars",
      statusLabel: "All Pipelines Live",
      rows: [
        { label: "Event Collector", value: "Active", stat: "2.1M/hr" },
        { label: "Drop-off Model", value: "Running", stat: "4ms" },
        { label: "Cohort Aggregator", value: "Active", stat: "62 cohorts" },
        { label: "Instructor Feed", value: "Live", stat: "Real-time" },
      ],
      chartLabel: "Events\nToday",
      bars: [30,45,52,48,60,72,68,80,85,78,90,84,76,88,92,86,74,82,94,88,80,76,85,90],
    },
  },
  {
    highlight: "Live", rest: " & Async Learning",
    urlSlug: "live-async-learning",
    tiles: [
      { name: "Video Streaming", desc: "CDN-first delivery", color: "blue" },
      { name: "Webinar Tools", desc: "Interactive sessions", color: "blue" },
      { name: "Discussion Forums", desc: "Community learning", color: "purple" },
      { name: "Async Content", desc: "On-demand access", color: "purple" },
    ],
    preview: {
      type: "session-grid",
      liveLabel: "4 Sessions Live",
      sessions: [
        { initials: "DK", name: "Dr. Kim — React 101", color: "#5b7fff", qual: 3, live: true, secs: 2831 },
        { initials: "MP", name: "M. Patel — Data Sci", color: "#a78bfa", qual: 2, live: true, secs: 1203 },
        { initials: "JR", name: "J. Reyes — UX Design", color: "#34d399", qual: 3, live: true, secs: 4729 },
        { initials: "AL", name: "A. Lee — ML Basics", color: "#3B82F6", qual: 2, live: false, secs: 342 },
      ],
      footerStats: ["Peak concurrent: 1,840", "CDN: 99.97%", "4 streams"],
    },
  },
  {
    highlight: "Integration", rest: " & Ecosystem",
    urlSlug: "integration-ecosystem",
    tiles: [
      { name: "SIS Integration", desc: "Student data sync", color: "blue" },
      { name: "HR & Payroll", desc: "People system connectors", color: "blue" },
      { name: "SSO & Identity", desc: "SAML & OAuth flows", color: "purple" },
      { name: "Content APIs", desc: "Third-party libraries", color: "purple" },
    ],
    preview: {
      type: "network",
      centerLabel: "LMS Core",
      nodes: [
        { x: 118, y: 28, label: "SIS / Banner", sub: "Student records", color: "#5b7fff" },
        { x: 198, y: 70, label: "HR Platform", sub: "Payroll sync", color: "#a78bfa" },
        { x: 208, y: 148, label: "SSO Provider", sub: "Okta / Azure AD", color: "#34d399" },
        { x: 140, y: 188, label: "Content Lib", sub: "LinkedIn / Coursera", color: "#3B82F6" },
        { x: 42, y: 152, label: "Zoom / Teams", sub: "Live session API", color: "#f59e0b" },
      ],
      footer: "5 integrations · real-time sync",
    },
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
            Education platforms that<br />actually teach at scale.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From LMS architecture to adaptive learning engines, we build the software that delivers
            measurable educational outcomes across millions of learners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=edtech" className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to an EdTech Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
      </section>

      <CapabilityCardSection caps={techCaps} sectionSubtitle="Built across the modern EdTech stack" />

      {/* ARCHITECTURE REVIEW */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Is your educational platform </span>
              <span className="text-white/30">failing to make the grade?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive LMS architecture reviews - examining your content delivery
              performance, learner data pipelines, and scalability limits - to identify what&apos;s
              capping your growth.
            </p>
            <Link href="/contact?type=edtech-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Book a Platform Review
            </Link>
          </div>

          {/* Learning module card grid */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Course Dashboard</span>
              <span className="text-[10px] text-[#3B82F6]/70 font-mono">6 modules</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {modules.map((mod, i) => (
                <div key={mod.title} className={`rounded-xl border p-3 transition-all duration-300 ${activeModule === i ? "border-[#3B82F6]/40 bg-[#3B82F6]/[0.06]" : "border-white/[0.06] bg-[#111420]"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-white/50">{mod.icon}</span>
                    <span className="text-[9px] text-white/30 uppercase font-mono">{mod.type}</span>
                  </div>
                  <p className="text-white/75 text-xs font-medium mb-2 leading-snug">{mod.title}</p>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${mod.progress === 100 ? "bg-green-500" : activeModule === i ? "bg-[#3B82F6]" : "bg-white/20"}`}
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
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4 leading-tight">
              From monolithic LMS to a learning platform built for outcomes
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t patch existing platforms. Every engagement starts with your learner
              journey and institutional goals.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Learning Audit", desc: "We map your existing LMS architecture, content delivery performance, learner engagement data, and integration landscape before any code is written.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design for scale: CDN-first content delivery, event-driven analytics, and modular course management that grows with your catalogue.", align: "right" },
    { num: "03", title: "Build & Validate", desc: "We develop with accessibility, performance, and SCORM compliance as first-class requirements woven into every sprint.", align: "left" },
    { num: "04", title: "Launch & Iterate", desc: "Phased migration of your course library and learner data, then continuous optimisation based on real engagement signals.", align: "right" },
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
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Learning Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on your learners</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built learning infrastructure eliminates the friction that caps engagement
                  and completion rates. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=edtech" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors cursor-pointer">
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
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium customHeading leading-tight mb-5">
            Your learners deserve<br />
            <span className="text-white/35">better than buffering.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you serve 1,000 or 10 million learners, we build the platform infrastructure
            that delivers education at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=edtech" className="px-7 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Talk to an EdTech engineer
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


