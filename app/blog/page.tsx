import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog , Intagleo",
  description:
    "Engineering insights, technical deep-dives, and perspectives on software development from the Intagleo team.",
};

export default async function BlogPage() {
  const posts = await getAllPostsAsync();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="section-padding pt-32 pb-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Intagleo Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Engineering Insights
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Technical perspectives from the team building production-ready
            software for the world&apos;s most ambitious companies.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          {posts.length === 0 ? (
            <p className="text-white/30 text-sm">No posts yet , check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl bg-[#0d0d10] border border-white/8 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Cover image */}
                  <div className="aspect-video bg-[#161618] overflow-hidden">
                    {post.cover_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#e8341c]/10 via-transparent to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-white/30 mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-white/90 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[#e8341c] text-xs font-medium">
                      Read post
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
