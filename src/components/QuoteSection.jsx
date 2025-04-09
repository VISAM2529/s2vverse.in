import React from 'react';
import { Heart } from 'lucide-react';

export default function EmotionalQuoteSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-950 via-purple-900 to-rose-950 opacity-90 z-0"></div>
      
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnptLTYgMGgtNnY2aDZ2LTZ6bS02LTZoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-rose-500 opacity-20">
        <Heart size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-rose-500 opacity-20">
        <Heart size={40} fill="currentColor" />
      </div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Opening quote mark */}
          <div className="text-6xl text-rose-400/20 font-serif mb-8">"</div>
          
          {/* The quote itself */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight max-w-4xl mx-auto">
            Some stories aren't told in texts…
            <br className="hidden sm:block" />
            <span className="relative">
              they live in 
              <span className="font-normal text-rose-300 mx-2">views</span>
              and
              <span className="font-normal text-rose-300 mx-2">vibes</span>.
              <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </span>
          </h2>
          
          {/* Closing quote mark */}
          <div className="text-6xl text-rose-400/20 font-serif mt-8">"</div>
        </div>
      </div>
      
      {/* Diagonal dividers for visual interest */}
      <div className="absolute top-0 left-0 w-full h-12 bg-black transform -skew-y-2"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black transform skew-y-2"></div>
    </section>
  );
}