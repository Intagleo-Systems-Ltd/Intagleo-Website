import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudySlugs, getCaseStudyBySlug, markdownToHtml } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

// ─── Static paths ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

// ─── SEO metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  const description =
    study.seo_description || `${study.challenge.slice(0, 155)}…`;

  return {
    title: `${study.title} , Intagleo Case Study`,
    description,
    openGraph: {
      title: study.title,
      description,
      type: "article",
      ...(study.cover_image && { images: [{ url: study.cover_image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description,
      ...(study.cover_image && { images: [study.cover_image] }),
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const contentHtml = await markdownToHtml(study.body);

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 pb-12">
        <div className="mx-auto max-w-[1000px]">
          <div className="flex items-center gap-3 text-xs text-white/30 mb-6">
            <a href="/case-studies" className="hover:text-white/60 transition-colors">
              Case Studies
            </a>
            <span>/</span>
            <span className="text-white/50">{study.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs text-[#e8341c] bg-[#e8341c]/10 border border-[#e8341c]/20 rounded-full px-3 py-1">
              {study.industry}
            </span>
            <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              {study.client}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Cover image */}
      {study.cover_image && (
        <div className="section-padding pb-12">
          <div className="mx-auto max-w-[1000px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.cover_image}
              alt={study.title}
              className="w-full rounded-2xl object-cover aspect-video"
            />
          </div>
        </div>
      )}

      {/* Challenge / Solution / Results cards */}
      <section className="section-padding pb-12">
        <div className="mx-auto max-w-[1000px] grid md:grid-cols-3 gap-4">
          {[
            { label: "Challenge", value: study.challenge, accent: false },
            { label: "Solution",  value: study.solution,  accent: false },
            { label: "Results",   value: study.results,   accent: true  },
          ].map(({ label, value, accent }) => (
            <div
              key={label}
              className={`rounded-2xl p-6 border ${
                accent
                  ? "bg-[#e8341c]/8 border-[#e8341c]/20"
                  : "bg-[#0d0d10] border-white/8"
              }`}
            >
              <p className={`text-xs uppercase tracking-widest mb-3 font-semibold ${accent ? "text-[#e8341c]" : "text-white/30"}`}>
                {label}
              </p>
              <p className="text-white/65 text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

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
