import Navbar from "@/components/Navbar";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import FeaturesTechnicalSection from "@/components/features/FeaturesTechnicalSection";
import UseCasesSection from "@/components/home/UseCasesSection";

// Features page component of the ArticleCanvas project
export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 md:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-kings-black"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="staggered-fade-in">
                    <span className="inline-block frosted-light px-4 py-1.5 rounded-full text-sm font-medium text-kings-silver/90 mb-6">
                        Powerful Features
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight mb-6">
                        Everything You Need to <br className="hidden sm:block" /> Create Amazing Content
                    </h1>
                    <p className="text-kings-silver/80 text-xl max-w-2xl mx-auto leading-relaxed">
                        From writing to publishing, ArticleCanvas provides all the tools you need to bring your ideas to life with professional quality and seamless workflow.
                    </p>
                </div>
            </div>
        </section>

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Technical Specifications */}
        <FeaturesTechnicalSection />

        {/* Use Cases */}
        <UseCasesSection /> 
    </div>
  );
}