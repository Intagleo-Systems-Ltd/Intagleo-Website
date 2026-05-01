import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersClient from "@/components/CareersClient";
import VacancyApplyForm from "@/components/VacancyApplyForm";
import HeroTerminal from "@/components/HeroTerminal";
import type { Vacancy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join Us | Intagleo",
  description:
    "Build production-ready software with a team of senior engineers. Explore open roles at Intagleo - remote-first, outcome-driven, no fluff.",
};

export const revalidate = 60;

async function getVacancies(): Promise<Vacancy[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
    const { getVacanciesAsync } = await import("@/lib/providers/sanity");
    return await getVacanciesAsync();
  } catch {
    return [];
  }
}

/* -- Static content -------------------------------------------------------- */
const values = [
  {
    title: "Real ownership",
    desc: "No ticket queues. You own your work end-to-end - from scoping conversations to production releases. Every engineer here has a direct line to impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Senior-only environment",
    desc: "You'll collaborate exclusively with experienced engineers. No mentoring juniors on client time - just high-signal technical conversations with people who've shipped production systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="17" cy="9" r="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M20 20c0-2-1.5-3.5-3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Remote-first culture",
    desc: "Our team spans three continents. We work async-first, communicate deliberately, and trust you to manage your schedule. Results matter, not hours logged.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Ship frequently",
    desc: "We deploy to production multiple times a week across client projects. You'll build habits around short feedback loops, fast iteration, and quality at pace.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "No office politics",
    desc: "Flat structure, transparent decisions, no management layers between you and the work. Good ideas win on merit - not seniority or who speaks loudest.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 22V12M12 12L7 17M12 12l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 3h14a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Grow with the company",
    desc: "We're growing fast across new industries and geographies. Roles evolve here - engineers become tech leads, leads become principals. If you grow, your title and comp will follow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 20l5-8 4 4 4-7 5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const perks = [
  { label: "Competitive salary", sub: "Benchmarked to market rate" },
  { label: "Remote / hybrid", sub: "Work from wherever you do your best thinking" },
  { label: "Flexible hours", sub: "Async-first - own your schedule" },
  { label: "Learning budget", sub: "Courses, conferences, and certifications" },
  { label: "Private health cover", sub: "UK & UAE team members" },
  { label: "Equipment stipend", sub: "Get the tools you need to ship" },
  { label: "Fast career growth", sub: "Promote on merit, not tenure" },
  { label: "Exciting clients", sub: "Enterprise products that actually matter" },
];

/* -- Page ------------------------------------------------------------------ */
export default async function JoinUsPage() {
  const vacancies = await getVacancies();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-20">
        {/* -- Hero ------------------------------------------------------------ */}
        <section className="relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3.5 py-1.5 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]" />
                  </span>
                  <span className="text-[#3B82F6] text-xs font-medium tracking-wide">
                    We&apos;re hiring - {vacancies.length} open {vacancies.length === 1 ? "role" : "roles"}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-[1.02] tracking-tight mb-6"
                  style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
                >
                  Build the future
                  <br />
                  <span className="text-white/40">with us.</span>
                </h1>

                <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                  Intagleo engineers work on real enterprise products, not internal tools or maintenance tickets.
                  If you want ownership, craft, and clients who actually care about quality, you&apos;ll fit right in.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#open-roles"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium transition-colors duration-200"
                  >
                    View open roles
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all duration-200"
                  >
                    Learn about us
                  </Link>
                </div>
              </div>

              {/* Right: animated terminal */}
              <div className="hidden lg:block">
                <HeroTerminal />
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "200+", label: "Engineers" },
                { value: "18", label: "Countries" },
                { value: "200+", label: "Projects shipped" },
                { value: "20+", label: "Years building" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.value}</p>
                  <p className="text-white/35 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Why Intagleo ---------------------------------------------------- */}
        <section className="py-20 lg:py-28 border-t border-white/[0.04]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="mb-14">
              <p className="text-[#3B82F6] text-xs font-medium tracking-widest uppercase mb-4">
                Life at Intagleo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold heading-gradient tracking-tight mb-4">
                Why engineers choose us
              </h2>
              <p className="text-white/40 text-base max-w-xl">
                We&apos;re not for everyone, and that&apos;s intentional. Here&apos;s what makes working here different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#0d0d10] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.10] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Perks ----------------------------------------------------------- */}
        <section className="py-16 border-t border-white/[0.04]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="text-white/25 text-xs font-medium tracking-widest uppercase mb-10">
              What you get
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
              {perks.map((p) => (
                <div
                  key={p.label}
                  className="bg-[#0a0a0a] px-6 py-6 hover:bg-[#0d0d10] transition-colors duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mb-3" />
                  <p className="text-white/80 text-sm font-medium mb-1">{p.label}</p>
                  <p className="text-white/30 text-xs leading-relaxed">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Open Roles (client) --------------------------------------------- */}
        <section className="border-t border-white/[0.04]">
          <CareersClient vacancies={vacancies} />
        </section>

        {/* -- Closing CTA ----------------------------------------------------- */}
        <section className="py-20 border-t border-white/[0.04]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">
              {/* Left: copy + animated cards */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3.5 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span className="text-[#3B82F6] text-xs font-medium tracking-wide">Open Application</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold heading-gradient tracking-tight mb-4">
                  Don&apos;t see your role?
                </h2>
                <p className="text-white/40 text-base leading-relaxed max-w-lg mb-10">
                  If you&apos;re exceptional at what you do, we want to hear from you — even if there&apos;s no open role that fits right now. Tell us about yourself and we&apos;ll be in touch when the right opportunity comes up.
                </p>

                {/* Animated floating cards */}
                <div className="grid grid-cols-2 gap-3 max-w-lg">
                  {[
                    { stat: "200+", label: "Engineers worldwide", delay: "0s",   icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
                    { stat: "18",   label: "Countries represented", delay: "0.4s", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
                    { stat: "100%", label: "Remote-first",          delay: "0.8s", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { stat: "20+",  label: "Years of expertise",    delay: "1.2s", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-[#0d0d10] border border-white/[0.07] rounded-2xl p-5 hover:border-[#3B82F6]/30 transition-colors duration-300"
                      style={{
                        animation: `floatCard 4s ease-in-out infinite`,
                        animationDelay: item.delay,
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-3">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                          <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white font-bold text-xl leading-none mb-1">{item.stat}</p>
                      <p className="text-white/35 text-xs leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>

                <style>{`
                  @keyframes floatCard {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-6px); }
                  }
                `}</style>
              </div>

              {/* Right: inline form */}
              <div className="bg-[#0d0d10] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-white/[0.06]">
                  <p className="text-[#3B82F6] text-xs font-medium tracking-widest uppercase mb-1">
                    Apply now
                  </p>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    Open Application
                  </h3>
                </div>
                <VacancyApplyForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showCTA={false} />
    </div>
  );
}
