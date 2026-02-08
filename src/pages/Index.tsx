import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import EcosystemOverview from "@/components/landing/EcosystemOverview";
import ModulesSection from "@/components/landing/ModulesSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EcosystemOverview />
      <ModulesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
