"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

/* ── Service cards ──────────────────────────────────────────────────────── */
const services = [
  {
    title: "iOS development",
    items: ["Swift & SwiftUI native apps", "App Store submission & optimisation", "iOS 17+ features & live activities"],
  },
  {
    title: "Android development",
    items: ["Kotlin & Jetpack Compose", "Material 3 design implementation", "Google Play deployment & ASO"],
  },
  {
    title: "Cross-platform (React Native & Flutter)",
    items: ["Single codebase, native performance", "Platform-specific UI adaptations", "OTA updates via CodePush / Shorebird"],
  },
  {
    title: "Backend & API integration",
    items: ["REST & GraphQL mobile APIs", "Push notifications & background sync", "Offline-first architecture"],
  },
  {
    title: "UX design & prototyping",
    items: ["Mobile-first interaction design", "Accessibility & gesture patterns", "Prototype testing before a line of code"],
  },
  {
    title: "App maintenance & growth",
    items: ["Performance monitoring & crash reporting", "A/B testing & feature flags", "Store rating optimisation"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discovery & UX blueprint",
    desc: "We map your user journeys, define core flows, and produce a clickable prototype before any code is written, so you validate the experience first.",
    align: "left",
  },
  {
    num: "02",
    title: "Architecture & build",
    desc: "Platform choice, state management, API design, and build pipeline set up from day one, so the app scales as your user base grows.",
    align: "right",
  },
  {
    num: "03",
    title: "Testing & store launch",
    desc: "Device testing across iOS and Android, App Store and Google Play submission, ASO metadata, and a monitored rollout to minimise risk.",
    align: "left",
  },
  {
    num: "04",
    title: "Iterate & improve",
    desc: "Analytics, crash reporting, and user feedback loops baked in from launch so every update is driven by real data, not guesswork.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "4.8★",  label: "Avg. App Store rating across shipped apps" },
  { big: "3wks",  label: "Avg. time from kick-off to working prototype" },
  { big: "60%",   label: "Faster delivery vs. native-only approach" },
  { big: "2M+",   label: "Combined users across deployed apps" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function MobileDevPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* Centre content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] text-[#3B82F6] text-xs font-medium tracking-wide">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="1" width="8" height="14" rx="2" />
                <path d="M7 12h2" />
              </svg>
              Mobile Development
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              Apps that users love.<br />
              <span className="text-white/35">Results you measure.</span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              Native iOS, Android, and cross-platform apps engineered for performance, usability, and
              scale — with the UX craft to drive real retention.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact?type=mobile-dev" className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                Start a conversation
              </Link>
              <Link href="#how-it-works" className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["iOS & Android Native", "React Native & Flutter", "App Store Submission", "Push & Offline Support", "UX-First Design"].map((feat) => (
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
                { value: "100+",  label: "Apps Shipped" },
                { value: "4.8★",  label: "Avg. App Store Rating" },
                { value: "50M+",  label: "Combined Users" },
                { value: "2×",    label: "Faster Time to Market" },
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

      {/* WHAT WE DELIVER */}
      <section style={{ background: "#0a0a0a" }} className="relative section-padding py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">What We Deliver</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Full-cycle mobile development, from UX design to store launch and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <div key={svc.title} className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group" style={{ minHeight: "220px" }}>
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/wave-bg.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)", opacity: 0.85 }} />
                </div>
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">{svc.title}</h3>
                <ul className="relative z-10 space-y-2 mt-8">
                  {svc.items.map((item) => (
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

      {/* DO YOU KNOW */}
      <section className="relative overflow-hidden section-padding py-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl border border-white/[0.10] overflow-hidden">
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">
              <span className="text-[#3B82F6]">Do you know</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">
              how many users abandon an app after one bad experience?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              88% of users won&apos;t return after a single poor experience. We build the UX and
              performance that keeps them coming back.
            </p>
            <Link href="/contact?type=mobile-dev" className="w-fit px-6 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
              Get a free app audit
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50">
              <source src="/hero.webm" type="video/webm" />
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, #06080f, transparent)" }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium customHeading mb-4">
              From idea to App Store,{" "}
              <span className="font-light text-white/50">in weeks.</span>
            </h2>
            <p className="text-white/40">Our mobile delivery process, built to de-risk and ship fast.</p>
          </div>
                    <ScrollTimeline steps={steps} />
        </div>
      </section>

      {/* TECH STACK */}
     

      {/* STATS */}
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            {[{ ...stats[0], span: true }, { ...stats[1], span: false }, { ...stats[3], span: true }, { ...stats[2], span: false }].map((stat, i) => (
              <div key={i} className={`${stat.span ? "md:row-span-2" : ""} relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10`} style={{ minHeight: stat.span ? "200px" : "180px", background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
                <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
                <div className="relative z-10 text-center">
                  <p className={`font-semibold leading-none tracking-[-2px] text-[#e6f2ff] ${stat.span ? "text-[clamp(56px,6vw,96px)]" : "text-[clamp(48px,5vw,80px)]"}`}>{stat.big}</p>
                  <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE WAYS */}
      <section className="section-padding py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight" style={{ backgroundImage: "linear-gradient(162deg, rgb(230,242,255) 44%, rgb(175,175,175) 111%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Flexible ways to work together.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { badge: "Fixed-term / Discovery", title: "App MVP build", desc: "A focused build of your core user journeys, designed and shipped in 6-8 weeks to validate product-market fit before a full build." },
              { badge: "Project-based / Delivery", title: "Full native or cross-platform app", desc: "End-to-end development of your iOS, Android, or cross-platform app, from architecture to App Store, with full handover." },
              { badge: "Retainer / Embedded", title: "Ongoing mobile team", desc: "Dedicated mobile engineers embedded in your product team, shipping features, improving performance, and iterating on user feedback." },
            ].map((card) => (
              <div key={card.title} className="relative rounded-[28px] overflow-hidden flex flex-col justify-end" style={{ border: "1.4px solid rgba(204,215,255,0.18)", background: "linear-gradient(to bottom, #20272c, rgba(17,17,21,0))", minHeight: "360px" }}>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.6 }} />
                  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,2,17,0), #050914)" }} />
                </div>
                <div className="absolute top-8 left-8 z-10">
                  <div className="px-4 py-2 rounded-full text-white text-xs font-medium whitespace-nowrap" style={{ background: "rgba(229,62,48,0.4)" }}>{card.badge}</div>
                </div>
                <div className="relative z-10 p-8 pt-0">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-snug">{card.title}</h3>
                  <p className="text-[#d6d8d8] text-sm leading-relaxed opacity-60">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection pageSlug="mobile-dev" />
      <InsightsSection pageSlug="mobile-dev" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">
          <source src="/footer_CTA.webm" type="video/webm" />
          <source src="/footer_CTA.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your next app should<br />ship with confidence.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build a mobile experience your users will love opening every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=mobile-dev" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">Start a conversation</Link>
            <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


