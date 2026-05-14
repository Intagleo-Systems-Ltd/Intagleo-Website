"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/* ── Capability cards ──────────────────────────────────────────────────── */
const capabilities = [
  {
    title: "Firmware Development",
    items: ["Custom RTOS firmware", "Low-power device optimisation", "OTA update systems"],
  },
  {
    title: "Industrial Protocols",
    items: ["BACnet, MQTT, Modbus, OPC-UA", "Protocol translation gateways", "Edge-to-cloud bridges"],
  },
  {
    title: "Device & Fleet Management",
    items: ["Remote provisioning", "Fleet health monitoring", "Secure device identity"],
  },
  {
    title: "Sensor & Edge Computing",
    items: ["Multi-sensor data acquisition", "Edge preprocessing pipelines", "Offline-resilient buffering"],
  },
  {
    title: "IoT Web Platforms",
    items: ["Real-time dashboards", "Multi-tenant SaaS backends", "REST and WebSocket APIs"],
  },
  {
    title: "Detection and Timing Systems",
    items: ["Vehicle and object detection", "Event-driven data collection", "Operational analytics"],
  },
];

/* ── Process steps ─────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Hardware and requirements audit",
    desc: "We assess your target hardware, communication protocols, and data flows to define the optimal embedded architecture for your use case.",
    align: "left",
  },
  {
    num: "02",
    title: "Firmware and protocol design",
    desc: "We design firmware, select appropriate protocols, and architect the full edge-to-cloud data pipeline before writing a line of code.",
    align: "right",
  },
  {
    num: "03",
    title: "Build, integrate and harden",
    desc: "Firmware and platform development runs in parallel. We integrate devices, stress-test under real conditions, and harden security at every layer.",
    align: "left",
  },
  {
    num: "04",
    title: "Deploy, monitor and iterate",
    desc: "We deploy to your fleet, establish remote monitoring, and provide ongoing support with OTA update capabilities built in from the start.",
    align: "right",
  },
];

export default function EmbeddedIoTPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* Centre content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] text-[#3B82F6] text-xs font-medium tracking-wide">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="2" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M11.54 4.46l-1.41 1.41M4.46 11.54l-1.41 1.41" />
              </svg>
              Embedded & IoT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              Hardware that talks.<br />
              <span className="text-white/35">Platforms that listen.</span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              We build firmware, device management platforms, and cloud integrations for embedded
              systems — from industrial sensors and BMS to drive-through detection and fleet telemetry.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?type=embedded-iot"
                className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
              >
                Start a project
              </Link>
              <Link
                href="#how-it-works"
                className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
              >
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["Firmware Development", "Device Management", "Protocol Integration", "Cloud Connectivity", "Edge Computing"].map((feat) => (
                <span key={feat} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40 text-[11px] font-medium">
                  {feat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 px-6 pb-12 section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-white/[0.07] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "1M+",  label: "Devices Managed" },
                { value: "50+",  label: "Hardware Platforms" },
                { value: "15+",  label: "Protocols Supported" },
                { value: "99.5%", label: "Fleet Uptime" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-1 customHeading">{s.value}</div>
                  <div className="text-white/35 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE DELIVER                                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#0a0a0a" }} className="relative section-padding py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">What We Build</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Full-stack embedded expertise across firmware, protocols, fleet management, and the platforms that tie it all together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group"
                style={{ minHeight: "220px" }}
              >
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/wave-bg.png" alt="" className="w-full h-full object-cover object-center opacity-30" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)", opacity: 0.85 }} />
                </div>
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">
                  {cap.title}
                </h3>
                <ul className="relative z-10 space-y-2 mt-8">
                  {cap.items.map((item) => (
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
      {/* NOT SURE SPLIT SECTION                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-padding py-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl border border-white/[0.10] overflow-hidden">

          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              <span className="text-[#3B82F6]">Not sure</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">
              where to start with embedded?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Tell us about your hardware and data goals and we&apos;ll map the right architecture to your use case.
            </p>
            <Link
              href="/contact?type=embedded-iot"
              className="w-fit px-6 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Request a technical assessment
            </Link>
          </div>

          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/staffaug1.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
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
            <h2 className="text-3xl md:text-5xl font-medium customHeading mb-4">
              From brief to live device in weeks,{" "}
              <span className="font-light text-white/50">not quarters.</span>
            </h2>
            <p className="text-white/40">
              A proven process for embedded projects that actually ship to production.
            </p>
          </div>

                    <ScrollTimeline steps={steps} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH STACK                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
   

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* STATS                                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-[auto] md:grid-rows-[1fr_1fr] gap-3">

            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">10+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Years in embedded development</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">50k+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Devices deployed</p>
              </div>
            </div>

            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">15+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Protocols supported</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.9%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Uptime SLA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CaseStudiesSection pageSlug="embedded-iot" />
      <InsightsSection pageSlug="embedded-iot" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your hardware is ready.<br />Let&apos;s build the software around it.
          </h2>
          <p className="text-white/45 mb-10">From firmware to dashboard, we own the full stack.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=embedded-iot"
              className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Start a conversation
            </Link>
                       <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>

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


