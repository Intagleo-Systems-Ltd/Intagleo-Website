


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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div
            className="absolute top-0 left-0 right-0 h-40"
            style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-72"
            style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
          />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* Centre content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] text-[#3B82F6] text-xs font-medium tracking-wide">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="5" r="2" />
                <circle cx="11" cy="5" r="2" />
                <path d="M1 13c0-2.21 1.79-4 4-4s4 1.79 4 4M9 11c.65-.97 1.65-1.63 2.8-1.63S14 10.09 14.65 11" />
              </svg>
              Staff Augmentation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              The talent you need.<br />
              <span className="text-white/35">Without the overhead.</span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              Extend your team with vetted engineers, developers, and specialists —
              fully embedded, immediately productive.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?type=staff-augmentation"
                className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
              >
                Start a conversation
              </Link>
              <Link
                href="#how-it-works"
                className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
              >
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["Senior Engineers Only", "2-Week Onboarding", "Time Zone Aligned", "NDA-Ready", "Flexible Engagement"].map((feat) => (
                <span key={feat} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40 text-[11px] font-medium">
                  {feat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 px-6 pb-12 section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-white/[0.07] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "200+", label: "Engineers Available" },
                { value: "2wks", label: "Avg. Onboarding Time" },
                { value: "95%",  label: "Retention Rate" },
                { value: "50+",  label: "Enterprise Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-1 customHeading">{s.value}</div>
                  <div className="text-white/35 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE DELIVER                                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#0a0a0a" }} className="relative section-padding py-24">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">What We Deliver</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              See how we&apos;ve helped businesses turn complex challenges into scalable digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group"
                style={{ minHeight: "220px" }}
              >
                {/* Dark wave texture background */}
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wave-bg.webp"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)" , opacity: 0.85}} />
                </div>

                {/* Title , top */}
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">
                  {role.title}
                </h3>

                {/* Items , bottom */}
                <ul className="relative z-10 space-y-2 mt-8">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/45">
                      <span className="text-white/30 text-base leading-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* NOT SURE WHAT ROLE                                                 */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-padding py-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl border border-white/[0.10] overflow-hidden">

          {/* Left , text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              <span className="text-[#3B82F6]">Not sure</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">
              What role you need?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Tell us where you&apos;re stuck and we&apos;ll map the right profile to your gap.
            </p>
            <Link
              href="/contact?type=staff-augmentation"
              className="w-fit px-6 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Request a team assessment
            </Link>
          </div>

          {/* Right , GIF */}
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/staffaug1.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Left fade so GIF blends into the text panel */}
            <div
              className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to right, #06080f, transparent)" }}
            />
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS , From brief to billable                                   */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how-it-works" className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium customHeading mb-4">
              From brief to billable in days,{" "}
              <span className="font-light text-white/50">not months.</span>
            </h2>
            <p className="text-white/40">
              See how we&apos;ve helped businesses turn complex challenges into scalable digital solutions.
            </p>
          </div>

          <ScrollTimeline steps={steps} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH STACK                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
    

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* STATS                                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* STATS , bento grid                                                 */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          {/* 3-column bento: left tall | middle 2 stacked | right tall */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-[auto] md:grid-rows-[1fr_1fr] gap-3">

            {/* Stat card inner style */}
            {/* LEFT , 48hrs (row span 2) */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              {/* cross texture */}
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">48hrs</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Average time to shortlist</p>
              </div>
            </div>

            {/* MIDDLE TOP , 200+ */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">200+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Vetted engineers ready</p>
              </div>
            </div>

            {/* RIGHT , 20+ (row span 2) */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">20+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Industry domains covered</p>
              </div>
            </div>

            {/* MIDDLE BOTTOM , 94% */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">94%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Client retention rate</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CASE STUDIES , same component as homepage                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="staff-augmentation" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* INSIGHTS , same component as homepage                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <InsightsSection pageSlug="staff-augmentation" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-32 px-6 text-center">
        {/* Background GIF */}
        <video autoPlay loop muted playsInline preload="auto" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none">
          <source src="/footer_CTA.webm" type="video/webm" />
          <source src="/footer_CTA.mp4" type="video/mp4" />
        </video>
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


