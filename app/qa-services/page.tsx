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
    title: "Manual & exploratory testing",
    items: ["UI walkthroughs & edge case discovery", "UX regression checks", "Session-based test management"],
  },
  {
    title: "Automated test suites",
    items: ["Cypress, Playwright & Selenium", "CI-integrated regression pipelines", "Coverage reporting & thresholds"],
  },
  {
    title: "Performance & load testing",
    items: ["k6, JMeter & Gatling", "Stress & spike test scenarios", "SLA validation & bottleneck reports"],
  },
  {
    title: "API & integration testing",
    items: ["REST & GraphQL contract testing", "Mock service setup & validation", "End-to-end integration coverage"],
  },
  {
    title: "Mobile testing",
    items: ["iOS & Android native testing", "Cross-platform device farms", "Gesture, offline & interrupt testing"],
  },
  {
    title: "Security & vulnerability testing",
    items: ["OWASP Top 10 scanning", "Penetration testing workflows", "Dependency & secrets audits"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Coverage audit",
    desc: "We review your existing test coverage, identify untested risk areas, and map the highest-impact gaps before writing a single test.",
    align: "left",
  },
  {
    num: "02",
    title: "Strategy & plan",
    desc: "A testing strategy designed around your release cadence, risk tolerance, and stack, with clear prioritisation of what to automate versus test manually.",
    align: "right",
  },
  {
    num: "03",
    title: "Build & execute",
    desc: "Automated and manual test suites built and run against your actual environments, integrated directly into your CI/CD pipeline.",
    align: "left",
  },
  {
    num: "04",
    title: "Report & iterate",
    desc: "Clear defect reports, prioritised fix lists, and ongoing coverage that grows with your product, not just at release time.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "85%",   label: "Avg. regression coverage achieved" },
  { big: "3×",    label: "Faster release validation cycles" },
  { big: "0",     label: "Critical bugs reaching production" },
  { big: "48hrs", label: "From brief to first test run" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function QAServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Hero background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Your next release should<br />ship without surprises.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build the test coverage that gives your team confidence at every deploy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=start-project"
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


