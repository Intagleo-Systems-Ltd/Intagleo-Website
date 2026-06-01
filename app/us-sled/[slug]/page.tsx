import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../sled.css";
import { sledFontClass } from "../fonts";
import {
  getSledCaseStudyBySlugAsync,
  getSledCaseStudySlugsAsync,
} from "@/lib/providers/sanity";

export const revalidate = 60;

const LOGO = "/us-sled/intagleo-logo.png";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const slugs = await getSledCaseStudySlugsAsync();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getSledCaseStudyBySlugAsync(params.slug);
  if (!study) return {};
  const description =
    study.seo_description ||
    [study.customer, study.contractType, study.value].filter(Boolean).join(" · ") ||
    `${study.title} — Intagleo U.S. SLED past performance.`;
  return {
    title: `${study.title} · Intagleo U.S. SLED`,
    description,
  };
}

export default async function SledCaseStudyDetail({ params }: Props) {
  const study = await getSledCaseStudyBySlugAsync(params.slug);
  if (!study) notFound();

  const meta = [
    study.customer && { dt: "Customer", dd: study.customer },
    study.contractType && { dt: "Contract Type", dd: study.contractType },
    study.value && { dt: "Value", dd: study.value },
  ].filter(Boolean) as { dt: string; dd: string }[];

  return (
    <div className={`sled-root ${sledFontClass}`}>
      {/* slim header */}
      <header className="nav nav-scrolled">
        <div className="wrap nav-in">
          <Link className="brand" href="/us-sled">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Intagleo Systems" className="brand-logo" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-sled">
              U.S. Public
              <br />
              Sector
            </span>
          </Link>
          <a href="/us-sled#contact" className="btn btn-primary nav-cta" style={{ marginLeft: "auto" }}>
            Schedule a Briefing
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="section case-detail">
          <div className="wrap">
            <div className="case-crumb">
              <Link href="/us-sled#work">Past Performance</Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--ink-2)" }}>{study.title}</span>
            </div>

            <h1>{study.title}</h1>

            {meta.length > 0 && (
              <dl className="detail-meta">
                {meta.map((m) => (
                  <div key={m.dt}>
                    <dt>{m.dt}</dt>
                    <dd>{m.dd}</dd>
                  </div>
                ))}
              </dl>
            )}

            {study.pdf_url ? (
              <>
                <div className="pdf-head">
                  <span className="mono-label">Engagement Document</span>
                  <a
                    href={study.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    Open in new tab ↗
                  </a>
                </div>
                <iframe
                  className="pdf-frame"
                  src={study.pdf_url}
                  title={`${study.title} — PDF document`}
                />
              </>
            ) : (
              <div className="pdf-missing">
                The engagement document for this case study is available to qualified primes and
                procurement officers under NDA.{" "}
                <a href="/us-sled#contact" className="link-arrow">
                  Request access →
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-stripe" aria-hidden="true" />
        <div className="wrap footer-bottom">
          <span>© 2026 Intagleo Systems, Inc. · All rights reserved.</span>
          <span className="footer-flag" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
}
