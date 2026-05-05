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
        <div className="grid lg:grid-cols-2 items-stretch relative overflow-hidden border border-white/[0.06]" style={{borderRadius: '32px', background: '#0E121D', backdropFilter: 'blur(3px)', minHeight: '520px'}}>
          {/* Left , text content */}
          <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <h2 className="font-semibold text-[#3B82F6] mb-1 leading-none" style={{ fontSize: 'clamp(40px, 5vw, 62px)' }}>
              {accentText}
            </h2>
            <p className="font-semibold text-white mb-5 leading-snug" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>
              {headline}
            </p>
            <p className="text-white/60 font-normal leading-relaxed mb-8 max-w-sm" style={{ fontSize: '16px' }}>
              {body}
            </p>
            <Link
              href={ctaHref}
              className="self-start inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
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
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50"
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
