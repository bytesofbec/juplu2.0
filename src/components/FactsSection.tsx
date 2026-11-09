import React from 'react';
import { FACTS } from '../data/content';

export const FactsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-sky-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-700 bg-sky-100 mb-3">
            Pure & Wholesome Goodness
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            We Always Choose Best For You
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            From the seed harvest to your doorstep, every single packet of Juplu satisfies the highest health, purity, and hygiene standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACTS.map((fact) => (
            <div
              key={fact.id}
              className="bg-sky-50/50 hover:bg-sky-50 rounded-2xl p-6 border border-sky-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col items-center group"
            >
              <div className="w-44 h-44 rounded-2xl overflow-hidden bg-white shadow-sm p-3 flex items-center justify-center border border-sky-100/80 mb-5 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={fact.image}
                  alt={fact.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-2 text-center">
                {fact.title}
              </h3>
              {fact.description && (
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                  {fact.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

