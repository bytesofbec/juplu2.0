import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, SITE_INFO } from '../data/content';

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black shadow-lg">
      <div className="relative h-[340px] sm:h-[480px] md:h-[580px] lg:h-[660px] w-full">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Banner Image */}
              <img
                src={slide.image}
                alt={slide.title}
                onError={(e) => {
                  if (slide.fallback) {
                    (e.target as HTMLImageElement).src = slide.fallback;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 flex items-end md:items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 md:pb-0">
                  <div className="max-w-2xl text-white space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-juplu-cyan/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      100% Handpicked Water Lily Seeds
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-medium drop-shadow">
                      {slide.subtitle}
                    </p>
                    <div className="pt-2 sm:pt-4 flex flex-wrap gap-3">
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-juplu-cyan hover:bg-sky-500 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg transition-all hover:scale-105"
                      >
                        Explore Flavors
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={SITE_INFO.bulkOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold text-sm sm:text-base tracking-wide border border-white/40 shadow-lg transition-all"
                      >
                        Bulk Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === current ? 'w-8 bg-juplu-cyan' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

