'use client';

import { useState, useEffect } from "react";
import NotepadCard from "@/components/NotepadCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      scrollElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          el.classList.add('animate-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-kings-black"></div>
        
        <div className="max-w-5xl mx-auto z-10 staggered-fade-in">
          <div className="text-center space-y-6">
            <span className="inline-block frosted-light px-4 py-1.5 rounded-full text-sm font-medium text-kings-silver/90 mb-4">
              Minimalist. Elegant. Focused.
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
              The Canvas for Your <br className="hidden sm:block" /> Greatest Ideas
            </h1>
            
            <p className="text-kings-silver/80 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              A beautiful, distraction-free writing environment where your words take center stage.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-kings-silver hover:bg-kings-silver/90 text-kings-black font-medium px-6 py-6 h-auto rounded-xl group transition-all duration-300"
                size="lg"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-kings-silver/30 text-kings-white hover:bg-kings-silver/10 px-6 py-6 h-auto rounded-xl transition-all duration-300"
                size="lg"
              >
                Explore Features
              </Button>
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
      
      {/* Features Section */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-kings-black/90 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium text-kings-silver/90 border border-kings-silver/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-kings-white">
              An Editor That Gets Out of Your Way
            </h2>
            <p className="text-kings-silver/80 mt-4 max-w-2xl mx-auto">
              Crafted with care to provide the perfect balance of simplicity and functionality for writers who appreciate quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NotepadCard className="scroll-animate" />
            
            <div className="frosted p-6 rounded-xl scroll-animate group">
              <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-kings-white">Beautiful Typography</h3>
              <p className="text-kings-silver/80 text-center mt-4">
                Carefully crafted typography that makes long-form writing and reading a pleasure.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="frosted p-6 rounded-xl scroll-animate group">
              <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-kings-white">Automatic Saving</h3>
              <p className="text-kings-silver/80 text-center mt-4">
                Never lose your work with seamless automatic saving to keep your ideas safe.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-radial from-kings-black/50 to-background pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="frosted p-8 md:p-12 rounded-2xl overflow-hidden scroll-animate">
            <div className="absolute inset-0 bg-glass-gradient opacity-50"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Start Writing Today
              </h2>
              
              <p className="text-kings-silver/80 mt-4 max-w-2xl mx-auto">
                Join thousands of writers who have already discovered the clarity and focus our platform provides.
              </p>
              
              <Button 
                className="mt-8 bg-kings-silver hover:bg-kings-silver/90 text-kings-black font-medium px-8 py-6 h-auto rounded-xl group"
                size="lg"
              >
                <span>Create Your First Note</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 border-t border-kings-silver/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full frosted-light flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <span className="text-kings-white font-semibold">NoteCanvas</span>
            </div>
            
            <div className="text-kings-silver/60 text-sm">
              © {new Date().getFullYear()} NoteCanvas. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}