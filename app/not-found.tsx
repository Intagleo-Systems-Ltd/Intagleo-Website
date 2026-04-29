import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center section-padding py-32">
        <div className="mx-auto max-w-[1400px] w-full">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

            {/* Left: 404 number */}
            <div className="flex-shrink-0 select-none" aria-hidden="true">
              <p
                className="text-[160px] md:text-[220px] lg:text-[280px] font-bold leading-none tracking-tighter"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0.04) 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                404
              </p>
              {/* Glow under number */}
              <div className="absolute top-1/2 left-8 w-64 h-32 bg-[#3B82F6]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>

            {/* Right: message + links */}
            <div className="flex flex-col justify-center pt-0 lg:pt-16">
              <p className="text-[#3B82F6] text-xs uppercase tracking-widest font-semibold mb-5">
                Page not found
              </p>
              <h1 className="text-3xl md:text-4xl font-bold heading-gradient leading-tight mb-5 max-w-sm">
                This page doesn&apos;t exist yet.
              </h1>
              <p className="text-white/40 text-base leading-relaxed max-w-sm mb-10">
                The link might be broken, the page may have moved, or you may have typed the address incorrectly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  Contact us
                </Link>
              </div>

              {/* Quick links */}
              <div className="mt-12 pt-10 border-t border-white/[0.06]">
                <p className="text-white/25 text-xs uppercase tracking-widest mb-5">Popular pages</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Our work",    href: "/case-studies" },
                    { label: "Services",    href: "/custom-software" },
                    { label: "About us",    href: "/about" },
                    { label: "Careers",     href: "/join-us" },
                    { label: "Blog",        href: "/blog" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm border border-white/[0.07] hover:border-white/20 px-4 py-1.5 rounded-full transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
