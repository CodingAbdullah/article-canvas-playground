import { 
    Download, 
    Save, 
    FileText, 
    Volume2, 
    Palette, 
    Database, 
  } from "lucide-react";
import FeatureType from "../types/FeatureType";

// Features list constant
const features: FeatureType[] = [
    {
      icon: Download,
      title: "Downloadable Article Files",
      description: "Export your articles in multiple formats including audio, PDF, TXT, Markdown. Keep your work accessible across all platforms and devices.",
      benefits: ["Multiple export formats", "High-quality formatting", "Cross-platform compatibility", "Offline access"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Save,
      title: "Smart Auto-Save & URL Generation",
      description: "Every article can be saved to Supabase with a unique URL. Share your work instantly or return to it anytime with server-side rendering for optimal performance.",
      benefits: ["Automatic cloud backup", "Unique shareable URLs", "Server-side rendering", "Instant access"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: FileText,
      title: "Multi-Format Writing Support",
      description: "Write in Markdown, plain text, or Medium-style. Switch between formats seamlessly while maintaining content integrity.",
      benefits: ["Markdown support", "Plain text", "Medium article style", "Format conversion"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Volume2,
      title: "AI-Powered Audio Generation",
      description: "Transform your written content into high-quality audio files using advanced text-to-speech technology. Perfect for creating and listening to audio files.",
      benefits: ["Natural voice synthesis", "Multiple voice options", "High-quality audio", "Accessibility support"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Palette,
      title: "Medium-Style Content Creation",
      description: "Create beautiful, publication-ready articles with Medium-inspired formatting. Rich text editing with focus on readability.",
      benefits: ["Rich text editor", "Beautiful typography", "Publication-ready", "Professional layouts"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Database,
      title: "S3 Cloud Storage Integration",
      description: "Articles in different formats can be saved with the help of AWS S3. Reliable, scalable storage for all your article file formats.",
      benefits: ["Unlimited storage", "99.9% uptime", "Global CDN", "Secure backups"],
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  export default features;