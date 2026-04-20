"use client";

import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";

const serviceLinks = [
  {
    label: "Custom Software", href: "/custom-software",
    desc: "Purpose-built software from architecture to production.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M5 7l-3 3 3 3M15 7l3 3-3 3M11 4l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Staff Augmentation", href: "/staff-augmentation",
    desc: "Pre-vetted engineers embedded in your team, on demand.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="13" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 16c0-3 2.5-5 6-5M19 16c0-3-2.5-5-6-5M10 11c3.5 0 6 2 6 5H4c0-3 2.5-5 6-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: "Data & Analytics", href: "/data-analytics",
    desc: "Modern data stacks, pipelines, and BI that drive decisions.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><rect x="2" y="12" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="7" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="3" height="15" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    label: "Cloud & DevOps", href: "/cloud-devops",
    desc: "Scalable infrastructure, CI/CD, and automated deployments.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M15 13a4 4 0 0 0-4-6.9A5 5 0 1 0 6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 13v4M8 15l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "QA & Testing", href: "/qa-services",
    desc: "Test coverage and QA processes that let you ship with confidence.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M10 2l1.5 4.5H16l-3.7 2.7 1.4 4.3L10 11l-3.7 2.5 1.4-4.3L4 6.5h4.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Mobile Development", href: "/mobile-dev",
    desc: "Native and cross-platform iOS & Android apps built to retain users.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><rect x="6" y="1" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="6" y="15" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="17" r="0.75" fill="currentColor"/><path d="M8 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: "Legacy Modernisation", href: "/legacy-modernization",
    desc: "Migrate outdated systems to modern cloud-native architecture.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M4 10a6 6 0 0 1 10.5-4M4 10H1l3 3 3-3H4zM16 10a6 6 0 0 1-10.5 4M16 10h3l-3-3-3 3h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Embedded & IoT", href: "/embedded-iot",
    desc: "Firmware, protocol integration, and IoT platforms for connected devices.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><rect x="3" y="7" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="11.5" r="1.5" fill="currentColor"/></svg>,
  },
];

const industryLinks: { label: string; href: string; desc: string; icon: React.ReactNode }[] = [
  {
    label: "Digital Signage",
    href: "/digital-signage",
    desc: "High-performance software for signage networks at scale.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="1" y="3" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Facilities Management",
    href: "/facilities-management",
    desc: "Smart building platforms connecting HVAC, access, and operations.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="4" y="2" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 6h4M8 10h4M8 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "E-Commerce & Retail",
    href: "/ecommerce-retail",
    desc: "Commerce infrastructure that converts at every touchpoint.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M3 3h2l2.5 8h7l2-5.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Healthcare",
    href: "/healthcare",
    desc: "HIPAA-compliant clinical platforms and interoperability solutions.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Transportation",
    href: "/transportation",
    desc: "Fleet tracking and logistics platforms built for global scale.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M2 13V8a2 2 0 0 1 2-2h10l2 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7.5 14.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "EdTech",
    href: "/edtech",
    desc: "Learning platforms and LMS architecture built for millions of learners.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M10 3L2 7l8 4 8-4-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 7v6M6 9v5a4 4 0 0 0 8 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Real Estate",
    href: "/real-estate",
    desc: "PropTech platforms that accelerate listings, deals, and property management.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M3 18V9l7-6 7 6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="12" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Travel",
    href: "/travel",
    desc: "Booking engines, GDS integration, and traveller experience platforms.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M3 14l4-8 3 4 2-3 5 7H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Smart Cities & IoT",
    href: "/smart-cities",
    desc: "IoT device management and urban data platforms that run cities smarter.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Fintech",
    href: "/fintech",
    desc: "Payment infrastructure, compliance automation, and embedded finance APIs.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 9h16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 13h2M11 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "HR & Recruitment",
    href: "/hr-recruitment",
    desc: "ATS, HRIS, and people analytics platforms that accelerate hiring.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 10l1.5 1.5L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const companyLinks = [
  {
    label: "Blog", href: "/blog",
    desc: "Insights, guides, and technical articles from our engineering team.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M4 4h12M4 8h12M4 12h8M4 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: "Case Studies", href: "/case-studies",
    desc: "Real results from real projects across every industry we serve.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M9 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 2l6 7M9 2v7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Testimonials", href: "/testimonials",
    desc: "What our clients say about working with Intagleo.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M4 8c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-4 3V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Contact", href: "/contact",
    desc: "Start a conversation with our team.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: "Privacy Policy", href: "/privacy-policy",
    desc: "How we handle your data and protect your privacy.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Cookie Policy", href: "/cookie-policy",
    desc: "Our use of cookies and tracking technologies.",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="7" r="1" fill="currentColor"/><circle cx="13" cy="12" r="1" fill="currentColor"/><circle cx="8" cy="13" r="1" fill="currentColor"/></svg>,
  },
];

function smoothScrollTo(href: string) {
  if (href === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [companyOpen, setCompanyOpen]   = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#") || (href === "/" && isHome)) {
        e.preventDefault();
        smoothScrollTo(href);
        setMenuOpen(false);
      }
    },
    [isHome]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080f]/95 backdrop-blur-md"
          : "bg-[#06080f]/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-padding mx-auto max-w-[1400px] flex items-center justify-between h-[60px]">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2 w-[170px] h-[52px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-nav.png" alt="Intagleo icon" className="h-full w-auto flex-shrink-0" />
          <div className="flex flex-col gap-1">
            {/* <span className="text-white font-medium text-[13px] tracking-[0.2em] uppercase leading-none">
              INTAGLEO
            </span>
            <span className="text-[#e8341c] text-[10px] tracking-[0.18em] font-normal leading-none">
              systems
            </span> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Home
          </a>

          {/* AI Transformation - highlighted */}
          <a
            href="/ai-transformation"
            className="relative flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundImage: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Transformation
          </a>

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Our Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="fixed rounded-2xl overflow-hidden"
                  style={{
                    top: "68px",
                    left: "max(112px, calc((100vw - 800px) / 2 + 112px))",                    width: "760px",
                    background: "#0d0f1c",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                    zIndex: 200,
                  }}
                >
                  {/* Header row */}
                  <div className="px-5 pt-3 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[11px] text-white/40 uppercase tracking-widest">Our Services</p>
                  </div>
                  {/* Grid of services */}
                  <div className="grid grid-cols-2 gap-0.5 p-1.5">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
                      >
                        <span className="text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                          {link.icon}
                        </span>
                        <span className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-none">
                            {link.label}
                          </span>
                          <span className="text-xs text-white/35 group-hover:text-white/50 transition-colors leading-snug">
                            {link.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  {/* Footer row */}
                  <div className="px-4 py-2.5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-white/25">Not sure where to start?</span>
                    <Link
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-[#e8341c] hover:text-[#ff5540] transition-colors font-medium"
                    >
                      Talk to us →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            ref={industriesRef}
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              onClick={() => setIndustriesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Industries
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="fixed rounded-2xl overflow-hidden"
                  style={{
                    top: "68px",
                    left: "max(112px, calc((100vw - 800px) / 2 + 112px))",
                    width: "760px",
                    background: "#0d0f1c",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                    zIndex: 200,
                  }}
                >
                  <div className="px-5 pt-3 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[11px] text-white/40 uppercase tracking-widest">Industries</p>
                  </div>
                  {industryLinks.length > 0 ? (
                    <div className="grid grid-cols-2 gap-0.5 p-1.5">
                      {industryLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="group flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
                        >
                          <span className="text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                            {link.icon}
                          </span>
                          <span className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-none">
                              {link.label}
                            </span>
                            <span className="text-xs text-white/35 group-hover:text-white/50 transition-colors leading-snug">
                              {link.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-5 py-6 text-xs text-white/30">Coming soon</div>
                  )}
                  <div className="px-4 py-2.5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-white/25">Explore by industry</span>
                    <Link
                      href="/contact"
                      onClick={() => setIndustriesOpen(false)}
                      className="text-xs text-[#e8341c] hover:text-[#ff5540] transition-colors font-medium"
                    >
                      Talk to us →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Our Products */}
          <a
            href="/our-products"
            className="text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Our Products
          </a>

          {/* Company dropdown */}
          <div
            ref={companyRef}
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              onClick={() => setCompanyOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Company
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="fixed rounded-2xl overflow-hidden"
                  style={{
                    top: "68px",
                    right: "max(112px, calc((100vw - 1400px) / 2 + 112px))",
                    width: "480px",
                    background: "#0d0f1c",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                    zIndex: 200,
                  }}
                >
                  <div className="px-5 pt-3 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[11px] text-white/40 uppercase tracking-widest">Company</p>
                  </div>
                  <div className="grid grid-cols-2 gap-0.5 p-1.5">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setCompanyOpen(false)}
                        className="group flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
                      >
                        <span className="text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                          {link.icon}
                        </span>
                        <span className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-none">
                            {link.label}
                          </span>
                          <span className="text-xs text-white/35 group-hover:text-white/50 transition-colors leading-snug">
                            {link.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Button href="/contact" variant="primary" className="text-sm px-5 py-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="lg:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                width="22" height="22" viewBox="0 0 22 22" fill="none"
              >
                <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
                width="22" height="22" viewBox="0 0 22 22" fill="none"
              >
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#06080f]/98 border-t border-white/5"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {/* Home */}
              <motion.a
                href="/"
                onClick={(e) => handleNavClick(e, "/")}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.22 }}
                className="text-white/65 hover:text-white transition-colors py-2.5 text-sm"
              >
                Home
              </motion.a>

              {/* AI Transformation */}
              <motion.a
                href="/ai-transformation"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.22 }}
                className="text-sm font-medium py-2.5 whitespace-nowrap"
                style={{
                  backgroundImage: "linear-gradient(135deg, #e8341c 0%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Transformation
              </motion.a>

              {/* Services accordion */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.22 }}
              >
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-white/65 hover:text-white transition-colors py-2.5 text-sm"
                >
                  Services
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l border-white/8"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-white/50 hover:text-white transition-colors py-2 text-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Industries accordion */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.22 }}
              >
                <button
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-white/65 hover:text-white transition-colors py-2.5 text-sm"
                >
                  Industries
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l border-white/8"
                    >
                      {industryLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-white/50 hover:text-white transition-colors py-2 text-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Our Products */}
              <motion.a
                href="/our-products"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.22 }}
                className="text-white/65 hover:text-white transition-colors py-2.5 text-sm"
              >
                Our Products
              </motion.a>

              {/* Company accordion */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.22 }}
              >
                <button
                  onClick={() => setMobileCompanyOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-white/65 hover:text-white transition-colors py-2.5 text-sm"
                >
                  Company
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l border-white/8"
                    >
                      {companyLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-white/50 hover:text-white transition-colors py-2 text-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.22 }}
                className="mt-3"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
