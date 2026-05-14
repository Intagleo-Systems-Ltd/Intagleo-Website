


"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

/* ── Dot grid pattern ──────────────────────────────────────────────────── */
const dotGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='0.8' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E\")";

/* ── Hex mesh SVG (hero bg) ────────────────────────────────────────────── */
const hexMesh =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpath d='M30 2 L56 17 L56 35 L30 50 L4 35 L4 17 Z' fill='none' stroke='rgba(255,255,255,0.035)' stroke-width='1'/%3E%3C/svg%3E\")";

/* ── Role cards data ───────────────────────────────────────────────────── */
const roles = [
  {
    title: "Software Engineers",
    items: ["Frontend/backend/fullstack", "Web/mobile platforms", "API/integration work"],
  },
  {
    title: "QA & Test Engineers",
    items: ["Manual/automated testing", "Performance/load testing", "CI/CD pipeline integration"],
  },
  {
    title: "DevOps & Cloud Engineers",
    items: ["Infrastructure setup/management", "CI/CD pipelines/deployments", "Cloud cost optimisation"],
  },
  {
    title: "Data & AI Specialists",
    items: ["Data engineering/pipelines", "ML model integration", "Analytics/reporting builds"],
  },
  {
    title: "Product & UX",
    items: ["Product managers/owners", "UX designers/researchers", "Business analysts"],
  },
  {
    title: "Tech Leadership",
    items: ["Engineering leads/architects", "CTO-as-a-service", "Technical programme management"],
  },
];

/* ── Process steps ─────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Understand your gap",
    desc: "A 30-minute technical brief to define the exact skills, seniority, and cultural fit required for your team extension.",
    align: "left",
  },
  {
    num: "02",
    title: "Match and shortlist",
    desc: "We source candidates from our internal bench and vetted+ network, presenting the top 2–3 profiles within 48 hours.",
    align: "right",
  },
  {
    num: "03",
    title: "Interview and select",
    desc: "Direct access to the candidates for technical assessment. You maintain full control over the final selection decision.",
    align: "left",
  },
  {
    num: "04",
    title: "Embed and deliver",
    desc: "Seamless integration into your Slack, Jira, and codebase. Our talent adopts your workflow from day one.",
    align: "right",
  },
];

/* ── Pre-defined star positions (avoids hydration mismatch) ───────────── */
const stars = [
  { w: 1.2, h: 1.2, top: 8,  left: 12, op: 0.18 }, { w: 0.8, h: 0.8, top: 15, left: 45, op: 0.12 },
  { w: 1.5, h: 1.5, top: 22, left: 78, op: 0.22 }, { w: 0.6, h: 0.6, top: 30, left: 92, op: 0.09 },
  { w: 1.0, h: 1.0, top: 42, left: 5,  op: 0.15 }, { w: 1.3, h: 1.3, top: 55, left: 33, op: 0.20 },
  { w: 0.7, h: 0.7, top: 63, left: 67, op: 0.11 }, { w: 1.8, h: 1.8, top: 72, left: 88, op: 0.25 },
  { w: 0.9, h: 0.9, top: 18, left: 58, op: 0.13 }, { w: 1.1, h: 1.1, top: 85, left: 22, op: 0.17 },
  { w: 0.5, h: 0.5, top: 91, left: 75, op: 0.08 }, { w: 1.4, h: 1.4, top: 38, left: 50, op: 0.16 },
  { w: 1.0, h: 1.0, top: 48, left: 15, op: 0.14 }, { w: 0.8, h: 0.8, top: 6,  left: 82, op: 0.10 },
  { w: 1.6, h: 1.6, top: 77, left: 40, op: 0.21 }, { w: 0.7, h: 0.7, top: 95, left: 10, op: 0.09 },
  { w: 1.2, h: 1.2, top: 25, left: 25, op: 0.15 }, { w: 0.9, h: 0.9, top: 60, left: 95, op: 0.12 },
  { w: 1.0, h: 1.0, top: 35, left: 70, op: 0.14 }, { w: 1.3, h: 1.3, top: 82, left: 55, op: 0.18 },
  { w: 0.6, h: 0.6, top: 12, left: 38, op: 0.10 }, { w: 1.5, h: 1.5, top: 68, left: 28, op: 0.22 },
  { w: 0.8, h: 0.8, top: 50, left: 60, op: 0.11 }, { w: 1.1, h: 1.1, top: 3,  left: 65, op: 0.16 },
  { w: 1.4, h: 1.4, top: 88, left: 48, op: 0.19 }, { w: 0.7, h: 0.7, top: 45, left: 85, op: 0.10 },
  { w: 1.0, h: 1.0, top: 20, left: 3,  op: 0.13 }, { w: 1.2, h: 1.2, top: 75, left: 72, op: 0.17 },
  { w: 0.9, h: 0.9, top: 58, left: 18, op: 0.12 }, { w: 1.6, h: 1.6, top: 93, left: 35, op: 0.20 },
  { w: 0.5, h: 0.5, top: 32, left: 90, op: 0.08 }, { w: 1.3, h: 1.3, top: 10, left: 55, op: 0.15 },
  { w: 1.1, h: 1.1, top: 66, left: 8,  op: 0.14 }, { w: 0.8, h: 0.8, top: 40, left: 42, op: 0.11 },
  { w: 1.5, h: 1.5, top: 28, left: 98, op: 0.18 }, { w: 0.6, h: 0.6, top: 80, left: 62, op: 0.09 },
  { w: 1.0, h: 1.0, top: 52, left: 77, op: 0.13 }, { w: 1.2, h: 1.2, top: 4,  left: 30, op: 0.16 },
  { w: 0.7, h: 0.7, top: 72, left: 15, op: 0.10 }, { w: 1.4, h: 1.4, top: 44, left: 52, op: 0.19 },
  { w: 0.9, h: 0.9, top: 16, left: 68, op: 0.12 }, { w: 1.8, h: 1.8, top: 84, left: 82, op: 0.24 },
  { w: 0.6, h: 0.6, top: 36, left: 22, op: 0.09 }, { w: 1.1, h: 1.1, top: 97, left: 58, op: 0.14 },
  { w: 1.3, h: 1.3, top: 56, left: 38, op: 0.17 }, { w: 0.8, h: 0.8, top: 70, left: 48, op: 0.11 },
  { w: 1.0, h: 1.0, top: 24, left: 88, op: 0.13 }, { w: 1.5, h: 1.5, top: 46, left: 2,  op: 0.20 },
  { w: 0.7, h: 0.7, top: 90, left: 28, op: 0.10 }, { w: 1.2, h: 1.2, top: 62, left: 98, op: 0.16 },
  { w: 0.9, h: 0.9, top: 14, left: 15, op: 0.12 }, { w: 1.6, h: 1.6, top: 78, left: 68, op: 0.21 },
  { w: 0.5, h: 0.5, top: 34, left: 62, op: 0.08 }, { w: 1.1, h: 1.1, top: 48, left: 32, op: 0.15 },
  { w: 1.3, h: 1.3, top: 8,  left: 95, op: 0.17 }, { w: 0.8, h: 0.8, top: 55, left: 52, op: 0.11 },
  { w: 1.0, h: 1.0, top: 82, left: 5,  op: 0.13 }, { w: 1.4, h: 1.4, top: 26, left: 75, op: 0.18 },
  { w: 0.6, h: 0.6, top: 68, left: 42, op: 0.09 }, { w: 1.2, h: 1.2, top: 96, left: 88, op: 0.16 },
];

/* ── Stats ─────────────────────────────────────────────────────────────── */
const stats = [
  { value: "48hrs", label: "Average time to shortlist", highlight: "48hrs" },
  { value: "200+", label: "Vetted engineers ready", highlight: "200+" },
  { value: "94%", label: "Client retention rate", highlight: "94%" },
  { value: "20+", label: "Industry domains covered", highlight: "20+" },
];

/* ── Page ──────────────────────────────────────────────────────────────── */
export default function StaffAugmentationPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* ── Hero background image ─────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your Next Sprint Shouldn&apos;t<br />Wait On Hiring.
          </h2>
          <p className="text-white/45 mb-10">Let&apos;s get your architecture right.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=start-project"
              className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Start a conversation
            </Link>
                       <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>
           
          </div>

          <p className="text-white/25 text-xs tracking-wide">
            Direct Engineer Access · Response within 1 business day
          </p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


