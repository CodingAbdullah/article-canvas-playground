import CTA from "@/components/home/CTA";
import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";

// Home page of the Article Canvas playground application
export default async function HomePage() {  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Call to Action */}
      <CTA />
    </div>
  );
}