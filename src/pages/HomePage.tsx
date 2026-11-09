import React, { useState } from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { FactsSection } from '../components/FactsSection';
import { SecondaryBanner } from '../components/SecondaryBanner';
import { GifSection } from '../components/GifSection';
import { VideoSection } from '../components/VideoSection';
import { ContactForm } from '../components/ContactForm';
import { PRODUCTS } from '../data/content';
import { Product } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Products Section */}
      <section className="py-20 bg-juplu-cyan/10 border-b border-sky-100" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Signature Flavors
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Our Products
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-700">
              Handpicked water lily seeds (Makhana) roasted to crisp perfection and blended with authentic Indian aromatic spices.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-juplu-dark hover:bg-black text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <span>View Full Flavor Catalog</span>
              <ArrowRight className="w-4 h-4 text-juplu-cyan" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <FactsSection />

      {/* Secondary Study Buddy Banner Carousel */}
      <div className="px-4 sm:px-6 lg:px-8">
        <SecondaryBanner />
      </div>

      {/* Say NO to Fried Junk Section */}
      <GifSection />

      {/* Video Demonstration */}
      <VideoSection />

      {/* Quick Contact Form */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50 to-juplu-mintLight" id="contact-quick">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Get in Touch with Juplu"
            subtitle="Looking for retail stock, wholesale supply, or customized gift hampers? Reach out to us today."
          />
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

