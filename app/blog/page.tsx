import type { Metadata } from "next";
import { getAllPostsAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";

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
      <section className="section-padding pt-24 md:pt-32 pb-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Intagleo Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight mb-4">
            Engineering Insights
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Technical perspectives from the team building production-ready
            software for the world&apos;s most ambitious companies.
          </p>
        </div>
      </section>

      {/* Post grid with filters + pagination */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          <BlogGrid posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
