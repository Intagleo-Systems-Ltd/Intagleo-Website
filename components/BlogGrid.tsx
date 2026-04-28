"use client";
import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import Pagination from "@/components/Pagination";

const PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const authors = Array.from(new Set(posts.map((p) => p.author).filter(Boolean)));
  const hasMultipleAuthors = authors.length > 1;

  const [activeAuthor, setActiveAuthor] = useState("All");
  const [page, setPage] = useState(1);

  const filtered =
    activeAuthor === "All" ? posts : posts.filter((p) => p.author === activeAuthor);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleAuthor(author: string) {
    setActiveAuthor(author);
    setPage(1);
  }

  return (
    <>
      {/* Author filter */}
      {hasMultipleAuthors && (
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...authors].map((author) => (
            <button
              key={author}
              onClick={() => handleAuthor(author)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeAuthor === author
                  ? "bg-[#6366f1]/15 border-[#6366f1]/40 text-[#6366f1]"
                  : "bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {author}
            </button>
          ))}
        </div>
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
                  <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/10 via-transparent to-transparent" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-white/30 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="heading-gradient font-semibold text-base leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[#6366f1] text-xs font-medium">
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
