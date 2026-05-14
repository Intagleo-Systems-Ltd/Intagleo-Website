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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hex-mesh-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(7,8,15,0.55)" }} />
          <div
            className="absolute top-0 left-0 right-0 h-40"
            style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-72"
            style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
          />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* ── Centre content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] text-[#3B82F6] text-xs font-medium tracking-wide">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 10.5a4 4 0 00-4-6.9A5 5 0 103 10.5"/>
                <path d="M8 10.5v3M6.5 12l1.5 1.5L9.5 12"/>
              </svg>
              Cloud & DevOps
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium customHeading leading-[1.07] tracking-tight">
              Ship faster. Scale smarter.<br />
              <span className="text-white/35">Release everyday.</span>
            </h1>

            {/* Description */}
            <p className="text-white/50 text-base md:text-[17px] max-w-lg leading-relaxed">
              We design, build, and operate cloud infrastructure and DevOps pipelines
              that give engineering teams the speed and confidence to move fast — without fear.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?type=cloud-devops"
                className="px-7 py-3.5 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
              >
                Start a conversation
              </Link>
              <Link
                href="#how-it-works"
                className="px-7 py-3.5 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
              >
                See how it works
              </Link>
            </div>

            {/* Capability pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["CI/CD Automation", "Kubernetes & EKS", "Terraform IaC", "Zero-Downtime Deploys", "FinOps & Cost Control"].map((feat) => (
                <span key={feat} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40 text-[11px] font-medium">
                  {feat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* ── Stats strip — pinned to bottom of hero ── */}
        <div className="relative z-10 px-6 pb-12 section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-white/[0.07] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "3×",    label: "Faster Deployments" },
                { value: "60%",   label: "Cost Reduction" },
                { value: "50+",   label: "Migrations Delivered" },
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">What We Deliver</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Cloud infrastructure and DevOps built for teams that need to move fast and stay reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group"
                style={{ minHeight: "220px" }}
              >
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wave-bg.webp"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)", opacity: 0.85 }} />
                </div>
                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">
                  {svc.title}
                </h3>
                <ul className="relative z-10 space-y-2 mt-8">
                  {svc.items.map((item) => (
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
      {/* DO YOU KNOW                                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-padding py-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 min-h-[280px] rounded-2xl border border-white/[0.10] overflow-hidden">

          {/* Left , text */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight">
              <span className="text-[#3B82F6]">The hidden cost of<br />slow infrastructure:</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-medium customHeading mb-4">
              What are you actually losing?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              We run a free infrastructure assessment that identifies bottlenecks in your CI/CD and security risks in your cloud config.
            </p>
            <Link
              href="/contact?type=cloud-devops"
              className="w-fit px-6 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Request a free infrastructure assessment
            </Link>
          </div>

          {/* Right , GIF */}
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/devops.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50"
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
              From audit to production-ready,{" "}
              <span className="font-light text-white/50">in weeks.</span>
            </h2>
            <p className="text-white/40">
              Our four-step approach to cloud infrastructure that doesn&apos;t collapse under load.
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

            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[0].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[0].label}</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[1].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[1].label}</p>
              </div>
            </div>

            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[3].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[3].label}</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">{stats[2].big}</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">{stats[2].label}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FLEXIBLE WAYS TO WORK TOGETHER                                     */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-[42px] font-semibold tracking-tight"
              style={{
                backgroundImage: "linear-gradient(162deg, rgb(230,242,255) 44%, rgb(175,175,175) 111%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Flexible ways to work together.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "Fixed-term / Discovery",
                title: "Infrastructure audit & roadmap",
                desc: "A 3-week review of your cloud architecture, pipelines, and spend , resulting in a prioritised 12-month remediation plan.",
              },
              {
                badge: "Project-based / Delivery",
                title: "Full platform build",
                desc: "End-to-end delivery of your CI/CD pipelines, IaC, container clusters, and observability stack , production-ready and documented.",
              },
              {
                badge: "Retainer / Managed",
                title: "Ongoing DevOps team",
                desc: "Embedded engineers who own your release pipeline, monitor your infrastructure, and continuously reduce toil and cost.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative rounded-[28px] overflow-hidden flex flex-col justify-end"
                style={{
                  border: "1.4px solid rgba(204,215,255,0.18)",
                  background: "linear-gradient(to bottom, #20272c, rgba(17,17,21,0))",
                  minHeight: "360px",
                }}
              >
                {/* Abstract grid background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                      opacity: 0.6,
                    }}
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(0,2,17,0), #050914)" }}
                  />
                </div>

                {/* Floating red badge */}
                <div className="absolute top-8 left-8 z-10">
                  <div
                    className="px-4 py-2 rounded-full text-white text-xs font-medium whitespace-nowrap"
                    style={{ background: "rgba(229,62,48,0.4)" }}
                  >
                    {card.badge}
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-10 p-8 pt-0">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[#d6d8d8] text-sm leading-relaxed opacity-60">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CASE STUDIES                                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="cloud-devops" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* INSIGHTS                                                           */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <InsightsSection pageSlug="cloud-devops" />

      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">
          <source src="/footer_CTA.webm" type="video/webm" />
          <source src="/footer_CTA.mp4" type="video/mp4" />
        </video>
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


