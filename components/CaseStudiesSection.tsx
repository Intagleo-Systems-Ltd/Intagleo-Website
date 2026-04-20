"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CaseStudyCard {
  index: number;
  title: string;
  description: string;
  riveUrl?: string;
  coverImage?: string;
  slug: string;
}

// ─── Single sticky card (Olivier Larose technique) ────────────────────────────
function Card({
  i,
  n,
  card,
  progress,
}: {
  i: number;
  n: number;
  card: CaseStudyCard;
  progress: MotionValue<number>;
}) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Per-card: inner media scales 1.4 → 1 as card scrolls into view
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const mediaScale = useTransform(cardProgress, [0, 1], [1.4, 1]);

  // Global: card shrinks as newer cards stack on top
  const targetScale = 1 - (n - 1 - i) * 0.05;
  const cardScale = useTransform(progress, [i / n, 1], [1, targetScale]);

  // Rive animation
  useEffect(() => {
    if (!card.riveUrl || !canvasRef.current) return;
    let r: any;
    (async () => {
      try {
        const { Rive, Layout, Fit, Alignment } = await import("@rive-app/canvas");
        r = new Rive({
          src: card.riveUrl!,
          canvas: canvasRef.current!,
          autoplay: true,
          layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
          onLoad: () => r.resizeDrawingSurfaceToCanvas(),
        });
      } catch (e) {
        console.warn("Rive load error", i, e);
      }
    })();
    return () => { try { r?.cleanup?.(); } catch {} };
  }, [card.riveUrl, i]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      <motion.div
        style={{
          scale: cardScale,
          transformOrigin: "top center",
          top: `${i * 20}px`,
          position: "relative",
          width: "min(1260px, 95vw)",
          height: "clamp(500px, 65vh, 660px)",
          borderRadius: "1.5rem",
          overflow: "hidden",
          display: "flex",
          background: "#0c0f1a",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 32px 100px rgba(0,0,0,0.8)",
        }}
      >
        {/* ── Left: media panel ── */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ width: "65%" }}
        >
          <motion.div
            style={{ scale: mediaScale }}
            className="absolute inset-0"
          >
            {/* Cover image as base layer */}
            {card.coverImage && (
              <Image
                src={card.coverImage}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width:1260px) 65vw, 820px"
              />
            )}
            {/* Rive canvas on top */}
            {card.riveUrl && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
            )}
            {/* Fallback gradient */}
            {!card.coverImage && !card.riveUrl && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0d1520 0%, #090d18 50%, #060b14 100%)",
                }}
              />
            )}
          </motion.div>

          {/* Right-edge fade into card background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 55%, #0c0f1a 100%)",
            }}
          />
        </div>

        {/* ── Right: text panel ── */}
        <div
          className="relative flex flex-col justify-between flex-1 p-12"
          style={{ background: "#0c0f1a" }}
        >
          <div>
            <h3
              className="text-white font-medium mb-6 leading-snug"
              style={{
                fontFamily: '"Roobert TRIAL", sans-serif',
                fontSize: "clamp(22px, 2vw, 32px)",
                letterSpacing: "-0.3px",
              }}
            >
              {card.title}
            </h3>

            <p
              className="text-white/50 leading-relaxed mb-10 line-clamp-6"
              style={{
                fontFamily: '"Roobert TRIAL", sans-serif',
                fontSize: "clamp(13px, 1vw, 16px)",
              }}
            >
              {card.description}
            </p>

            <a
              href={`/case-studies/${card.slug}`}
              className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-full transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: '"Roobert TRIAL", sans-serif',
                fontSize: "15px",
                padding: "12px 36px",
              }}
            >
              Read More
            </a>
          </div>

          {/* Muted index */}
          <div
            className="text-right select-none"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(48px, 5vw, 72px)",
              fontWeight: 600,
              color: "rgba(255,255,255,0.06)",
              lineHeight: 1,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function CaseStudiesSection({ pageSlug }: { pageSlug?: string } = {}) {
  const [cards, setCards] = useState<CaseStudyCard[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = pageSlug
      ? `/api/case-studies/by-page?slug=${encodeURIComponent(pageSlug)}`
      : "/api/case-studies";
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const all = data.caseStudies ?? [];
        const mapped: CaseStudyCard[] = all
          .filter((cs: any) => cs.rive_url || cs.cover_image)
          .slice(0, 4)
          .map((cs: any, i: number) => ({
            index: i,
            title: cs.title,
            description: cs.challenge,
            riveUrl: cs.rive_url,
            coverImage: cs.cover_image,
            slug: cs.slug,
          }));
        setCards(mapped);
        setLoaded(true);
      })
      .catch(() => { setLoaded(true); });
  }, [pageSlug]);

  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll progress across the entire sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (loaded && pageSlug && cards.length === 0) return null;

  const n = cards.length || 4;

  return (
    <ReactLenis root>
      <div className="bg-[#0a0a0a]">
        {/* ── Header ── */}
        <div className="text-center pt-28 pb-16 px-6">
          <h2
            className="text-white font-medium mb-4"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(28px, 3.5vw, 48px)",
              letterSpacing: "-1px",
            }}
          >
            The work speaks best.
          </h2>
          <p
            className="text-white/50"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(14px, 1.1vw, 17px)",
            }}
          >
            See how we&apos;ve helped businesses turn complex challenges into
            scalable digital solutions.
          </p>
        </div>

        {/* ── Sticky cards ── */}
        <div ref={containerRef} style={{ height: `${n * 100}vh` }}>
          {cards.map((card, i) => (
            <Card
              key={card.slug}
              i={i}
              n={n}
              card={card}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* ── View all CTA ── */}
        <div className="flex justify-center py-20">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-full transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "15px",
              padding: "14px 40px",
            }}
          >
            View all case studies
          </a>
        </div>
      </div>
    </ReactLenis>
  );
}
