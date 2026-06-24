import type { Metadata } from "next";
import "../us-sled2/sled2.css";
import { sledFontClass } from "./fonts";
import SledLanding from "@/components/us-sled2/SledLanding";
import { getAllSledCaseStudiesAsync } from "@/lib/providers/sanity";
import type { SledCaseStudy } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "U.S. Public Sector · Intagleo Systems",
  description:
    "Intagleo Systems is the engineering partner U.S. state, local, and education agencies bring in to modernize legacy systems, migrate to the cloud, and rebuild citizen-facing services.",
  alternates: { canonical: "https://intagleo.com/us-sled" },
};

export default async function UsSledPage() {
  let cases: SledCaseStudy[] = [];
  try {
    cases = await getAllSledCaseStudiesAsync();
  } catch {
    cases = [];
  }

  return (
    <div className={`sled-root ${sledFontClass}`}>
      <SledLanding cases={cases} />
    </div>
  );
}
