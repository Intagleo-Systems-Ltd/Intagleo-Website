import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us , Intagleo",
  description:
    "Intagleo is a software engineering firm that builds production-ready systems for enterprises and ambitious product teams worldwide.",
};

const stats = [
  { value: "8+", label: "Years building software" },
  { value: "150+", label: "Projects delivered" },
  { value: "40+", label: "Engineers on the team" },
  { value: "18", label: "Countries served" },
];

const values = [
  {
    title: "Engineering over optics",
    desc: "We care about what ships, not what impresses in slides. Every decision is made at the code level, not the PowerPoint level.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4M15 6l-2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Senior engineers, always",
    desc: "No bait-and-switch. The engineers who scope your project are the ones who build it. No juniors hidden behind sales calls.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 23c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 13l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Outcomes, not outputs",
    desc: "We're not a ticket-processing machine. We push back on bad specs, flag risks early, and own results beyond delivery.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M4 20l5-6 4 3 5-8 6 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Long-term thinking",
    desc: "We build systems designed to last. Clean architecture, proper documentation, and handovers that don't leave your team stranded.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    desc: "You always know where your project stands. Weekly updates, honest timelines, and no surprises two weeks before launch.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 14s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Speed without shortcuts",
    desc: "We move fast because we invest in the right foundations early, not because we skip tests, reviews, or security hardening.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const timeline = [
  { year: "2016", event: "Founded in Islamabad as a two-person consultancy focused on enterprise web systems." },
  { year: "2018", event: "Expanded into mobile and embedded engineering. First clients in the UK and US markets." },
  { year: "2020", event: "Grew to 20 engineers. Launched dedicated AI and Data practices to serve emerging demand." },
  { year: "2022", event: "Opened a second delivery hub. Reached 100 projects delivered across 14 countries." },
  { year: "2024", event: "40+ engineers. Deep specialisations across AI, cloud, digital signage, and regulated industries." },
];

const logos = [
  { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
  { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
  { name: "Red Bull",    src: "/logos/red-bull.png",    invert: true  },
  { name: "KIA",         src: "/logos/kia.png",         invert: true  },
  { name: "Emaar",       src: "/logos/emaar.png",       invert: false },
  { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding pt-32 pb-20 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">About Intagleo</p>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-6">
                We build software that works in production, not just in demos.
              </h1>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/contact?type=start-project"
                  className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  Start a project
                </Link>
                <Link
                  href="/case-studies"
                  className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  See our work
                </Link>
              </div>
            </div>
            <div>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-4">
                Intagleo is a software engineering firm trusted by enterprise teams and product companies to design, build, and scale complex systems.
              </p>
              <p className="text-white/35 text-sm leading-relaxed">
                We work across custom software, AI transformation, mobile, cloud, embedded systems, and more, with one constant: senior engineers who take ownership of outcomes, not just tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="section-padding py-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-[#0d0d10] border border-white/8 p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Our mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Close the gap between idea and production.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Most software projects fail not because of bad ideas, but because the team executing them lacks the depth to navigate real complexity. Legacy debt, unclear specs, scaling surprises, and integration nightmares derail well-funded initiatives every day.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                Intagleo exists to change that. We bring the engineering firepower of a top-tier product company to businesses that need it, without the overhead of building it in-house. Our goal is simple: every project we touch ships, scales, and sustains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">How we operate</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-12 max-w-lg">
            Principles that show up in every line of code.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-[#0d0d10] border border-white/8 p-7 hover:border-white/15 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] mb-5">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section className="section-padding py-20 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Our story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-12 max-w-lg">
            Eight years of building the hard stuff.
          </h2>
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/8" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 rounded-full border border-[#6366f1]/50 bg-[#0a0a0a] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-[#6366f1] text-xs font-semibold tracking-widest uppercase">{item.year}</span>
                    <p className="text-white/55 text-sm leading-relaxed mt-1 max-w-xl">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ───────────────────────────────────────────────────────── */}
      <section className="section-padding py-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-white/25 text-sm mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-7 w-auto object-contain opacity-30 hover:opacity-55 transition-opacity duration-300"
                style={{ filter: logo.invert ? "brightness(0) invert(1)" : "none", maxWidth: "110px" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-3xl bg-[#0d0d10] border border-white/8 p-12 md:p-16 text-center">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Work with us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5 max-w-xl mx-auto">
              Have a project in mind? Let&apos;s talk.
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto mb-10">
              No commitment required. Tell us what you&apos;re building and we&apos;ll tell you how we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact?type=start-project"
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Start a conversation
              </Link>
              <Link
                href="/case-studies"
                className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
