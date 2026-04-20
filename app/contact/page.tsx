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
  { icon: "⚡", label: "Response within 24 hours" },
  { icon: "🔒", label: "NDA available on request" },
  { icon: "🎯", label: "Senior engineers only" },
  { icon: "🤝", label: "No commitment required" },
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
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm flex-shrink-0">
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
