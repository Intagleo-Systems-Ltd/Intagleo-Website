"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #07080f 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #07080f 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Hardware that talks.<br />Platforms that listen.
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            We build firmware, device management platforms, and cloud integrations for embedded
            systems, from industrial sensors and BMS to drive-through detection and fleet telemetry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/contact?type=embedded-iot"
              className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="#how-it-works"
              className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
            >
              See how it works
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by hardware companies that can&apos;t afford downtime.</p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { name: "IBM",      src: "/logos/ibm.png",      invert: true  },
                { name: "Samsung",  src: "/logos/samsung.png",  invert: true  },
                { name: "Red Bull", src: "/logos/red-bull.png", invert: true  },
                { name: "KIA",      src: "/logos/kia.png",      invert: true  },
                { name: "Emaar",    src: "/logos/emaar.png",    invert: false },
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
                  style={{ filter: logo.invert ? "brightness(0) invert(1)" : "none", maxWidth: "110px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#0e0f18] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">

              {/* Left: protocol grid visual */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#0b0c15]">
                {["MQTT", "BACnet", "Modbus", "OPC-UA"].map((proto) => (
                  <div
                    key={proto}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
                    style={{ minHeight: "100px" }}
                  >
                    <span className="text-white/40 text-sm font-mono">{proto}</span>
                  </div>
                ))}
              </div>

              {/* Right: text */}
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Your devices are generating data.<br />
                  <span className="text-white/40">Is it reaching your platform?</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  Most embedded projects stall not because of the hardware, but because the
                  software connecting it to the cloud was never built to scale. We close that gap,
                  from firmware to dashboard, with engineers who have done it before.
                </p>
                <Link
                  href="/contact?type=embedded-iot"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
                >
                  Talk to an engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE DELIVER                                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Build</h2>
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
              <span className="text-[#e8341c]">Not sure</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              where to start with embedded?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Tell us about your hardware and data goals and we&apos;ll map the right architecture to your use case.
            </p>
            <Link
              href="/contact?type=embedded-iot"
              className="w-fit px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From brief to live device in weeks,{" "}
              <span className="font-light text-white/50">not quarters.</span>
            </h2>
            <p className="text-white/40">
              A proven process for embedded projects that actually ship to production.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            <div className="space-y-20">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#e8341c]">{step.num}</span>
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH STACK                                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "conic-gradient(from 180deg at 50% 110%, rgba(175,77,68,0.35) 0%, rgba(90,43,44,0.12) 12%, transparent 28%)" }} />
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)" }} />
        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 60%, rgba(175,50,40,0.28) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Built across the embedded stack</h2>
            <p className="text-white/40 text-sm">From bare-metal firmware to cloud-connected dashboards.</p>
          </div>
        </div>

        <div className="relative w-full" style={{ aspectRatio: "1920 / 1117" }}>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1920 1117"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="og1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.4"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="og5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.3"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="1"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
              <linearGradient id="ogBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#050914" stopOpacity="0.8"/><stop offset="100%" stopColor="#050914" stopOpacity="0"/></linearGradient>
            </defs>
            <rect x="121"  y="89"  width="1678" height="1153" rx="191" fill="url(#og1)"      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="240"  y="209" width="1439" height="1033" rx="163" fill="url(#og2)"      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="366"  y="336" width="1188" height="906"  rx="145" fill="url(#og3)"      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="487"  y="457" width="946"  height="785"  rx="145" fill="url(#og4)"      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="619"  y="586" width="682"  height="656"  rx="116" fill="url(#og5)"      stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <rect x="827"  y="372" width="266"  height="262"  rx="52"  fill="url(#ogInner)"  stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <rect x="741"  y="684" width="438"  height="307"  rx="116" fill="url(#ogBottom)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <path d="M960,503 C750,503 430,430 269,310"   stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1540,440 1613,348" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 500,475 384,475"   stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1620,503 1699,566" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 330,550 163,623"   stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,580 1390,676" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C750,503 540,640 480,728"   stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M960,503 C1150,503 1360,380 1405,302" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>

          {[
            { name: "C",           src: `${CDN}/c/c-original.svg`,                                                    lp: 14.0,  tp: 27.75 },
            { name: "Rust",        src: `${CDN}/rust/rust-original.svg`,                                               lp: 84.0,  tp: 31.16 },
            { name: "Python",      src: `${CDN}/python/python-original.svg`,                                           lp: 20.0,  tp: 42.52 },
            { name: "Linux",       src: `${CDN}/linux/linux-original.svg`,                                             lp: 88.5,  tp: 50.67 },
            { name: "Kafka",       src: `${CDN}/apachekafka/apachekafka-original.svg`,                                 lp:  8.5,  tp: 55.77 },
            { name: "Kubernetes",  src: `${CDN}/kubernetes/kubernetes-plain.svg`,                                      lp: 72.38, tp: 60.52 },
            { name: "React",       src: `${CDN}/react/react-original.svg`,                                             lp: 25.0,  tp: 65.18 },
            { name: "AWS",         src: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,               lp: 73.16, tp: 27.04 },
          ].map((tech) => (
            <div
              key={tech.name}
              className="absolute z-10"
              style={{ left: `${tech.lp}%`, top: `${tech.tp}%`, transform: "translate(-50%,-50%)" }}
            >
              <div
                className="rounded-[18px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                style={{
                  width: "clamp(52px, 4.22vw, 82px)",
                  height: "clamp(52px, 4.22vw, 82px)",
                  padding: "clamp(10px, 0.8vw, 16px)",
                  backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)",
                  backdropFilter: "blur(3px)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          ))}

          <div className="absolute z-20" style={{ left: "49.9%", top: "45%", transform: "translate(-50%,-50%)" }}>
            <div
              className="rounded-[22px] flex items-center justify-center"
              style={{
                width: "clamp(80px, 12.66vw, 244px)",
                height: "clamp(80px, 12.55vw, 241px)",
                padding: "clamp(14px, 1.8vw, 30px)",
                backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 109%)",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "0px 1px 14px 0px rgba(255,255,255,0.10)",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-static.png" alt="Intagleo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute z-20" style={{ left: "50%", top: "78%", transform: "translate(-50%,-50%)" }}>
            <div
              className="rounded-[58px] flex items-center justify-center"
              style={{
                padding: "clamp(8px, 1.5vw, 29px) clamp(20px, 3vw, 58px)",
                background: "linear-gradient(to bottom, #050914, rgba(5,9,20,0.6))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span
                className="whitespace-nowrap font-normal"
                style={{
                  fontSize: "clamp(13px, 1.25vw, 24px)",
                  backgroundImage: "linear-gradient(120deg, rgb(230,242,255) 20%, rgb(175,175,175) 41%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technologies
              </span>
            </div>
          </div>
        </div>
      </section>

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

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Your hardware is ready.<br />Let&apos;s build the software around it.
          </h2>
          <p className="text-white/45 mb-10">From firmware to dashboard, we own the full stack.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=embedded-iot"
              className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors"
            >
              Schedule a Technical Call
            </Link>
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
