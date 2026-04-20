import ContactForm from "@/components/ContactForm";
import { getContactConfig } from "@/lib/contactConfigs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact , Intagleo",
  description:
    "Get in touch with the Intagleo team. We'll respond within 24 hours.",
};

const trustSignals = [
  {
    icon: (
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Response within 24 hours",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "NDA available on request",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Senior engineers only",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "No commitment required",
  },
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Main content ── */}
      <main className="pt-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">

            {/* ── Left: context panel ── */}
            <div className="lg:sticky lg:top-28">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e8341c]/10 border border-[#e8341c]/20 rounded-full px-3.5 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8341c]" />
                <span className="text-[#e8341c] text-xs font-medium tracking-wide">
                  {config.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: '"Roobert TRIAL", sans-serif' }}
              >
                {headingLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="text-white/45 text-base leading-relaxed mb-12 max-w-sm">
                {config.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-10" />

              {/* Trust signals */}
              <ul className="space-y-4">
                {trustSignals.map((signal) => (
                  <li key={signal.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      {signal.icon}
                    </div>
                    <span className="text-white/50 text-sm">{signal.label}</span>
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <div className="mt-14 p-6 rounded-2xl bg-[#0d0d10] border border-white/[0.06]">
                <p className="text-white/40 text-sm leading-relaxed italic mb-4">
                  &ldquo;We don&apos;t believe in one-size-fits-all. Every engagement
                  starts with understanding your context, your users, and the
                  realities of your operations.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#e8341c] flex items-center justify-center text-white text-xs font-bold">
                    I
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium">Intagleo Team</p>
                    <p className="text-white/25 text-xs">Production-Ready Software</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: form card ── */}
            <div className="bg-[#0d0d10] border border-white/[0.06] rounded-2xl p-8 md:p-10">
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
      </main>
      <Footer showCTA={false} />
    </div>
  );
}
