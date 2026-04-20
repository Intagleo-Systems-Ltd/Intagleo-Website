"use client";

import Link from "next/link";

interface CTABannerProps {
  accentText?: string;
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  accentText = "24 hours.",
  headline = "That's all it takes to get started.",
  body = "Elite development team trusted by CTOs to deliver complex systems, modernize legacy infrastructure, and ship reliable products right on schedule.",
  ctaLabel = "Start the Conversation",
  ctaHref = "/contact?type=start-project",
}: CTABannerProps) {
  return (
    <section className="relative bg-[#0a0a0a] section-padding py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 items-stretch relative overflow-hidden border border-white/[0.06]" style={{borderRadius: '32px', background: '#0E121D', backdropFilter: 'blur(3px)'}}>
          {/* Left , text content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#e8341c] mb-2 leading-none">
              {accentText}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">
              {headline}
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              {body}
            </p>
            <Link
              href={ctaHref}
              className="self-start inline-flex items-center gap-2 bg-[#e8341c] hover:bg-[#c02a16] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Right , GIF at 60% */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cta-bg.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Fade blend into left panel */}
            <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#0E121D] to-transparent" style={{left: '0%', right: '0%'}} />
          </div>
        </div>
      </div>

      {/* Fade into IndustriesSection */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "100px",
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
