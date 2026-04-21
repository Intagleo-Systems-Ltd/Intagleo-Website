"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #07080f 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #07080f 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto pb-12">
          <p className="text-xs text-white/35 uppercase tracking-widest mb-5">Mobile Development</p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Apps your users<br />
            won&apos;t uninstall.<br />
            <span className="text-white/35">Built to last.</span>
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            Native iOS, Android, and cross-platform apps engineered for performance, usability, and
            scale, with the UX craft to drive real retention.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link href="/contact?type=mobile-dev" className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Start a conversation
            </Link>
            <Link href="#how-it-works" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See how it works
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by product teams shipping to millions of users.</p>
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
                <img key={logo.name} src={logo.src} alt={logo.name}
                  className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
                  style={{ filter: logo.invert ? "brightness(0) invert(1)" : "none", maxWidth: "110px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hanging card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#0e0f18] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#0b0c15]">
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
                  <img src="/emp3.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Most apps fail because<br />
                  <span className="text-white/40">of poor UX, not bad code.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  We build mobile products that users want to open daily, from the first prototype
                  to App Store charts, combining engineering rigour with mobile UX that converts.
                </p>
                <Link href="/contact?type=mobile-dev" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
                  Talk to a mobile engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="relative section-padding py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Deliver</h2>
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
              <span className="text-[#e8341c]">Do you know</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              how many users abandon an app after one bad experience?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              88% of users won&apos;t return after a single poor experience. We build the UX and
              performance that keeps them coming back.
            </p>
            <Link href="/contact?type=mobile-dev" className="w-fit px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">
              Get a free app audit
            </Link>
          </div>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50" />
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, #06080f, transparent)" }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From idea to App Store,{" "}
              <span className="font-light text-white/50">in weeks.</span>
            </h2>
            <p className="text-white/40">Our mobile delivery process, built to de-risk and ship fast.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            <div className="space-y-20">
              {steps.map((step) => (
                <div key={step.num} className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#e8341c]">{step.num}</span>
                    <h3 className="text-white font-bold text-xl mt-3 mb-3">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/25 border border-white/20 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "conic-gradient(from 180deg at 50% 110%, rgba(175,77,68,0.35) 0%, rgba(90,43,44,0.12) 12%, transparent 28%)" }} />
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)" }} />
        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)" }} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Built across the full mobile stack</h2>
          <p className="text-white/40 text-sm">Native and cross-platform expertise under one roof.</p>
        </div>
        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1117" preserveAspectRatio="xMidYMid meet" fill="none">
            <defs>
              <linearGradient id="mob1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mob2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mob3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mob4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.4"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mob5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.3"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mobInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="mobBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.8"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
            </defs>
            <rect x="121" y="89" width="1678" height="1153" rx="191" fill="url(#mob1)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="240" y="209" width="1439" height="1033" rx="163" fill="url(#mob2)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="366" y="336" width="1188" height="906" rx="145" fill="url(#mob3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="487" y="457" width="946" height="785" rx="145" fill="url(#mob4)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="619" y="586" width="682" height="656" rx="116" fill="url(#mob5)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x="827" y="372" width="266" height="262" rx="52" fill="url(#mobInner)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741" y="684" width="438" height="307" rx="116" fill="url(#mobBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <path d="M960,503 C750,503 430,430 269,310" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1540,440 1613,348" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 500,475 384,475" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1620,503 1699,566" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 330,550 163,623" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,580 1390,676" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 540,640 480,728" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,380 1405,302" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {[
            { name: "React Native", lp: 14.0,  tp: 27.75, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="3" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/></svg> },
            { name: "Flutter",      lp: 84.0,  tp: 31.16, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M22 8l-12 12 5 5 12-12-5-5z" fill="#54C5F8"/><path d="M15 25l5 5-5 5-5-5 5-5z" fill="#01579B"/><path d="M15 25l5 5h-5l-5-5h5z" fill="#29B6F6"/></svg> },
            { name: "Swift",        lp: 20.0,  tp: 42.52, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M28 14c0 0-3-4-10-3C10 12 8 18 10 22c1 2 3 3 3 3s-1-2 0-4c2-4 8-4 12-2l3-5z" fill="#F05138"/><path d="M14 28c0 0 3 4 10 3 8-1 10-7 8-11-1-2-3-3-3-3s1 2 0 4c-2 4-8 4-12 2l-3 5z" fill="#F05138"/></svg> },
            { name: "Kotlin",       lp: 88.5,  tp: 50.67, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 10h20L20 20l10 10H10V10z" fill="url(#kt)"/><defs><linearGradient id="kt" x1="10" y1="10" x2="30" y2="30"><stop stopColor="#7F52FF"/><stop offset="1" stopColor="#C811E1"/></linearGradient></defs></svg> },
            { name: "Firebase",     lp: 8.5,   tp: 55.77, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M13 28l4-14 4 8 3-5 3 11H13z" fill="#FFA000"/><path d="M13 28l7-7 7 7H13z" fill="#F57C00" fillOpacity="0.6"/><path d="M17 14l3 6 3-5 3 13-9-3 0-11z" fill="#FFCA28"/></svg> },
            { name: "TypeScript",   lp: 72.38, tp: 60.52, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="8" width="24" height="24" rx="2" fill="#3178C6"/><path d="M22 18h6M25 18v10M13 24c0 0 1 4 5 4s4-3 4-3-0-3-4-3-4-3-4-3 0-2 3-2 3 2 3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { name: "Xcode",        lp: 25.0,  tp: 65.18, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="8" width="24" height="24" rx="5" fill="#1575F9" fillOpacity="0.2" stroke="#1575F9" strokeWidth="1.5"/><path d="M14 26l6-12 6 12" stroke="#1575F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 22h8" stroke="#1575F9" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { name: "Android",      lp: 73.16, tp: 27.04, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M13 20v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8H13z" fill="#3DDC84" fillOpacity="0.8"/><path d="M13 20h14c0-4-3-7-7-7s-7 3-7 7z" fill="#3DDC84"/><path d="M11 21h2M27 21h2M17 14l-2-3M23 14l2-3" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round"/><circle cx="17" cy="18" r="1" fill="white"/><circle cx="23" cy="18" r="1" fill="white"/></svg> },
          ].map((tech) => (
            <div key={tech.name} className="absolute z-10" style={{ left: `${tech.lp}%`, top: `${tech.tp}%`, transform: "translate(-50%,-50%)" }}>
              <div className="rounded-[18px] flex items-center justify-center hover:scale-110 transition-transform duration-200" style={{ width: "clamp(52px, 4.22vw, 82px)", height: "clamp(52px, 4.22vw, 82px)", padding: "clamp(10px, 0.8vw, 16px)", backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)", border: "1px solid rgba(255,255,255,0.11)", boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}>
                {tech.icon}
              </div>
              <p className="text-center text-white/30 mt-1.5" style={{ fontSize: "clamp(9px, 0.7vw, 12px)" }}>{tech.name}</p>
            </div>
          ))}
          <div className="absolute z-20" style={{ left: "49.9%", top: "45%", transform: "translate(-50%,-50%)" }}>
            <div className="rounded-[22px] flex items-center justify-center" style={{ width: "clamp(80px, 12.66vw, 244px)", height: "clamp(80px, 12.55vw, 241px)", padding: "clamp(14px, 1.8vw, 30px)", backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)", border: "1px solid rgba(255,255,255,0.11)", boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)", backdropFilter: "blur(3px)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-static.png" alt="Intagleo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute z-20" style={{ left: "50%", top: "78%", transform: "translate(-50%,-50%)" }}>
            <div className="rounded-[58px] flex items-center justify-center" style={{ padding: "clamp(8px, 1.5vw, 29px) clamp(20px, 3vw, 58px)", background: "linear-gradient(to bottom, #050914, rgba(5,9,20,0.6))", border: "1px solid rgba(255,255,255,0.10)" }}>
              <span className="whitespace-nowrap font-normal" style={{ fontSize: "clamp(13px, 1.25vw, 24px)", backgroundImage: "linear-gradient(120deg, rgb(230,242,255) 20%, rgb(175,175,175) 41%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Technologies</span>
            </div>
          </div>
        </div>
      </section>

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your next app should<br />ship with confidence.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build a mobile experience your users will love opening every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=mobile-dev" className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors">Start a conversation</Link>
            <Link href="/contact?type=technical-call" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">Schedule a technical call</Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
