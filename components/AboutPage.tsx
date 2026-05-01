"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Hooks ──────────────────────────────────────────────────────────────── */

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(end: number, duration = 2200, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s: number | null = null;
    const tick = (t: number) => {
      if (s === null) s = t;
      const p = Math.min((t - s) / duration, 1);
      setVal(Math.round((1 - (1 - p) ** 3) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, duration]);
  return val;
}

/* ── Shared components ───────────────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StatCard({
  end,
  suffix,
  label,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useInView();
  const val = useCountUp(end, 2200, inView);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-5xl md:text-6xl font-bold text-white tabular-nums leading-none">
        {val}
        {suffix}
      </p>
      <p className="text-white/40 text-sm mt-3 leading-relaxed">{label}</p>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────────────── */

const timeline = [
  {
    year: "2003",
    title: "Founded",
    desc: "Launched as a boutique software consultancy in Slough, focused on enterprise-grade web and backend systems.",
  },
  {
    year: "2007",
    title: "First Enterprise Clients",
    desc: "Secured long-term partnerships with enterprise clients across the UK, Europe, and the Middle East.",
  },
  {
    year: "2011",
    title: "Mobile & Embedded",
    desc: "Expanded capabilities into mobile and embedded systems engineering as client demand grew rapidly.",
  },
  {
    year: "2014",
    title: "Second Delivery Hub",
    desc: "Opened a second engineering hub. Team grew to 25 senior engineers across disciplines.",
  },
  {
    year: "2016",
    title: "AI & Data Practice",
    desc: "Launched a dedicated AI, data analytics, and machine learning service line to address emerging enterprise demand.",
  },
  {
    year: "2019",
    title: "Global Scale",
    desc: "Active projects across 10+ countries with 50+ senior engineers. Expanded into digital signage and regulated industries.",
  },
  {
    year: "2022",
    title: "100 Projects Milestone",
    desc: "Crossed 100 delivered projects across 14 countries, spanning fintech, healthcare, smart cities, and retail.",
  },
  {
    year: "2024",
    title: "Deep Specialization",
    desc: "200+ engineers. Deep specializations across AI, cloud infrastructure, digital signage, and regulated industries in 18 countries.",
  },
];

const values = [
  {
    title: "Engineering over optics",
    desc: "We care about what ships, not what impresses in slides. Every decision is made at the code level, not the PowerPoint level.",
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Senior engineers, always",
    desc: "No bait-and-switch. The engineers who scope your project are the ones who build it. No juniors hidden behind sales calls.",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 11l1.5 1.5L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Outcomes, not outputs",
    desc: "We push back on bad specs, flag risks early, and own results beyond delivery, not just close tickets.",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 17l5-6 4 3 5-8 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Long-term thinking",
    desc: "We build systems designed to last. Clean architecture, proper documentation, and handovers that don't leave your team stranded.",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    desc: "You always know where your project stands. Weekly updates, honest timelines, and no surprises two weeks before launch.",
    color: "#EC4899",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Speed without shortcuts",
    desc: "We move fast because we invest in the right foundations early, not because we skip tests, reviews, or security hardening.",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const logos = [
  { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
  { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
  { name: "Red Bull",    src: "/logos/red-bull.png",    invert: true  },
  { name: "KIA",         src: "/logos/kia.png",         invert: true  },
  { name: "Emaar",       src: "/logos/emaar.png",       invert: false },
  { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30" />

        {/* Blue atmosphere */}
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] rounded-full bg-[#3B82F6]/[0.07] blur-[140px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 section-padding w-full mx-auto max-w-[1400px]">
          <p
            className="text-[#3B82F6] text-xs uppercase tracking-widest font-semibold mb-7 opacity-0"
            style={{ animation: "aboutFadeUp 0.7s ease-out 0.2s forwards" }}
          >
            About Intagleo
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.03] tracking-tight mb-8 max-w-3xl opacity-0"
            style={{ animation: "aboutFadeUp 0.8s ease-out 0.4s forwards" }}
          >
            <span className="heading-gradient">Twenty years of building</span>
            <br />
            <span className="heading-gradient">software that works.</span>
          </h1>
          <p
            className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10 opacity-0"
            style={{ animation: "aboutFadeUp 0.8s ease-out 0.6s forwards" }}
          >
            Senior engineers. Owned outcomes. Production-grade systems, delivered to enterprises and ambitious product teams in 18 countries since 2003.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0"
            style={{ animation: "aboutFadeUp 0.8s ease-out 0.8s forwards" }}
          >
            <Link
              href="/contact?type=start-project"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Start a project
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: "aboutFadeIn 1s ease-out 1.2s forwards" }}
          aria-hidden="true"
        >
          <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="section-padding py-24 border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/[0.05]">
            {[
              { end: 20, suffix: "+", label: "Years in business", delay: 0 },
              { end: 200, suffix: "+", label: "Projects delivered", delay: 150 },
              { end: 50, suffix: "+", label: "Senior engineers", delay: 300 },
              { end: 18, suffix: "", label: "Countries served", delay: 450 },
            ].map((s, i) => (
              <div key={i} className="lg:px-12 first:lg:pl-0 last:lg:pr-0 pt-10 lg:pt-0 first:pt-0 col-span-1">
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────────── */}
      <section className="section-padding py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-8">
              <div>
                <p className="text-[#3B82F6] text-xs uppercase tracking-widest font-semibold mb-5">Our mission</p>
                <h2 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight mb-6">
                  Close the gap between idea and production.
                </h2>
                <p className="text-white/50 text-base md:text-lg leading-relaxed mb-5">
                  Most software projects fail not because of bad ideas, but because the team executing them lacks the depth to navigate real complexity. Legacy debt, unclear specs, scaling surprises, these derail well-funded initiatives every day.
                </p>
                <p className="text-white/35 text-base leading-relaxed">
                  Intagleo exists to change that. We bring the engineering firepower of a top-tier product company to businesses that need it, without the overhead of building it in-house.
                </p>
              </div>
              <blockquote className="border-l-2 border-[#3B82F6]/40 pl-6">
                <p className="text-white/55 text-xl italic leading-relaxed font-light">
                  &ldquo;Every project we touch ships, scales, and sustains.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={200} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Engineering team collaborating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>
              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-5 -left-4 bg-[#0d0d10] border border-white/10 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm">
                <p className="text-3xl font-bold text-white leading-none">20+</p>
                <p className="text-white/40 text-xs mt-1">Years of expertise</p>
              </div>
              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm">
                <p className="text-3xl font-bold text-white leading-none">18</p>
                <p className="text-[#3B82F6]/80 text-xs mt-1">Countries</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section className="section-padding py-28 bg-[#080809]">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-20">
            <p className="text-[#3B82F6] text-xs uppercase tracking-widest font-semibold mb-4">Our story</p>
            <h2 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight max-w-2xl">
              Two decades of building the hard stuff.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-x-20">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 70} className="relative pl-9 pb-10 border-l border-white/[0.07]">
                {/* Dot */}
                <div className="absolute -left-[7px] top-1 w-[14px] h-[14px] rounded-full border border-[#3B82F6]/60 bg-[#080809] flex items-center justify-center">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#3B82F6]" />
                </div>
                <span className="text-[#3B82F6] text-[11px] font-bold tracking-widest uppercase">{item.year}</span>
                <h3 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section className="section-padding py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14">
            <p className="text-[#3B82F6] text-xs uppercase tracking-widest font-semibold mb-4">How we operate</p>
            <h2 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight max-w-xl">
              Principles that show up in every line of code.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group relative rounded-2xl bg-[#0d0d10] border border-white/[0.07] p-7 hover:border-white/14 transition-all duration-300 overflow-hidden cursor-default h-full">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 25% 0%, ${v.color}14 0%, transparent 65%)`,
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      backgroundColor: `${v.color}14`,
                      border: `1px solid ${v.color}28`,
                      color: v.color,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture image ─────────────────────────────────────────────────── */}
      <Reveal className="relative h-72 md:h-[420px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80"
          alt="Engineering team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 flex items-center justify-center text-center section-padding">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Our team</p>
            <p className="text-white text-2xl md:text-4xl font-bold max-w-2xl leading-tight heading-gradient">
              Real engineers. Real ownership. Real outcomes.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Clients ───────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <p className="text-white/20 text-xs uppercase tracking-widest mb-10">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {logos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-25 hover:opacity-50 transition-opacity duration-300"
                  style={{
                    filter: logo.invert ? "brightness(0) invert(1)" : "none",
                    maxWidth: "110px",
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
  

      <Footer />
    </main>
  );
}
