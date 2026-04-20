"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/content";

function formatDate(raw: string): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function ArticleImage({
  src,
  alt,
  className,
  style,
}: {
  src?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (!src) {
    return (
      <div
        className={`bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center ${className ?? ""}`}
        style={style}
      >
        <svg className="w-10 h-10 text-white/10" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} style={style}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
    </div>
  );
}

export default function InsightsSection({ pageSlug }: { pageSlug?: string } = {}) {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const url = pageSlug
          ? `/api/blog/by-page?slug=${encodeURIComponent(pageSlug)}`
          : "/api/blog/featured";
        const response = await fetch(url);
        const data = await response.json();
        setArticles((data.posts ?? []).slice(0, 3));
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [pageSlug]);

  const featured = articles[0];
  const secondary = articles.slice(1, 3);

  if (!loading && pageSlug && articles.length === 0) return null;

  return (
    <section
      id="insights"
      className="bg-[#0a0a0a] py-24 px-6"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ── Header ── */}
        <h2
          className="text-center text-white mb-10"
          style={{
            fontFamily: '"Roobert TRIAL", sans-serif',
            fontSize: "clamp(26px, 3vw, 44px)",
            fontWeight: 500,
            letterSpacing: "-0.5px",
          }}
        >
          Ideas, insights, and what&apos;s next
        </h2>

        {/* ── Dashed top divider ── */}
        <div className="w-full border-t border-dashed border-white/15 mb-0" />

        {loading ? (
          <div className="flex flex-col md:flex-row gap-8 pt-8 pb-8">
            <div className="flex-1 min-w-0 space-y-4">
              <div className="skeleton w-full h-[320px] rounded-2xl" />
              <div className="skeleton h-3 w-24 rounded" />
              <div className="skeleton h-7 w-3/4 rounded" />
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-2/3 rounded" />
            </div>
            <div className="hidden md:block w-px bg-white/10 self-stretch" />
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              {[0, 1].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="skeleton w-[120px] h-[90px] flex-shrink-0 rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <div className="skeleton h-3 w-16 rounded" />
                    <div className="skeleton h-4 w-full rounded" />
                    <div className="skeleton h-4 w-3/4 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-white/30 py-20">No articles available.</p>
        ) : (
          <div className="flex flex-col md:flex-row">

            {/* ── Featured (left) ── */}
            {featured && (
              <div className="flex-1 min-w-0 pr-0 md:pr-8 pt-8 pb-8">
                <ArticleImage
                  src={featured.cover_image}
                  alt={featured.title}
                  className="w-full rounded-2xl mb-6"
                  style={{ height: "320px" }}
                />
                <p className="text-white/35 text-xs mb-3 tracking-wide">
                  {formatDate(featured.date)}
                </p>
                <h3
                  className="text-white mb-3 leading-snug"
                  style={{
                    fontFamily: '"Roobert TRIAL", sans-serif',
                    fontSize: "clamp(20px, 2.2vw, 30px)",
                    fontWeight: 500,
                    letterSpacing: "-0.3px",
                  }}
                >
                  {featured.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-white border border-white/25 hover:border-white/50 rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/5"
                >
                  Read Article
                </Link>
              </div>
            )}

            {/* ── Vertical dashed divider ── */}
            <div className="hidden md:block w-px border-l border-dashed border-white/15 self-stretch mx-0" />

            {/* ── Secondary articles (right) ── */}
            {secondary.length > 0 && (
              <div className="flex-1 min-w-0 pl-0 md:pl-8 flex flex-col">
                {secondary.map((article, idx) => (
                  <div key={article.slug}>
                    {/* Dashed divider above each card (matches top border) */}
                    {idx === 0 && (
                      <div className="w-full border-t border-dashed border-white/15" />
                    )}

                    <div className="flex gap-5 py-8">
                      {/* Thumbnail */}
                      <ArticleImage
                        src={article.cover_image}
                        alt={article.title}
                        className="flex-shrink-0 rounded-xl"
                        style={{ width: "140px", height: "110px" }}
                      />

                      {/* Text */}
                      <div className="flex flex-col justify-between min-w-0">
                        <div>
                          <p className="text-white/35 text-xs mb-2 tracking-wide">
                            {formatDate(article.date)}
                          </p>
                          <h3
                            className="text-white leading-snug mb-2 line-clamp-2"
                            style={{
                              fontFamily: '"Roobert TRIAL", sans-serif',
                              fontSize: "clamp(15px, 1.3vw, 18px)",
                              fontWeight: 500,
                              letterSpacing: "-0.2px",
                            }}
                          >
                            {article.title}
                          </h3>
                          <p className="text-white/35 text-xs leading-relaxed line-clamp-2 mb-4">
                            {article.excerpt}
                          </p>
                        </div>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="self-start inline-flex items-center text-sm text-white border border-white/25 hover:border-white/50 rounded-full px-4 py-2 transition-all duration-200 hover:bg-white/5"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>

                    {/* Dashed divider between cards */}
                    {idx < secondary.length - 1 && (
                      <div className="w-full border-t border-dashed border-white/15" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
