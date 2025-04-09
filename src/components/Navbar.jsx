"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-rose-950/70 backdrop-blur-md shadow-lg shadow-rose-900/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <Heart size={22} className="text-rose-400 group-hover:text-rose-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" />
              <Sparkles size={14} className="absolute -top-1 -right-1 text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-white font-medium text-xl tracking-wide">
                s2vverse<span className="text-rose-300">.in</span>
              </span>
              <span className="text-rose-200/80 text-xs tracking-wider font-light italic">
                We Never Spoke, But The Feed Knew
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-600 text-white hover:from-rose-300 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 text-sm font-medium group">
              <span className="flex items-center gap-2">
                Join Waitlist
                <Heart size={14} className="group-hover:scale-110 transition-all duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-rose-200 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-rose-950/95 to-rose-900/90 backdrop-blur-lg shadow-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.div 
              className="px-4 py-6 space-y-4"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <motion.div 
                className="pt-4 border-t border-rose-800/50"
                variants={menuItemVariants}
              >
                <button className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-600 text-white flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium">
                  Join Waitlist
                  <Heart size={16} fill="currentColor" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}