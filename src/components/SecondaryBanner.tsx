import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SECONDARY_SLIDES } from '../data/content';

export const SecondaryBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SECONDARY_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === SECONDARY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SECONDARY_SLIDES.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 my-10 rounded-2xl shadow-xl max-w-7xl mx-auto">
      <div className="relative h-[240px] sm:h-[340px] md:h-[420px] w-full">
        {SECONDARY_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                <div className="p-6 sm:p-10 text-white max-w-xl">
                  <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                    {slide.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-base text-gray-200">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center space-x-2">
        {SECONDARY_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              index === current ? 'w-6 bg-juplu-cyan' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to secondary slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

