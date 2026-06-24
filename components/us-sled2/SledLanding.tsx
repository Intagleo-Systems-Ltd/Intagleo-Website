"use client";

import { useEffect, useRef, useState } from "react";
import type { SledCaseStudy } from "@/lib/content";
import {
  sledContact,
  naics,
  nigp,
  stats,
  services,
  sectors,
  teamingPoints,
  teamingOpen,
  why,
} from "../us-sled/sledData";
import { TreasuryColonnade } from "../us-sled/SledMotifs";
import SledCaseStudies from "./SledCaseStudies";
import SledBriefingForm from "../us-sled/SledBriefingForm";

const LOGO = "/us-sled/intagleo-logo.png";

/* ---- shared section header ---- */
function SectionHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="section-head">
      <span className="kicker">
        <span className="kicker-tick" aria-hidden="true" />
        {kicker}
      </span>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

/* ---- in-view + counter ---- */
function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          ob.disconnect();
        }
      },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [ref, seen] = useInView<HTMLElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    // Respect reduced-motion: show the final value immediately, no count-up.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setN(value);
      return;
    }
    const dur = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <strong ref={ref}>
      {n}
      {suffix}
    </strong>
  );
}

/* ---- nav ---- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  const links: [string, string][] = [
    ["Services", "#services"],
    ["Sectors", "#sectors"],
    ["Past Performance", "#work"],
    ["Teaming", "#teaming"],
    ["Compliance", "#compliance"],
  ];
  return (
    <>
      <a href="#main-content" className="sled-skip">
        Skip to main content
      </a>
      <header className={"nav nav-static" + (scrolled ? " nav-scrolled" : "")}>
        <div className="wrap nav-in">
          <a className="brand" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Intagleo Systems" className="brand-logo" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-sled">
              U.S. Public
              <br />
              Sector
            </span>
          </a>
          <nav className="nav-links" aria-label="Section navigation">
            {links.map(([t, h]) => (
              <a key={h} href={h}>
                {t}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta">
            Schedule a Briefing
          </a>
          <button
            type="button"
            className={"nav-burger" + (menuOpen ? " is-open" : "")}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="sled-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div id="sled-mobile-menu" className="nav-mobile" hidden={!menuOpen}>
          <nav className="nav-mobile-links" aria-label="Section navigation">
            {links.map(([t, h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)}>
                {t}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary nav-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Briefing →
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

/* ---- hero ---- */
function Hero() {
  return (
    <section className="hero patriot-moderate" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
      </div>

      <div className="wrap hero-in">
        <div className="hero-copy">
          <h1 className="hero-title">
            Engineering partner for the U.S. public sector.
          </h1>
          <p className="lede">
            Intagleo Systems is a 22-year software engineering firm with a U.S. office in San&nbsp;Jose.
            We modernize legacy systems, migrate state agencies to the cloud, and rebuild
            citizen-facing services for state, local, and education buyers.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule a Briefing →
            </a>
            <a
              href="/us-sled/capability-statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Capability Statement (PDF)
            </a>
          </div>
          <div className="hero-holds">
            <span className="mono-label">Holds today</span>
            <div className="hero-holds-row">
              <em>ISO 27001</em>
              <span className="hero-holds-sep" aria-hidden="true" />
              <em>WCAG 2.1 AA</em>
            </div>
          </div>
        </div>

        <aside className="dossier">
          <div className="dossier-top">
            <span className="mono-label">Capability Snapshot</span>
            <span className="dossier-est">EST · 2004</span>
          </div>
          <dl className="dossier-grid">
            <div>
              <dt>U.S. Office</dt>
              <dd>San Jose, California</dd>
            </div>
            <div>
              <dt>Founded</dt>
              <dd>2004 · 22 years</dd>
            </div>
            <div>
              <dt>Engineers</dt>
              <dd>200+ on bench</dd>
            </div>
            <div>
              <dt>Coverage</dt>
              <dd>CONUS · 11 states</dd>
            </div>
            <div>
              <dt>UEI / CAGE</dt>
              <dd>Available on request</dd>
            </div>
            <div>
              <dt>Response</dt>
              <dd>Within 1 business day</dd>
            </div>
          </dl>
          <div className="dossier-codes">
            <div className="code-group">
              <span className="mono-label">NAICS</span>
              <div className="code-chips">
                {naics.map((c) => (
                  <span key={c} className="code-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="code-group">
              <span className="mono-label">NIGP</span>
              <div className="code-chips">
                {nigp.map((c) => (
                  <span key={c} className="code-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="stats-band">
      <div className="wrap">
        <div className="stats-head">
          <h2>Twenty-two years of delivery, in numbers.</h2>
          <p>Verifiable on request. We do not publish what we cannot defend.</p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-cell">
              <Counter value={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const cur = services[active];
  return (
    <section className="section svc-section" id="services">
      <div className="wrap">
        <div className="svc-head">
          <h2>
            Five practices,
            <br />
            equally staffed.
          </h2>
          <p>
            Each practice is led by senior engineers who have shipped this work in production. We
            bring playbooks, reference architectures, and the discipline to land a transition without
            breaking the agency that depends on it.
          </p>
        </div>
        <div className="svc">
          <div className="svc-tabs" role="tablist">
            {services.map((s, i) => (
              <button
                key={s.no}
                role="tab"
                aria-selected={i === active}
                className={"svc-tab" + (i === active ? " is-active" : "")}
                onClick={() => setActive(i)}
              >
                <span className="svc-tab-no mono-label">{s.no}</span>
                <span className="svc-tab-label">{s.title}</span>
                <span className="svc-tab-tag">{s.tag}</span>
              </button>
            ))}
          </div>
          <div className="svc-panel" key={cur.no}>
            <div className="svc-panel-top">
              <span className="mono-label">
                {cur.no} / {cur.tag}
              </span>
              <span className="svc-panel-rule" aria-hidden="true" />
            </div>
            <h3>{cur.title}</h3>
            <p>{cur.body}</p>
            <div className="chips">
              {cur.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
            <a href="#contact" className="link-arrow">
              Explore practice →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* sector icons, in display order: State · Local · Higher Ed · Utilities · K–12 */
const SECTOR_ICONS = [
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 12 4l9 5.5" /><path d="M4 9.5h16" />
    <path d="M5.5 10v7M9.5 10v7M14.5 10v7M18.5 10v7" /><path d="M3.5 20.5h17" />
  </svg>,
  <svg key="l" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3.5" width="10" height="17" rx="1" /><path d="M14 9h6v11.5h-6" />
    <path d="M7 7h1.5M10.5 7h1M7 10.5h1.5M10.5 10.5h1M7 14h1.5M10.5 14h1" /><path d="M3 20.5h18" />
  </svg>,
  <svg key="h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" /><path d="M6 10.6v4.2c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8v-4.2" /><path d="M21.5 8.7v4.3" />
  </svg>,
  <svg key="u" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="3" /><circle cx="17.2" cy="6.6" r="2" /><circle cx="13.5" cy="16.5" r="3.6" />
  </svg>,
  <svg key="k" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.4C10 5 6.5 4.7 4 5.2v13c2.5-.5 6-.2 8 1.3 2-1.5 5.5-1.8 8-1.3v-13c-2.5-.5-6-.2-8 1.2Z" /><path d="M12 6.4v13.4" />
  </svg>,
];

function Sectors() {
  // Display order matches the design: State, Local, Higher Ed, then Utilities + K–12 on a wider row.
  const order = [0, 1, 2, 4, 3];
  return (
    <section className="section sectors-section" id="sectors">
      <div className="wrap">
        <div className="sectors-head">
          <h2>
            Different industries. Different pressures.
            <br />
            One standard for excellence.
          </h2>
          <p>
            We don&apos;t believe in &ldquo;one size fits all.&rdquo; We build around your context,
            your users, and the realities of your operations.
          </p>
        </div>
        <div className="sector-grid">
          {order.map((srcIdx, i) => {
            const s = sectors[srcIdx];
            return (
              <article key={s.no} className="sector-card">
                <span className="sector-kicker">{s.kicker}</span>
                <span className="sector-icon" aria-hidden="true">
                  {SECTOR_ICONS[i]}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="sector-pursuit">
                  <span className="sector-pursuit-label">Typical pursuit</span>
                  <ul>
                    {s.pursuits.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Teaming() {
  return (
    <section className="section section-alt teaming-compliance" id="teaming">
      <div className="wrap teaming-wrap">
        <div className="teaming-left">
          <SectionHead
            kicker="Teaming with Primes"
            title="The specialist bench primes scale into."
            intro="Most state work is awarded to prime integrators who need a specialist bench they can scale into. We bring senior engineers, predictable delivery, and IP-free teaming agreements that let your capture team move fast."
          />
          <ul className="teaming-list">
            {teamingPoints.map((p) => (
              <li key={p.t}>
                <span className="tlist-dot" aria-hidden="true" />
                <div>
                  <strong>{p.t}</strong>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="teaming-right">
          <div className="register-head">
            <span className="mono-label">Teaming Register</span>
            <span className="register-active">Active · 2026</span>
          </div>
          <span className="mono-label register-sub">Open to teaming with</span>
          <div className="register-open">
            {teamingOpen.map((o) => (
              <div key={o.t} className="open-row">
                <strong>{o.t}</strong>
                <span>{o.d}</span>
              </div>
            ))}
          </div>
          <p className="register-foot">
            Reference letters &amp; past-performance write-ups released to qualified primes under NDA.
          </p>
        </aside>
      </div>
      <Compliance />
    </section>
  );
}

type CompState = "held" | "aligned" | "building";
const complianceItems: { t: string; s: string; state: CompState }[] = [
  { t: "ISO 27001", s: "Certified", state: "held" },
  { t: "SOC 2 Type II", s: "Active annual audit", state: "aligned" },
  { t: "CMMI Level 3", s: "Appraised engineering", state: "aligned" },
  { t: "HIPAA", s: "Delivery experience", state: "aligned" },
  { t: "WCAG 2.1 AA", s: "Embedded in delivery", state: "held" },
  { t: "CMMC", s: "Aware · roadmap 2026", state: "building" },
  { t: "FedRAMP", s: "Aligned via partners", state: "building" },
  { t: "StateRAMP", s: "Aligned · control mapping", state: "building" },
];

function Compliance() {
  return (
    <div className="wrap comp-block" id="compliance">
      <div className="section-head comp-head">
          <h2>Audit-ready where it counts. Aligned where it doesn&apos;t yet.</h2>
          <p className="section-intro">
            We do not overclaim certifications. The list below reflects what we hold today and what we
            are actively building toward, verifiable on request.
          </p>
        </div>
        <div className="comp-layout">
          <div className="comp-grid">
            {complianceItems.map((c) => (
              <div key={c.t} className={"comp-cell comp-" + c.state}>
                <span className="comp-badge">{c.state}</span>
                <div className="comp-body">
                  <strong>{c.t}</strong>
                  <span className="comp-sub">{c.s}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="comp-art" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/us-sled2/bay-bridge.png" alt="" className="comp-bridge-img" loading="lazy" />
          </div>
        </div>
      </div>
  );
}

function WhyUs() {
  return (
    <section className="section section-alt" id="why">
      <div className="wrap why-wrap">
        <div className="why-left">
          <div className="section-head why-head">
            <span className="why-eyebrow">Why Intagleo</span>
            <h2>
              Four reasons primes keep our
              <br />
              number on their bench.
            </h2>
          </div>
          <p className="why-intro">
            A senior engineering practice with the institutional discipline state work demands and the
            speed prime contractors expect from a specialist sub.
          </p>
        </div>
        <div className="why-list">
          {why.map((w) => (
            <article key={w.t} className="why-card">
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Briefing() {
  return (
    <section className="section briefing" id="contact">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
      </div>
      <div className="wrap briefing-in">
        <div className="briefing-copy">
          <h2>
            Send the RFP.
            <br />
            We&apos;ll send the bench.
          </h2>
          <p>
            Briefings are 30 minutes, run by a delivery lead and a U.S.-based account director, not
            sales. We bring relevant past performance, a redacted staffing plan, and a frank read on
            whether we&apos;re the right partner for your pursuit.
          </p>
          <ul className="briefing-points">
            <li>
              <span className="tlist-dot" aria-hidden="true" />
              Response within one business day
            </li>
            <li>
              <span className="tlist-dot" aria-hidden="true" />
              NDA &amp; capability documents move the same day
            </li>
            <li>
              <span className="tlist-dot" aria-hidden="true" />A delivery lead on the call, not a sales rep
            </li>
            <li>
              <span className="tlist-dot" aria-hidden="true" />
              Redacted staffing plan + relevant past performance
            </li>
          </ul>
          <dl className="briefing-contact">
            <div>
              <dt>Practice</dt>
              <dd>U.S. SLED</dd>
            </div>
            <div>
              <dt>Direct</dt>
              <dd>
                <a href={"mailto:" + sledContact.email}>{sledContact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>
                {sledContact.office1}, {sledContact.office2}
              </dd>
            </div>
          </dl>
        </div>
        <SledBriefingForm />
      </div>
    </section>
  );
}

type FooterItem = { label: string; href?: string; external?: boolean };

function Footer() {
  const cols: { h: string; items: FooterItem[] }[] = [
    {
      h: "Procurement Codes",
      items: [
        ...naics.map((n) => ({ label: "NAICS " + n })),
        ...nigp.map((n) => ({ label: "NIGP " + n })),
        { label: "MLOps & AI Infrastructure" },
        { label: "Data Governance & Business Intelligence" },
        { label: "Data Science & Predictive Analytics" },
      ],
    },
    {
      h: "SLED Practice",
      items: [
        { label: "Services", href: "#services" },
        { label: "SLED Sectors", href: "#sectors" },
        { label: "Past Performance", href: "#work" },
        { label: "Teaming", href: "#teaming" },
        { label: "Compliance", href: "#compliance" },
        { label: "Schedule a Briefing", href: "#contact" },
      ],
    },
    {
      h: "Intagleo Worldwide",
      items: [
        { label: "intagleo.com (Corporate)", href: "https://www.intagleo.com/", external: true },
        { label: "London, United Kingdom" },
        { label: "Dubai, United Arab Emirates" },
        { label: "Lahore, Delivery Center" },
        { label: "Careers", href: "/join-us" },
      ],
    },
  ];

  const locations = [
    { code: "us", name: "USA", lines: ["2670 S White Road Suite #125,", "San Jose, CA 95148"] },
    { code: "gb", name: "United Kingdom", lines: ["268 Bath Road. Slough", "SL1 4DX"] },
    { code: "ae", name: "United Arab Emirates", lines: ["IFZA Business Park,", "DDP"] },
    {
      code: "pk",
      name: "Pakistan",
      lines: ["13-CCA, DHA Phase 8 - Ex Park View", "Lahore, 54792"],
    },
  ];

  const legal: FooterItem[] = [
    { label: "Company", href: "#" },
    { label: "Resources", href: "/blog" },
    { label: "Customers", href: "/case-studies" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-liberty" aria-hidden="true" />

      {/* link columns */}
      <div className="wrap footer-cols">
        {cols.map((col) => (
          <div key={col.h} className="footer-col">
            <h4>{col.h}</h4>
            <ul>
              {col.items.map((it) => (
                <li key={it.label}>
                  {it.href ? (
                    <a
                      href={it.href}
                      {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {it.label}
                    </a>
                  ) : (
                    <span className="footer-static">{it.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap">
        <hr className="footer-divider" />
      </div>

      {/* brand + connect */}
      <div className="wrap footer-mid">
        <div className="footer-brand">
          <a className="brand" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Intagleo Systems" className="brand-logo footer-logo" />
          </a>
          <p className="footer-line">
            <span className="footer-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
            </span>
            <a href="tel:+14084694384">+1 408 469 4384</a>
          </p>
          <p className="footer-line">
            <span className="footer-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <a href={"mailto:" + sledContact.email}>{sledContact.email}</a>
          </p>
          <p className="footer-tagline">
            Intagleo partners with businesses to engineer modern software, scalable architectures,
            and digital platforms built for performance and growth
          </p>
        </div>

        <div className="footer-connect">
          <div className="footer-social">
            <span className="mono-label">Find us elsewhere</span>
            <div className="social-row">
              <a
                className="social-link"
                href="https://www.linkedin.com/company/intagleo-systems/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Intagleo on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4V24h-4V8.5Zm7.5 0h3.83v2.12h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24H8V8.5Z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/intagleosystems/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Intagleo on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.6c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 2.7a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 8.7a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Zm5.5-8.9a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://www.facebook.com/intagleosystems/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Intagleo on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-news">
            <span className="mono-label">Subscribe to the newsletter</span>
            {/* Newsletter has no backend yet — submitting is a no-op placeholder. */}
            <form className="news-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="news-input"
                placeholder="Your email here"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary news-btn">
                Subscribe
              </button>
            </form>
            <p>Stay connected with the latest updates from Intagleo</p>
          </div>
        </div>
      </div>

      {/* worldwide offices */}
      <div className="wrap footer-locations">
        {locations.map((loc) => (
          <div key={loc.name} className="footer-loc">
            <div className="footer-loc-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="footer-loc-flag" src={`/us-sled2/flags/${loc.code}.svg`} alt="" width="22" height="15" aria-hidden="true" />
              <span>{loc.name}</span>
            </div>
            <p>
              {loc.lines.map((ln, i) => (
                <span key={i}>
                  {ln}
                  {i < loc.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <a href="#top" className="footer-totop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>

      {/* legal bar */}
      <div className="wrap footer-bottom">
        <span>© 2026 Intagleo Systems | All rights reserved.</span>
        <nav className="footer-legal">
          {legal.map((it) => (
            <a key={it.label} href={it.href}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function SledPage({ cases }: { cases: SledCaseStudy[] }) {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <StatsBand />
        <Services />
        <Sectors />
        <SledCaseStudies cases={cases} />
        <Teaming />
        <WhyUs />
        <Briefing />
      </main>
      <Footer />
    </>
  );
}
