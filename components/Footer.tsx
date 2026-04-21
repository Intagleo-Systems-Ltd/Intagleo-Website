"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
  { label: "About Us", href: "/contact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Our Products", href: "/our-products" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/contact?type=careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const offices = [
  { code: "US", country: "USA", address: "2670 S White Road Suite #125,\nSan Jose, CA 95148" },
  { code: "GB", country: "United Kingdom", address: "268 Bath Road, Slough\nSL1 4DX" },
  { code: "AE", country: "United Arab Emirates", address: "IFZA Business Park,\nDDP" },
  { code: "PK", country: "Pakistan", address: "13-CCA, DHA Phase 8 – Ex Park View\nLahore, 54792" },
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
  "text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8341c]/60 rounded-sm";

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-50" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#080808]/70 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 section-padding py-24">
            <div className="mx-auto max-w-[1400px] text-center">
              <p className="text-xs text-white/50 uppercase tracking-widest mb-6">Get Started</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Next Chapter is a<br />
                <span className="text-white/35">Technical Decision.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md mx-auto mb-10 leading-relaxed">
                Whether you&apos;re launching a new product or scaling an existing platform, we have the team to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact?type=start-project" variant="primary" className="px-8 py-3.5 rounded-md">
                  Start a Conversation
                </Button>
                <Button href="/case-studies" variant="secondary" className="px-8 py-3.5 rounded-md">
                  See Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Services mega-grid ── */}
      <nav aria-label="Services navigation" className="section-padding pt-14 pb-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
            {serviceColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-4">
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
                          className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#e8341c]/15 text-[#e8341c] leading-none select-none"
                        >
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industries + Company/Legal */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-8 gap-y-10 mt-10 pt-10 border-t border-white/[0.05]">
            <div>
              <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-4">Industries</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3" role="list">
                {industryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`${linkCls} text-sm`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-12 flex-shrink-0">
              <div>
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-4">Company</p>
                <ul className="space-y-3" role="list">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={`${linkCls} text-sm`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-4">Legal</p>
                <ul className="space-y-3" role="list">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={`${linkCls} text-sm`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
                href="tel:+14084694384"
                className={`${linkCls} flex items-center gap-2 text-sm`}
              >
                <svg className="w-4 h-4 flex-shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 408 469 4384
              </a>
              <a
                href="mailto:services@intagleo.com"
                className={`${linkCls} flex items-center gap-2 text-sm`}
              >
                <svg className="w-4 h-4 flex-shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                services@intagleo.com
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
                    className="w-11 h-11 rounded-xl border border-white/[0.1] flex items-center justify-center text-white/45 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8341c]/60"
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
                      className="px-4 py-3 bg-[#e8341c] text-white text-sm font-semibold hover:bg-[#d42e18] transition-colors duration-200 flex-shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8341c]/60"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {offices.map((o) => (
              <address key={o.country} className="not-italic">
                <div className="flex items-center gap-2 mb-2">
                  {/* Country code badge instead of emoji */}
                  <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded border border-white/[0.15] text-white/50 leading-none select-none">
                    {o.code}
                  </span>
                  <p className="text-white/70 text-sm font-medium">{o.country}</p>
                </div>
                <p className="text-white/40 text-xs leading-relaxed whitespace-pre-line">{o.address}</p>
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
              { label: "Company", href: "/contact" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Blog", href: "/blog" },
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Cookies", href: "/cookie-policy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8341c]/60 rounded-sm"
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
