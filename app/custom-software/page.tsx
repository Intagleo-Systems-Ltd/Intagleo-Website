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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* hex-mesh background image */}
        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none"><source src="/footer_CTA.webm" type="video/webm" /><source src="/footer_CTA.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium customHeading leading-tight mb-5">
            Tell Us What You Want To Build.<br />
            <span className="text-white/50">We&apos;ll Take It From There.</span>
          </h2>
          {/* <p className="text-white/40 mb-3 max-w-lg mx-auto">
            Whether you&apos;re scaling for the next 10 million users, modernizing a legacy core, or
            solving the bottleneck that&apos;s slowing your roadmap, we&apos;ve helped teams navigate these transitions before.
          </p> */}
          <p className="text-white/25 text-sm mb-10">No long onboarding. No unnecessary delays.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact?type=custom-software"
              className="px-6 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
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
