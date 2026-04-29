import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Intagleo",
  description:
    "Intagleo is a 20+ year software engineering firm that builds production-ready systems for enterprises and ambitious product teams in 18 countries worldwide.",
};

export default function About() {
  return <AboutPage />;
}
