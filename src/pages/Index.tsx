import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeTechSection from "@/components/HomeTechSection";
import HomeProductsPreview from "@/components/HomeProductsPreview";
import HomeInfraIPSection from "@/components/HomeInfraIPSection";
import HomeResearchSection from "@/components/HomeResearchSection";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import PartnershipCTA from "@/components/PartnershipCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <HomeTechSection />
    <HomeProductsPreview />
    <HomeInfraIPSection />
    <HomeResearchSection />
    <HomeServicesPreview />
    <PartnershipCTA />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
