"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import AutoplayVideo from "@/components/AutoplayVideo";

/* ─── Data ──────────────────────────────────────────────────── */

const serviceColumns = [
  {
    heading: "AI & Data Innovation",
    links: [
      { label: "AI Transformation", href: "/ai-transformation", badge: "NEW" },
      { label: "Data & Analytics", href: "/data-analytics" },
    ],
  },
  {
    heading: "Digital Product Engineering",
    links: [
      { label: "Custom Software Development", href: "/custom-software" },
      { label: "Mobile Development", href: "/mobile-dev" },
      { label: "Embedded & IoT", href: "/embedded-iot" },
    ],
  },
  {
    heading: "Cloud & Infrastructure",
    links: [
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "Legacy Modernisation", href: "/legacy-modernization" },
    ],
  },
  {
    heading: "Quality & People",
    links: [
      { label: "QA & Testing", href: "/qa-services" },
      { label: "Staff Augmentation", href: "/staff-augmentation" },
    ],
  },
];

const industryLinks = [
  { label: "Digital Signage", href: "/digital-signage" },
  { label: "Facilities Management", href: "/facilities-management" },
  { label: "E-Commerce & Retail", href: "/ecommerce-retail" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Transportation", href: "/transportation" },
  { label: "EdTech", href: "/edtech" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Travel", href: "/travel" },
  { label: "Smart Cities & IoT", href: "/smart-cities" },
  { label: "Fintech", href: "/fintech" },
  { label: "HR & Recruitment", href: "/hr-recruitment" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Our Products", href: "/our-products" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const offices = [
  {
    country: "USA",
    address: "2670 S White Road Suite #125,\nSan Jose, CA 95148",
    icon: (
      // Golden Gate Bridge — two towers, catenary cable, hangers, road
      <svg viewBox="0 0 24 16" fill="none" className="w-6 h-auto text-white/60" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="0" y1="14" x2="24" y2="14"/>
        <line x1="7" y1="5" x2="7" y2="14"/>
        <line x1="9" y1="5" x2="9" y2="14"/>
        <line x1="7" y1="7" x2="9" y2="7"/>
        <line x1="7" y1="10" x2="9" y2="10"/>
        <line x1="15" y1="5" x2="15" y2="14"/>
        <line x1="17" y1="5" x2="17" y2="14"/>
        <line x1="15" y1="7" x2="17" y2="7"/>
        <line x1="15" y1="10" x2="17" y2="10"/>
        <path d="M1 14 L8 5 Q12 2 16 5 L23 14"/>
        <line x1="4" y1="11.5" x2="4" y2="14"/>
        <line x1="12" y1="3" x2="12" y2="14"/>
        <line x1="20" y1="11.5" x2="20" y2="14"/>
      </svg>
    ),
  },
  {
    country: "United Kingdom",
    address: "268 Bath Road, Slough\nSL1 4DX",
    icon: (
      // Big Ben — spire, belfry, clock face, tower body, base
      <svg viewBox="0 0 14 22" fill="none" className="w-[18px] h-auto text-white/60" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="0" x2="7" y2="2"/>
        <path d="M4 2 L7 0 L10 2"/>
        <rect x="4" y="2" width="6" height="4"/>
        <rect x="3" y="6" width="8" height="1"/>
        <rect x="3.5" y="7" width="7" height="8"/>
        <circle cx="7" cy="11" r="2.2"/>
        <line x1="7" y1="9" x2="7" y2="11"/>
        <line x1="7" y1="11" x2="8.5" y2="11"/>
        <rect x="2" y="15" width="10" height="6"/>
        <line x1="1" y1="21" x2="13" y2="21"/>
      </svg>
    ),
  },
  {
    country: "United Arab Emirates",
    address: "IFZA Business Park,\nDDP",
    icon: (
      // Burj Khalifa — needle, stepped setbacks tapering to wide base
      <svg viewBox="0 0 14 24" fill="none" className="w-[16px] h-auto text-white/60" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="0" x2="7" y2="3"/>
        <path d="M5.5 3 L7 0 L8.5 3 Z"/>
        <rect x="5.5" y="3" width="3" height="3"/>
        <rect x="5" y="6" width="4" height="3"/>
        <rect x="4.5" y="9" width="5" height="3"/>
        <rect x="4" y="12" width="6" height="3"/>
        <rect x="3" y="15" width="8" height="7"/>
        <line x1="2" y1="22" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    country: "Pakistan",
    address: "13-CCA, DHA Phase 8 – Ex Park View\nLahore, 54792",
    icon: (
      // Badshahi Mosque — two minarets, central onion dome, platform
      <svg viewBox="0 0 24 20" fill="none" className="w-6 h-auto text-white/60" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="1" x2="3" y2="14"/>
        <line x1="5" y1="1" x2="5" y2="14"/>
        <path d="M3 1 Q4 0 5 1"/>
        <line x1="3" y1="9" x2="5" y2="9"/>
        <line x1="19" y1="1" x2="19" y2="14"/>
        <line x1="21" y1="1" x2="21" y2="14"/>
        <path d="M19 1 Q20 0 21 1"/>
        <line x1="19" y1="9" x2="21" y2="9"/>
        <path d="M8 14 Q8 6 12 5 Q16 6 16 14"/>
        <line x1="12" y1="3" x2="12" y2="5"/>
        <line x1="1" y1="14" x2="23" y2="14"/>
        <rect x="7" y="14" width="10" height="5"/>
        <line x1="0" y1="19" x2="24" y2="19"/>
      </svg>
    ),
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/intagleo",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/intagleosystems",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/intagleo",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

/* shared link className - contrast-safe, focus ring, smooth transition */
const linkCls =
  "text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 rounded-sm";

/* ─── Component ─────────────────────────────────────────────── */

export default function Footer({ showCTA = true }: { showCTA?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
    setEmail("");
  }

  return (
    <footer style={{ background: "#080808" }} aria-label="Site footer">

      {/* ── Optional CTA Banner ── */}
      {showCTA && (
        <div className="relative border-b border-white/[0.06] overflow-hidden">
          <AutoplayVideo
            sources={[
              { src: "/footer_CTA.webm", type: "video/webm" },
              { src: "/footer_CTA.mp4", type: "video/mp4" },
            ]}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"
          />
          <div className="absolute inset-0 bg-[#080808]/70 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 section-padding py-24">
            <div className="mx-auto max-w-[1400px] text-center">
              <p className="text-xs text-white/50 uppercase tracking-widest mb-6">Get Started</p>
              <h2 className="customHeading font-medium mb-6 leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                Your Next Chapter is a<br />
                <span style={{ WebkitTextFillColor: "rgba(255,255,255,0.35)", backgroundImage: "none" }}>Technical Decision.</span>
              </h2>
              <p className="text-white/60 font-normal max-w-md mx-auto mb-10 leading-relaxed" style={{ fontSize: '16px' }}>
                Whether you&apos;re launching a new product or scaling an existing platform, we have the team to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?type=start-project" className="px-6 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium transition-colors duration-200">
                  Start a Conversation
                </a>
                <a href="/case-studies" className="px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/50 hover:text-white transition-all">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation grid ── */}
      <nav aria-label="Site navigation" className="section-padding pt-14 pb-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">

          {/* 6-col grid: 4 services + company + legal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {serviceColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3" role="list">
                  {col.links.map((link) => (
                    <li key={link.href} className="flex items-center gap-2">
                      <Link href={link.href} className={`${linkCls} text-sm leading-snug`}>
                        {link.label}
                      </Link>
                      {link.badge && (
                        <span
                          aria-label="New"
                          className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#3B82F6]/15 text-[#3B82F6] leading-none select-none"
                        >
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company */}
            <div>
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-4">Company</p>
              <ul className="space-y-3" role="list">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`${linkCls} text-sm`}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-4">Legal</p>
              <ul className="space-y-3" role="list">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`${linkCls} text-sm`}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries — pill tags */}
          <div className="mt-10 pt-8 border-t border-white/[0.04]">
            <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-4">Industries</p>
            <div className="flex flex-wrap gap-2">
              {industryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full border border-white/[0.08] text-white/45 text-xs hover:border-white/20 hover:text-white/70 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </nav>

      {/* ── Brand + Social + Newsletter ── */}
      <div className="section-padding py-12 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row gap-10 justify-between">

          {/* Left - logo + contact */}
          <address className="not-italic flex-shrink-0 max-w-[260px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-nav.png" alt="Intagleo Systems" className="h-10 w-auto mb-5" />
            <div className="space-y-2.5 mb-5">
              <a
                href="mailto:sales@intagleo.com"
                className={`${linkCls} flex items-center gap-2 text-sm`}
              >
                <svg className="w-4 h-4 flex-shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                sales@intagleo.com
              </a>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Intagleo partners with businesses to engineer modern software, scalable architectures, and digital platforms built for performance and growth.
            </p>
          </address>

          {/* Right - social + newsletter */}
          <div className="flex flex-col gap-8 flex-shrink-0">

            {/* Social */}
            <div>
              <p className="text-[11px] text-white/50 uppercase tracking-widest mb-3 font-semibold">Find us elsewhere</p>
              <div className="flex items-center gap-2" role="list" aria-label="Social media links">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Intagleo on ${s.label}`}
                    role="listitem"
                    /* 44×44 touch target */
                    className="w-11 h-11 rounded-xl border border-white/[0.1] flex items-center justify-center text-white/45 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[11px] text-white/50 uppercase tracking-widest mb-3 font-semibold" id="newsletter-label">
                Subscribe to the newsletter
              </p>
              {status === "done" ? (
                <div role="status" className="flex items-center gap-2 text-sm text-green-400">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You&apos;re subscribed - thanks!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  aria-labelledby="newsletter-label"
                  noValidate
                  className="flex flex-col gap-2"
                  style={{ maxWidth: "340px" }}
                >
                  {/* Visually-hidden label satisfies accessibility requirement */}
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex items-stretch rounded-lg overflow-hidden border border-white/[0.1] focus-within:border-white/25 transition-colors duration-200">
                    <input
                      id="footer-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      disabled={status === "loading"}
                      className="flex-1 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none min-w-0 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading" || !email}
                      className="px-4 py-3 btn-shimmer bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors duration-200 flex-shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60"
                      aria-label={status === "loading" ? "Subscribing…" : "Subscribe"}
                    >
                      {status === "loading" ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                      ) : "Subscribe"}
                    </button>
                  </div>
                  {status === "error" && (
                    <p role="alert" className="text-xs text-red-400">Something went wrong - please try again.</p>
                  )}
                </form>
              )}
              <p className="text-xs text-white/35 mt-2 leading-relaxed">
                Stay connected with the latest updates from Intagleo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Office locations ── */}
      <div className="section-padding py-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {offices.map((o) => (
              <address key={o.country} className="not-italic rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 flex flex-col gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                  {o.icon}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-1">
                  <p className="text-white/80 text-sm font-medium">{o.country}</p>
                  <p className="text-white/40 text-xs leading-relaxed whitespace-pre-line">{o.address}</p>
                </div>
              </address>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="section-padding py-5">
        <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Intagleo Systems UK Limited. All rights reserved.
          </p>
          <nav aria-label="Legal and secondary navigation" className="flex items-center gap-5 flex-wrap justify-center">
            {[
              { label: "Company", href: "/about" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Blog", href: "/blog" },
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Cookies", href: "/cookie-policy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 rounded-sm"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
