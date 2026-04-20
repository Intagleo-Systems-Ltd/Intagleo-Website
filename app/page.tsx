import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ClientsSection from "@/components/ClientsSection";
import CTABanner from "@/components/CTABanner";
import IndustriesSection from "@/components/IndustriesSection";
import DifferenceSection from "@/components/DifferenceSection";
import AIStrategySection from "@/components/AIStrategySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <PageBackground />
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <CTABanner />
      <IndustriesSection />
      <DifferenceSection />
      <AIStrategySection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <Footer />
    </main>
  );
}
