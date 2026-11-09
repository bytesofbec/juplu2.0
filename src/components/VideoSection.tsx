import React from 'react';
import { SITE_INFO } from '../data/content';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-juplu-cyan/15 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white/80 mb-2">
            Watch Juplu In Action
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Discover The Juplu Difference
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            See how our premium Makhana is harvested, roasted, and perfected for crunch lovers.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${SITE_INFO.youtubeVideoId}`}
            title="Juplu Healthy Snacks Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

