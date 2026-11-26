import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogSlugsAsync, getPostBySlugAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortableTextBody from "@/components/PortableTextBody";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// ─── Static paths ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getBlogSlugsAsync();
  return slugs.map((slug) => ({ slug }));
}

// ─── SEO metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);
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
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);
  if (!post) notFound();

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

          <h1 className="text-3xl md:text-5xl font-medium customHeading leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/35 mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <p className="text-white/55 text-lg leading-relaxed border-l-2 border-[#3B82F6]/60 pl-5">
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
          <PortableTextBody value={post.body} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
