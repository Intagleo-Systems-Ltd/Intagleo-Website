import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogSlugsAsync, getPostBySlugAsync } from "@/lib/providers/sanity";
import { markdownToHtml } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

// ─── Static paths ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getBlogSlugsAsync();
  return slugs.map((slug) => ({ slug }));
}

// ─── SEO metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlugAsync(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} , Intagleo Blog`,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.cover_image && { images: [{ url: post.cover_image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seo_description || post.excerpt,
      ...(post.cover_image && { images: [post.cover_image] }),
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlugAsync(params.slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.body);

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 pb-12">
        <div className="mx-auto max-w-[800px]">
          <div className="flex items-center gap-3 text-xs text-white/30 mb-6">
            <a href="/blog" className="hover:text-white/60 transition-colors">
              Blog
            </a>
            <span>/</span>
            <span className="text-white/50">{post.title}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/35 mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <p className="text-white/55 text-lg leading-relaxed border-l-2 border-[#e8341c]/60 pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover image */}
      {post.cover_image && (
        <div className="section-padding pb-12">
          <div className="mx-auto max-w-[800px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full rounded-2xl object-cover aspect-video"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="section-padding pb-24">
        <div className="mx-auto max-w-[800px]">
          <article
            className="prose prose-invert prose-sm md:prose-base max-w-none
              prose-headings:text-white prose-headings:font-semibold
              prose-p:text-white/60 prose-p:leading-relaxed
              prose-a:text-[#e8341c] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white/90
              prose-li:text-white/60
              prose-hr:border-white/10
              prose-blockquote:border-l-[#e8341c] prose-blockquote:text-white/50
              prose-code:text-[#e8341c] prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
