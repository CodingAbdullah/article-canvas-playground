import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Navbar custom component
export default function Navbar() {
    return (
        <nav className="top-0 left-0 right-0 z-50 frosted border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full frosted-light flex items-center justify-center">
                            <FileText className="w-4 h-4 text-kings-silver" />
                        </div>
                        <span className="text-kings-white font-semibold">ArticleCanvas</span>
                    </Link>
                    
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="text-kings-silver/80 hover:text-kings-white transition-colors">
                            Home
                        </Link>
                        <Link href="/" className="text-kings-silver/80 hover:text-kings-white transition-colors">
                            Features
                        </Link>                        
                        <Link href='/editor'>
                            <Button 
                                className="bg-kings-silver hover:bg-kings-silver/90 text-kings-black font-medium px-4 py-2 h-auto rounded-lg"
                                size="sm"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )   
}