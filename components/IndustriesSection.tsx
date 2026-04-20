"use client";
import { useState } from "react";

const industries = [
  {
    name: "Smart Cities & IoT",
    bullets: ["Real-Time Sensor Networks", "Urban Data Platforms", "Smart Infrastructure Management"],
    gradient: "from-blue-900/60 via-blue-800/20 to-transparent",
    glowColor: "rgba(30, 80, 180, 0.35)",
  },
  {
    name: "Fintech",
    bullets: ["Payment & Trading Platforms", "Compliance Automation", "Financial Analytics Dashboards"],
    gradient: "from-indigo-900/60 via-indigo-800/20 to-transparent",
    glowColor: "rgba(60, 40, 180, 0.35)",
  },
  {
    name: "Healthcare",
    bullets: ["EHR & Telemedicine Systems", "Patient Management Portals", "AI-Assisted Diagnostics"],
    gradient: "from-teal-900/60 via-teal-800/20 to-transparent",
    glowColor: "rgba(20, 120, 100, 0.35)",
  },
  {
    name: "Retail & e-commerce",
    bullets: ["AI-Driven Inventory Intelligence", "Interactive Digital Signage & Kiosks", "Scalable Marketplace Modernization"],
    gradient: "from-red-900/60 via-red-800/20 to-transparent",
    glowColor: "rgba(180, 30, 15, 0.45)",
  },
  {
    name: "Digital Signage",
    bullets: ["Dynamic Content Management", "Multi-Screen Network Control", "Real-Time Audience Analytics"],
    gradient: "from-purple-900/60 via-purple-800/20 to-transparent",
    glowColor: "rgba(100, 30, 160, 0.35)",
  },
  {
    name: "HR & recruitment",
    bullets: ["Applicant Tracking Systems", "AI Resume Screening", "Onboarding Automation"],
    gradient: "from-orange-900/60 via-orange-800/20 to-transparent",
    glowColor: "rgba(180, 80, 15, 0.35)",
  },
  {
    name: "Facilities Management",
    bullets: ["Asset Lifecycle Tracking", "Predictive Maintenance AI", "Work Order Automation"],
    gradient: "from-slate-800/60 via-slate-700/20 to-transparent",
    glowColor: "rgba(60, 70, 90, 0.4)",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(3); // Retail open by default

  return (
    <section id="industries" className="relative z-10 bg-[#0a0a0a] section-padding pt-24 pb-0">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Different Industries,{" "}
            <span className="text-white/40">Different pressures.</span>
            <br />
            One standard for excellence.
          </h2>
          <p className="text-white/45 text-sm leading-relaxed">
            We don&apos;t believe in &ldquo;one size fits all.&rdquo; We build around your
            context, your users, and the realities of your operations.
          </p>
        </div>

        {/* Accordion row */}
        <div className="flex gap-2 items-stretch h-[480px]">
          {industries.map((ind, i) => {
            const isOpen = i === active;
            return (
              <div
                key={ind.name}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  isOpen ? "flex-grow" : "w-[72px] hover:bg-white/3"
                } bg-[#0d0d10]`}
                style={{ flexBasis: isOpen ? undefined : "72px" }}
              >
                {/* Background glow (only expanded) */}
                {isOpen && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 70% 60%, ${ind.glowColor} 0%, transparent 65%)`,
                    }}
                  />
                )}

                {/* Collapsed: vertical text */}
                {!isOpen && (
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-6">
                    <div className="flex-1 flex items-center justify-center">
                      <span
                        className="text-white/60 text-sm font-medium whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {ind.name}
                      </span>
                    </div>
                    {/* Arrow */}
                    <div className="w-6 h-6 flex items-center justify-center opacity-40">
                      <svg viewBox="0 0 10 10" fill="currentColor" className="w-3 h-3 text-white rotate-90">
                        <polygon points="0,10 5,0 10,10" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Expanded content */}
                {isOpen && (
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {ind.name.split(" ").slice(0, 1).join(" ")}{" "}
                        <span className="font-light text-white/60">
                          {ind.name.split(" ").slice(1).join(" ")}
                        </span>
                      </h3>
                    </div>

                    {/* Bullets + CTA at bottom */}
                    <div>
                      <ul className="space-y-2 mb-6">
                        {ind.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-white/65 text-sm">
                            <span className="text-white/30">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contact?type=start-project"
                        className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
                      >
                        <svg viewBox="0 0 10 10" fill="currentColor" className="w-3 h-3 text-white/40">
                          <polygon points="0,10 5,0 10,10" />
                        </svg>
                        Explore More
                      </a>
                    </div>
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
