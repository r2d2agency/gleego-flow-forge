import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import EcosystemOverview from "@/components/landing/EcosystemOverview";
import ToolsSection from "@/components/landing/ToolsSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EcosystemOverview />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
