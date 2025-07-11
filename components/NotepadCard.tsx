'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NotepadCardProps {
  className?: string;
}

export default function NotepadCard({ className }: NotepadCardProps) {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className={cn("frosted p-6 rounded-xl scroll-animate group relative overflow-hidden", className)}>
      <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold text-center text-kings-white mb-4">Distraction-Free Writing</h3>
      
      <div className="bg-black/40 rounded-lg p-4 mb-4 border border-white/5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="text-kings-silver/90 font-mono">
            # My Great Idea
          </div>
          <div className="text-kings-silver/70 font-mono leading-relaxed">
            Sometimes the best ideas come when you have the right environment to think...
            <span className={cn("inline-block w-2 h-4 bg-kings-silver/60 ml-1", isTyping && "animate-pulse")}></span>
          </div>
        </div>
      </div>
      
      <p className="text-kings-silver/80 text-center text-sm">
        Clean interface that lets you focus on what matters most - your words.
      </p>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onMouseEnter={() => setIsTyping(true)}
        onMouseLeave={() => setIsTyping(false)}
      ></div>
    </div>
  );
}