"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ScrollTimeline from "@/components/ScrollTimeline";

/* ── Dot grid ──────────────────────────────────────────────────────────── */
const dotGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='0.8' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";

/* ── What we build cards ───────────────────────────────────────────────── */
const buildCards = [
  {
    title: "Product & Platform Development",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: ["SaaS platforms", "Customer-facing applications", "Internal business tools", "Multi-tenant systems"],
  },
  {
    title: "Enterprise Software",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ["Workflow automation systems", "Operational platforms", "Data-heavy applications", "Role-based access systems"],
  },
  {
    title: "Integrations & APIs",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    items: ["Third-party integrations", "Internal system connectivity", "API design & development", "Data synchronization layers"],
  },
  {
    title: "Modernization & Rebuilds",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    items: ["Legacy system upgrades", "Architecture redesign", "Performance optimization", "Cloud migration"],
  },
];

/* ── Process steps ─────────────────────────────────────────────────────── */
const processSteps = [
  { num: "01", title: "Discovery", desc: "Define requirements, workflows, and system scope" },
  { num: "02", title: "Architecture & Planning", desc: "Tech stack, system design, and delivery roadmap" },
  { num: "03", title: "Development", desc: "Agile sprints with continuous updates" },
  { num: "04", title: "Testing & QA", desc: "Performance, security, and reliability validation" },
  { num: "05", title: "Deployment & Scale", desc: "Launch, monitor, and continuously improve" },
];

/* ── Engagement models ─────────────────────────────────────────────────── */
const engagementModels = [
  {
    num: "1",
    title: "Market Ready Product",
    desc: "We take your idea from concept to production",
  },
  {
    num: "2",
    title: "Team Extension",
    desc: "Work alongside your internal team to accelerate delivery",
  },
  {
    num: "3",
    title: "Dedicated Teams",
    desc: "Long-term product development and scaling support",
  },
];

/* ── Support options ───────────────────────────────────────────────────── */
const supportOptions = [
  {
    label: "Building something new",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    label: "Improving an existing product",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Upgrading legacy systems",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

/* ── Tech stack ───────────────────────────────────────────────────────── */
const reactIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
  </svg>
);
const vueIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M1.5 3h4.2L12 15.8 18.3 3H22.5L12 22 1.5 3z"/>
    <path d="M6.5 3H9.8L12 7.2 14.2 3H17.5L12 13.5 6.5 3z" opacity="0.55"/>
  </svg>
);
const nextIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4 4h3.5v10.2L18 4h3.5v16H18V9.8L7.5 20H4V4z"/>
  </svg>
);

type TechItem = { name: string; abbr: string; color: string; bg: string; icon?: React.ReactNode };

const techCategories: { label: string; glow: string; techs: TechItem[] }[] = [
  {
    label: "Frontend",
    glow: "rgba(99,102,241,0.2)",
    techs: [
      { name: "React",      abbr: "Re",   color: "#61DAFB", bg: "rgba(97,218,251,0.10)",  icon: reactIcon },
      { name: "Next.js",    abbr: "N",    color: "#e2e8f0", bg: "rgba(255,255,255,0.07)", icon: nextIcon  },
      { name: "Vue.js",     abbr: "Vu",   color: "#42B883", bg: "rgba(66,184,131,0.12)",  icon: vueIcon   },
      { name: "TypeScript", abbr: "TS",   color: "#3B82F6", bg: "rgba(59,130,246,0.12)"                  },
      { name: "Tailwind",   abbr: "Tw",   color: "#06B6D4", bg: "rgba(6,182,212,0.12)"                   },
    ],
  },
  {
    label: "Backend",
    glow: "rgba(74,222,128,0.15)",
    techs: [
      { name: "Node.js", abbr: "N",    color: "#4ADE80", bg: "rgba(74,222,128,0.10)"  },
      { name: "Python",  abbr: "Py",   color: "#60A5FA", bg: "rgba(96,165,250,0.12)"  },
      { name: ".NET",    abbr: ".NET", color: "#A78BFA", bg: "rgba(167,139,250,0.12)" },
      { name: "Go",      abbr: "Go",   color: "#2DD4BF", bg: "rgba(45,212,191,0.12)"  },
      { name: "Java",    abbr: "J",    color: "#FB923C", bg: "rgba(251,146,60,0.12)"  },
    ],
  },
  {
    label: "Cloud & Infra",
    glow: "rgba(252,211,77,0.14)",
    techs: [
      { name: "AWS",        abbr: "AWS", color: "#FCD34D", bg: "rgba(252,211,77,0.10)"  },
      { name: "Azure",      abbr: "Az",  color: "#60A5FA", bg: "rgba(96,165,250,0.12)"  },
      { name: "GCP",        abbr: "G",   color: "#818CF8", bg: "rgba(129,140,248,0.12)" },
      { name: "Docker",     abbr: "D",   color: "#38BDF8", bg: "rgba(56,189,248,0.12)"  },
      { name: "Kubernetes", abbr: "K8s", color: "#7B8FD4", bg: "rgba(123,143,212,0.12)" },
    ],
  },
  {
    label: "Data & AI",
    glow: "rgba(196,181,253,0.16)",
    techs: [
      { name: "PostgreSQL", abbr: "PG",  color: "#7DD3FC", bg: "rgba(125,211,252,0.10)" },
      { name: "Redis",      abbr: "Re",  color: "#F87171", bg: "rgba(248,113,113,0.12)" },
      { name: "MongoDB",    abbr: "MG",  color: "#4ADE80", bg: "rgba(74,222,128,0.12)"  },
      { name: "OpenAI",     abbr: "OAI", color: "#C4B5FD", bg: "rgba(196,181,253,0.12)" },
      { name: "LangChain",  abbr: "LC",  color: "#34D399", bg: "rgba(52,211,153,0.12)"  },
    ],
  },
];

const allTechsFlat: TechItem[] = techCategories.flatMap((c) => c.techs);

/* ── Pain-point cards ──────────────────────────────────────────────────── */
const painPoints = [
  {
    pre: "Have an idea but",
    main: "not a full roadmap?",
    desc: "You don't need everything figured out. We'll help you shape it into a working system.",
    accent: "#3B82F6",
  },
  {
    pre: "Not sure",
    main: "which solution fits your case?",
    desc: "We'll map your requirements and recommend the right approach before writing a single line of code.",
    accent: "#3B82F6",
  },
  {
    pre: "Need to move fast",
    main: "without losing structure?",
    desc: "We balance speed with solid architecture, so you don't rebuild later.",
    accent: "#3B82F6",
  },
];

/* ── Page ──────────────────────────────────────────────────────────────── */
export default function CustomSoftwarePage() {
  const [activeSupport, setActiveSupport] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveSupport((prev) => (prev + 1) % supportOptions.length);
      setProgressKey((k) => k + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, resetKey]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-36 pb-24 px-6 text-center overflow-hidden">
        {/* hex-mesh background image , same as staff aug */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hex-mesh-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ opacity: 0.55 }}
        />
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-[#06080f]/60 pointer-events-none" />
        {/* Subtle red glow bottom-left */}
        <div
          className="absolute left-0 bottom-0 w-[50%] h-[60%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 10% 90%, rgba(99,102,241,0.10) 0%, transparent 55%)" }}
        />
        {/* Bottom fade to page bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#3B82F6] text-xs font-medium tracking-wide uppercase">
              Custom Software Development
            </span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold heading-gradient leading-[1.07] mb-6">
            Built for your workflows.{" "}
            Engineered for scale.{" "}
            Delivered your way.
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Move beyond isolated features. We design and develop high-performance systems
            aligned with how your business runs, from MVP to enterprise scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/contact?type=custom-software"
              className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-6 py-3 rounded-full border border-white/[0.12] text-white/70 text-sm font-medium hover:text-white hover:border-white/25 transition-colors"
            >
              Schedule a Technical Call
            </Link>
          </div>

          <p className="text-white/25 text-sm tracking-wide">
            MVPs &nbsp;·&nbsp; Enterprise Systems &nbsp;·&nbsp; Integrations &nbsp;·&nbsp; AI-enabled Platforms
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FROM CONCEPT TO MARKET                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="text-white">From Concept to Market </span>
              <span className="text-white/40">not just </span>
              <span className="text-white">Product Development</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8 max-w-sm">
              We handle the full lifecycle of your software, from problem definition to
              production and beyond.
            </p>
            <Link
              href="/contact?type=custom-software"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Talk to a Product Expert
            </Link>
          </div>

          {/* Right , 3 stacked overlapping cards */}
          <div className="relative flex items-center justify-center" style={{ minHeight: "320px" }}>
            {/* Red glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 65% 45%, rgba(99,102,241,0.08) 0%, transparent 65%)" }} />

            {/* Back-left card (partial) */}
            <div
              className="absolute rounded-xl border border-white/[0.08] overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #131620 0%, #0e1018 100%)",
                width: "52%",
                left: "2%",
                top: "8%",
                bottom: "8%",
                transform: "perspective(800px) rotateY(8deg) rotateX(-3deg)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                zIndex: 1,
              }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <span className="text-xs font-semibold text-white/70 truncate">Product Ope…</span>
                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  { label: "Product Team",       icon: "#3B82F6", dot: "#22c55e" },
                  { label: "Data Pipeline",      icon: "#f59e0b", dot: "#f97316" },
                  { label: "Monitoring",         icon: "#3B82F6", dot: "#22c55e" },
                  { label: "Platform Eng.",      icon: "#8b5cf6", dot: "#22c55e" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-white/[0.03]">
                    <span className="w-4 h-4 rounded flex-shrink-0" style={{ background: item.icon, opacity: 0.85 }} />
                    <span className="text-xs text-white/55 flex-1 truncate">{item.label}</span>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Back-right card (partial) */}
            <div
              className="absolute rounded-xl border border-white/[0.08] overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #131620 0%, #0e1018 100%)",
                width: "52%",
                right: "2%",
                top: "4%",
                bottom: "12%",
                transform: "perspective(800px) rotateY(-10deg) rotateX(-2deg)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                zIndex: 2,
              }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <span className="text-xs font-semibold text-white/70 truncate">Systems</span>
                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  { label: "Frontend Dev",    icon: "#10b981", dot: "#22c55e" },
                  { label: "Backend API",     icon: "#3B82F6", dot: "#f97316" },
                  { label: "DevOps",          icon: "#f59e0b", dot: "#22c55e" },
                  { label: "QA & Testing",    icon: "#8b5cf6", dot: "#22c55e" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg">
                    <span className="w-4 h-4 rounded flex-shrink-0" style={{ background: item.icon, opacity: 0.85 }} />
                    <span className="text-xs text-white/55 flex-1">{item.label}</span>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Front card */}
            <div
              className="absolute rounded-xl border border-white/[0.10] overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #181c26 0%, #111420 100%)",
                width: "58%",
                left: "21%",
                top: "0%",
                bottom: "0%",
                transform: "perspective(800px) rotateY(-2deg) rotateX(1deg)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                zIndex: 3,
              }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <span className="text-xs font-semibold text-white/90">Product Development</span>
                <svg className="w-3.5 h-3.5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  { label: "Product Strategy",     icon: "#3B82F6", dot: "#22c55e" },
                  { label: "System Architecture",  icon: "#f59e0b", dot: "#f97316" },
                  { label: "Workflow Design",       icon: "#3B82F6", dot: "#22c55e" },
                  { label: "Engineering Lead",      icon: "#8b5cf6", dot: "#22c55e" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-white/[0.04] transition-colors">
                    <span className="w-4 h-4 rounded flex-shrink-0" style={{ background: item.icon, opacity: 0.9 }} />
                    <span className="text-xs text-white/75 flex-1">{item.label}</span>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WHAT WE BUILD                                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: dotGrid, backgroundSize: "24px 24px" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-3">What we Build</h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              See how we&apos;ve helped businesses turn complex challenges into scalable digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between items-start self-stretch rounded-2xl"
                style={{
                  padding: "40px",
                  background: "conic-gradient(from 155deg at 69.58% 26.07%, rgba(49,49,50,0.63) 60.057deg, rgba(12,9,16,0.63) 79.007deg, rgba(51,48,59,0.63) 239.694deg, rgba(14,11,17,0.63) 360deg)",
                  backdropFilter: "blur(3px)",
                  borderRadius: "16px",
                }}
              >
                <h3 className="text-white font-semibold text-sm leading-snug mb-5">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/45">
                      <span className="text-white/25 leading-none mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.12] text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-all"
            >
              View our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CTABanner
        accentText="Have an idea but"
        headline="not a full roadmap?"
        body="You don't need everything figured out. We'll help you shape it into a working system , from discovery to production-ready software."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact?type=custom-software"
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HOW CAN WE SUPPORT YOU                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <style>{`
        @keyframes tabProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
      <section
        className="section-padding py-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-3">How can we support you?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {supportOptions.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => {
                  setActiveSupport(i);
                  setProgressKey((k) => k + 1);
                  setResetKey((k) => k + 1);
                }}
                className={`relative flex items-center gap-3 px-6 py-3.5 rounded-full border text-sm font-medium transition-all overflow-hidden ${
                  activeSupport === i
                    ? "bg-[#3B82F6] border-[#3B82F6] text-white"
                    : "bg-[#0d0d10] border-white/[0.08] text-white/55 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className={activeSupport === i ? "text-white" : "text-white/40"}>
                  {opt.icon}
                </span>
                {opt.label}
                {activeSupport === i && !paused && (
                  <span
                    key={progressKey}
                    className="absolute bottom-0 left-0 h-[3px] bg-white/40 rounded-full"
                    style={{ animation: "tabProgress 3.5s linear forwards" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dynamic content per support option */}
          <div className="mt-10 rounded-2xl bg-[#0d0d10] border border-white/[0.06] p-8 md:p-12">
            {activeSupport === 0 && (
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs text-[#3B82F6] font-medium tracking-wider uppercase mb-3 block">Building something new</span>
                  <h3 className="text-2xl font-bold text-white mb-4">From idea to production-ready system</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Whether you have a detailed spec or just a rough concept, we&apos;ll help you validate,
                    architect, and build a system that scales , starting with an MVP that proves your market.
                  </p>
                  <Link href="/contact?type=custom-software" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                    Start Building
                  </Link>
                </div>
                <div className="space-y-3">
                  {["Discovery & problem definition", "MVP scoping & architecture", "Iterative development sprints", "Launch & post-launch support"].map((s, i) => (
                    <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-[#111116] border border-white/[0.05]">
                      <span className="text-[#3B82F6]/60 text-xs font-mono">0{i + 1}</span>
                      <span className="text-white/65 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeSupport === 1 && (
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs text-[#3B82F6] font-medium tracking-wider uppercase mb-3 block">Improving an existing product</span>
                  <h3 className="text-2xl font-bold text-white mb-4">Accelerate without breaking what works</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Your product is live and growing, but velocity is slowing. We audit your codebase,
                    identify bottlenecks, and add the engineering capacity to ship features faster.
                  </p>
                  <Link href="/contact?type=custom-software" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                    Take Your Product To Next Level
                  </Link>
                </div>
                <div className="space-y-3">
                  {["Codebase audit & assessment", "Performance optimization", "Feature development sprints", "Technical debt reduction"].map((s, i) => (
                    <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-[#111116] border border-white/[0.05]">
                      <span className="text-[#3B82F6]/60 text-xs font-mono">0{i + 1}</span>
                      <span className="text-white/65 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeSupport === 2 && (
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs text-[#3B82F6] font-medium tracking-wider uppercase mb-3 block">Upgrading legacy systems</span>
                  <h3 className="text-2xl font-bold text-white mb-4">Modernize without disrupting operations</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Legacy systems hold your business back. We map your current architecture, design a
                    migration path, and execute it in phases , zero downtime, full continuity.
                  </p>
                  <Link href="/contact?type=legacy-modernization" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors">
                    Upgrade Your System
                  </Link>
                </div>
                <div className="space-y-3">
                  {["Legacy system assessment", "Migration strategy & roadmap", "Phased re-architecture", "Cloud-native transformation"].map((s, i) => (
                    <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-[#111116] border border-white/[0.05]">
                      <span className="text-[#3B82F6]/60 text-xs font-mono">0{i + 1}</span>
                      <span className="text-white/65 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* NOT SURE CTA BAR                                                   */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
     

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* PROCESS , We design systems, not just features                     */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">
              We design systems, not just features
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Most developers jump into code. We start by mapping your business DNA to ensure the software
              supports your growth, not limits it.
            </p>
          </div>

          <ScrollTimeline steps={processSteps} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TECH CAPABILITIES                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.07) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl section-padding">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Built with the best</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-3">Tech Capabilities</h2>
            <p className="text-white/40 text-sm">20+ technologies across the modern stack</p>
          </div>
        </div>

        {/* ── Full-bleed marquee ── */}
        <div className="overflow-hidden mb-12 py-1">
          <div className="flex w-max marquee-scroll gap-3">
            {[...allTechsFlat, ...allTechsFlat, ...allTechsFlat].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full flex-shrink-0 border"
                style={{
                  background: tech.bg,
                  borderColor: `${tech.color}25`,
                }}
              >
                {tech.icon ? (
                  <span className="flex-shrink-0 w-4 h-4" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                ) : (
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold leading-none"
                    style={{ background: `${tech.color}22`, color: tech.color }}
                  >
                    {tech.abbr.slice(0, 2)}
                  </span>
                )}
                <span className="text-white/60 text-xs font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Enterprise-grade strip ── */}
        <div className="relative z-10 mx-auto max-w-6xl section-padding">
          {/* ── Enterprise-grade strip ── */}
          <div className="mt-4 rounded-2xl bg-[#0d0d10] border border-white/[0.06] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Mini metrics */}
            <div className="w-full md:w-[45%] rounded-xl bg-[#111116] border border-white/[0.06] p-5 flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">Live Metrics</span>
                </div>
                <span className="text-[9px] text-white/20 font-mono">99.98% uptime</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { label: "API Calls / min", val: "12,450", up: true },
                  { label: "Response time",   val: "42ms",   up: false },
                  { label: "Uptime SLA",      val: "99.98%", up: false },
                  { label: "Active tenants",  val: "340+",   up: true  },
                ].map((m) => (
                  <div key={m.label} className="bg-[#0d0d10] rounded-lg p-2.5 border border-white/[0.04]">
                    <p className="text-[9px] text-white/25 mb-1">{m.label}</p>
                    <p className="text-sm font-bold text-white">{m.val}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-1 h-8">
                {[60, 75, 55, 80, 65, 90, 70, 85, 72, 95, 78, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: i >= 9 ? "linear-gradient(to top, #4ADE80, #166534)" : "rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise-grade from day one</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Every system we build ships with multi-tenant architecture, 99.9%+ SLA,
                automated CI/CD, and full observability baked in — not bolted on later.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Horizontal scaling built-in",
                  "Automated test coverage",
                  "Zero-downtime deployments",
                  "Real-time monitoring & alerts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FLEXIBLE ENGAGEMENT                                                */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: dotGrid, backgroundSize: "24px 24px" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-gradient leading-tight mb-4">
              Flexible engagement{" "}
              <span className="text-white/35">based on your needs</span>
            </h2>
            <p className="text-white/40 max-w-lg">
              Work with us the way that suits your project best. From dedicated teams to targeted
              expertise, we adapt to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {engagementModels.map((model) => (
              <div
                key={model.num}
                className="group relative rounded-2xl bg-[#0d0d10] border border-white/[0.06] p-8 overflow-hidden hover:border-white/[0.14] transition-all"
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)" }}
                />
                <div
                  className="text-6xl font-bold mb-5 leading-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(99,102,241,0.08))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {model.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{model.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{model.desc}</p>
                <div className="mt-6">
                  <Link
                    href="/contact?type=custom-software"
                    className="text-xs text-[#3B82F6] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* footer_CTA.gif background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient leading-tight mb-5">
            Tell Us What You Want To Build.{" "}
            <span className="text-white/50">We&apos;ll Take It From There.</span>
          </h2>
          <p className="text-white/40 mb-3 max-w-lg mx-auto">
            Whether you&apos;re scaling for the next 10 million users, modernizing a legacy core, or
            solving the bottleneck that&apos;s slowing your roadmap, we&apos;ve helped teams navigate these transitions before.
          </p>
          <p className="text-white/25 text-sm mb-10">No long onboarding. No unnecessary delays.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact?type=custom-software"
              className="px-6 py-3 rounded-full bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/contact?type=technical-call"
              className="px-6 py-3 rounded-full border border-white/[0.12] text-white/70 text-sm font-medium hover:text-white hover:border-white/25 transition-colors"
            >
              Schedule a Technical Call
            </Link>
          </div>

          <p className="text-white/20 text-xs">24 hours is all it takes to get started.</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}
