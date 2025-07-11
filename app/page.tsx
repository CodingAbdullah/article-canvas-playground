import CTA from "@/components/CTA";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

// Home page of the Article Canvas playground application
export default async function Home() {  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Call to Action */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}