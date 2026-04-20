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
    title: "Cloud architecture & migration",
    items: ["Multi-cloud & Hybrid strategies", "Legacy monolith decoupling", "Cost optimisation & FinOps"],
  },
  {
    title: "CI/CD pipeline engineering",
    items: ["Automated testing integration", "Blue/Green & Canary deployments", "Zero-downtime release cycles"],
  },
  {
    title: "Infrastructure as code",
    items: ["Terraform & Pulumi frameworks", "GitOps driven provisioning", "Scalable environment cloning"],
  },
  {
    title: "Kubernetes & containers",
    items: ["Production EKS/GKE setup", "Service mesh implementation", "Container security hardening"],
  },
  {
    title: "Observability & reliability",
    items: ["SLI/SLO dashboarding", "Distributed tracing setup", "Automated alerting protocols"],
  },
  {
    title: "Security & compliance",
    items: ["DevSecOps integration", "SOC2/HIPAA compliance", "Identity & Access (IAM)"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Infrastructure audit",
    desc: "We map your existing cloud footprint , finding security gaps, over-provisioned resources, and bottlenecks before writing a single line of config.",
    align: "left",
  },
  {
    num: "02",
    title: "Design & blueprint",
    desc: "A reference architecture tailored to your team size, compliance requirements, and traffic patterns , reviewed and signed off before build begins.",
    align: "right",
  },
  {
    num: "03",
    title: "Build & deploy",
    desc: "Production-grade IaC, pipelines, and cluster configs shipped incrementally , so your teams can ship continuously from the first week.",
    align: "left",
  },
  {
    num: "04",
    title: "Operate & optimise",
    desc: "Ongoing monitoring, alerting, and cost governance so the infrastructure improves over time , not just on day one.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "99.9%", label: "Uptime SLA target" },
  { big: "3×",    label: "Faster deployment cycles" },
  { big: "60%",   label: "Avg. cloud cost reduction" },
  { big: "50+",   label: "Cloud migrations delivered" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function CloudDevOpsPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

        {/* Hero background */}
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
            style={{ background: "linear-gradient(to bottom, #07080f 0%, transparent 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: "linear-gradient(to top, #07080f 0%, transparent 100%)" }}
          />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* Headline + CTAs */}
        <div className="relative z-10 max-w-3xl mx-auto pb-12">
          <p className="text-xs text-white/35 uppercase tracking-widest mb-5">Cloud & DevOps</p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Ship faster.<br />
            Scale smarter.<br />
            <span className="text-white/35">Release everyday.</span>
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            We design, build, and operate cloud infrastructure and DevOps pipelines
            that give engineering teams the speed and confidence to move fast ,
            without fear.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/contact?type=cloud-devops"
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

          {/* Trusted by strip */}
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by engineering teams that ship to production every day.</p>
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

        {/* Hanging card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#0e0f18] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">

              {/* Left , photo collage */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#0b0c15]">
                <div className="col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ minHeight: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp1.png" alt="Engineer" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp2.png" alt="Engineer" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp3.png" alt="Engineer" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>

              {/* Right , text */}
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Slow pipelines are an<br />
                  <span className="text-white/40">engineering tax. Let&apos;s eliminate it.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  Fragile infrastructure and slow release cycles don&apos;t just slow down
                  your engineers , they erode trust in the entire product. We build
                  the foundations that let your team ship with confidence: automated
                  pipelines, observable systems, and infrastructure that scales without
                  surprises.
                </p>
                <Link
                  href="/contact?type=cloud-devops"
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Deliver</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Cloud infrastructure and DevOps built for teams that need to move fast and stay reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group"
                style={{ minHeight: "220px" }}
              >
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wave-bg.png"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)", opacity: 0.85 }} />
                </div>
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">
                  {svc.title}
                </h3>
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* DO YOU KNOW                                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-padding py-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl border border-white/[0.10] overflow-hidden">

          {/* Left , text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">
              <span className="text-[#e8341c]">The hidden cost of<br />slow infrastructure:</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What are you actually losing?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              We run a free infrastructure assessment that identifies bottlenecks in your CI/CD and security risks in your cloud config.
            </p>
            <Link
              href="/contact?type=cloud-devops"
              className="w-fit px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Request a free infrastructure assessment
            </Link>
          </div>

          {/* Right , GIF */}
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/devops.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-50"
            />
            <div
              className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to right, #06080f, transparent)" }}
            />
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS                                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how-it-works" className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From audit to production-ready,{" "}
              <span className="font-light text-white/50">in weeks.</span>
            </h2>
            <p className="text-white/40">
              Our four-step approach to cloud infrastructure that doesn&apos;t collapse under load.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            <div className="space-y-20">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#e8341c]">
                      {step.num}
                    </span>
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH STACK                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "conic-gradient(from 180deg at 50% 110%, rgba(175,77,68,0.35) 0%, rgba(90,43,44,0.12) 12%, transparent 28%)"
        }} />
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 0% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 100% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)"
        }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Built across the modern cloud stack
            </h2>
            <p className="text-white/40 text-sm">
              Our engineers are fluent in the platforms and tools your infrastructure already runs on.
            </p>
          </div>
        </div>

        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>
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

            <rect x="121"  y="89"  width="1678" height="1153" rx="191" fill="url(#og1)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="240"  y="209" width="1439" height="1033" rx="163" fill="url(#og2)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="366"  y="336" width="1188" height="906"  rx="145" fill="url(#og3)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="487"  y="457" width="946"  height="785"  rx="145" fill="url(#og4)"     stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="619"  y="586" width="682"  height="656"  rx="116" fill="url(#og5)"     stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x="827"  y="372" width="266"  height="262"  rx="52"  fill="url(#ogInner)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741"  y="684" width="438"  height="307"  rx="116" fill="url(#ogBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

            <path d="M960,503 C750,503 430,430 269,310"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1540,440 1613,348" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 500,475 384,475"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1620,503 1699,566" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 330,550 163,623"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,580 1390,676" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 540,640 480,728"  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,380 1405,302" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>

          {/* Cloud & DevOps tool logos , inline SVG icons */}
          {[
            {
              name: "AWS",
              lp: 14.0, tp: 27.75,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M11 24.5c-.8.3-1.3.8-1.3 1.5 0 .9.8 1.4 2.3 1.4.9 0 2-.2 3.3-.6v2c-1.1.4-2.3.6-3.5.6-1.4 0-2.5-.3-3.3-.9-.8-.6-1.2-1.4-1.2-2.4 0-1.5.9-2.7 2.7-3.4l1-.3v-.1c0-.9-.5-1.3-1.4-1.3-.8 0-1.8.3-3 1v-2c1-.5 2.1-.8 3.2-.8 1.1 0 2 .3 2.6.8.6.5.9 1.3.9 2.3v5.1h-2.3v-.9zm0-1.3v.9c-.5.2-.9.4-1.1.7-.2.2-.3.5-.3.8 0 .5.3.8.8.8.4 0 .6-.2.6-.5v-2.7z" fill="#FF9900"/><path d="M20 17h3v10h-3V17zm1.5-1.5c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4.5 0 .9.1 1.2.4.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5z" fill="#FF9900"/><path d="M28 22c0-.7-.4-1-1.3-1-.6 0-1.3.2-2.1.5v-2c.8-.3 1.7-.5 2.6-.5 1.1 0 1.9.2 2.5.7.6.5.9 1.2.9 2.1V27h-2.3v-.7c-.6.6-1.3.9-2.1.9-.8 0-1.4-.2-1.9-.7-.5-.4-.7-1-.7-1.7 0-.9.4-1.6 1.1-2.1.7-.5 1.7-.7 3-.7h.3v-.9zm0 1.8h-.2c-.8 0-1.4.1-1.8.4-.4.2-.6.5-.6.9 0 .6.3.9 1 .9.5 0 1-.2 1.6-.7v-1.5z" fill="#FF9900"/><path d="M7 30c5.7 2.8 13.3 2.8 19 0" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round"/><path d="M26 31.5l2-1.5-2-1" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
            {
              name: "Kubernetes",
              lp: 84.0, tp: 31.16,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="13" stroke="#326CE5" strokeWidth="1.5"/><circle cx="20" cy="20" r="3" fill="#326CE5"/><path d="M20 9v5M20 26v5M9 20h5M26 20h5" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/><path d="M12.5 12.5l3.5 3.5M24 24l3.5 3.5M27.5 12.5L24 16M16 24l-3.5 3.5" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/></svg>,
            },
            {
              name: "Terraform",
              lp: 20.0, tp: 42.52,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M16 10l7 4v8l-7-4V10z" fill="#7B42BC"/><path d="M24 14l7 4v8l-7-4V14z" fill="#7B42BC" fillOpacity="0.6"/><path d="M9 14l7 4v8l-7-4V14z" fill="#7B42BC" fillOpacity="0.8"/><path d="M16 26l7 4v-8l-7-4v8z" fill="#7B42BC" fillOpacity="0.4"/></svg>,
            },
            {
              name: "GitHub Actions",
              lp: 88.5, tp: 50.67,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/><circle cx="20" cy="14" r="2.5" fill="white" fillOpacity="0.8"/><circle cx="14" cy="23" r="2.5" fill="white" fillOpacity="0.8"/><circle cx="26" cy="23" r="2.5" fill="white" fillOpacity="0.8"/><path d="M20 16.5v3M15.5 22l2.5-2M24.5 22l-2.5-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7"/></svg>,
            },
            {
              name: "Docker",
              lp: 8.5, tp: 55.77,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="16" width="6" height="5" rx="1" stroke="#2496ED" strokeWidth="1.2"/><rect x="15" y="16" width="6" height="5" rx="1" stroke="#2496ED" strokeWidth="1.2"/><rect x="22" y="16" width="6" height="5" rx="1" stroke="#2496ED" strokeWidth="1.2"/><rect x="15" y="10" width="6" height="5" rx="1" stroke="#2496ED" strokeWidth="1.2"/><rect x="22" y="10" width="6" height="5" rx="1" stroke="#2496ED" strokeWidth="1.2"/><path d="M8 21c2 4 6 5 10 5 6 0 10-3 12-7" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round"/><circle cx="30" cy="19" r="1.5" fill="#2496ED"/></svg>,
            },
            {
              name: "GCP",
              lp: 72.38, tp: 60.52,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M20 11l7 4v8l-7 4-7-4v-8l7-4z" stroke="#4285F4" strokeWidth="1.2"/><path d="M13 15l7 4 7-4" stroke="#34A853" strokeWidth="1.2"/><path d="M20 19v8" stroke="#FBBC04" strokeWidth="1.2"/><circle cx="20" cy="11" r="2" fill="#EA4335"/><circle cx="27" cy="15" r="2" fill="#4285F4"/><circle cx="27" cy="23" r="2" fill="#34A853"/><circle cx="20" cy="27" r="2" fill="#FBBC04"/><circle cx="13" cy="23" r="2" fill="#EA4335"/><circle cx="13" cy="15" r="2" fill="#4285F4"/></svg>,
            },
            {
              name: "Prometheus",
              lp: 25.0, tp: 65.18,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="12" stroke="#E6522C" strokeWidth="1.5"/><circle cx="20" cy="20" r="3" fill="#E6522C"/><path d="M20 11v4M20 25v4M11 20h4M25 20h4" stroke="#E6522C" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 14l2.8 2.8M23.2 23.2L26 26M26 14l-2.8 2.8M16.8 23.2L14 26" stroke="#E6522C" strokeWidth="1.2" strokeLinecap="round"/></svg>,
            },
            {
              name: "Azure",
              lp: 73.16, tp: 27.04,
              icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M14 28h14l-5-10-4 7-3-4-2 7z" fill="#0078D4"/><path d="M20 10l-7 10 4 2 3-5 5 13h5L20 10z" fill="#0078D4" fillOpacity="0.7"/></svg>,
            },
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
                {tech.icon}
              </div>
              <p className="text-center text-white/30 mt-1.5" style={{ fontSize: "clamp(9px, 0.7vw, 12px)" }}>{tech.name}</p>
            </div>
          ))}

          {/* Center card */}
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

          {/* Technologies pill */}
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
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-[auto] md:grid-rows-[1fr_1fr] gap-3">

            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[0].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[0].label}</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[1].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[1].label}</p>
              </div>
            </div>

            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[3].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[3].label}</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[2].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[2].label}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FLEXIBLE WAYS TO WORK TOGETHER                                     */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-[42px] font-semibold tracking-tight"
              style={{
                backgroundImage: "linear-gradient(162deg, rgb(230,242,255) 44%, rgb(175,175,175) 111%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Flexible ways to work together.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "Fixed-term / Discovery",
                title: "Infrastructure audit & roadmap",
                desc: "A 3-week review of your cloud architecture, pipelines, and spend , resulting in a prioritised 12-month remediation plan.",
              },
              {
                badge: "Project-based / Delivery",
                title: "Full platform build",
                desc: "End-to-end delivery of your CI/CD pipelines, IaC, container clusters, and observability stack , production-ready and documented.",
              },
              {
                badge: "Retainer / Managed",
                title: "Ongoing DevOps team",
                desc: "Embedded engineers who own your release pipeline, monitor your infrastructure, and continuously reduce toil and cost.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative rounded-[28px] overflow-hidden flex flex-col justify-end"
                style={{
                  border: "1.4px solid rgba(204,215,255,0.18)",
                  background: "linear-gradient(to bottom, #20272c, rgba(17,17,21,0))",
                  minHeight: "360px",
                }}
              >
                {/* Abstract grid background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                      opacity: 0.6,
                    }}
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(0,2,17,0), #050914)" }}
                  />
                </div>

                {/* Floating red badge */}
                <div className="absolute top-8 left-8 z-10">
                  <div
                    className="px-4 py-2 rounded-full text-white text-xs font-medium whitespace-nowrap"
                    style={{ background: "rgba(229,62,48,0.4)" }}
                  >
                    {card.badge}
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-10 p-8 pt-0">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[#d6d8d8] text-sm leading-relaxed opacity-60">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CASE STUDIES                                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="cloud-devops" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* INSIGHTS                                                           */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <InsightsSection pageSlug="cloud-devops" />

      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer_CTA.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[10%] opacity-50"
        />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your infrastructure should<br />never be the bottleneck.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build cloud foundations that scale with your ambition.
          </p>

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
              Schedule a technical call
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
