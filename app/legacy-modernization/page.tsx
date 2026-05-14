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
    title: "Cloud migration",
    items: ["Lift-and-shift to AWS, Azure, or GCP", "Infrastructure-as-code with Terraform", "Cost optimisation & right-sizing"],
  },
  {
    title: "Microservices decomposition",
    items: ["Strangler fig & incremental migration", "Domain-driven service boundaries", "Event-driven architecture with Kafka or SQS"],
  },
  {
    title: "Database modernisation",
    items: ["Oracle, MSSQL to PostgreSQL migration", "NoSQL introduction where appropriate", "Data migration with zero downtime"],
  },
  {
    title: "API-first transformation",
    items: ["REST & GraphQL API layer over legacy", "Third-party integration re-platforming", "API gateway & versioning strategy"],
  },
  {
    title: "Front-end rebuild",
    items: ["Replace legacy UI with React or Next.js", "Progressive enhancement, no big-bang rewrite", "Design system & component library"],
  },
  {
    title: "Observability & reliability",
    items: ["Logging, tracing & alerting from day one", "SLA definition & error budget tracking", "On-call runbooks & incident playbooks"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "System audit & risk map",
    desc: "We document every service, dependency, and data flow in your existing system, then score each component by business risk and modernisation effort.",
    align: "left",
  },
  {
    num: "02",
    title: "Migration strategy",
    desc: "A phased roadmap that sequences changes by risk and value, starting with low-risk wins that build momentum without disrupting live operations.",
    align: "right",
  },
  {
    num: "03",
    title: "Incremental migration",
    desc: "We migrate component-by-component using strangler-fig patterns so your legacy system keeps running while the modern version is built alongside it.",
    align: "left",
  },
  {
    num: "04",
    title: "Cutover & operate",
    desc: "Traffic is switched with feature flags and rollback plans in place. Post-cutover we monitor, tune, and hand over full ownership to your team.",
    align: "right",
  },
];

/* ── Stats ──────────────────────────────────────────────────────────────── */
const stats = [
  { big: "60%",   label: "Avg. reduction in infrastructure cost" },
  { big: "3×",    label: "Faster deployment cadence post-migration" },
  { big: "0",     label: "Production outages during migration" },
  { big: "12wks", label: "Avg. time to first production-ready module" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function LegacyModernizationPage() {
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
            Your legacy system is costing<br />you more than you think.
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s map out a path to modern architecture without the big-bang risk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=legacy-modernization" className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">Start a conversation</Link>
            <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


