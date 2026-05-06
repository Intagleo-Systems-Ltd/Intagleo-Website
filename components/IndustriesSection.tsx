"use client";
import { useState } from "react";

const industries = [
  {
    name: "Smart Cities",
    nameSub: "& IoT",
    url: "/smart-cities",
    desc: "Connected infrastructure that turns urban data into real-time decisions.",
    bullets: ["Real-Time Sensor Networks", "Urban Data Platforms", "Smart Infrastructure Management"],
    glowColor: "rgba(30, 80, 180, 0.30)",
    iconColor: "#4d7fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 21h18M5 21V10l7-7 7 7v11M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v2M15.5 6.5l1.5-1.5M8.5 6.5L7 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Fintech",
    nameSub: "",
    url: "/fintech",
    desc: "High-throughput platforms where compliance, speed, and reliability are non-negotiable.",
    bullets: ["Payment & Trading Platforms", "Compliance Automation", "Financial Analytics Dashboards"],
    glowColor: "rgba(60, 40, 180, 0.30)",
    iconColor: "#8b7ff0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 17l4-4 4 4 4-6 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: "Healthcare",
    nameSub: "",
    url: "/healthcare",
    desc: "Mission-critical systems built for clinicians, patients, and the regulators in between.",
    bullets: ["EHR & Telemedicine Systems", "Patient Management Portals", "AI-Assisted Diagnostics"],
    glowColor: "rgba(20, 120, 100, 0.30)",
    iconColor: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 21C12 21 4 14.5 4 9a4 4 0 018 0 4 4 0 018 0c0 5.5-8 12-8 12z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9h6M12 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Digital Signage",
    nameSub: "",
    url: "/digital-signage",
    desc: "Content that adapts in real time — across hundreds of screens, globally.",
    bullets: ["Dynamic Content Management", "Multi-Screen Network Control", "Real-Time Audience Analytics"],
    glowColor: "rgba(100, 30, 160, 0.30)",
    iconColor: "#c084fc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 9l3 3 3-3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Retail",
    nameSub: "& e-commerce",
    url: "/ecommerce-retail",
    desc: "Scalable commerce infrastructure that performs at peak traffic, every time.",
    bullets: ["AI-Driven Inventory Intelligence", "Interactive Kiosks & Signage", "Marketplace Modernization"],
    glowColor: "rgba(180, 30, 15, 0.30)",
    iconColor: "#f87171",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "HR",
    nameSub: "& Recruitment",
    url: "/hr-recruitment",
    desc: "Talent pipelines powered by automation — from first click to day one.",
    bullets: ["Applicant Tracking Systems", "AI Resume Screening", "Onboarding Automation"],
    glowColor: "rgba(180, 80, 15, 0.30)",
    iconColor: "#fb923c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 010 7.75M22 20c0-3.314-2.686-6-6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Facilities",
    nameSub: "Management",
    url: "/facilities-management",
    desc: "Predictive operations that keep physical assets running before they fail.",
    bullets: ["Asset Lifecycle Tracking", "Predictive Maintenance AI", "Work Order Automation"],
    glowColor: "rgba(60, 70, 90, 0.35)",
    iconColor: "#94a3b8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l2.3-2.3a6 6 0 01-7.4 7.4l-6.9 6.9a2.12 2.12 0 01-3-3l6.9-6.9a6 6 0 017.4-7.4l-2.3 2.3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(3);

  return (
    <section id="industries" className="relative z-10 bg-[#0a0a0a] section-padding pt-24 pb-0">
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Industries We Serve</p>
          <h2 className="font-medium customHeading leading-tight mb-4" style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}>
            Different Industries ! Different Pressures !
            <br />
            <span style={{ WebkitTextFillColor: "rgba(255,255,255,0.35)", backgroundImage: "none" }}>
              One standard for excellence.
            </span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed text-balance">
            We don&apos;t believe in &ldquo;one size fits all.&rdquo; We build around your context, your users, and the realities of your operations.
          </p>
        </div>

        {/* Mobile: vertical accordion */}
        <div className="lg:hidden flex flex-col gap-2">
          {industries.map((ind, i) => {
            const isOpen = i === active;
            return (
              <div
                key={`mob-${ind.name}`}
                onClick={() => setActive(i)}
                className={`rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${
                  isOpen ? "border-white/[0.10]" : "border-white/[0.05]"
                } bg-[#0d0d10]`}
              >
                <div className="flex items-center gap-3 px-5 py-4">
                  <div
                    className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0"
                    style={{ color: ind.iconColor }}
                  >
                    {ind.icon}
                  </div>
                  <span className="text-white/80 text-sm font-medium flex-1">
                    {ind.name}
                    {ind.nameSub && <span className="text-white/40 font-normal"> {ind.nameSub}</span>}
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/[0.05]">
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{ind.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {ind.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-white/55 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.iconColor }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={ind.url}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
                    >
                      Explore {ind.name}
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden lg:flex gap-2 items-stretch h-[420px]">
          {industries.map((ind, i) => {
            const isOpen = i === active;
            return (
              <div
                key={ind.name}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  isOpen
                    ? "flex-grow border-white/[0.10]"
                    : "border-white/[0.05] hover:border-white/[0.09]"
                } bg-[#0d0d10]`}
                style={{ flexBasis: isOpen ? undefined : "90px" }}
              >
                {/* Glow (expanded only) */}
                {isOpen && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 80% 80%, ${ind.glowColor} 0%, transparent 60%)`,
                    }}
                  />
                )}

                {/* Collapsed state */}
                {!isOpen && (
                  <div className="absolute inset-0 flex flex-col items-center py-6">
                    {/* Label — centered in remaining space */}
                    <div className="flex-1 flex items-center justify-center">
                      <span
                        className="text-white/50 text-[13px] font-medium whitespace-nowrap tracking-wide"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {ind.name}
                      </span>
                    </div>

                    {/* Glowing icon pinned to bottom */}
                    <div
                      className="flex items-center justify-center w-9 h-9"
                      style={{
                        filter: `drop-shadow(0 0 8px ${ind.iconColor})`,
                        color: ind.iconColor,
                      }}
                    >
                      {ind.icon}
                    </div>
                  </div>
                )}

                {/* Expanded state */}
                {isOpen && (
                  <div className="relative z-10 h-full flex flex-col p-8 gap-6">

                    {/* Top: icon + title */}
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5"
                        style={{ color: ind.iconColor, filter: `drop-shadow(0 0 6px ${ind.iconColor})` }}
                      >
                        {ind.icon}
                      </div>
                      <h3 className="text-2xl font-medium text-white leading-tight">
                        {ind.name}
                        {ind.nameSub && (
                          <span className="font-light text-white/50"> {ind.nameSub}</span>
                        )}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mt-2 max-w-xs">
                        {ind.desc}
                      </p>
                    </div>

                    {/* Middle: bullets */}
                    <ul className="space-y-3 flex-1">
                      {ind.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-white/60 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.iconColor }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom: CTA */}
                    <a
                      href={ind.url}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200 group w-fit"
                    >
                      Explore {ind.name}
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
