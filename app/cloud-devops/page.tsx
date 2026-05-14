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
    title: "Cloud architecture & migration",
    items: ["Multi-cloud & Hybrid strategies", "Legacy monolith decoupling", "Cost optimisation & FinOps"],
  },
  {
    title: "CI/CD pipeline engineering",
    items: ["Automated testing integration", "Blue/Green & Canary deployments", "Zero-downtime release cycles"],
  },
  {
    title: "Infrastructure as code",
    items: ["Terraform & Pulumi frameworks", "GitOps driven provisioning", "Scalable environment cloning"],
  },
  {
    title: "Kubernetes & containers",
    items: ["Production EKS/GKE setup", "Service mesh implementation", "Container security hardening"],
  },
  {
    title: "Observability & reliability",
    items: ["SLI/SLO dashboarding", "Distributed tracing setup", "Automated alerting protocols"],
  },
  {
    title: "Security & compliance",
    items: ["DevSecOps integration", "SOC2/HIPAA compliance", "Identity & Access (IAM)"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Infrastructure audit",
    desc: "We map your existing cloud footprint , finding security gaps, over-provisioned resources, and bottlenecks before writing a single line of config.",
    align: "left",
  },
  {
    num: "02",
    title: "Design & blueprint",
    desc: "A reference architecture tailored to your team size, compliance requirements, and traffic patterns , reviewed and signed off before build begins.",
    align: "right",
  },
  {
    num: "03",
    title: "Build & deploy",
    desc: "Production-grade IaC, pipelines, and cluster configs shipped incrementally , so your teams can ship continuously from the first week.",
    align: "left",
  },
  {
    num: "04",
    title: "Operate & optimise",
    desc: "Ongoing monitoring, alerting, and cost governance so the infrastructure improves over time , not just on day one.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "99.9%", label: "Uptime SLA target" },
  { big: "3×",    label: "Faster deployment cycles" },
  { big: "60%",   label: "Avg. cloud cost reduction" },
  { big: "50+",   label: "Cloud migrations delivered" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function CloudDevOpsPage() {
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
            Your infrastructure should<br />never be the bottleneck.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s build cloud foundations that scale with your ambition.
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


