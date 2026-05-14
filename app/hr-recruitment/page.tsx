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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Top candidates don&apos;t wait<br />
            <span className="text-white/35">for slow hiring pipelines.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you hire 100 or 100,000 people a year, we build the HR technology
            that gives you a measurable edge in every talent market.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=hr-recruitment" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
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


