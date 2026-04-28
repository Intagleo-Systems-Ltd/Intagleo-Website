"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";
import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageBackground from "@/components/PageBackground";

const techCaps = [
  {
    highlight: "Clinical", rest: " Platform Engineering",
    urlSlug: "clinical-platform",
    tiles: [
      { name: "EHR/EMR Integration", desc: "Seamless data sync across systems", color: "blue" },
      { name: "Clinical Workflow Builder", desc: "Custom care pathway automation", color: "blue" },
      { name: "HL7 & FHIR Compliance", desc: "Standards-based interoperability", color: "purple" },
      { name: "Patient Portal", desc: "Engagement & self-service access", color: "purple" },
    ],
  },
  {
    highlight: "Telehealth", rest: " & Remote Care",
    urlSlug: "telehealth",
    tiles: [
      { name: "Video Consultation", desc: "HD video & low-latency streaming", color: "blue" },
      { name: "Async Messaging", desc: "Structured async care messages", color: "blue" },
      { name: "Remote Monitoring", desc: "Continuous vitals from devices", color: "purple" },
      { name: "Device Data Ingestion", desc: "IoMT & wearable data pipelines", color: "purple" },
    ],
  },
  {
    highlight: "Data", rest: " & Analytics",
    urlSlug: "analytics",
    tiles: [
      { name: "Population Health", desc: "Cohort & population insights", color: "blue" },
      { name: "Predictive Risk", desc: "ML-based risk stratification", color: "blue" },
      { name: "Outcome Tracking", desc: "Measurable care quality KPIs", color: "purple" },
      { name: "Regulatory Reporting", desc: "Automated HEDIS & CMS reports", color: "purple" },
    ],
  },
  {
    highlight: "Compliance", rest: " & Security",
    urlSlug: "compliance",
    tiles: [
      { name: "HIPAA Architecture", desc: "SOC 2-ready, HIPAA-native design", color: "blue" },
      { name: "Audit Trail Logging", desc: "Immutable access & change logs", color: "blue" },
      { name: "Access Control (RBAC)", desc: "Granular permission management", color: "purple" },
      { name: "Data Encryption", desc: "AES-256 at rest & in transit", color: "purple" },
    ],
  },
  {
    highlight: "Interoperability", rest: " & Integration",
    urlSlug: "interoperability",
    tiles: [
      { name: "Lab & Radiology Systems", desc: "Bidirectional lab result feeds", color: "blue" },
      { name: "Pharmacy Network APIs", desc: "Real-time formulary & Rx checks", color: "blue" },
      { name: "Insurance Eligibility", desc: "Automated benefit verification", color: "purple" },
      { name: "Health Info Exchange", desc: "HL7 v2, FHIR R4 data exchange", color: "purple" },
    ],
  },
  {
    highlight: "AI", rest: " & Clinical Decision Support",
    urlSlug: "clinical-ai",
    tiles: [
      { name: "Diagnostic Assistance", desc: "Differential diagnosis support", color: "blue" },
      { name: "Drug Interaction Alerts", desc: "Real-time contraindication checks", color: "blue" },
      { name: "NLP for Clinical Notes", desc: "Structured data from free text", color: "purple" },
      { name: "Triage Prioritisation", desc: "Risk-scored patient queuing", color: "purple" },
    ],
  },
];

/* ── Cap 0: Clinical Platform — status rows + animated bar chart ── */
function Preview0_Clinical() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 40); return () => clearTimeout(t); }, []);
  const rows = [
    { label: "Epic EHR", value: "Connected", stat: "99.9% uptime" },
    { label: "Cerner EMR", value: "Connected", stat: "98.2% uptime" },
    { label: "FHIR R4 Gateway", value: "Active", stat: "100% compliant" },
    { label: "Patient Portal", value: "Online", stat: "12,847 active" },
  ];
  const bars = [42,55,48,62,70,75,68,80,88,85,78,82,90,92,88,75,80,85,90,88,82,78,75,70];
  return (
    <div className="flex w-full overflow-hidden" style={{ height: "210px", background: "#0a0c14" }}>
      <div className="flex-1 flex flex-col gap-3 p-4 border-r border-white/[0.06] min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">System Status</span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            <span className="text-[9px] text-[#34d399] font-mono">All Operational</span>
          </div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between gap-2"
            style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateX(-6px)", transition: `opacity 0.35s ease ${i * 70}ms, transform 0.35s ease ${i * 70}ms` }}>
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] flex-shrink-0" />
              <span className="text-[11px] text-white/45 font-mono truncate">{r.label}</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[10.5px] text-[#34d399] font-mono">{r.value}</span>
              <span className="text-[10px] text-white/20 font-mono hidden sm:block">{r.stat}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[115px] flex flex-col gap-2 p-4 flex-shrink-0">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest leading-tight">Sync Volume · 24h</span>
        <div className="flex-1 flex items-end gap-px">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-[1px]"
              style={{ height: on ? `${h}%` : "0%", background: h > 75 ? "rgba(91,127,255,0.7)" : h > 50 ? "rgba(91,127,255,0.45)" : "rgba(91,127,255,0.25)", transition: `height 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 18}ms` }} />
          ))}
        </div>
        <div className="flex justify-between"><span className="text-[8px] text-white/15 font-mono">00:00</span><span className="text-[8px] text-white/15 font-mono">now</span></div>
      </div>
    </div>
  );
}

/* ── Cap 1: Telehealth — live video session grid ── */
function Preview1_Telehealth() {
  const [secs, setSecs] = useState([2831, 1203, 4729, 342]);
  useEffect(() => { const t = setInterval(() => setSecs(p => p.map(v => v + 1)), 1000); return () => clearInterval(t); }, []);
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const sessions = [
    { initials: "SJ", name: "Dr. Sarah J.", color: "#6366f1", qual: 3, live: true },
    { initials: "MP", name: "M. Patel", color: "#8b5cf6", qual: 3, live: true },
    { initials: "RK", name: "Dr. R. Khan", color: "#06b6d4", qual: 2, live: true },
    { initials: "AL", name: "A. Lawson", color: "#10b981", qual: 3, live: false },
  ];
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Active Sessions</span>
        <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /><span className="text-[9px] text-red-400 font-mono">847 live</span></div>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {sessions.map((s, i) => (
          <div key={i} className="rounded-lg border border-white/[0.07] bg-[#0f1220] p-2.5 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ background: `${s.color}22`, border: `1px solid ${s.color}44`, color: s.color }}>{s.initials}</div>
              <span className="text-[9.5px] text-white/45 font-mono truncate flex-1">{s.name}</span>
              <div className="flex items-end gap-[2px] flex-shrink-0">
                {[4, 7, 10].map((h, b) => <div key={b} className="w-[3px] rounded-full" style={{ height: `${h}px`, background: b < s.qual ? "#34d399" : "rgba(255,255,255,0.1)" }} />)}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full flex-shrink-0 animate-pulse" style={{ background: s.live ? "#ef4444" : "#f59e0b" }} />
              <span className="text-[9px] font-mono text-white/30">{fmt(secs[i])}</span>
              <span className="text-[8px] font-mono ml-auto" style={{ color: s.live ? "rgba(255,255,255,0.2)" : "rgba(245,158,11,0.6)" }}>{s.live ? "Live" : "Waiting"}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
        {["48ms avg latency", "2.4 Gbps throughput", "HD · 1080p avg"].map(t => <span key={t} className="text-[8.5px] text-white/20 font-mono">{t}</span>)}
      </div>
    </div>
  );
}

/* ── Cap 2: Data & Analytics — pipeline progress bars ── */
function Preview2_DataAnalytics() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 50); return () => clearTimeout(t); }, []);
  const pipelines = [
    { label: "EHR → Population Analytics", pct: 94, rate: "1.2M rows/min", color: "#6366f1" },
    { label: "Risk Model Training", pct: 71, rate: "Epoch 4 / 12", color: "#8b5cf6" },
    { label: "HEDIS Report Generation", pct: 100, rate: "Complete", color: "#34d399" },
    { label: "Outcome Dashboard Sync", pct: 88, rate: "482 KPIs live", color: "#06b6d4" },
  ];
  const metrics = [{ label: "Records Today", value: "4.2M" }, { label: "Active Models", value: "94" }, { label: "Query P50", value: "124ms" }];
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex flex-col p-4 gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Pipeline Status</span>
        <span className="text-[9px] text-[#34d399] font-mono">4 healthy · 0 failed</span>
      </div>
      <div className="flex flex-col gap-2.5 flex-1">
        {pipelines.map((p, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/40 font-mono">{p.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-white/20 font-mono">{p.rate}</span>
                <span className="text-[10px] font-mono font-semibold" style={{ color: p.color }}>{p.pct}%</span>
              </div>
            </div>
            <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: on ? `${p.pct}%` : "0%", background: p.color, transition: `width 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5 border-t border-white/[0.05] pt-2">
        {metrics.map((m, i) => <div key={i}><p className="text-[8px] text-white/20 font-mono">{m.label}</p><p className="text-[12px] text-white/55 font-mono font-semibold">{m.value}</p></div>)}
      </div>
    </div>
  );
}

/* ── Cap 3: Compliance — SVG ring gauges + event log ── */
function Preview3_Compliance() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  const r = 17; const circ = 2 * Math.PI * r;
  const scores = [
    { label: "HIPAA", pct: 100, color: "#34d399" },
    { label: "SOC 2 T2", pct: 98, color: "#6366f1" },
    { label: "ISO 27001", pct: 96, color: "#8b5cf6" },
    { label: "GDPR", pct: 94, color: "#06b6d4" },
  ];
  const events = [
    { time: "2m ago", text: "Audit log snapshot done" },
    { time: "14m ago", text: "Access review passed" },
    { time: "1h ago", text: "Vuln scan: 0 critical" },
  ];
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex overflow-hidden">
      <div className="flex-1 flex flex-col p-4 gap-3 min-w-0">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Compliance Scores</span>
        <div className="grid grid-cols-2 gap-2.5 flex-1">
          {scores.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg width="42" height="42" viewBox="0 0 42 42" className="flex-shrink-0">
                <circle cx="21" cy="21" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                <circle cx="21" cy="21" r={r} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={on ? circ * (1 - s.pct / 100) : circ}
                  transform="rotate(-90 21 21)"
                  style={{ transition: `stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms` }} />
                <text x="21" y="25" textAnchor="middle" fill={s.color} fontSize="9" fontFamily="monospace" fontWeight="600">{s.pct}%</text>
              </svg>
              <span className="text-[10px] text-white/35 font-mono leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[140px] flex flex-col gap-2 p-4 border-l border-white/[0.06] flex-shrink-0">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Recent Events</span>
        <div className="flex flex-col gap-2.5 flex-1">
          {events.map((e, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-[8px] text-white/15 font-mono">{e.time}</span>
              <div className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#34d399] flex-shrink-0 mt-1" />
                <span className="text-[9.5px] text-white/35 leading-snug">{e.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.05] pt-2">
          <span className="text-[8.5px] text-white/15 font-mono">Next audit in 12 days</span>
        </div>
      </div>
    </div>
  );
}

/* ── Cap 4: Interoperability — SVG network topology with animated flowing dashes ── */
function Preview4_Interop() {
  const hx = 118, hy = 102;
  const nodes = [
    { x: 118, y: 22, label: "Lab & Radiology", sub: "3,240/min", color: "#6366f1" },
    { x: 205, y: 75, label: "Pharmacy APIs", sub: "1,820/min", color: "#8b5cf6" },
    { x: 192, y: 162, label: "Insurance", sub: "482/hr", color: "#06b6d4" },
    { x: 30, y: 155, label: "HIE Network", sub: "892/min", color: "#10b981" },
    { x: 28, y: 58, label: "Lab Systems", sub: "641/min", color: "#f59e0b" },
  ];
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 235 205" preserveAspectRatio="xMidYMid meet">
        <defs>
          <style>{`@keyframes df{to{stroke-dashoffset:-20}}`}</style>
        </defs>
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={hx} y1={hy} x2={n.x} y2={n.y} stroke={n.color} strokeWidth="0.6" strokeOpacity="0.12" />
            <line x1={hx} y1={hy} x2={n.x} y2={n.y} stroke={n.color} strokeWidth="0.9" strokeOpacity="0.55"
              strokeDasharray="4 7"
              style={{ animation: `df ${1.3 + i * 0.22}s linear infinite`, animationDelay: `${i * 0.3}s` }} />
            <circle cx={n.x} cy={n.y} r="15" fill="#0d101a" stroke={n.color} strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx={n.x} cy={n.y} r="3.5" fill={n.color} fillOpacity="0.85" />
            <text x={n.x} y={n.y + 23} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="monospace">{n.label}</text>
            <text x={n.x} y={n.y + 30} textAnchor="middle" fill={n.color} fillOpacity="0.45" fontSize="5" fontFamily="monospace">{n.sub}</text>
          </g>
        ))}
        <circle cx={hx} cy={hy} r="21" fill="#111520" stroke="#5b7fff" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx={hx} cy={hy} r="8" fill="#5b7fff" fillOpacity="0.15" />
        <circle cx={hx} cy={hy} r="3.5" fill="#5b7fff" />
        <text x={hx} y={hy + 31} textAnchor="middle" fill="rgba(91,127,255,0.4)" fontSize="6" fontFamily="monospace">Platform Hub</text>
        <text x="6" y="198" fill="rgba(255,255,255,0.1)" fontSize="5.5" fontFamily="monospace">40 integrations · 0 degraded · 89ms avg response</text>
      </svg>
    </div>
  );
}

/* ── Cap 5: AI & CDS — inference confidence bars + rotating live alerts ── */
function Preview5_AI() {
  const [on, setOn] = useState(false);
  const [alertIdx, setAlertIdx] = useState(0);
  useEffect(() => { const t = setTimeout(() => setOn(true), 50); return () => clearTimeout(t); }, []);
  useEffect(() => { const t = setInterval(() => setAlertIdx(i => (i + 1) % 3), 3200); return () => clearInterval(t); }, []);
  const inferences = [
    { label: "Sepsis Risk", pct: 87, color: "#ef4444", level: "High" },
    { label: "Readmission Risk", pct: 62, color: "#f59e0b", level: "Medium" },
    { label: "Drug Interaction", pct: 94, color: "#ef4444", level: "Critical" },
    { label: "Triage Priority", pct: 78, color: "#6366f1", level: "High" },
  ];
  const alerts = [
    { time: "now", text: "Drug interaction: Warfarin + Aspirin · Pt #3812", sev: "#ef4444" },
    { time: "2m", text: "Sepsis early warning · Patient #4421 · ICU", sev: "#f59e0b" },
    { time: "5m", text: "Triage: 3 patients auto-escalated to Urgent", sev: "#6366f1" },
  ];
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex overflow-hidden">
      <div className="flex-1 flex flex-col p-4 gap-3 border-r border-white/[0.06] min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Model Inference</span>
          <span className="text-[9px] text-[#6366f1] font-mono">94.7% accuracy</span>
        </div>
        {inferences.map((inf, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/40 font-mono">{inf.label}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] px-1.5 py-0.5 rounded font-mono" style={{ background: `${inf.color}18`, color: inf.color }}>{inf.level}</span>
                <span className="text-[10px] font-mono font-semibold" style={{ color: inf.color }}>{inf.pct}%</span>
              </div>
            </div>
            <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: on ? `${inf.pct}%` : "0%", background: inf.color, opacity: 0.75, transition: `width 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[148px] flex flex-col p-4 gap-2.5 flex-shrink-0">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">CDS Alerts</span>
          <span className="text-[9px] text-white/20 font-mono">1,284 today</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {alerts.map((a, i) => (
            <div key={i} className="flex flex-col gap-0.5 transition-opacity duration-500"
              style={{ opacity: i === alertIdx ? 1 : i === (alertIdx + 1) % 3 ? 0.45 : 0.2 }}>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: a.sev }} />
                <span className="text-[8px] text-white/20 font-mono">{a.time} ago</span>
              </div>
              <span className="text-[9.5px] text-white/35 leading-snug">{a.text}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.05] pt-1.5">
          <span className="text-[8px] text-white/15 font-mono">12ms avg inference · 847 triggers/min</span>
        </div>
      </div>
    </div>
  );
}

function CapabilityPreview({ capIndex }: { capIndex: number }) {
  if (capIndex === 1) return <Preview1_Telehealth />;
  if (capIndex === 2) return <Preview2_DataAnalytics />;
  if (capIndex === 3) return <Preview3_Compliance />;
  if (capIndex === 4) return <Preview4_Interop />;
  if (capIndex === 5) return <Preview5_AI />;
  return <Preview0_Clinical />;
}

function CapabilityIcon({ idx, color }: { idx: number; color: string }) {
  const blue = "#5b7fff";
  const purple = "#a78bfa";
  const c = color === "blue" ? blue : purple;
  if (idx === 0) return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="3" width="13" height="9" rx="2" stroke={c} strokeWidth="1.4" />
      <path d="M5 7h5M7.5 5v4" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
  if (idx === 1) return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M2 4h11M2 8h7M2 12h5" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="10" r="2.5" stroke={c} strokeWidth="1.3" />
    </svg>
  );
  if (idx === 2) return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M7.5 1.5v3M7.5 10.5v3M1.5 7.5h3M10.5 7.5h3" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7.5" cy="7.5" r="3" stroke={c} strokeWidth="1.3" />
    </svg>
  );
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" />
      <rect x="8" y="2" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" />
      <rect x="2" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" />
      <rect x="8" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" />
    </svg>
  );
}

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
      <section className="relative min-h-[85vh] flex flex-col items-center pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hex-mesh-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-72" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
          <div className="absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.6), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, rgba(10,10,10,0.6), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold heading-gradient leading-[1.07] tracking-tight mb-5">
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
      </section>

      {/* TECH CAPABILITIES */}
      <section style={{ background: "#0a0a0a" }} className="section-padding py-24" id="capabilities">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-3">Core Capabilities</h2>
            <p className="text-white/40 text-base">Built across the modern healthcare technology stack</p>
          </div>
          <div className="grid lg:grid-cols-[248px_1fr] gap-4 items-start">
            {/* Left nav */}
            <div className="flex flex-col gap-0.5">
              {techCaps.map((cap, i) => (
                <button key={i} onClick={() => setActiveTab(i)} className={`text-left px-4 py-3.5 rounded-xl transition-all duration-150 border ${activeTab === i ? "bg-[#161b27] border-white/[0.14]" : "border-transparent hover:bg-white/[0.04]"} cursor-pointer`}>
                  <span className="font-semibold text-white text-sm">{cap.highlight}</span>
                  <span className={`text-sm transition-colors ${activeTab === i ? "text-white/55" : "text-white/35"}`}>{cap.rest}</span>
                </button>
              ))}
            </div>

            {/* Right card */}
            <div className="bg-[#111520] border border-white/[0.14] rounded-[18px] overflow-hidden">
              {/* Header strip */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-white/[0.08]">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5b7fff]">Capability Area</span>
                  <span className="text-[18px] font-bold text-white tracking-[-0.2px]">{techCaps[activeTab].highlight}{techCaps[activeTab].rest}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] rounded-full px-3 py-1.5 text-[12px] font-medium text-[#34d399] flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                  Active
                </div>
              </div>

              {/* Feature tiles */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08]">
                {techCaps[activeTab].tiles.map((tile, idx) => (
                  <div key={idx} className={`p-4 flex flex-col gap-2 transition-colors hover:bg-[#161b27] ${idx < techCaps[activeTab].tiles.length - 1 ? "border-r border-white/[0.08]" : ""}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tile.color === "blue" ? "bg-[rgba(91,127,255,0.15)]" : "bg-[rgba(167,139,250,0.12)]"}`}>
                      <CapabilityIcon idx={idx} color={tile.color} />
                    </div>
                    <p className="text-[12.5px] font-semibold text-[#c8cee0] leading-snug">{tile.name}</p>
                    <p className="text-[11px] text-white/35 leading-relaxed">{tile.desc}</p>
                  </div>
                ))}
              </div>

              {/* Browser-frame live preview */}
              <div className="p-5 bg-[#0d1018] relative">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(91,127,255,0.07) 0%, transparent 70%)" }} />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.14]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                  {/* Browser bar */}
                  <div className="bg-[#1a1e2e] border-b border-white/[0.08] px-3.5 py-2.5 flex items-center gap-2.5">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 bg-[#0f1220] border border-white/[0.08] rounded-md px-3 py-1 text-[11px] text-white/35 font-mono truncate">
                      app.intagleo.com / {techCaps[activeTab].urlSlug}
                    </div>
                  </div>
                  {/* Animated live dashboard */}
                  <CapabilityPreview key={activeTab} capIndex={activeTab} />
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 leading-tight">
              From fragmented clinical systems to connected care infrastructure
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We don&apos;t just integrate APIs. Every engagement starts with your patient journey
              and clinical workflow requirements.
            </p>
          </div>
          <ScrollTimeline steps={[
    { num: "01", title: "Clinical Audit", desc: "We map your existing systems, integration gaps, compliance posture, and data flows before any architecture decisions are made.", align: "left" },
    { num: "02", title: "Platform Architecture", desc: "We design for compliance and interoperability: HIPAA controls, FHIR-native data models, and HL7 integration patterns built in from day one.", align: "right" },
    { num: "03", title: "Build & Validate", desc: "We develop with security, accessibility, and clinical workflow accuracy as primary requirements - not afterthoughts.", align: "left" },
    { num: "04", title: "Deploy & Monitor", desc: "Staged rollout with clinical workflow validation, staff training support, and continuous monitoring of system performance and data integrity.", align: "right" },
  ]} />
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "480px", background: "#13141a" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-35" />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient leading-tight mb-5">
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
                        <Link href="/case-studies" className="px-7 py-3 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:text-white hover:border-white/45 transition-colors">See our Work</Link>

          </div>
          <p className="text-white/25 text-xs tracking-wide">Direct Engineer Access · Response within 1 business day</p>
        </div>
      </section>

      <Footer showCTA={false} />
    </div>
  );
}


