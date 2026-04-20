"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Dot grid pattern (same as DifferenceSection) ─────────────────────── */
const dotGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='0.8' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E\")";


/* ── Page ──────────────────────────────────────────────────────────────── */
export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-36 pb-24 px-6 text-center overflow-hidden">
        {/* Ambient top glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(20,60,180,0.13) 0%, transparent 60%)",
          }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: dotGrid }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8341c]" />
            <span className="text-white/50 text-xs tracking-widest uppercase">
              Our Software Solutions
            </span>
          </div>

          <h1
            className="font-bold text-white mb-6 leading-[1.05]"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(44px, 6vw, 80px)",
              letterSpacing: "-2.5px",
            }}
          >
            Built In-House.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #e8341c 0%, #ff6b4a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Deployed at Scale.
            </span>
          </h1>

          <p
            className="text-white/45 max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(15px, 1.2vw, 18px)",
            }}
          >
            Alongside client work, we build our own products , solving real problems
            with the same engineering rigour we bring to every engagement.
          </p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
        />
      </section>

      {/* ── IntVue product ──────────────────────────────────────────────── */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-[1400px]">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/30 uppercase tracking-widest">01</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-white/30 uppercase tracking-widest">Featured Product</span>
          </div>

          {/* Product hero card */}
          <div
            className="relative rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ background: "#0d0d10" }}
          >
            {/* Card ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 50%, rgba(232,52,28,0.06) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(20,60,180,0.07) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              {/* Left: identity + description */}
              <div className="p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div>
                  {/* Live badge */}
                  <div className="flex items-center gap-2 mb-10">
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
                      <span
                        style={{
                          background: "linear-gradient(90deg, #e8341c, #ff6b4a)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Vue
                      </span>
                    </h2>
                    <p
                      className="text-white/25 uppercase tracking-[0.2em] text-xs mt-2"
                      style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                    >
                      Virtual Interview Platform
                    </p>
                  </div>

                  {/* Dashed divider */}
                  <div className="border-t border-dashed border-white/10 my-8" />

                  <p
                    className="text-white/50 leading-relaxed mb-10"
                    style={{
                      fontFamily: '"Roobert TRIAL", sans-serif',
                      fontSize: "clamp(14px, 1vw, 16px)",
                      maxWidth: "38ch",
                    }}
                  >
                    IntVue is a smart, web-based platform that enables businesses to
                    conduct virtual video interviews. AI-powered features streamline
                    and enrich the full recruitment experience , from first screening
                    to final decision.
                  </p>

                  {/* Stat pills */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      { value: "AI-Powered", sub: "Candidate scoring" },
                      { value: "100%", sub: "Web-based" },
                      { value: "3x", sub: "Faster screening" },
                    ].map((s) => (
                      <div
                        key={s.sub}
                        className="border border-white/[0.06] rounded-xl px-4 py-3 bg-white/[0.02]"
                      >
                        <div
                          className="text-white font-semibold text-sm"
                          style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                        >
                          {s.value}
                        </div>
                        <div className="text-white/30 text-xs">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.intvue.com/Home/app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#e8341c] hover:bg-[#c02a16] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
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

              {/* Right: mockup */}
              <div className="p-10 lg:p-12 flex flex-col justify-center gap-8">
                <div className="relative">
                  {/* Glow behind image */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 50%, rgba(20,60,180,0.18) 0%, transparent 70%)",
                      filter: "blur(24px)",
                      transform: "scale(1.1)",
                    }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/intvue.png"
                    alt="IntVue platform on multiple devices"
                    className="relative w-full object-contain drop-shadow-2xl"
                    style={{ maxHeight: "420px" }}
                  />
                </div>

                {/* Caption row */}
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e8341c]" />
                  <span className="text-white/25 text-xs">
                    Schedule, record &amp; review , all in one place
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/30 uppercase tracking-widest">Capabilities</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                title: "Candidate\nRecommendations",
                body: "AI surfaces best-fit candidates automatically based on role requirements, saving hours of manual shortlisting.",
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
                accent: true,
              },
              {
                num: "02",
                title: "Automated\nScreening",
                body: "Pre-screen candidates at scale with structured video assessments. No live calls required until you're ready.",
                icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
                accent: false,
              },
              {
                num: "03",
                title: "Intelligent Voice\nCapabilities",
                body: "Real-time transcription, tone analysis, and response scoring built directly into every interview session.",
                icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
                accent: false,
              },
              {
                num: "04",
                title: "Schedule\n& Review",
                body: "Centralised dashboard to schedule, record, replay, and collaboratively review every interview with your team.",
                icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
                accent: false,
              },
            ].map((f) => (
              <div
                key={f.num}
                className="relative rounded-2xl border border-white/[0.06] p-7 flex flex-col justify-between overflow-hidden"
                style={{
                  background: f.accent ? "linear-gradient(135deg, rgba(232,52,28,0.08) 0%, #0d0d10 60%)" : "#0d0d10",
                  backgroundImage: f.accent ? undefined : dotGrid,
                }}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        f.accent
                          ? "bg-[#e8341c]/15 border border-[#e8341c]/20"
                          : "bg-white/[0.04] border border-white/[0.06]"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${f.accent ? "text-[#e8341c]" : "text-white/40"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <span className="text-white/10 text-2xl font-bold">{f.num}</span>
                  </div>
                  <h3
                    className="text-white font-semibold text-base leading-snug mb-3 whitespace-pre-line"
                    style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left label */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">How it works</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: '"Roobert TRIAL", sans-serif', letterSpacing: "-1px" }}
              >
                From post to<br />
                <span className="text-white/30">hired , fast.</span>
              </h2>
              <p className="text-white/35 text-sm leading-relaxed">
                IntVue compresses your hiring pipeline into a structured,
                insight-rich process that takes days, not weeks.
              </p>
            </div>

            {/* Right: steps */}
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Post the role & define criteria",
                  description:
                    "Define the role, set your screening questions, and configure the AI scoring rubric , takes under 10 minutes.",
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
                    "Share replays with your team, leave timestamped notes, and move top candidates to offer , all from one dashboard.",
                },
              ].map((s, i) => (
                <div
                  key={s.step}
                  className="flex gap-6 p-7 rounded-2xl border border-white/[0.06] bg-[#0d0d10]"
                >
                  <div
                    className="text-3xl font-bold flex-shrink-0 w-10"
                    style={{
                      fontFamily: '"Roobert TRIAL", sans-serif',
                      color: i === 0 ? "#e8341c" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold text-base mb-2"
                      style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming soon ─────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-white/30 uppercase tracking-widest">02</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-white/30 uppercase tracking-widest">Coming Soon</span>
          </div>

          <div
            className="relative rounded-2xl border border-dashed border-white/[0.08] overflow-hidden p-16 flex flex-col items-center justify-center text-center"
            style={{ backgroundImage: dotGrid, minHeight: 280 }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(20,60,180,0.06) 0%, transparent 65%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p
                className="text-white/30 font-semibold text-lg mb-2"
                style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
              >
                More products in the pipeline.
              </p>
              <p className="text-white/15 text-sm">We&apos;re building. Check back soon.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
