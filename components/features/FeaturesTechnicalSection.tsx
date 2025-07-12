import {  Sparkles, Cloud, Link2 } from 'lucide-react';

// Features Technical Section custom component
export default function FeaturesTechnicalSection() {
    return (
        <section className="py-16 px-4 md:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Built for Performance & Scale
              </h2>
              <p className="text-kings-silver/80 max-w-2xl mx-auto">
                ArtickeCanvas is engineered with modern technologies to ensure reliability, speed, and scalability for creators of all levels.
              </p>
            </div>        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="frosted p-6 rounded-xl scroll-animate text-center group">
                <Cloud className="w-12 h-12 text-kings-silver mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-kings-white mb-2">Cloud-First Architecture</h3>
                <p className="text-kings-silver/80 text-sm">Built on Supabase and AWS S3 for enterprise-grade reliability and performance.</p>
              </div>  
              <div className="frosted p-6 rounded-xl scroll-animate text-center group">
                <Sparkles className="w-12 h-12 text-kings-silver mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-kings-white mb-2">AI-Enhanced</h3>
                <p className="text-kings-silver/80 text-sm">Powered by advanced AI for audio generation and content optimization.</p>
              </div>
              <div className="frosted p-6 rounded-xl scroll-animate text-center group">
                <Link2 className="w-12 h-12 text-kings-silver mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-kings-white mb-2">Seamless Integration</h3>
                <p className="text-kings-silver/80 text-sm">Save to Supabase, export files in multiple formats, and share content via URLs.</p>
              </div>
            </div>
          </div>
        </section>
    )
}