import React from 'react';
import { Heart, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-rose-900/30 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <Heart size={18} className="text-rose-400 mr-2" fill="currentColor" />
            <span className="text-white font-medium text-xl tracking-wide">
              s2vverse<span className="text-rose-300">.in</span>
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-rose-200/70 text-sm mb-8 max-w-md">
            A modern love-story social platform for the ones who felt it in silence.
          </p>
          
          {/* Contact & Social */}
         
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent mb-6"></div>
          
          {/* Copyright & Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-center text-rose-200/50 text-sm gap-2 sm:gap-4">
            <div>© {currentYear} s2vverse.in. All rights reserved.</div>
            {/* <div className="hidden sm:block">•</div> */}
            {/* <div className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-rose-400" fill="currentColor" /> by <span className="ml-1 text-rose-300">Sameer</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}