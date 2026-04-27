"use client";

import { useState, useEffect } from "react";

/* ── Public Types ──────────────────────────────────────────────────────────── */
export interface CapTile { name: string; desc: string; color: "blue" | "purple" }

export type StatusBarsPreview = {
  type: "status-bars";
  statusLabel: string;
  rows: { label: string; value: string; stat: string }[];
  chartLabel: string;
  bars: number[];
};
export type SessionGridPreview = {
  type: "session-grid";
  liveLabel: string;
  sessions: { initials: string; name: string; color: string; qual: number; live: boolean; secs: number }[];
  footerStats: string[];
};
export type PipelinePreview = {
  type: "pipeline";
  headline: string;
  pipelines: { label: string; pct: number; rate: string; color: string }[];
  metrics: { label: string; value: string }[];
};
export type RingGaugesPreview = {
  type: "ring-gauges";
  scores: { label: string; pct: number; color: string }[];
  events: { time: string; text: string }[];
  footer: string;
};
export type NetworkPreview = {
  type: "network";
  centerLabel: string;
  nodes: { x: number; y: number; label: string; sub: string; color: string }[];
  footer: string;
};
export type InferencePreview = {
  type: "inference";
  accuracyLabel: string;
  inferences: { label: string; pct: number; color: string; level: string }[];
  alertsLabel: string;
  alerts: { time: string; text: string; sev: string }[];
  footer: string;
};
export type PreviewConfig = StatusBarsPreview | SessionGridPreview | PipelinePreview | RingGaugesPreview | NetworkPreview | InferencePreview;

export interface CapItem {
  highlight: string;
  rest: string;
  urlSlug: string;
  tiles: CapTile[];
  preview: PreviewConfig;
}

/* ── Preview: Status Rows + Bar Chart ─────────────────────────────────────── */
function StatusBarsView({ statusLabel, rows, chartLabel, bars }: StatusBarsPreview) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 40); return () => clearTimeout(t); }, []);
  return (
    <div className="flex w-full overflow-hidden" style={{ height: "210px", background: "#0a0c14" }}>
      <div className="flex-1 flex flex-col gap-3 p-4 border-r border-white/[0.06] min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">System Status</span>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            <span className="text-[9px] text-[#34d399] font-mono">{statusLabel}</span>
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
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest leading-tight">{chartLabel}</span>
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

/* ── Preview: Live Session Grid ───────────────────────────────────────────── */
function SessionGridView({ liveLabel, sessions, footerStats }: SessionGridPreview) {
  const [secs, setSecs] = useState(sessions.map(s => s.secs));
  useEffect(() => { const t = setInterval(() => setSecs(p => p.map(v => v + 1)), 1000); return () => clearInterval(t); }, []);
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Live Activity</span>
        <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /><span className="text-[9px] text-red-400 font-mono">{liveLabel}</span></div>
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
              <span className="text-[8px] font-mono ml-auto" style={{ color: s.live ? "rgba(255,255,255,0.2)" : "rgba(245,158,11,0.6)" }}>{s.live ? "Live" : "Active"}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
        {footerStats.map(t => <span key={t} className="text-[8.5px] text-white/20 font-mono">{t}</span>)}
      </div>
    </div>
  );
}

/* ── Preview: Pipeline Progress Bars ─────────────────────────────────────── */
function PipelineView({ headline, pipelines, metrics }: PipelinePreview) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 50); return () => clearTimeout(t); }, []);
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex flex-col p-4 gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Pipeline Status</span>
        <span className="text-[9px] text-[#34d399] font-mono">{headline}</span>
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

/* ── Preview: SVG Ring Gauges + Event Log ────────────────────────────────── */
function RingGaugesView({ scores, events, footer }: RingGaugesPreview) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  const r = 17; const circ = 2 * Math.PI * r;
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex overflow-hidden">
      <div className="flex-1 flex flex-col p-4 gap-3 min-w-0">
        <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Scores</span>
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
        <div className="border-t border-white/[0.05] pt-1.5">
          <span className="text-[8.5px] text-white/15 font-mono">{footer}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Preview: SVG Network Topology ──────────────────────────────────────── */
function NetworkView({ centerLabel, nodes, footer }: NetworkPreview) {
  const hx = 118, hy = 102;
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 235 205" preserveAspectRatio="xMidYMid meet">
        <defs><style>{`@keyframes df{to{stroke-dashoffset:-20}}`}</style></defs>
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={hx} y1={hy} x2={n.x} y2={n.y} stroke={n.color} strokeWidth="0.6" strokeOpacity="0.12" />
            <line x1={hx} y1={hy} x2={n.x} y2={n.y} stroke={n.color} strokeWidth="0.9" strokeOpacity="0.55"
              strokeDasharray="4 7" style={{ animation: `df ${1.3 + i * 0.22}s linear infinite`, animationDelay: `${i * 0.3}s` }} />
            <circle cx={n.x} cy={n.y} r="15" fill="#0d101a" stroke={n.color} strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx={n.x} cy={n.y} r="3.5" fill={n.color} fillOpacity="0.85" />
            <text x={n.x} y={n.y + 23} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="monospace">{n.label}</text>
            <text x={n.x} y={n.y + 30} textAnchor="middle" fill={n.color} fillOpacity="0.45" fontSize="5" fontFamily="monospace">{n.sub}</text>
          </g>
        ))}
        <circle cx={hx} cy={hy} r="21" fill="#111520" stroke="#5b7fff" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx={hx} cy={hy} r="8" fill="#5b7fff" fillOpacity="0.15" />
        <circle cx={hx} cy={hy} r="3.5" fill="#5b7fff" />
        <text x={hx} y={hy + 31} textAnchor="middle" fill="rgba(91,127,255,0.4)" fontSize="6" fontFamily="monospace">{centerLabel}</text>
        <text x="6" y="198" fill="rgba(255,255,255,0.1)" fontSize="5.5" fontFamily="monospace">{footer}</text>
      </svg>
    </div>
  );
}

/* ── Preview: Inference Confidence Bars + Rotating Alerts ────────────────── */
function InferenceView({ accuracyLabel, inferences, alertsLabel, alerts, footer }: InferencePreview) {
  const [on, setOn] = useState(false);
  const [alertIdx, setAlertIdx] = useState(0);
  useEffect(() => { const t = setTimeout(() => setOn(true), 50); return () => clearTimeout(t); }, []);
  useEffect(() => { const t = setInterval(() => setAlertIdx(i => (i + 1) % alerts.length), 3200); return () => clearInterval(t); }, [alerts.length]);
  return (
    <div style={{ height: "210px", background: "#0a0c14" }} className="flex overflow-hidden">
      <div className="flex-1 flex flex-col p-4 gap-3 border-r border-white/[0.06] min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Model Output</span>
          <span className="text-[9px] text-[#6366f1] font-mono">{accuracyLabel}</span>
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
          <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest">Signals</span>
          <span className="text-[9px] text-white/20 font-mono">{alertsLabel}</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {alerts.map((a, i) => (
            <div key={i} className="flex flex-col gap-0.5 transition-opacity duration-500"
              style={{ opacity: i === alertIdx ? 1 : i === (alertIdx + 1) % alerts.length ? 0.45 : 0.2 }}>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: a.sev }} />
                <span className="text-[8px] text-white/20 font-mono">{a.time}</span>
              </div>
              <span className="text-[9.5px] text-white/35 leading-snug">{a.text}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.05] pt-1.5">
          <span className="text-[8px] text-white/15 font-mono">{footer}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Preview Dispatcher ──────────────────────────────────────────────────── */
function PreviewRenderer({ config }: { config: PreviewConfig }) {
  switch (config.type) {
    case "status-bars":  return <StatusBarsView  {...config} />;
    case "session-grid": return <SessionGridView {...config} />;
    case "pipeline":     return <PipelineView    {...config} />;
    case "ring-gauges":  return <RingGaugesView  {...config} />;
    case "network":      return <NetworkView     {...config} />;
    case "inference":    return <InferenceView   {...config} />;
  }
}

/* ── Capability Tile Icon ────────────────────────────────────────────────── */
function CapabilityIcon({ idx, color }: { idx: number; color: string }) {
  const c = color === "blue" ? "#5b7fff" : "#a78bfa";
  if (idx === 0) return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="3" width="13" height="9" rx="2" stroke={c} strokeWidth="1.4" /><path d="M5 7h5M7.5 5v4" stroke={c} strokeWidth="1.4" strokeLinecap="round" /></svg>;
  if (idx === 1) return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 4h11M2 8h7M2 12h5" stroke={c} strokeWidth="1.4" strokeLinecap="round" /><circle cx="12" cy="10" r="2.5" stroke={c} strokeWidth="1.3" /></svg>;
  if (idx === 2) return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 1.5v3M7.5 10.5v3M1.5 7.5h3M10.5 7.5h3" stroke={c} strokeWidth="1.4" strokeLinecap="round" /><circle cx="7.5" cy="7.5" r="3" stroke={c} strokeWidth="1.3" /></svg>;
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="2" y="2" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" /><rect x="8" y="2" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" /><rect x="2" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" /><rect x="8" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.3" /></svg>;
}

/* ── Main Component ──────────────────────────────────────────────────────── */
interface Props {
  caps: CapItem[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function CapabilityCardSection({ caps, sectionTitle = "Core Capabilities", sectionSubtitle }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    if (userPaused) return;
    const t = setInterval(() => setActiveTab(prev => (prev + 1) % caps.length), 3500);
    return () => clearInterval(t);
  }, [userPaused, caps.length]);

  const handleSelect = (i: number) => { setActiveTab(i); setUserPaused(true); };

  return (
    <section className="section-padding py-24" id="capabilities">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{sectionTitle}</h2>
          {sectionSubtitle && <p className="text-white/40 text-base">{sectionSubtitle}</p>}
        </div>
        <div className="grid lg:grid-cols-[248px_1fr] gap-4 items-center">
          {/* Left nav */}
          <div className="flex flex-col gap-0.5">
            {caps.map((cap, i) => (
              <button key={i} onClick={() => handleSelect(i)}
                className={`text-left px-4 py-3.5 rounded-xl transition-all duration-150 border cursor-pointer ${activeTab === i ? "bg-[#161b27] border-white/[0.14]" : "border-transparent hover:bg-white/[0.04]"}`}>
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
                <span className="text-[18px] font-bold text-white tracking-[-0.2px]">{caps[activeTab].highlight}{caps[activeTab].rest}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] rounded-full px-3 py-1.5 text-[12px] font-medium text-[#34d399] flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                Active
              </div>
            </div>
            {/* Feature tiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08]">
              {caps[activeTab].tiles.map((tile, idx) => (
                <div key={idx} className={`p-4 flex flex-col gap-2 transition-colors hover:bg-[#161b27] ${idx < caps[activeTab].tiles.length - 1 ? "border-r border-white/[0.08]" : ""}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tile.color === "blue" ? "bg-[rgba(91,127,255,0.15)]" : "bg-[rgba(167,139,250,0.12)]"}`}>
                    <CapabilityIcon idx={idx} color={tile.color} />
                  </div>
                  <p className="text-[12.5px] font-semibold text-[#c8cee0] leading-snug">{tile.name}</p>
                  <p className="text-[11px] text-white/35 leading-relaxed">{tile.desc}</p>
                </div>
              ))}
            </div>
            {/* Browser-frame preview */}
            <div className="p-5 bg-[#0d1018] relative">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(91,127,255,0.07) 0%, transparent 70%)" }} />
              <div className="relative rounded-xl overflow-hidden border border-white/[0.14]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <div className="bg-[#1a1e2e] border-b border-white/[0.08] px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 bg-[#0f1220] border border-white/[0.08] rounded-md px-3 py-1 text-[11px] text-white/35 font-mono truncate">
                    app.intagleo.com / {caps[activeTab].urlSlug}
                  </div>
                </div>
                <PreviewRenderer key={activeTab} config={caps[activeTab].preview} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
