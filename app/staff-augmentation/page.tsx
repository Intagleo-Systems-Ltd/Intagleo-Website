


"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

        {/* ── Hero background image ─────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Hex mesh photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          {/* Dark overlay so text stays legible */}
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          {/* Top fade , darkens the very top so navbar blends in */}
          <div
            className="absolute top-0 left-0 right-0 h-40"
            style={{ background: "linear-gradient(to bottom, #07080f 0%, transparent 100%)" }}
          />
          {/* Bottom fade , blends into the page */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: "linear-gradient(to top, #07080f 0%, transparent 100%)" }}
          />
          {/* Side vignettes */}
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* ── Headline + CTAs ───────────────────────────────────────────── */}
        <div className="relative z-10 max-w-3xl mx-auto pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            The talent you need.<br />Without the overhead.
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            Extend your team with vetted engineers, developers, and specialists ,
            fully embedded, immediately productive.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/contact?type=staff-augmentation"
              className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="#how-it-works"
              className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
            >
              See how it works
            </Link>
          </div>

          {/* ── Trusted by strip ─────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by teams that can&apos;t afford to slow down.</p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
                { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
                { name: "Red Bull",    src: "/logos/red-bull.png",    invert: true  },
                { name: "KIA",         src: "/logos/kia.png",         invert: true  },
                { name: "Emaar",       src: "/logos/emaar.png",       invert: false },
                { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
                  style={{
                    filter: logo.invert ? "brightness(0) invert(1)" : "none",
                    maxWidth: "110px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── "Hiring takes months" card ───────────────────────────────── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#0e0f18] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">

              {/* Left , photo collage */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#0b0c15]">
                {/* emp1 , left column, full height */}
                <div className="col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ minHeight: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp1.png" alt="Team member" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                {/* emp2 , top right */}
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp2.png" alt="Team member" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                {/* emp3 , bottom right */}
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp3.png" alt="Team member" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>

              {/* Right , text */}
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Hiring takes months.<br />
                  <span className="text-white/40">Your roadmap can&apos;t wait.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  Scaling too fast comes at the cost of momentum. We give you
                  pre-vetted engineers and specialists , matched to your stack,
                  onboarded to your workflows, and productive from day one. We
                  believe that the right engineers give you more focus and drive
                  more value through every sprint.
                </p>
                <Link
                  href="/contact?type=staff-augmentation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE DELIVER                                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Deliver</h2>
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
                    src="/wave-bg.png"
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
              <span className="text-[#e8341c]">Not sure</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What role you need?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Tell us where you&apos;re stuck and we&apos;ll map the right profile to your gap.
            </p>
            <Link
              href="/contact?type=staff-augmentation"
              className="w-fit px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
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
      <section className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From brief to billable in days,{" "}
              <span className="font-light text-white/50">not months.</span>
            </h2>
            <p className="text-white/40">
              See how we&apos;ve helped businesses turn complex challenges into scalable digital solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />

            <div className="space-y-20">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative flex items-start gap-8 ${
                    step.align === "right" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#e8341c]">
                      {step.num}
                    </span>
                    <h3 className="text-white font-bold text-xl mt-3 mb-3">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/25 border border-white/20 flex-shrink-0" />

                  {/* Empty side */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH STACK                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 overflow-hidden">
        {/* Warm conic glow from bottom-center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "conic-gradient(from 180deg at 50% 110%, rgba(175,77,68,0.35) 0%, rgba(90,43,44,0.12) 12%, transparent 28%)"
        }} />
        {/* Red glow , left edge */}
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 0% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)"
        }} />
        {/* Red glow , right edge (mirror) */}
        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 100% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)"
        }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Built across the modern stack
            </h2>
            <p className="text-white/40 text-sm">
              Our engineers are fluent in the tools your product already runs on.
            </p>
          </div>
        </div>

        {/* Full-bleed diagram , 1920×1117 Figma coordinate space */}
        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>

          {/* ── Single SVG layer: ovals + connector lines (scales perfectly) ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1920 1117"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="og1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.4"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.3"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.8"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
            </defs>

            {/* Concentric ovals , exact Figma values */}
            <rect x="121"  y="89"  width="1678" height="1153" rx="191" fill="url(#og1)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="240"  y="209" width="1439" height="1033" rx="163" fill="url(#og2)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="366"  y="336" width="1188" height="906"  rx="145" fill="url(#og3)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="487"  y="457" width="946"  height="785"  rx="145" fill="url(#og4)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="619"  y="586" width="682"  height="656"  rx="116" fill="url(#og5)"     stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x="827"  y="372" width="266"  height="262"  rx="52"  fill="url(#ogInner)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741"  y="684" width="438"  height="307"  rx="116" fill="url(#ogBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

            {/* Connector lines , center (960,503) → logo centers (lp%*1920, tp%*1117) */}
            <path d="M960,503 C750,503 430,430 269,310"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1540,440 1613,348" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 500,475 384,475"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1620,503 1699,566" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 330,550 163,623"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,580 1390,676" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 540,640 480,728"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,380 1405,302" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>

          {/* ── Logo cards , % positions from Figma 1920×1117 ── */}
          {/* card size 81×77px in Figma → 4.22vw, clamped */}
          {[
            { name: "FabricJS",  src: "https://www.figma.com/api/mcp/asset/516188b4-8bab-4494-8fe8-cd7fd2ed7216", lp: 14.0,  tp: 27.75 },
            { name: ".NET",      src: "https://www.figma.com/api/mcp/asset/3debae87-678e-40ac-b947-c2758e77268f", lp: 84.0,  tp: 31.16 },
            { name: "Swift",     src: "https://www.figma.com/api/mcp/asset/ad30ee61-6e8e-44c8-89be-c89d8b6512c3", lp: 20.0,  tp: 42.52 },
            { name: "Group264",  src: "https://www.figma.com/api/mcp/asset/9bbe980c-0630-458d-8f5c-9babe97ae027", lp: 88.5,  tp: 50.67 },
            { name: "Vue",       src: "https://www.figma.com/api/mcp/asset/cf29ef04-c3e4-4d61-8d6d-92d14d951885", lp:  8.5,  tp: 55.77 },
            { name: "Kubernetes",src: "https://www.figma.com/api/mcp/asset/f3cfe329-9483-441a-92cb-c7c5e7a9c138", lp: 72.38, tp: 60.52 },
            { name: "Python",    src: "https://www.figma.com/api/mcp/asset/b3ec0726-9310-43e7-ab42-29a12030c5e9", lp: 25.0,  tp: 65.18 },
            { name: "React",     src: "https://www.figma.com/api/mcp/asset/abf860ed-211e-4291-8d58-cde59c78593a", lp: 73.16, tp: 27.04 },
          ].map((tech) => (
            <div
              key={tech.name}
              className="absolute z-10"
              style={{ left: `${tech.lp}%`, top: `${tech.tp}%`, transform: "translate(-50%,-50%)" }}
            >
              <div
                className="rounded-[18px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                style={{
                  width: "clamp(52px, 4.22vw, 82px)",
                  height: "clamp(52px, 4.22vw, 82px)",
                  padding: "clamp(10px, 0.8vw, 16px)",
                  backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)",
                  backdropFilter: "blur(3px)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          ))}

          {/* ── Center card , exact Figma: left 43.6%, top 33.3%, size 12.66% ── */}
          <div
            className="absolute z-20"
            style={{ left: "49.9%", top: "45%", transform: "translate(-50%,-50%)" }}
          >
            <div
              className="rounded-[22px] flex items-center justify-center"
              style={{
                width: "clamp(80px, 12.66vw, 244px)",
                height: "clamp(80px, 12.55vw, 241px)",
                padding: "clamp(14px, 1.8vw, 30px)",
                backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-static.png" alt="Intagleo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* ── Technologies pill , Figma: left 43.5%, top 70.2% ── */}
          <div
            className="absolute z-20"
            style={{ left: "50%", top: "78%", transform: "translate(-50%,-50%)" }}
          >
            <div
              className="rounded-[58px] flex items-center justify-center"
              style={{
                padding: "clamp(8px, 1.5vw, 29px) clamp(20px, 3vw, 58px)",
                background: "linear-gradient(to bottom, #050914, rgba(5,9,20,0.6))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span
                className="whitespace-nowrap font-normal"
                style={{
                  fontSize: "clamp(13px, 1.25vw, 24px)",
                  backgroundImage: "linear-gradient(120deg, rgb(230,242,255) 20%, rgb(175,175,175) 41%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technologies
              </span>
            </div>
          </div>

        </div>
      </section>

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer_CTA.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your Next Sprint Shouldn&apos;t<br />Wait On Hiring.
          </h2>
          <p className="text-white/45 mb-10">Let&apos;s get your architecture right.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=start-project"
              className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors"
            >
              Schedule a Technical Call
            </Link>
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
