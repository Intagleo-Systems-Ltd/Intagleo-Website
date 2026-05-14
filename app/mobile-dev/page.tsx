"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

/* ── Service cards ──────────────────────────────────────────────────────── */
const services = [
  {
    title: "iOS development",
    items: ["Swift & SwiftUI native apps", "App Store submission & optimisation", "iOS 17+ features & live activities"],
  },
  {
    title: "Android development",
    items: ["Kotlin & Jetpack Compose", "Material 3 design implementation", "Google Play deployment & ASO"],
  },
  {
    title: "Cross-platform (React Native & Flutter)",
    items: ["Single codebase, native performance", "Platform-specific UI adaptations", "OTA updates via CodePush / Shorebird"],
  },
  {
    title: "Backend & API integration",
    items: ["REST & GraphQL mobile APIs", "Push notifications & background sync", "Offline-first architecture"],
  },
  {
    title: "UX design & prototyping",
    items: ["Mobile-first interaction design", "Accessibility & gesture patterns", "Prototype testing before a line of code"],
  },
  {
    title: "App maintenance & growth",
    items: ["Performance monitoring & crash reporting", "A/B testing & feature flags", "Store rating optimisation"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discovery & UX blueprint",
    desc: "We map your user journeys, define core flows, and produce a clickable prototype before any code is written, so you validate the experience first.",
    align: "left",
  },
  {
    num: "02",
    title: "Architecture & build",
    desc: "Platform choice, state management, API design, and build pipeline set up from day one, so the app scales as your user base grows.",
    align: "right",
  },
  {
    num: "03",
    title: "Testing & store launch",
    desc: "Device testing across iOS and Android, App Store and Google Play submission, ASO metadata, and a monitored rollout to minimise risk.",
    align: "left",
  },
  {
    num: "04",
    title: "Iterate & improve",
    desc: "Analytics, crash reporting, and user feedback loops baked in from launch so every update is driven by real data, not guesswork.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "4.8★",  label: "Avg. App Store rating across shipped apps" },
  { big: "3wks",  label: "Avg. time from kick-off to working prototype" },
  { big: "60%",   label: "Faster delivery vs. native-only approach" },
  { big: "2M+",   label: "Combined users across deployed apps" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function MobileDevPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your next app should<br />ship with confidence.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build a mobile experience your users will love opening every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=mobile-dev" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">Start a conversation</Link>
            <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


