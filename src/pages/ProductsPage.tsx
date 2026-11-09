import React, { useState } from 'react';
import { PRODUCTS, SITE_INFO } from '../data/content';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product } from '../types';
import { Sparkles, ShoppingBag, ShieldCheck, Zap, Heart } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'spicy' | 'classic'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'spicy') return p.id.includes('mirch');
    if (activeFilter === 'classic') return p.id.includes('pepper');
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-juplu-mintLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 pt-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            100% Natural & Nutrient Packed
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Our Roasted Makhana Range
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Discover our crunchy super-snacks made from handpicked water lily seeds, slow roasted to perfection and dusted with aromatic spice blends.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-juplu-dark text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-100'
              }`}
            >
              All Flavors ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('spicy')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'spicy'
                  ? 'bg-juplu-dark text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-100'
              }`}
            >
              Spicy & Tangy
            </button>
            <button
              onClick={() => setActiveFilter('classic')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'classic'
                  ? 'bg-juplu-dark text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-sky-50 border border-sky-100'
              }`}
            >
              Classic & Peppery
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Superfood Benefits Table / Callout */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-100 max-w-5xl mx-auto mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Why Choose Juplu Makhana Over Traditional Snacks?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              A nutritional comparison of how our slow-roasted foxnuts elevate your everyday diet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 space-y-2">
              <Zap className="w-6 h-6 text-sky-600" />
              <h4 className="font-extrabold text-gray-900">High Energy & Protein</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contains essential plant protein and slow-burning complex carbs to fuel workouts, study sessions, and workdays.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
              <Heart className="w-6 h-6 text-emerald-600" />
              <h4 className="font-extrabold text-gray-900">Heart & Blood Sugar Friendly</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Low Glycemic Index (GI), high potassium & magnesium, and low sodium support cardiovascular health.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <h4 className="font-extrabold text-gray-900">100% Anti-Aging Enzymes</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Naturally rich in flavonoids like kaempferol and anti-aging enzymes that help repair cell tissues.
              </p>
            </div>
          </div>
        </div>

        {/* Bulk Wholesale Banner */}
        <div className="bg-gradient-to-r from-sky-600 to-juplu-cyan rounded-3xl p-8 sm:p-10 text-white shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black">Distribute or Stock Juplu in Your Store?</h3>
            <p className="text-sky-100 text-sm max-w-xl">
              We offer attractive wholesale margins, reliable supply consistency, and custom retailer displays.
            </p>
          </div>
          <a
            href={SITE_INFO.bulkOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-sky-900 font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-gray-100 transition-all flex-shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            Bulk Inquiry Form
          </a>
        </div>

      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

