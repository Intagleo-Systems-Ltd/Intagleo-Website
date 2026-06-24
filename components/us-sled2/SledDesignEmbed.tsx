"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

// Renders the actual compiled Claude Design component (`USSled`) from the
// design connector. The bundle is a fixed 1920×9276 Figma export that assigns
// its components to window globals and draws via the global `React`. We expose
// React on window, load the bundle, then scale the fixed canvas to fit width.

const BUNDLE = "/us-sled2/Components.bundle.js";
const DESIGN_W = 1920;
const DESIGN_H = 9276;
const NAV = ["Services", "Sectors", "Past Performance", "Teaming", "Compliance"];

// Top nav header (the compiled design does not include one).
function SledHeader() {
  return (
    <header className="sled2-hd">
      <style>{`
        .sled2-hd{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:18px;
          height:74px;padding:0 clamp(20px,3vw,48px);background:rgba(5,9,20,.82);
          backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
          border-bottom:1px dashed rgba(255,255,255,.12);
          font-family:"Hanken Grotesk",system-ui,sans-serif}
        .sled2-hd-brand{display:flex;align-items:center;gap:14px}
        .sled2-hd-brand img{height:32px;width:auto;display:block}
        .sled2-hd-div{width:1px;height:28px;background:rgba(255,255,255,.2)}
        .sled2-hd-sub{font-family:"Spline Sans Mono",monospace;font-size:11px;line-height:1.3;
          letter-spacing:.14em;text-transform:uppercase;color:#8c8c8c}
        .sled2-hd-nav{display:flex;gap:30px;margin-left:auto}
        .sled2-hd-nav a{font-size:15.5px;font-weight:500;color:#8c8c8c;transition:.15s}
        .sled2-hd-nav a:hover{color:#fff}
        .sled2-hd-cta{display:inline-flex;align-items:center;gap:.5em;background:#e53e30;color:#fff;
          font-weight:500;font-size:15px;padding:13px 22px;border-radius:999px;
          box-shadow:0 9px 42px -6px rgba(228,61,48,.39);transition:.18s}
        .sled2-hd-cta:hover{background:#f1503f;transform:translateY(-1px)}
        @media(max-width:980px){.sled2-hd-nav{display:none}}
      `}</style>
      <a className="sled2-hd-brand" href="#top" aria-label="Intagleo Systems — U.S. Public Sector">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/us-sled/intagleo-logo.png" alt="Intagleo Systems" />
        <span className="sled2-hd-div" aria-hidden="true" />
        <span className="sled2-hd-sub">
          U.S. Public
          <br />
          Sector
        </span>
      </a>
      <nav className="sled2-hd-nav" aria-label="Section navigation">
        {NAV.map((t) => (
          <a key={t} href="#">
            {t}
          </a>
        ))}
      </nav>
      <a className="sled2-hd-cta" href="#">
        Schedule a Briefing →
      </a>
    </header>
  );
}

export default function SledDesignEmbed() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<React.FC | null>(null);
  const [scale, setScale] = useState(1);

  // Load fonts + design tokens + the compiled bundle.
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.React = w.React || React;

    const addLink = (href: string, crossorigin?: boolean) => {
      if (document.querySelector(`link[data-sled2="${href}"]`)) return;
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      l.setAttribute("data-sled2", href);
      if (crossorigin) l.crossOrigin = "anonymous";
      document.head.appendChild(l);
    };
    addLink(
      "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;700&display=swap"
    );
    addLink("/us-sled2/fig-tokens.css");
    addLink("/us-sled2/fig-assets.css");

    const ready = () => {
      if (w.USSled) setComp(() => w.USSled as React.FC);
    };
    if (w.USSled) {
      ready();
      return;
    }
    let s = document.querySelector<HTMLScriptElement>("script[data-sled2-bundle]");
    if (!s) {
      s = document.createElement("script");
      s.src = BUNDLE;
      s.setAttribute("data-sled2-bundle", "");
      s.addEventListener("load", ready);
      document.body.appendChild(s);
    } else {
      s.addEventListener("load", ready);
      ready();
    }
  }, []);

  // Scale the fixed 1920px canvas down to the container width.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [Comp]);

  return (
    <>
      <SledHeader />
      <div
        ref={wrapRef}
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          background: "rgb(5,9,20)",
          height: Comp ? DESIGN_H * scale : "100vh",
        }}
      >
      {Comp ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <Comp />
        </div>
      ) : (
        <div style={{ padding: 80, color: "#9aa3b2", fontFamily: "system-ui, sans-serif" }}>
          Loading design…
        </div>
      )}
      </div>
    </>
  );
}
