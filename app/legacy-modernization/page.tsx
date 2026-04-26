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
    title: "Cloud migration",
    items: ["Lift-and-shift to AWS, Azure, or GCP", "Infrastructure-as-code with Terraform", "Cost optimisation & right-sizing"],
  },
  {
    title: "Microservices decomposition",
    items: ["Strangler fig & incremental migration", "Domain-driven service boundaries", "Event-driven architecture with Kafka or SQS"],
  },
  {
    title: "Database modernisation",
    items: ["Oracle, MSSQL to PostgreSQL migration", "NoSQL introduction where appropriate", "Data migration with zero downtime"],
  },
  {
    title: "API-first transformation",
    items: ["REST & GraphQL API layer over legacy", "Third-party integration re-platforming", "API gateway & versioning strategy"],
  },
  {
    title: "Front-end rebuild",
    items: ["Replace legacy UI with React or Next.js", "Progressive enhancement, no big-bang rewrite", "Design system & component library"],
  },
  {
    title: "Observability & reliability",
    items: ["Logging, tracing & alerting from day one", "SLA definition & error budget tracking", "On-call runbooks & incident playbooks"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "System audit & risk map",
    desc: "We document every service, dependency, and data flow in your existing system, then score each component by business risk and modernisation effort.",
    align: "left",
  },
  {
    num: "02",
    title: "Migration strategy",
    desc: "A phased roadmap that sequences changes by risk and value, starting with low-risk wins that build momentum without disrupting live operations.",
    align: "right",
  },
  {
    num: "03",
    title: "Incremental migration",
    desc: "We migrate component-by-component using strangler-fig patterns so your legacy system keeps running while the modern version is built alongside it.",
    align: "left",
  },
  {
    num: "04",
    title: "Cutover & operate",
    desc: "Traffic is switched with feature flags and rollback plans in place. Post-cutover we monitor, tune, and hand over full ownership to your team.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "60%",   label: "Avg. reduction in infrastructure cost" },
  { big: "3×",    label: "Faster deployment cadence post-migration" },
  { big: "0",     label: "Production outages during migration" },
  { big: "12wks", label: "Avg. time to first production-ready module" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function LegacyModernizationPage() {
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
          <p className="text-xs text-white/35 uppercase tracking-widest mb-5">Legacy Modernisation</p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Your legacy system<br />
            is slowing you down.<br />
            <span className="text-white/35">We&apos;ll fix that.</span>
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            We migrate monoliths, modernise databases, and re-platform front-ends without grinding
            your operations to a halt, using incremental patterns that keep the lights on throughout.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link href="/contact?type=legacy-modernization" className="px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Start a conversation
            </Link>
            <Link href="#how-it-works" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See how it works
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by enterprises modernising systems at scale.</p>
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
                  Big-bang rewrites fail.<br />
                  <span className="text-white/40">Incremental migrations ship.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  We&apos;ve seen every flavour of legacy system, COBOL monoliths, 15-year-old Rails apps,
                  and Oracle databases with no documentation. Our structured approach reduces risk while
                  delivering value incrementally, so your business keeps running throughout.
                </p>
                <Link href="/contact?type=legacy-modernization" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
                  Talk to a modernisation engineer
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
              Modernisation across every layer of your stack, with zero downtime and full team handover.
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
              <span className="text-[#6366f1]">Do you know</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              how much your legacy system costs you every month in lost velocity?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Slow deploys, developer fear, and outage risk compound silently. Most teams underestimate
              the cost of doing nothing by 3×.
            </p>
            <Link href="/contact?type=legacy-modernization" className="w-fit px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Book a free system audit
            </Link>
          </div>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/devops.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50" />
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, #06080f, transparent)" }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From legacy to modern,{" "}
              <span className="font-light text-white/50">without the big bang.</span>
            </h2>
            <p className="text-white/40">Incremental by design. Zero downtime at every phase.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            <div className="space-y-20">
              {steps.map((step) => (
                <div key={step.num} className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#6366f1]">{step.num}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Modern stack, proven migration patterns</h2>
          <p className="text-white/40 text-sm">The tools we use to replace the old without breaking the business.</p>
        </div>
        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1117" preserveAspectRatio="xMidYMid meet" fill="none">
            <defs>
              <linearGradient id="leg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="leg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="leg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="leg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.4"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="leg5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.3"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="legInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="legBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.8"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
            </defs>
            <rect x="121" y="89" width="1678" height="1153" rx="191" fill="url(#leg1)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="240" y="209" width="1439" height="1033" rx="163" fill="url(#leg2)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="366" y="336" width="1188" height="906" rx="145" fill="url(#leg3)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="487" y="457" width="946" height="785" rx="145" fill="url(#leg4)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="619" y="586" width="682" height="656" rx="116" fill="url(#leg5)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x="827" y="372" width="266" height="262" rx="52" fill="url(#legInner)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741" y="684" width="438" height="307" rx="116" fill="url(#legBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
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
            { name: "Docker",     lp: 14.0,  tp: 27.75, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><rect x="8" y="16" width="24" height="12" rx="2" stroke="#2496ED" strokeWidth="1.5"/><path d="M8 22h24" stroke="#2496ED" strokeWidth="1"/><rect x="12" y="19" width="3" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1"/><rect x="18" y="19" width="3" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1"/><rect x="24" y="19" width="3" height="3" rx="0.5" stroke="#2496ED" strokeWidth="1"/><path d="M32 20c2-1 3-4 1-6" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { name: "Kubernetes", lp: 84.0,  tp: 31.16, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="11" stroke="#326CE5" strokeWidth="1.5"/><path d="M20 9v22M9 20h22M12.5 12.5l15 15M27.5 12.5l-15 15" stroke="#326CE5" strokeWidth="1" strokeLinecap="round"/><circle cx="20" cy="20" r="3" fill="#326CE5"/></svg> },
            { name: "PostgreSQL", lp: 20.0,  tp: 42.52, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><ellipse cx="20" cy="14" rx="10" ry="5" stroke="#336791" strokeWidth="1.5"/><path d="M10 14v12c0 2.76 4.48 5 10 5s10-2.24 10-5V14" stroke="#336791" strokeWidth="1.5"/><path d="M30 18c2-1 3-1 3 2v4" stroke="#336791" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { name: "Redis",      lp: 88.5,  tp: 50.67, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><ellipse cx="20" cy="22" rx="12" ry="5" stroke="#DC382D" strokeWidth="1.5"/><ellipse cx="20" cy="18" rx="12" ry="5" stroke="#DC382D" strokeWidth="1.5"/><path d="M8 18v4M32 18v4" stroke="#DC382D" strokeWidth="1.5"/><path d="M14 11l6-3 6 3" stroke="#DC382D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { name: "React",      lp: 8.5,   tp: 55.77, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><circle cx="20" cy="20" r="2.5" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/></svg> },
            { name: "Terraform",  lp: 72.38, tp: 60.52, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M16 11l8 4.6v9.2L16 20.2V11z" fill="#7B42BC" fillOpacity="0.8"/><path d="M25 15.8l7 4V29l-7-4V15.8z" fill="#7B42BC"/><path d="M8 15.8l7 4V29l-7-4V15.8z" fill="#7B42BC" fillOpacity="0.6"/><path d="M16 29l8-4.6" stroke="#7B42BC" strokeWidth="1.2"/></svg> },
            { name: "Go",         lp: 25.0,  tp: 65.18, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M8 20c0-4 3-7 8-7h8c4 0 7 3 7 7s-3 7-7 7H16c-5 0-8-3-8-7z" stroke="#00ACD7" strokeWidth="1.5"/><circle cx="16" cy="17" r="1.5" fill="#00ACD7"/><path d="M22 20h5M24 18v4" stroke="#00ACD7" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { name: "AWS",        lp: 73.16, tp: 27.04, icon: <svg viewBox="0 0 40 40" fill="none" className="w-full h-full"><path d="M10 24l4-12 3 8 3-8 4 12" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 28c3 2 6 3 12 3s9-1 12-3" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/></svg> },
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
              { badge: "Fixed-term / Discovery", title: "Legacy system audit", desc: "A 2-week assessment of your current architecture, dependencies, and risk, with a phased modernisation roadmap and effort estimates." },
              { badge: "Project-based / Delivery", title: "Incremental modernisation", desc: "Module-by-module migration of your system, keeping production live throughout with feature flags, rollback plans, and full test coverage." },
              { badge: "Retainer / Embedded", title: "Ongoing modernisation team", desc: "Dedicated engineers embedded in your team, steadily retiring legacy components and replacing them with modern, maintainable architecture." },
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

      <CaseStudiesSection pageSlug="legacy-modernization" />
      <InsightsSection pageSlug="legacy-modernization" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your legacy system is costing<br />you more than you think.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s map out a path to modern architecture without the big-bang risk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=legacy-modernization" className="px-7 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">Start a conversation</Link>
            <Link href="/contact?type=technical-call" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">Schedule a technical call</Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
