"use client"
import React, { useState } from 'react';
import { Heart, ArrowRight, Check, AlertCircle } from 'lucide-react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      setSubmitting(true);
      setStatus({ type: '', message: '' });
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Success
      setStatus({ 
        type: 'success', 
        message: data.message || 'Successfully joined the waitlist!' 
      });
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
      
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'Failed to join waitlist. Please try again.' 
      });
      
      // Reset error after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and animated hearts */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900 to-purple-900 z-0">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        
        {/* Small floating hearts */}
        <div className="absolute top-1/3 left-1/5 opacity-20 animate-float">
          <Heart size={24} fill="currentColor" className="text-rose-200" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-20 animate-float-delayed">
          <Heart size={16} fill="currentColor" className="text-rose-200" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20 animate-float-slow">
          <Heart size={20} fill="currentColor" className="text-rose-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-rose-600/20 border border-rose-500/30">
          <span className="text-xs font-medium tracking-wider text-rose-200 uppercase">Coming Soon</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
          We Never Spoke, <br className="hidden sm:block" />
          <span className="font-normal">But <span className="text-rose-300">The Feed</span> Knew</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-rose-100/80 mb-10 max-w-2xl mx-auto font-light">
          A modern love-story social platform for the ones who felt it in silence.
        </p>
        
        {/* CTA Input + Button */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 max-w-md mx-auto">
          <div className="relative flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-4 pr-10 py-3 sm:rounded-l-full rounded-full sm:rounded-r-none bg-black/30 backdrop-blur-sm border border-rose-500/30 text-white placeholder:text-rose-200/50 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
              required
              disabled={submitting}
            />
          </div>
          <button 
            type="submit"
            disabled={submitting}
            className={`px-6 py-3 sm:rounded-r-full rounded-full sm:rounded-l-none font-medium bg-gradient-to-r from-rose-400 to-pink-600 text-white hover:from-rose-300 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-2 
              ${status.type === 'success' ? 'bg-green-500 from-green-400 to-green-600' : ''}
              ${status.type === 'error' ? 'bg-red-500 from-red-400 to-red-600' : ''}
              ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {submitting ? (
              <span>Processing...</span>
            ) : status.type === 'success' ? (
              <>
                <Check size={18} />
                <span>Added!</span>
              </>
            ) : status.type === 'error' ? (
              <>
                <AlertCircle size={18} />
                <span>Failed</span>
              </>
            ) : (
              <>
                <span>Join the Waitlist</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
        
        {/* Status Message */}
        {status.message && (
          <div className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-300' : 'text-rose-300'}`}>
            {status.message}
          </div>
        )}
        
        {/* Additional text */}
        <p className="mt-6 text-rose-200/60 text-sm">
          Be the first to discover connections you never knew existed.
        </p>
      </div>
    </div>
  );
}