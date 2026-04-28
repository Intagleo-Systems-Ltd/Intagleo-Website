import type { Metadata } from "next";
import { getAllCaseStudiesAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies , Intagleo",
  description:
    "Real-world engineering outcomes. See how Intagleo has helped enterprises and product teams solve complex technical challenges.",
};

export default async function CaseStudiesPage() {
  const studies = await getAllCaseStudiesAsync();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="section-padding pt-32 pb-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight mb-4">
            Case Studies
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Real problems. Real constraints. Real outcomes. A selection of
            engagements where the engineering made the difference.
          </p>
        </div>
      </section>

      {/* Case study list with filters + pagination */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          <CaseStudiesGrid studies={studies} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
