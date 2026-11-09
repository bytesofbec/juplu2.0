import React from 'react';

export const GifSection: React.FC = () => {
  return (
    <section className="py-12 bg-white/70 backdrop-blur-sm border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Say NO To Unhealthy Deep-Fried Junk
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Switch to smart snacking with zero guilty conscience. Juplu brings pure taste and genuine nourishment.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white inline-block max-w-full">
          <img
            src="/img/NO.gif"
            alt="Say NO to junk - Juplu Healthy Snacking"
            className="w-full max-w-2xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

