"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
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
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const activeCategory = stackCategories.find((c) => c.id === activeStack)!;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveStack((prev) => {
        const idx = stackCategories.findIndex((c) => c.id === prev);
        return stackCategories[(idx + 1) % stackCategories.length].id;
      });
      setProgressKey((k) => k + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, resetKey]);

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
            Good Decisions Start<br />
            <span style={{ WebkitTextFillColor: "rgba(255,255,255,0.4)", backgroundImage: "none" }}>With Data You Can Trust.</span>
          </h2>
          <p className="text-white/45 mb-10">
            Let&apos;s map your data landscape and find the insights you&apos;re currently leaving on the table.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              href="/contact?type=data-analytics"
              className="px-7 py-3 rounded-full btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors"
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


