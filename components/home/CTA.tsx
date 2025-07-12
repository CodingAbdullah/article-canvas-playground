import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Call to Action section component
export default function CTA() {
    return (
        <section className="py-12 px-4 md:px-6 relative">
            <div className="absolute inset-0 bg-gradient-radial from-kings-black/50 to-background pointer-events-none"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="frosted p-8 md:p-12 rounded-2xl overflow-hidden scroll-animate">
                    <div className="absolute inset-0 bg-glass-gradient opacity-50"></div>  
                        <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                            Start Writing Today
                        </h2>           
                        <p className="text-kings-silver/80 mt-4 max-w-2xl mx-auto">
                            Join other people who have already discovered the clarity and focus of ArticleCanvas.
                        </p>
                        <Link href='/editor'>
                            <Button 
                                className="mt-8 bg-kings-silver hover:bg-kings-silver/90 text-kings-black font-medium px-8 py-6 h-auto rounded-xl group"
                                size="lg"
                            >
                                <span>Create Your First Article</span>
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}