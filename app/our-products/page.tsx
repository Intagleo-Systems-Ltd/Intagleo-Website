"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { ReactNode } from "react";

/* ── Shared assets ──────────────────────────────────────────────────────── */
const dotGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='0.8' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E\")";

/* ── Sub-component: FeatureCard ─────────────────────────────────────────── */
function FeatureCard({
  num,
  title,
  body,
  icon,
  color,
  className = "",
  mini,
}: {
  num: string;
  title: string;
  body: string;
  icon: string;
  color: string;
  className?: string;
  mini?: ReactNode;
}) {
  return (
    <div
      className={`feature-card group relative rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-7 flex flex-col overflow-hidden ${className}`}
    >
      {/* Hover glow */}
      <div
        className="feature-glow absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 20% 80%, ${color}1a 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              style={{ color }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
          </div>
          <span
            className="text-2xl font-bold"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              color: "rgba(255,255,255,0.05)",
            }}
          >
            {num}
          </span>
        </div>

        <h3
          className="text-white font-semibold text-base leading-snug mb-3"
          style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed flex-1">{body}</p>

        {mini && <div className="mt-6">{mini}</div>}
      </div>
    </div>
  );
}

/* ── Steps data ─────────────────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Post the role & define criteria",
    description:
      "Define the role, set your screening questions, and configure the AI scoring rubric — takes under 10 minutes.",
  },
  {
    step: "02",
    title: "Candidates record on their own time",
    description:
      "Applicants receive a link, record their video responses asynchronously, and submit. No scheduling friction.",
  },
  {
    step: "03",
    title: "AI scores, ranks & recommends",
    description:
      "IntVue analyses tone, content, and delivery. You get a ranked shortlist with AI-generated insights for each candidate.",
  },
  {
    step: "04",
    title: "Collaborate, decide & hire",
    description:
      "Share replays with your team, leave timestamped notes, and move top candidates to offer — all from one dashboard.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        @keyframes productFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerText {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes orbBreath {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        .prod-fade-up {
          opacity: 0;
          animation: productFadeUp 0.72s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #3B82F6 0%, #ff6b4a 40%, #a78bfa 70%, #3B82F6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 5s linear infinite;
        }
        .float-image { animation: floatY 5s ease-in-out infinite; }
        .orb-breath  { animation: orbBreath 7s ease-in-out infinite; }
        .feature-card { transition: border-color 0.3s ease, transform 0.3s ease; }
        .feature-card:hover { border-color: rgba(255,255,255,0.13); transform: translateY(-3px); }
        .feature-card:hover .feature-glow { opacity: 1; }
      `}</style>

      <Navbar />

      {/* ━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-36 pb-28 px-6 text-center overflow-hidden">

        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: dotGrid }} />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] orb-breath"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-10 left-0 w-[500px] h-[500px]"
            style={{ background: "radial-gradient(ellipse at 0% 30%, rgba(20,60,180,0.09) 0%, transparent 60%)" }}
          />
          <div
            className="absolute top-10 right-0 w-[500px] h-[500px]"
            style={{ background: "radial-gradient(ellipse at 100% 30%, rgba(255,107,74,0.07) 0%, transparent 60%)" }}
          />
        </div>

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-black leading-none"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(200px, 28vw, 380px)",
              color: "rgba(255,255,255,0.012)",
            }}
          >
            01
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badges */}
          <div
            className="prod-fade-up flex flex-wrap items-center justify-center gap-2.5 mb-9"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-white/50 text-xs tracking-widest uppercase">Our Software Solutions</span>
            </div>
            <div className="inline-flex items-center gap-2 border border-green-500/20 bg-green-500/[0.05] rounded-full px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-green-400/80 text-xs font-medium">1 Live</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="prod-fade-up font-bold text-white mb-6 leading-[1.04]"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(44px, 6.5vw, 90px)",
              letterSpacing: "-2.5px",
              animationDelay: "0.15s",
            }}
          >
            Built In-House.{" "}
            <span className="shimmer-text">Deployed at Scale.</span>
          </h1>

          <p
            className="prod-fade-up text-white/40 max-w-lg mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              animationDelay: "0.25s",
            }}
          >
            Alongside client work, we build our own products — solving real problems
            with the same engineering rigour we bring to every engagement.
          </p>

          {/* Scroll cue */}
          <div
            className="prod-fade-up mt-14 flex justify-center"
            style={{ animationDelay: "0.38s" }}
          >
            <div className="flex flex-col items-center gap-1.5 text-white/20">
              <span className="text-[10px] uppercase tracking-widest">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
        />
      </section>

      {/* ━━━ IntVue product card ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-[1400px]">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/25 uppercase tracking-widest">01</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-white/25 uppercase tracking-widest">Featured Product</span>
          </div>

          {/* Gradient-border card */}
          <div
            className="relative rounded-2xl p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.45) 0%, rgba(99,102,241,0.08) 35%, rgba(255,107,74,0.28) 100%)",
            }}
          >
            <div
              className="relative rounded-[calc(1rem-1px)] overflow-hidden"
              style={{ background: "#0d0d10" }}
            >
              {/* Ambient inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 40%, rgba(99,102,241,0.08) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(20,60,180,0.09) 0%, transparent 50%)",
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-0">

                {/* Left: identity */}
                <div className="p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                  <div>
                    {/* Status + year */}
                    <div className="flex items-center gap-2.5 mb-10">
                      <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live Product
                      </span>
                      <span className="text-white/20 text-xs">Est. 2020</span>
                    </div>

                    {/* Product name */}
                    <div className="mb-3">
                      <h2
                        className="font-bold text-white leading-none"
                        style={{
                          fontFamily: '"Roobert TRIAL", sans-serif',
                          fontSize: "clamp(56px, 7vw, 96px)",
                          letterSpacing: "-3px",
                        }}
                      >
                        Int
                        <span className="shimmer-text">Vue</span>
                      </h2>
                      <p className="text-white/25 uppercase tracking-[0.2em] text-xs mt-2">
                        Virtual Interview Platform
                      </p>
                    </div>

                    <div className="border-t border-dashed border-white/[0.08] my-8" />

                    <p
                      className="text-white/50 leading-relaxed mb-10"
                      style={{ fontSize: "clamp(14px, 1vw, 16px)", maxWidth: "38ch" }}
                    >
                      IntVue is a smart, web-based platform that enables businesses to
                      conduct virtual video interviews. AI-powered features streamline
                      and enrich the full recruitment experience — from first screening
                      to final decision.
                    </p>

                    {/* Stat pills — color-accented */}
                    <div className="grid grid-cols-3 gap-3 mb-10">
                      {[
                        { value: "AI", sub: "Candidate scoring", color: "#3B82F6" },
                        { value: "100%", sub: "Web-based", color: "#8b5cf6" },
                        { value: "3×", sub: "Faster screening", color: "#06b6d4" },
                      ].map((s) => (
                        <div
                          key={s.sub}
                          className="relative rounded-xl px-4 py-3.5 overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div
                            className="absolute inset-0 opacity-40 pointer-events-none"
                            style={{
                              background: `radial-gradient(ellipse at 0% 0%, ${s.color}22 0%, transparent 70%)`,
                            }}
                          />
                          <div className="relative">
                            <div
                              className="font-bold text-base"
                              style={{
                                fontFamily: '"Roobert TRIAL", sans-serif',
                                color: s.color,
                              }}
                            >
                              {s.value}
                            </div>
                            <div className="text-white/30 text-xs mt-0.5">{s.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.intvue.com/Home/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer"
                    >
                      Discover IntVue
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <Link
                      href="/contact?type=start-project"
                      className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                    >
                      Talk to us
                    </Link>
                  </div>
                </div>

                {/* Right: browser-chrome mockup */}
                <div className="p-10 lg:p-12 flex flex-col justify-center gap-6">
                  <div className="relative">
                    {/* Glow behind */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      aria-hidden="true"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.22) 0%, transparent 70%)",
                        filter: "blur(36px)",
                        transform: "scale(1.2)",
                      }}
                    />

                    {/* Browser chrome frame */}
                    <div
                      className="relative rounded-xl overflow-hidden border border-white/[0.08]"
                      style={{ background: "#161618" }}
                    >
                      {/* Chrome bar */}
                      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/[0.06] bg-[#111113]">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        <div className="flex-1 mx-3 h-5 rounded-md bg-white/[0.04] flex items-center px-2.5 gap-1.5">
                          <svg className="w-2.5 h-2.5 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75" />
                          </svg>
                          <span className="text-white/15 text-[9px]">app.intvue.com</span>
                        </div>
                      </div>

                      {/* Floating image */}
                      <div className="float-image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/intvue.png"
                          alt="IntVue platform on multiple devices"
                          className="w-full object-contain"
                          style={{ maxHeight: "380px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex items-center gap-3 px-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    <span className="text-white/25 text-xs">
                      Schedule, record &amp; review — all in one place
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Features bento ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/25 uppercase tracking-widest">Capabilities</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-white/25 uppercase tracking-widest">4 core features</span>
          </div>

          {/* Bento: 3-col grid, wide + narrow pattern */}
          <div className="grid grid-cols-3 gap-4">

            {/* 01 — wide (2 cols), with mini pipeline preview */}
            <FeatureCard
              num="01"
              title="Candidate Recommendations"
              body="AI surfaces best-fit candidates automatically based on role requirements, saving hours of manual shortlisting."
              icon="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              color="#3B82F6"
              className="col-span-2"
              mini={
                <div className="flex gap-3">
                  {[
                    { label: "Shortlisted", pct: 78 },
                    { label: "In Review", pct: 44 },
                    { label: "Offered", pct: 20 },
                  ].map((bar) => (
                    <div
                      key={bar.label}
                      className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                    >
                      <div className="text-[10px] text-white/30 mb-2">{bar.label}</div>
                      <div className="h-1.5 rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-[#3B82F6]/60"
                          style={{ width: `${bar.pct}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-white/20 mt-1.5">{bar.pct}%</div>
                    </div>
                  ))}
                </div>
              }
            />

            {/* 02 — narrow */}
            <FeatureCard
              num="02"
              title="Automated Screening"
              body="Pre-screen candidates at scale with structured video assessments. No live calls until you're ready."
              icon="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              color="#8b5cf6"
              className="col-span-1"
            />

            {/* 03 — narrow */}
            <FeatureCard
              num="03"
              title="Intelligent Voice"
              body="Real-time transcription, tone analysis, and response scoring built into every interview session."
              icon="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
              color="#06b6d4"
              className="col-span-1"
            />

            {/* 04 — wide (2 cols), with mini calendar preview */}
            <FeatureCard
              num="04"
              title="Schedule & Review"
              body="Centralised dashboard to schedule, record, replay, and collaboratively review every interview with your team."
              icon="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              color="#10b981"
              className="col-span-2"
              mini={
                <div className="grid grid-cols-4 gap-2">
                  {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                    <div
                      key={day}
                      className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-2 py-3 text-center"
                    >
                      <div className="text-[10px] text-white/25 mb-2.5">{day}</div>
                      <div className="space-y-1.5">
                        {[...Array(i % 2 === 0 ? 2 : 1)].map((_, j) => (
                          <div
                            key={j}
                            className="h-2 rounded"
                            style={{ background: `rgba(16,185,129,${0.18 + j * 0.12})` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            />

          </div>
        </div>
      </section>

      {/* ━━━ How it works — vertical timeline ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Left sticky label */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">How it works</p>
              <h2
                className="text-3xl md:text-4xl font-bold heading-gradient leading-tight mb-4"
                style={{ fontFamily: '"Roobert TRIAL", sans-serif', letterSpacing: "-1px" }}
              >
                From post to<br />
                <span className="text-white/25">hired — fast.</span>
              </h2>
              <p className="text-white/35 text-sm leading-relaxed mb-8">
                IntVue compresses your hiring pipeline into a structured,
                insight-rich process that takes days, not weeks.
              </p>

              {/* Metric highlight */}
              <div
                className="rounded-2xl p-6 border border-white/[0.06]"
                style={{ background: "#0d0d10", backgroundImage: dotGrid }}
              >
                <div
                  className="text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                >
                  3×
                </div>
                <div className="text-white/35 text-sm leading-relaxed">
                  faster time-to-hire vs. traditional video interview setups
                </div>
              </div>
            </div>

            {/* Right: timeline steps */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div
                className="absolute left-5 top-6 bottom-6 w-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(99,102,241,0.5) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
                }}
              />

              <div className="space-y-3">
                {steps.map((s, i) => (
                  <div key={s.step} className="relative flex gap-5">
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0 mt-[1.4rem]">
                      <div
                        className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold"
                        style={{
                          background:
                            i === 0 ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.03)",
                          borderColor:
                            i === 0 ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)",
                          color:
                            i === 0 ? "#3B82F6" : "rgba(255,255,255,0.22)",
                        }}
                      >
                        {s.step}
                      </div>
                    </div>

                    {/* Step card */}
                    <div
                      className="flex-1 rounded-2xl border p-6 transition-colors duration-200"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, #0d0d10 100%)"
                            : "#0d0d10",
                        borderColor:
                          i === 0
                            ? "rgba(99,102,241,0.22)"
                            : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <h3
                        className="text-white font-semibold text-base mb-2"
                        style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ Coming soon — ghost teaser cards ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/25 uppercase tracking-widest">02</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-white/25 uppercase tracking-widest">In Development</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: "Coming Q2 2026",
                hint: "AI-Onboarding Agent",
                glowColor: "rgba(99,102,241,0.07)",
              },
              {
                label: "In Stealth",
                hint: "Smart Signage Solution",
                glowColor: "rgba(139,92,246,0.07)",
              },
              {
                label: "Coming Q3 2026",
                hint: "AI-Powered HRM System",
                glowColor: "rgba(6,182,212,0.07)",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-dashed border-white/[0.07] overflow-hidden"
                style={{ backgroundImage: dotGrid, minHeight: 240 }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.glowColor} 0%, transparent 65%)` }}
                />

                {/* Ghost content — decorative skeleton lines */}
                <div className="absolute inset-0 flex flex-col p-8 select-none pointer-events-none" aria-hidden="true">
                  <div className="h-2 w-16 rounded bg-white/[0.04] mb-4" />
                  <div className="h-6 w-28 rounded bg-white/[0.03] mb-3" />
                  <div className="h-1.5 w-full rounded bg-white/[0.025] mb-2" />
                  <div className="h-1.5 w-4/5 rounded bg-white/[0.025] mb-2" />
                  <div className="h-1.5 w-3/5 rounded bg-white/[0.025]" />
                </div>

                {/* Real overlay content */}
                <div className="relative z-10 h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-4">
                    <svg
                      className="w-4 h-4 text-white/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#3B82F6]/50 text-[10px] uppercase tracking-widest mb-2.5">
                    {p.label}
                  </span>
                  <p
                    className="text-white/25 font-semibold text-sm"
                    style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                  >
                    {p.hint}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/20 text-sm">We&apos;re building. Check back soon.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
