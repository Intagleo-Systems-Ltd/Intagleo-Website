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
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
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


