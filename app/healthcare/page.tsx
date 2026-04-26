"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";

const techCaps = [
  {
    highlight: "Clinical", rest: " Platform Engineering",
    annotations: [
      { pos: "tl", text: "EHR/EMR Integration" },
      { pos: "tr", text: "Clinical Workflow Builder" },
      { pos: "bl", text: "HL7 & FHIR Compliance" },
      { pos: "br", text: "Patient Portal" },
    ],
    items: ["EHR/EMR integration & migration", "Clinical workflow automation", "HL7 & FHIR compliance", "Patient portal development"],
  },
  {
    highlight: "Telehealth", rest: " & Remote Care",
    annotations: [
      { pos: "tl", text: "Video Consultation Platform" },
      { pos: "tr", text: "Async Messaging System" },
      { pos: "bl", text: "Remote Patient Monitoring" },
      { pos: "br", text: "Device Data Ingestion" },
    ],
    items: ["Video consultation infrastructure", "Async care messaging", "Remote patient monitoring", "Wearable data ingestion"],
  },
  {
    highlight: "Data", rest: " & Analytics",
    annotations: [
      { pos: "tl", text: "Population Health Dashboards" },
      { pos: "tr", text: "Predictive Risk Modelling" },
      { pos: "bl", text: "Clinical Outcome Tracking" },
      { pos: "br", text: "Regulatory Reporting" },
    ],
    items: ["Population health analytics", "Predictive risk modelling", "Clinical outcome tracking", "Regulatory reporting pipelines"],
  },
  {
    highlight: "Compliance", rest: " & Security",
    annotations: [
      { pos: "tl", text: "HIPAA Architecture" },
      { pos: "tr", text: "Audit Trail Logging" },
      { pos: "bl", text: "Access Control (RBAC)" },
      { pos: "br", text: "Data Encryption at Rest" },
    ],
    items: ["HIPAA-compliant architecture", "Audit trail & logging", "Role-based access control", "End-to-end encryption"],
  },
  {
    highlight: "Interoperability", rest: " & Integration",
    annotations: [
      { pos: "tl", text: "Lab & Radiology Systems" },
      { pos: "tr", text: "Pharmacy Network APIs" },
      { pos: "bl", text: "Insurance Eligibility Checks" },
      { pos: "br", text: "Health Information Exchange" },
    ],
    items: ["Lab & radiology integration", "Pharmacy network connectivity", "Insurance eligibility APIs", "Health information exchange"],
  },
  {
    highlight: "AI", rest: " & Clinical Decision Support",
    annotations: [
      { pos: "tl", text: "Diagnostic Assistance Tools" },
      { pos: "tr", text: "Drug Interaction Alerts" },
      { pos: "bl", text: "NLP for Clinical Notes" },
      { pos: "br", text: "Triage Prioritisation" },
    ],
    items: ["Clinical decision support AI", "Drug interaction detection", "NLP for clinical notes", "Automated triage systems"],
  },
];

const EKG_POINTS = [
  0, 0, 2, 0, 4, 0, 6, -2, 8, -20, 10, 30, 12, -15, 14, 10, 16, 0,
  18, 0, 20, 0, 22, 0, 24, -3, 26, 3, 28, 0, 30, 0,
];

function buildEkgPath(offset: number, width: number, height: number): string {
  const midY = height / 2;
  const scaleX = width / 32;
  const scaleY = height / 80;
  const pts: string[] = [];
  for (let i = 0; i < EKG_POINTS.length; i += 2) {
    const x = ((EKG_POINTS[i] + offset) % 32) * scaleX;
    const y = midY - EKG_POINTS[i + 1] * scaleY;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function HealthcarePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [ekgOffset, setEkgOffset] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setEkgOffset((o) => (o + 0.4) % 32), 40);
    return () => clearInterval(t);
  }, []);

  const vitals = [
    { label: "Heart Rate", value: "72", unit: "bpm", color: "#6366f1" },
    { label: "SpO2", value: "98", unit: "%", color: "#6366f1" },
    { label: "Resp Rate", value: "16", unit: "/min", color: "#10b981" },
    { label: "Temp", value: "36.6", unit: "°C", color: "#f59e0b" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Healthcare software that<br />prioritises patient outcomes.
          </h1>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-9">
            From HIPAA-compliant platforms to AI-powered clinical decision support, we build
            the healthcare technology that improves care delivery at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?type=healthcare" className="px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Talk to a Healthcare Engineer
            </Link>
            <a href="#process" className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors">
              See How We Work
            </a>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-12 text-center">
          <p className="text-white/40 text-base mb-8">Trusted by healthcare organisations serving millions of patients.</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[{ name: "Samsung", src: "/logos/samsung.png" }, { name: "IBM", src: "/logos/ibm.png" }, { name: "TCL", src: "/logos/tcl.png" }].map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-7 w-auto object-contain opacity-35 hover:opacity-60 transition-opacity duration-300" style={{ filter: "brightness(0) invert(1)", maxWidth: "110px" }} />
            ))}
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#13141a] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#111218]">
                <div className="col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ minHeight: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp1.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp2.png" alt="" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
                </div>
                <div className="rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/emp3.png" alt="" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
                </div>
              </div>
              <div className="flex flex-col justify-center text-left p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Legacy clinical systems are creating invisible risk.{" "}
                  <span className="text-white/35">Most organisations only notice during an audit or incident.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  Every manual data entry point, every system that doesn&apos;t talk to another, every clinician
                  workaround - that&apos;s patient risk and operational debt accumulating silently.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  We&apos;ve built compliant healthcare platforms trusted by providers serving millions of patients,
                  with the interoperability and security architecture that clinical environments demand.
                </p>
                <Link href="/contact?type=healthcare" className="self-start px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:text-white hover:border-white/40 transition-colors">
                  Talk to a Healthcare Engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH CAPABILITIES */}
      <section className="section-padding py-24" id="capabilities">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Core Capabilities</h2>
            <p className="text-white/40 text-base">Built across the modern healthcare technology stack</p>
          </div>
          <div className="grid lg:grid-cols-[320px_1fr] gap-4 items-stretch">
            <div className="flex flex-col gap-2">
              {techCaps.map((cap, i) => (
                <button key={i} onClick={() => setActiveTab(i)} className={`text-left px-5 py-4 rounded-xl transition-all duration-200 border ${activeTab === i ? "bg-white/[0.08] border-white/[0.1] shadow-sm" : "bg-white/[0.02] border-transparent hover:bg-white/[0.04]"}`}>
                  <span className="font-bold text-white text-sm md:text-[15px]">{cap.highlight}</span>
                  <span className={`text-sm md:text-[15px] transition-colors ${activeTab === i ? "text-white/65" : "text-white/35"}`}>{cap.rest}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-0">
              <div className="relative bg-[#13141a] border border-white/[0.07] rounded-t-2xl overflow-hidden flex items-center justify-center p-10" style={{ minHeight: "360px" }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v1h40V0zM0 40V0H1v40H0z' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E\")" }} />
                <div className="relative z-10 w-full" style={{ maxWidth: "calc(100% - 180px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/intvue-mockup.png" alt="Platform mockup" className="w-full rounded-xl shadow-2xl" />
                </div>
                {techCaps[activeTab].annotations.map((a) => (
                  <div key={a.pos} className={`absolute z-20 bg-[#13141a]/90 border border-white/[0.1] rounded-lg px-3 py-2 backdrop-blur-sm max-w-[140px] transition-all duration-300 ${a.pos === "tl" ? "top-5 left-5" : a.pos === "tr" ? "top-5 right-5 text-right" : a.pos === "bl" ? "bottom-5 left-5" : "bottom-5 right-5 text-right"}`}>
                    <p className="text-white/80 text-xs leading-snug">{a.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#13141a] border border-white/[0.07] border-t-0 rounded-b-2xl px-6 py-4 flex flex-wrap gap-x-6 gap-y-2">
                {techCaps[activeTab].items.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/70 flex-shrink-0" />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE REVIEW */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4">Architecture Review</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">Are your clinical systems </span>
              <span className="text-white/30">creating hidden patient risk?</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We conduct deep-dive healthcare architecture reviews - examining your EHR integrations,
              data security posture, and compliance gaps - before a regulatory audit forces the issue.
            </p>
            <Link href="/contact?type=healthcare-review" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Book a Clinical System Review
            </Link>
          </div>

          {/* EKG Dashboard */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0e18] border border-white/[0.07] p-5" style={{ height: "380px" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Patient Monitor</span>
              <span className="flex items-center gap-1.5 text-[10px] text-green-400/70 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </div>
            {/* EKG trace */}
            <div className="relative bg-[#060810] rounded-xl border border-white/[0.05] mb-3 overflow-hidden" style={{ height: "160px" }}>
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M20 0H0v20' fill='none' stroke='rgba(0,255,100,0.5)' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                <path
                  d={buildEkgPath(ekgOffset, 400, 160)}
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute top-2 left-3 text-[9px] text-green-400/50 font-mono">ECG II</div>
              <div className="absolute top-2 right-3 text-[9px] text-green-400/50 font-mono">25mm/s · 10mm/mV</div>
            </div>
            {/* Vitals grid */}
            <div className="grid grid-cols-4 gap-2">
              {vitals.map((v) => (
                <div key={v.label} className="bg-[#060810] rounded-lg border border-white/[0.05] p-2.5 text-center">
                  <p className="text-[8px] text-white/30 font-mono mb-1">{v.label}</p>
                  <p className="font-bold leading-none font-mono" style={{ color: v.color, fontSize: "clamp(16px,2vw,22px)" }}>{v.value}</p>
                  <p className="text-[8px] mt-0.5 font-mono" style={{ color: v.color, opacity: 0.5 }}>{v.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              From fragmented clinical systems to connected care infrastructure
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t just integrate APIs. Every engagement starts with your patient journey
              and clinical workflow requirements.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            {[
              { num: "01", title: "Clinical Audit", desc: "We map your existing systems, integration gaps, compliance posture, and data flows before any architecture decisions are made.", align: "left" },
              { num: "02", title: "Platform Architecture", desc: "We design for compliance and interoperability: HIPAA controls, FHIR-native data models, and HL7 integration patterns built in from day one.", align: "right" },
              { num: "03", title: "Build & Validate", desc: "We develop with security, accessibility, and clinical workflow accuracy as primary requirements - not afterthoughts.", align: "left" },
              { num: "04", title: "Deploy & Monitor", desc: "Staged rollout with clinical workflow validation, staff training support, and continuous monitoring of system performance and data integrity.", align: "right" },
            ].map((step) => (
              <div key={step.num} className={`relative flex mb-16 last:mb-0 ${step.align === "right" ? "justify-end" : "justify-start"}`}>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border border-white/30 z-10" />
                <div className={`w-[44%] ${step.align === "right" ? "text-left pl-8" : "text-right pr-8"}`}>
                  <span className="text-[#6366f1] text-4xl font-bold leading-none block mb-2">{step.num}</span>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 40% 70%, rgba(99,102,241,0.09) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Clinical Impact</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The impact<br /><span className="text-white/50 font-normal">on care delivery</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Purpose-built clinical infrastructure eliminates the system fragmentation that
                  creates patient risk and clinician burden. Here&apos;s what changes.
                </p>
              </div>
              <Link href="/contact?type=healthcare" className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors cursor-pointer">
                See results in action
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { num: "01", title: "Clinical Efficiency", desc: "Automated workflows and unified data access reduce clinician time on administrative tasks, giving more time to patients." },
              { num: "02", title: "Patient Safety", desc: "Real-time alerts, drug interaction detection, and complete patient history at point of care reduce adverse event risk." },
              { num: "03", title: "Compliance Confidence", desc: "HIPAA-native architecture and comprehensive audit trails mean you&apos;re never scrambling before a compliance review." },
              { num: "04", title: "Care Continuity", desc: "Seamless data exchange across care settings ensures every clinician has the complete picture needed to make safe decisions." },
            ].map((item) => (
              <div key={item.title} className="flex-1 flex items-start gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200">
                <span className="text-xs font-mono text-[#6366f1]/70 mt-0.5 flex-shrink-0 w-6">{item.num}</span>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection pageSlug="healthcare" />

      {/* STATS BENTO */}
      <section className="section-padding py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-3">
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">5M+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Patients on platforms built</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">100%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">HIPAA compliance on delivery</p>
              </div>
            </div>
            <div className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">40+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">EHR & system integrations</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]" style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.9%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Platform uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection pageSlug="healthcare" />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />
        <div className="absolute inset-0 bg-[#0a0a0a]/65 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Patient data scattered<br />
            <span className="text-white/35">is patient safety compromised.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Whether you serve a single clinic or a national health network, we build the
            clinical infrastructure that connects care and protects patients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link href="/contact?type=healthcare" className="px-7 py-3 rounded-full bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors">
              Talk to a healthcare engineer
            </Link>
            <Link href="/contact?type=healthcare-review" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">
              Book a clinical system review
            </Link>
          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
