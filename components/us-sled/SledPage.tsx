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
  compliance,
  why,
} from "./sledData";
import { CapitolBackdrop, TreasuryColonnade } from "./SledMotifs";
import SledCaseStudies from "./SledCaseStudies";
import SledBriefingForm from "./SledBriefingForm";

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
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links: [string, string][] = [
    ["Services", "#services"],
    ["Sectors", "#sectors"],
    ["Past Performance", "#work"],
    ["Teaming", "#teaming"],
    ["Compliance", "#compliance"],
  ];
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/us-sled/us-flag.svg" alt="" aria-hidden="true" className="topbar-flag" />
          <span>U.S. Public Sector Practice</span>
          <a href="https://www.intagleo.com/" className="topbar-link">
            ← Intagleo.com
          </a>
          <span className="topbar-sep" />
          <span className="topbar-loc">San Jose, California</span>
          <a href={"mailto:" + sledContact.email} className="topbar-link">
            {sledContact.email}
          </a>
        </div>
      </div>
      <header className={"nav" + (scrolled ? " nav-scrolled" : "")}>
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
          <nav className="nav-links">
            {links.map(([t, h]) => (
              <a key={h} href={h}>
                {t}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta">
            Schedule a Briefing
          </a>
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
        <CapitolBackdrop opacity={0.15} />
      </div>

      <div className="wrap hero-in">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-rule" aria-hidden="true" />
            U.S. State · Local · Education
          </span>
          <h1>
            Engineering partner for the
            <br />
            <span className="hl-accent">U.S. public sector.</span>
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
          <div className="hero-codes">
            <div>
              <span className="mono-label">NAICS</span>
              {naics.join(" · ")}
            </div>
            <div>
              <span className="mono-label">NIGP</span>
              {nigp.join(" · ")}
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
          <div className="dossier-certs">
            <span className="mono-label">Holds today</span>
            <div className="dossier-cert-row">
              {["ISO 27001", "SOC 2 Type II", "CMMI L3", "WCAG 2.1 AA"].map((c) => (
                <em key={c}>{c}</em>
              ))}
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
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          kicker="Services"
          title="Five practices, equally staffed."
          intro="Each practice is led by senior engineers who have shipped this work in production. We bring playbooks, reference architectures, and the discipline to land a transition without breaking the agency that depends on it."
        />
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

function Sectors() {
  return (
    <section className="section section-alt" id="sectors">
      <div className="wrap">
        <SectionHead
          kicker="SLED Sectors"
          title="The audiences we serve."
          intro="The work is the same. The buyers are not. A state CIO does not speak the same language as a community-college CTO. Each sector below represents an active practice with named clients and current pursuits."
        />
        <div className="sector-grid">
          {sectors.map((s) => (
            <article key={s.no} className="sector-card">
              <div className="sector-card-head">
                <span className="sector-kicker">{s.kicker}</span>
                <span className="mono-label">{s.no}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="sector-pursuit">
                <span className="mono-label">Typical pursuit</span>
                <ul>
                  {s.pursuits.map((p) => (
                    <li key={p}>
                      <span className="star-bullet" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teaming() {
  return (
    <section className="section section-alt" id="teaming">
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
                <span className="star-bullet" aria-hidden="true" />
                <div>
                  <strong>{p.t}</strong> {p.d}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="teaming-right">
          <div className="register-head">
            <span className="mono-label">Teaming Register</span>
            <span className="live">
              <i />
              Active · 2026
            </span>
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
    </section>
  );
}

function Compliance() {
  return (
    <section className="section" id="compliance">
      <div className="wrap">
        <SectionHead
          kicker="Compliance Posture"
          title="Audit-ready where it counts. Aligned where it doesn't yet."
          intro="We do not overclaim certifications. The list below reflects what we hold today and what we are actively building toward, verifiable on request."
        />
        <div className="comp-grid">
          {compliance.map((c) => (
            <div key={c.t} className={"comp-cell comp-" + c.state}>
              <div className="comp-top">
                <span className="comp-dot" aria-hidden="true" />
                <span className="comp-state mono-label">{c.state === "held" ? "Held" : "Building"}</span>
              </div>
              <strong>{c.t}</strong>
              <span className="comp-sub">{c.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section section-alt" id="why">
      <div className="wrap">
        <SectionHead
          kicker="Why Intagleo"
          title="Four reasons primes keep our number on their bench."
          intro="A senior engineering practice with the institutional discipline state work demands and the speed prime contractors expect from a specialist sub."
        />
        <div className="why-grid">
          {why.map((w, i) => (
            <article key={w.t} className="why-card">
              <span className="why-no mono-label">0{i + 1}</span>
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
          <span className="kicker">
            <span className="kicker-tick" aria-hidden="true" />
            Schedule a Briefing
          </span>
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
              <span className="star-bullet" aria-hidden="true" />
              Response within one business day
            </li>
            <li>
              <span className="star-bullet" aria-hidden="true" />
              NDA &amp; capability documents move the same day
            </li>
            <li>
              <span className="star-bullet" aria-hidden="true" />A delivery lead on the call, not a sales rep
            </li>
            <li>
              <span className="star-bullet" aria-hidden="true" />
              Redacted staffing plan + relevant past performance
            </li>
          </ul>
          <dl className="briefing-contact">
            <div>
              <dt>Practice Lead</dt>
              <dd>
                {sledContact.leadName} · {sledContact.leadTitle}
              </dd>
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

function Footer() {
  const cols = [
    {
      h: "Procurement Codes",
      items: naics.map((n) => "NAICS " + n).concat(nigp.map((n) => "NIGP " + n)),
    },
    {
      h: "SLED Practice",
      items: ["Services", "SLED Sectors", "Past Performance", "Teaming", "Compliance", "Schedule a Briefing"],
    },
    {
      h: "Intagleo Worldwide",
      items: [
        "intagleo.com (Corporate)",
        "London, United Kingdom",
        "Dubai, United Arab Emirates",
        "Lahore, Delivery Center",
        "Careers",
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-stripe" aria-hidden="true" />
      <TreasuryColonnade opacity={0.1} />
      <div className="wrap footer-in">
        <div className="footer-brand">
          <a className="brand" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Intagleo Systems" className="brand-logo" />
          </a>
          <p className="footer-addr">
            <strong>Intagleo Systems, Inc.</strong>
            <br />
            {sledContact.office1}
            <br />
            {sledContact.office2}
            <br />
            United States
          </p>
          <p className="footer-contact">
            <a href={"mailto:" + sledContact.email}>{sledContact.email}</a>
          </p>
        </div>
        <div className="footer-cols">
          {cols.map((col) => (
            <div key={col.h} className="footer-col">
              <h4>{col.h}</h4>
              <ul>
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Intagleo Systems, Inc. · All rights reserved.</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/us-sled/us-flag.svg" alt="" aria-hidden="true" className="footer-flag" />
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
        <Compliance />
        <WhyUs />
        <Briefing />
      </main>
      <Footer />
    </>
  );
}
