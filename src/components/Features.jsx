"use client"
import React from 'react';
import { Eye, MessageCircleHeart, Sparkles } from 'lucide-react';

export default function FeatureHighlights() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-wider uppercase mb-4">
            What's Coming
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Experience <span className="text-rose-300">connection</span> like never before
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Track who silently sees you */}
          <div className="bg-black/30 backdrop-blur-sm border border-rose-500/20 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-500">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6 p-4 inline-flex rounded-full bg-rose-900/30 text-rose-300 group-hover:scale-110 transition-transform duration-500">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-rose-200 transition-colors duration-300">
                Track who silently sees you
              </h3>
              <p className="text-rose-100/70 mb-6 flex-grow">
                Discover who's been viewing your profile without leaving a trace. Uncover the silent admirers in your digital space.
              </p>
              <div className="mt-auto pt-4 border-t border-rose-500/10">
                <span className="text-sm text-rose-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coming soon
                  <Sparkles size={14} className="animate-pulse" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Read the unsaid signals */}
          <div className="bg-black/30 backdrop-blur-sm border border-rose-500/20 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-500">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6 p-4 inline-flex rounded-full bg-rose-900/30 text-rose-300 group-hover:scale-110 transition-transform duration-500">
                <MessageCircleHeart size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-rose-200 transition-colors duration-300">
                Read the unsaid signals through the feed
              </h3>
              <p className="text-rose-100/70 mb-6 flex-grow">
                Our intelligent feed reveals patterns in mutual interests and silent interactions, bringing to light connections you both feel but never expressed.
              </p>
              <div className="mt-auto pt-4 border-t border-rose-500/10">
                <span className="text-sm text-rose-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coming soon
                  <Sparkles size={14} className="animate-pulse" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: When vibes speak louder */}
          <div className="bg-black/30 backdrop-blur-sm border border-rose-500/20 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-500">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6 p-4 inline-flex rounded-full bg-rose-900/30 text-rose-300 group-hover:scale-110 transition-transform duration-500">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-rose-200 transition-colors duration-300">
                When vibes speak louder than words
              </h3>
              <p className="text-rose-100/70 mb-6 flex-grow">
                Experience meaningful connections based on genuine interactions rather than forced conversations. Let your natural presence speak for itself.
              </p>
              <div className="mt-auto pt-4 border-t border-rose-500/10">
                <span className="text-sm text-rose-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coming soon
                  <Sparkles size={14} className="animate-pulse" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}