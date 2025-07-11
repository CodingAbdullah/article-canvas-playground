import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Hero Section custom component
export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-kings-black"></div>
        
        <div className="max-w-5xl mx-auto z-10 staggered-fade-in">
          <div className="text-center space-y-6">
            <span className="inline-block frosted-light px-4 py-1.5 rounded-full text-sm font-medium text-kings-silver/90 mb-4">
              Minimalist. Elegant. Focused.
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
              The Canvas for Your <br className="hidden sm:block" /> Greatest Insights
            </h1>
            
            <p className="text-kings-silver/80 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              A beautiful, clean writing environment where you detail your inner-most thoughts.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href='/editor'>
                <Button 
                  className="bg-kings-silver hover:bg-kings-silver/90 text-kings-black font-medium px-6 py-6 h-auto rounded-xl group transition-all duration-300"
                  size="lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href='/features'>
                <Button 
                  variant="outline" 
                  className="border-kings-silver/30 text-kings-white hover:bg-kings-silver/10 px-6 py-6 h-auto rounded-xl transition-all duration-300"
                  size="lg"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-10 h-10 flex items-center justify-center rounded-full frosted-light">
            <svg className="w-4 h-4 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    )
}