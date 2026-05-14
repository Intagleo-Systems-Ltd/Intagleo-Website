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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your learners deserve<br />
            <span className="text-white/35">better than buffering.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you serve 1,000 or 10 million learners, we build the platform infrastructure
            that delivers education at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=edtech" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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


