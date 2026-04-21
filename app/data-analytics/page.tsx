"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import Link from "next/link";

/* ── Service cards ──────────────────────────────────────────────────────── */
const serviceCards = [
  {
    title: "Data Engineering & Pipelines",
    items: ["Custom ETL/ELT architecture", "Automated data ingestion", "API & third-party integrations"],
  },
  {
    title: "Data Warehouses & Lakehouses",
    items: ["Snowflake, BigQuery, Redshift", "Scalable storage design", "Version-controlled data modelling"],
  },
  {
    title: "Business Intelligence & Reporting",
    items: ["Interactive custom Tableau boards", "Key Performance Indicator logics", "Automation-ready architecture"],
  },
  {
    title: "Advanced Analytics & ML",
    items: ["Predictive modelling frameworks", "Customer 360 & LTV analysis", "MLOps integration"],
  },
  {
    title: "Data Governance & Compliance",
    items: ["GDPR/CCPA security frameworks", "Version-controlled data modelling", "Master Data Management (MDM)"],
  },
  {
    title: "Analytics Engineering",
    items: ["SQL transformation layers (dbt)", "Semantic layer design", "Data quality testing & monitoring"],
  },
];

/* ── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We map your current data ecosystem, identifying bottlenecks, security risks, and orphaned datasets.",
    align: "left",
  },
  {
    num: "02",
    title: "Model",
    desc: "Our engineers design a schema that reflects your business logic, not just your database structure.",
    align: "right",
  },
  {
    num: "03",
    title: "Build",
    desc: "We deploy production-grade pipelines and warehouses using best-in-class orchestration tools.",
    align: "left",
  },
  {
    num: "04",
    title: "Enable",
    desc: "We hand over clean dashboards and documentation, training your team to self-serve insights.",
    align: "right",
  },
];

/* ── Modern Data Stack , tab icons (use currentColor so active state drives color) ── */
const TAB_ICONS = {
  /* Database / cylinders , Data Warehouses */
  warehouses: (
    <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
      <ellipse cx="11" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 5.5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 10.5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  /* Flow arrows , Pipeline */
  pipeline: (
    <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
      <path d="M3 7h10a4 4 0 010 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 7l3-3M3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17" cy="11" r="2" fill="currentColor"/>
    </svg>
  ),
  /* Bar chart , BI & Reporting */
  bi: (
    <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
      <rect x="3" y="12" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="7"  width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="15" y="3" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  /* Atom / AI , ML & AI */
  ml: (
    <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
      <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 11 11)"/>
      <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 11 11)"/>
      <circle cx="11" cy="11" r="1.8" fill="currentColor"/>
    </svg>
  ),
  /* Lightning , Real-time */
  realtime: (
    <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
      <path d="M13 2L5 13h7l-2 7 9-11h-7l2-7z" fill="currentColor" strokeLinejoin="round"/>
    </svg>
  ),
};

/* Inline brand icons , rendered as React nodes inside the card */
const toolIcon = {
  /* Snowflake , cyan snowflake SVG */
  Snowflake: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2v20M12 2l-3 3m3-3l3 3M12 22l-3-3m3 3l3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3m3 3l-3 3M5.6 5.6l12.8 12.8M5.6 5.6l4 1-1-4M18.4 18.4l-4-1 1 4M18.4 5.6L5.6 18.4M18.4 5.6l-1 4 4-1M5.6 18.4l1-4-4 1" stroke="#29B5E8" strokeWidth="1.5" strokeLinecap="round"/></svg>,

  /* BigQuery , multi-bar chart in Google blue */
  BigQuery: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="3" y="12" width="3.5" height="9" rx="1" fill="#4285F4"/><rect x="8" y="8"  width="3.5" height="13" rx="1" fill="#34A853"/><rect x="13" y="4"  width="3.5" height="17" rx="1" fill="#FBBC04"/><circle cx="19.5" cy="17" r="2.5" stroke="#EA4335" strokeWidth="1.5" fill="none"/><path d="M21.2 18.7l2 2" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/></svg>,

  /* Redshift , AWS Redshift diamond */
  Redshift: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2L22 8.5v7L12 22 2 15.5v-7L12 2z" fill="none" stroke="#8C4FFF" strokeWidth="1.5"/><path d="M12 6l6 3.5v5L12 18l-6-3.5v-5L12 6z" fill="#8C4FFF" fillOpacity="0.3"/><circle cx="12" cy="12" r="2" fill="#8C4FFF"/></svg>,

  /* dbt , dbt orange wordmark style */
  dbt: <span style={{ color: "#FF694B", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.5px" }}>dbt</span>,

  /* Airflow , Apache Airflow propeller / A */
  Airflow: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="#017CEE" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="#017CEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="1.5" fill="#017CEE"/></svg>,

  /* Kafka , Apache Kafka K nodes */
  Kafka: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="2.5" fill="#231F20" stroke="#fff" strokeWidth="1"/><circle cx="12" cy="4"  r="2" stroke="#fff" strokeWidth="1" fill="none"/><circle cx="12" cy="20" r="2" stroke="#fff" strokeWidth="1" fill="none"/><circle cx="4"  cy="8"  r="2" stroke="#fff" strokeWidth="1" fill="none"/><circle cx="20" cy="8"  r="2" stroke="#fff" strokeWidth="1" fill="none"/><line x1="12" y1="6"  x2="12" y2="9.5"  stroke="#fff" strokeWidth="1"/><line x1="12" y1="14.5" x2="12" y2="18" stroke="#fff" strokeWidth="1"/><line x1="6" y1="8.8" x2="9.8" y2="11"  stroke="#fff" strokeWidth="1"/><line x1="17.8" y1="8.8" x2="14" y2="11" stroke="#fff" strokeWidth="1"/></svg>,

  /* Spark , lightning bolt */
  Spark: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M13 2L4 14h7l-1 8 9-12h-7l2-8z" fill="#E25A1C" stroke="#E25A1C" strokeWidth="0.5" strokeLinejoin="round"/></svg>,

  /* Fivetran , F wordmark */
  Fivetran: <span style={{ color: "#0073FF", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.5px" }}>5tran</span>,

  /* Tableau , T bar chart */
  Tableau: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="10.5" y="2" width="3" height="20" rx="1.5" fill="#E97627"/><rect x="2" y="10.5" width="20" height="3" rx="1.5" fill="#4E79A7"/><rect x="6" y="6"  width="2" height="12" rx="1" fill="#E97627" fillOpacity="0.5"/><rect x="16" y="6" width="2" height="12" rx="1" fill="#4E79A7" fillOpacity="0.5"/></svg>,

  /* Power BI , yellow P */
  PowerBI: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="3"  y="14" width="4" height="7" rx="1" fill="#F2C811"/><rect x="9"  y="9"  width="4" height="12" rx="1" fill="#F2C811" fillOpacity="0.7"/><rect x="15" y="5"  width="4" height="16" rx="1" fill="#F2C811" fillOpacity="0.4"/></svg>,

  /* Looker , eye / lens shape */
  Looker: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="8" stroke="#4285F4" strokeWidth="1.5"/><circle cx="12" cy="12" r="3.5" fill="#4285F4"/><circle cx="13.5" cy="10.5" r="1" fill="white"/></svg>,

  /* Metabase , M */
  Metabase: <span style={{ color: "#509EE3", fontWeight: 800, fontSize: "14px" }}>M</span>,

  /* Python , snake / P */
  Python: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 12 2 14c0 2.5 1.5 4 4 4h1v-2.5C7 13 9 12 12 12s5 1 5 3.5V18h1c2.5 0 4-1.5 4-4 0-2-1-4-3-4h-7V9h6V7c0-3-2-5-6-5zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/><path d="M12 22c4 0 6-2 6-5v-2h-6v-1h7c2 0 3-2 3-4 0-2.5-1.5-4-4-4h-1v2.5C17 11 15 12 12 12s-5-1-5-3.5V6h-1C3.5 6 2 7.5 2 10c0 2 1 4 3 4h7v1H6v2c0 3 2 5 6 5zm1.5-2.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/></svg>,

  /* PyTorch , flame */
  PyTorch: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2C9 6 7 8 7 12a5 5 0 0010 0c0-1.5-.5-2.8-1.3-4C14.5 10 13 11 13 12.5a1.5 1.5 0 01-3 0C10 9.5 11 7 12 2z" fill="#EE4C2C"/><circle cx="15.5" cy="8.5" r="1" fill="#EE4C2C"/></svg>,

  /* MLflow , ML text */
  MLflow: <span style={{ color: "#0194E2", fontWeight: 800, fontSize: "11px", letterSpacing: "-0.5px" }}>ML<br/>flow</span>,

  /* SageMaker , AWS sage */
  SageMaker: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#01A88D" strokeWidth="1.5" fill="none"/><path d="M12 8l4 2.5v5L12 18l-4-2.5v-5L12 8z" fill="#01A88D" fillOpacity="0.3"/></svg>,

  /* Flink , F */
  Flink: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M6 4h10M6 4v16M6 12h8" stroke="#E6526F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,

  /* Kinesis , AWS stream lines */
  Kinesis: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M3 8h5l2-4 2 8 2-5 2 3h5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 16h5l2-4 2 8 2-5 2 3h5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>,

  /* Confluent , C stream */
  Confluent: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M20 6c-2-2.5-5-4-8-4a10 10 0 000 20c3 0 6-1.5 8-4" stroke="#0778DE" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 10c-1-.8-2-1-3-1a4 4 0 000 8c1 0 2-.2 3-1" stroke="#0778DE" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

const stackCategories: { id: string; label: string; tabIcon: React.ReactNode; center: string; tools: { name: string; icon: React.ReactNode; pos: string }[] }[] = [
  {
    id: "warehouses",
    label: "Data Warehouses",
    tabIcon: TAB_ICONS.warehouses,
    center: "Data Warehouses",
    tools: [
      { name: "Snowflake", icon: toolIcon.Snowflake, pos: "top"    },
      { name: "BigQuery",  icon: toolIcon.BigQuery,  pos: "left"   },
      { name: "Redshift",  icon: toolIcon.Redshift,  pos: "right"  },
      { name: "dbt",       icon: toolIcon.dbt,       pos: "bottom" },
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline",
    tabIcon: TAB_ICONS.pipeline,
    center: "Pipeline",
    tools: [
      { name: "Airflow",  icon: toolIcon.Airflow,  pos: "top"    },
      { name: "Kafka",    icon: toolIcon.Kafka,    pos: "left"   },
      { name: "Spark",    icon: toolIcon.Spark,    pos: "right"  },
      { name: "Fivetran", icon: toolIcon.Fivetran, pos: "bottom" },
    ],
  },
  {
    id: "bi",
    label: "BI & Reporting",
    tabIcon: TAB_ICONS.bi,
    center: "BI & Reporting",
    tools: [
      { name: "Tableau",  icon: toolIcon.Tableau,  pos: "top"    },
      { name: "Power BI", icon: toolIcon.PowerBI,  pos: "left"   },
      { name: "Looker",   icon: toolIcon.Looker,   pos: "right"  },
      { name: "Metabase", icon: toolIcon.Metabase, pos: "bottom" },
    ],
  },
  {
    id: "ml",
    label: "ML & AI",
    tabIcon: TAB_ICONS.ml,
    center: "ML & AI",
    tools: [
      { name: "Python",     icon: toolIcon.Python,     pos: "top"    },
      { name: "PyTorch",    icon: toolIcon.PyTorch,    pos: "left"   },
      { name: "MLflow",     icon: toolIcon.MLflow,     pos: "right"  },
      { name: "SageMaker",  icon: toolIcon.SageMaker,  pos: "bottom" },
    ],
  },
  {
    id: "realtime",
    label: "Real-time",
    tabIcon: TAB_ICONS.realtime,
    center: "Real-time",
    tools: [
      { name: "Kafka",     icon: toolIcon.Kafka,     pos: "top"    },
      { name: "Flink",     icon: toolIcon.Flink,     pos: "left"   },
      { name: "Kinesis",   icon: toolIcon.Kinesis,   pos: "right"  },
      { name: "Confluent", icon: toolIcon.Confluent, pos: "bottom" },
    ],
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function DataAnalyticsPage() {
  const [activeStack, setActiveStack] = useState("warehouses");
  const activeCategory = stackCategories.find((c) => c.id === activeStack)!;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex flex-col items-center pt-32 pb-0 px-6 text-center overflow-hidden">

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
            style={{ background: "linear-gradient(to bottom, #07080f 0%, transparent 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: "linear-gradient(to top, #07080f 0%, transparent 100%)" }}
          />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(7,8,15,0.6), transparent)" }} />
        </div>

        {/* Headline + CTAs */}
        <div className="relative z-10 max-w-3xl mx-auto pb-12">
          <p className="text-xs text-white/35 uppercase tracking-widest mb-5">Data & Analytics</p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.07] tracking-tight mb-5">
            Your data exists.<br />
            <span className="text-white/35">The insight doesn&apos;t. Yet.</span>
          </h1>

          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-9">
            We help businesses turn scattered data into reliable infrastructure,
            clear reporting, and decisions that don&apos;t rely on gut feel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/contact?type=data-analytics"
              className="px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Audit My Data
            </Link>
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-full border border-white/[0.14] text-white/65 text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
            >
              See how we work
            </Link>
          </div>

          {/* Client logos */}
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/30 text-sm">Trusted by teams that can&apos;t afford to slow down.</p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { name: "IBM",         src: "/logos/ibm.png",         invert: true  },
                { name: "Samsung",     src: "/logos/samsung.png",     invert: true  },
                { name: "Red Bull",    src: "/logos/red-bull.png",    invert: true  },
                { name: "KIA",         src: "/logos/kia.png",         invert: true  },
                { name: "Emaar",       src: "/logos/emaar.png",       invert: false },
                { name: "Alpha Tauri", src: "/logos/alpha-tauri.png", invert: true  },
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
                  style={{
                    filter: logo.invert ? "brightness(0) invert(1)" : "none",
                    maxWidth: "110px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hanging card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-0">
          <div className="rounded-t-2xl bg-[#0e0f18] border border-white/[0.07] border-b-0 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.1fr]">

              {/* Left , image collage */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-4 bg-[#0b0c15]">
                <div className="relative col-span-1 row-span-2 rounded-xl overflow-hidden" style={{ minHeight: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/data1.png" alt="Data visualisation" className="w-full h-full object-cover" style={{ filter: "grayscale(100%)" }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(10,10,20,0.45) 0%, rgba(232,52,28,0.08) 100%)" }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/data2.png" alt="Analytics dashboard" className="w-full h-full object-cover" style={{ filter: "grayscale(100%)" }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(10,10,20,0.45) 0%, rgba(232,52,28,0.08) 100%)" }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/data3.png" alt="Data infrastructure" className="w-full h-full object-cover" style={{ filter: "grayscale(100%)" }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(10,10,20,0.45) 0%, rgba(232,52,28,0.08) 100%)" }} />
                </div>
              </div>

              {/* Right , text */}
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Most businesses are drowning in data.<br />
                  <span className="text-white/40">And starving for answers.</span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  You have databases, spreadsheets, CRMs, ad platforms, and finance tools ,
                  all generating data. None of it talks to each other, and none of it tells
                  you what to do next. We build the infrastructure and clarity layer that
                  turns noise into signal so your team moves faster.
                </p>
                <Link
                  href="/contact?type=data-analytics"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
                >
                  Talk to a Data Engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* MODERN DATA STACK                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">

          {/* Gradient title */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-[42px] font-semibold tracking-tight"
              style={{
                backgroundImage: "linear-gradient(172deg, rgb(230,242,255) 46%, rgb(175,175,175) 69%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modern Data Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-5 items-stretch">

            {/* Left , tabs */}
            <div className="flex flex-col gap-[10px]">
              {stackCategories.map((cat) => {
                const isActive = activeStack === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveStack(cat.id)}
                    className="relative flex items-center gap-4 p-[5.5px] rounded-[22px] text-left transition-all duration-200 overflow-hidden"
                  >
                    {/* Background */}
                    <div
                      className="absolute inset-0 rounded-[22px] transition-all duration-200"
                      style={{
                        background: isActive ? "#3a3f4a" : "rgba(37,41,50,0.4)",
                      }}
                    />
                    {/* Icon box */}
                    <div
                      className="relative z-10 flex-shrink-0 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center"
                      style={{
                        background: isActive ? "#20232f" : "#323645",
                        color: isActive ? "#e8341c" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {cat.tabIcon}
                    </div>
                    {/* Label */}
                    <span
                      className="relative z-10 text-[15px] font-medium text-white whitespace-nowrap"
                      style={{ opacity: isActive ? 1 : 0.55 }}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right , diagram */}
            <div className="relative" style={{ minHeight: "380px" }}>
              {/* Outer glass panel */}
              <div
                className="absolute inset-0 rounded-[32px] backdrop-blur-[3px]"
                style={{ backgroundImage: "linear-gradient(136deg, rgba(16,21,36,0.63) 40%, rgba(51,52,61,0.63) 78%)" }}
              />
              {/* Inner glass panel */}
              <div
                className="absolute inset-[16px] rounded-[24px] backdrop-blur-[3px]"
                style={{ backgroundImage: "linear-gradient(137deg, rgba(16,21,36,0.63) 40%, rgba(51,52,61,0.63) 78%)" }}
              />

              {/* Diagram canvas */}
              <div className="relative w-full h-full" style={{ minHeight: "380px" }}>

                {/* SVG arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="ah" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                    <marker id="ah2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                      <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                  </defs>
                  {/* top → center */}
                  <line x1="300" y1="95"  x2="300" y2="158" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#ah)"/>
                  {/* center → bottom */}
                  <line x1="300" y1="222" x2="300" y2="285" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#ah)"/>
                  {/* left → center */}
                  <line x1="132" y1="190" x2="222" y2="190" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#ah)"/>
                  {/* center → right */}
                  <line x1="378" y1="190" x2="468" y2="190" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#ah)"/>
                </svg>

                {/* Tool icon cards */}
                {activeCategory.tools.map((tool) => {
                  const posStyle: React.CSSProperties =
                    tool.pos === "top"    ? { top: "8%",   left: "50%", transform: "translate(-50%, 0)"   } :
                    tool.pos === "bottom" ? { bottom: "8%",left: "50%", transform: "translate(-50%, 0)"   } :
                    tool.pos === "left"   ? { left: "5%",  top: "50%",  transform: "translate(0, -50%)"   } :
                                           { right: "5%",  top: "50%",  transform: "translate(0, -50%)"   };
                  return (
                    <div key={tool.name} className="absolute z-10 flex flex-col items-center gap-1.5" style={posStyle}>
                      <div
                        className="w-[50px] h-[47px] rounded-[11px] flex items-center justify-center backdrop-blur-[2px]"
                        style={{
                          backgroundImage: "linear-gradient(121deg, rgb(51,52,61) 41%, rgb(6,4,9) 110%)",
                          border: "0.6px solid rgba(255,255,255,0.11)",
                          boxShadow: "0px 0.6px 8.5px 0px rgba(255,255,255,0.10)",
                        }}
                      >
                        <div className="flex items-center justify-center w-6 h-6">{tool.icon}</div>
                      </div>
                      <span className="text-white/40 text-[11px]">{tool.name}</span>
                    </div>
                  );
                })}

                {/* Center node */}
                <div
                  className="absolute z-10 flex items-center justify-center rounded-[24px]"
                  style={{
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "160px", height: "72px",
                    background: "#2b303c",
                  }}
                >
                  <span className="text-[#eeeff3] text-[15px] font-medium text-center leading-snug px-3">
                    {activeCategory.center}
                  </span>
                </div>

              </div>
            </div>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              <span className="text-[#e8341c]">Do you know</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              where your data-link is broken?
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Broken dashboards are just a symptom. We find the root cause in your pipelines before it hits the bottom line.
            </p>
            <Link
              href="/contact?type=data-analytics"
              className="w-fit px-6 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Request a free data audit
            </Link>
          </div>

          {/* Right , particle visual */}
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/staffaug1.gif"
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
      <section className="relative section-padding py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              From fragmented sources to a single source of truth.
            </h2>
            <p className="text-white/40">
              Our four-step architectural approach to data maturity.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
            <div className="space-y-20">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative flex items-start gap-8 ${step.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${step.align === "right" ? "text-left" : "text-right"}`}>
                    <span className="text-7xl font-bold leading-none text-[#e8341c]">
                      {step.num}
                    </span>
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
      {/* WHAT WE BUILD                                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative section-padding py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(20,30,80,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Data infrastructure built and run for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 group"
                style={{ minHeight: "220px" }}
              >
                {/* Wave texture background */}
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wave-bg.png"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #13141f 0%, #0d0e18 60%, #0a0b14 100%)", opacity: 0.85 }} />
                </div>

                <h3 className="relative z-10 text-white font-semibold text-base leading-snug">
                  {card.title}
                </h3>

                <ul className="relative z-10 space-y-2 mt-8">
                  {card.items.map((item) => (
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
                title: "Data audit & strategy",
                desc: "A 4-week deep dive into your infrastructure to build a roadmap for the next 12 months.",
              },
              {
                badge: "Project-based / Delivery",
                title: "Foundation build",
                desc: "Full-cycle implementation of your data warehouse, pipelines, and primary reporting layer.",
              },
              {
                badge: "Retainer / Embedded",
                title: "Ongoing data team",
                desc: "Embedded analytics engineers to scale your capabilities and manage your data platform 24/7.",
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/2c1752e2-a261-4eea-92a4-1384f1435faa"
                    alt=""
                    className="absolute w-full object-cover pointer-events-none"
                    style={{ top: "-30%", opacity: 0.6 }}
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
      {/* STATS                                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-[auto] md:grid-rows-[1fr_1fr] gap-3">

            {/* LEFT , 3× (row span 2) */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">10x</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Faster Query Speed</p>
              </div>
            </div>

            {/* MIDDLE TOP , 80% */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">99.8%</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Uptime on Pipelines</p>
              </div>
            </div>

            {/* RIGHT , 14 days (row span 2) */}
            <div
              className="md:row-span-2 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-10 min-h-[200px] md:min-h-0"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(56px,6vw,96px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">50+</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Data Traps Fixed</p>
              </div>
            </div>

            {/* MIDDLE BOTTOM , 99.9% */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center items-center p-8 min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #1c1d24 0%, #13141a 100%)" }}
            >
              <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 16v8M16 20h8' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
              <div className="relative z-10 text-center">
                <p className="text-[clamp(48px,5vw,80px)] font-semibold leading-none tracking-[-2px] text-[#e6f2ff]">3 Weeks</p>
                <p className="mt-3 text-[clamp(13px,1.2vw,18px)] text-white/50">Avg Data Result</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CASE STUDIES                                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CaseStudiesSection pageSlug="data-analytics" />
      <InsightsSection pageSlug="data-analytics" />



      {/* FINAL CTA                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer_CTA.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"
        />
        <div className="absolute inset-0 bg-[#06080f]/65 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Good Decisions Start With<br />
            Data You Can <span className="text-white/40">Trust.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s map your data landscape and find the insights you&apos;re currently leaving on the table.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=data-analytics"
              className="px-7 py-3 rounded-full bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/contact?type=data-analytics"
              className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors"
            >
              Request a free data audit
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
