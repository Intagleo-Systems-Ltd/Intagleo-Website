"use client";

import { useRef } from "react";

/* ---- decorative US motifs (simple polygons only) ---- */
export function StarField({ density = 28, opacity = 0.5 }: { density?: number; opacity?: number }) {
  // deterministic pseudo-random scatter
  const stars = useRef<{ x: number; y: number; s: number; o: number; d: number }[] | null>(null);
  if (!stars.current) {
    let seed = 9301;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    stars.current = Array.from({ length: density }, () => ({
      x: rnd() * 100,
      y: rnd() * 100,
      s: 6 + rnd() * 12,
      o: 0.25 + rnd() * 0.75,
      d: rnd() * 6,
    }));
  }
  const starPath = "M50 5 L61 38 L96 38 L68 59 L79 92 L50 72 L21 92 L32 59 L4 38 L39 38 Z";
  return (
    <svg
      className="starfield"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ opacity }}
      aria-hidden="true"
    >
      {stars.current.map((st, i) => (
        <svg
          key={i}
          x={st.x}
          y={st.y}
          width={st.s}
          height={st.s}
          viewBox="0 0 100 100"
          style={{ overflow: "visible" }}
        >
          <path
            d={starPath}
            fill="var(--star)"
            opacity={st.o}
            style={{ animation: `sledTwinkle ${4 + st.d}s ease-in-out ${st.d}s infinite` }}
          />
        </svg>
      ))}
    </svg>
  );
}

// Classical U.S. Capitol-style silhouette, built from simple primitives.
export function CapitolBackdrop({ opacity = 0.18 }: { opacity?: number }) {
  const cols = (x0: number, count: number, gap: number, w: number, top: number, h: number) =>
    Array.from({ length: count }, (_, i) => (
      <rect key={i} x={x0 + i * gap} y={top} width={w} height={h} rx="1" />
    ));
  return (
    <svg
      className="capitol"
      viewBox="0 0 1200 440"
      preserveAspectRatio="xMidYMax meet"
      style={{ opacity }}
      aria-hidden="true"
    >
      <g fill="var(--star)">
        {/* ground */}
        <rect x="70" y="420" width="1060" height="3" />
        {/* left wing */}
        <rect x="150" y="300" width="252" height="12" />
        <rect x="150" y="356" width="252" height="10" />
        {cols(164, 10, 25, 9, 312, 44)}
        {/* right wing */}
        <rect x="798" y="300" width="252" height="12" />
        <rect x="798" y="356" width="252" height="10" />
        {cols(812, 10, 25, 9, 312, 44)}
        {/* connectors */}
        <rect x="396" y="326" width="74" height="34" />
        <rect x="730" y="326" width="74" height="34" />
        {/* central steps */}
        <rect x="415" y="404" width="370" height="16" />
        <rect x="432" y="392" width="336" height="12" />
        <rect x="449" y="380" width="302" height="12" />
        <rect x="466" y="368" width="268" height="8" />
        {/* central colonnade */}
        {cols(478, 6, 44, 14, 300, 68)}
        {/* entablature + pediment */}
        <rect x="462" y="284" width="276" height="16" />
        <polygon points="462,284 738,284 600,244" />
        {/* attic + drum */}
        <rect x="554" y="212" width="92" height="32" />
        <rect x="566" y="160" width="68" height="54" />
        {cols(572, 8, 8, 3, 166, 46)}
        {/* dome */}
        <path d="M566 160 C566 116 584 98 600 98 C616 98 634 116 634 160 Z" />
        {/* cupola + spire + statue */}
        <rect x="590" y="78" width="20" height="22" />
        <path d="M590 78 Q600 64 610 78 Z" />
        <rect x="599" y="48" width="2" height="16" />
        <circle cx="600" cy="45" r="3.5" />
      </g>
    </svg>
  );
}

export function Stripes({ count = 7 }: { count?: number }) {
  return (
    <div className="stripes" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ background: i % 2 === 0 ? "var(--red)" : "transparent" }} />
      ))}
    </div>
  );
}

// U.S. Treasury Building silhouette — long Greek-Revival colonnade, central pediment, no dome.
export function TreasuryColonnade({ opacity = 0.1 }: { opacity?: number }) {
  const cols = (x0: number, count: number, gap: number, w: number, top: number, h: number) =>
    Array.from({ length: count }, (_, i) => (
      <rect key={i} x={x0 + i * gap} y={top} width={w} height={h} />
    ));
  return (
    <svg
      className="treasury"
      viewBox="0 0 1400 220"
      preserveAspectRatio="xMidYMax meet"
      style={{ opacity }}
      aria-hidden="true"
    >
      <g fill="var(--star)">
        {/* steps */}
        <rect x="40" y="208" width="1320" height="12" />
        <rect x="70" y="196" width="1260" height="12" />
        {/* stylobate / floor */}
        <rect x="90" y="186" width="1220" height="10" />
        {/* long uniform colonnade */}
        {cols(110, 38, 32, 10, 96, 90)}
        {/* entablature */}
        <rect x="90" y="80" width="1220" height="16" />
        {/* roof parapet */}
        <rect x="100" y="70" width="1200" height="10" />
        {/* central pavilion: raised entablature + pediment */}
        <rect x="588" y="64" width="224" height="14" />
        <polygon points="588,64 812,64 700,34" />
      </g>
    </svg>
  );
}
