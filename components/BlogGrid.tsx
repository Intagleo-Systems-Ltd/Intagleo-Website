"use client";
import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import Pagination from "@/components/Pagination";

const PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage]   = useState(1);

  const q = query.trim().toLowerCase();

  const filtered = posts.filter((p) => {
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      (p.author ?? "").toLowerCase().includes(q) ||
      (p.category ?? "").toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible    = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleSearch(v: string) {
    setQuery(v);
    setPage(1);
  }

  return (
    <>
      {/* Search */}
      <div className="relative mb-10">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none"
          viewBox="0 0 16 16" fill="none"
        >
          <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search posts by title, author, or category…"
          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.05] transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => handleSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Results count when searching */}
      {q && (
        <p className="text-white/30 text-xs mb-6">
          {filtered.length} {filtered.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
        </p>
      )}

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-white/30 text-sm">No posts found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl bg-[#0d0d10] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-video bg-[#161618] overflow-hidden">
                {post.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-transparent" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-white/30 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                  {post.category && (
                    <>
                      <span>·</span>
                      <span className="text-[#3B82F6]/70">{post.category}</span>
                    </>
                  )}
                </div>
                <h2 className="customHeading font-medium text-base leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[#3B82F6] text-xs font-medium">
                  Read post
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M9 4L13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      )}
    </>
  );
}
