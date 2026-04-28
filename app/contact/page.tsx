import ContactForm from "@/components/ContactForm";
import { getContactConfig } from "@/lib/contactConfigs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Intagleo",
  description: "Get in touch with the Intagleo team. We'll respond within 24 hours.",
};

const trustSignals = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Response within 24 hours",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "NDA available on request",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Senior engineers only",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "No commitment required",
  },
];

const stats = [
  { value: "200+", label: "Engineers" },
  { value: "<24h", label: "Response time" },
  { value: "20+", label: "Years shipping" },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const type = searchParams.type ?? "general";
  const config = getContactConfig(type);
  const headingLines = config.heading.split("\n");

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactFadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes orbBreath {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        .contact-fade-up {
          opacity: 0;
          animation: contactFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .contact-fade-right {
          opacity: 0;
          animation: contactFadeRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .orb-breath {
          animation: orbBreath 6s ease-in-out infinite;
        }
        .orb-breath-slow {
          animation: orbBreath 9s ease-in-out infinite 2s;
        }
      `}</style>

      <Navbar />

      {/* ── Atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary glow — top right */}
        <div
          className="absolute -top-20 right-0 w-[700px] h-[700px] orb-breath"
          style={{ background: "radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.16) 0%, transparent 65%)" }}
        />
        {/* Secondary glow — bottom left */}
        <div
          className="absolute bottom-0 -left-20 w-[500px] h-[500px] orb-breath-slow"
          style={{ background: "radial-gradient(ellipse at 30% 80%, rgba(139,92,246,0.12) 0%, transparent 65%)" }}
        />
        {/* Tertiary glow — center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.05) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='1' fill='rgba(255,255,255,0.035)'/%3E%3C/svg%3E\")" }}
        />
      </div>

      {/* ── Main content ── */}
      <main className="relative pt-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">

            {/* ── Left: context panel ── */}
            <div className="lg:sticky lg:top-28">

              {/* Live indicator */}
              <div
                className="contact-fade-up mb-8"
                style={{ animationDelay: "0.05s" }}
              >
                <div className="inline-flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-white/45 text-xs">Team is online · typically replies in a few hours</span>
                </div>
              </div>

              {/* Badge */}
              <div
                className="contact-fade-up mb-6"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                  <span className="text-[#6366f1] text-xs font-medium tracking-wide">{config.badge}</span>
                </div>
              </div>

              {/* Heading */}
              <h1
                className="contact-fade-up text-5xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-[1.02] tracking-tight mb-6"
                style={{ fontFamily: '"Roobert TRIAL", sans-serif', animationDelay: "0.25s" }}
              >
                {headingLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p
                className="contact-fade-up text-white/45 text-base leading-relaxed mb-10 max-w-sm"
                style={{ animationDelay: "0.35s" }}
              >
                {config.description}
              </p>

              {/* Stats strip */}
              <div
                className="contact-fade-up flex gap-8 mb-10 pb-10 border-b border-white/[0.06]"
                style={{ animationDelay: "0.45s" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>
                    <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <ul
                className="contact-fade-up space-y-3.5"
                style={{ animationDelay: "0.55s" }}
              >
                {trustSignals.map((signal) => (
                  <li key={signal.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center flex-shrink-0 text-[#6366f1]">
                      {signal.icon}
                    </div>
                    <span className="text-white/55 text-sm">{signal.label}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* ── Right: glowing form card ── */}
            <div
              className="contact-fade-right relative"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Glow behind card */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Gradient border wrapper */}
              <div
                className="relative rounded-2xl p-px"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.06) 40%, rgba(139,92,246,0.20) 100%)" }}
              >
                <div className="bg-[#0d0d10] rounded-2xl p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-white mb-1">
                      Send us a message
                    </h2>
                    <p className="text-white/35 text-sm">
                      We read every submission and respond personally.
                    </p>
                  </div>
                  <ContactForm config={config} type={type} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
}
