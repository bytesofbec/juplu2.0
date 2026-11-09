import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Eye, Phone } from 'lucide-react';
import { Product } from '../types';
import { SITE_INFO } from '../data/content';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-sky-100 overflow-hidden juplu-card flex flex-col h-full">
      {/* Product Image Section */}
      <div className="relative bg-gradient-to-b from-sky-50 to-white p-6 flex items-center justify-center overflow-hidden min-h-[280px]">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-juplu-dark text-white shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            if (product.fallbackImage) {
              (e.target as HTMLImageElement).src = product.fallbackImage;
            }
          }}
          className="max-h-60 w-auto object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-juplu-cyan mb-1">
            {product.subtitle}
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Quick Nutritional Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.nutritionalHighlights.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Collapsible Section (matching the original template behavior) */}
          {isExpanded && (
            <div className="pt-3 border-t border-gray-100 space-y-3 text-xs sm:text-sm text-gray-600 animate-fadeIn">
              <p className="font-semibold text-gray-800">
                Flavor Profile: <span className="font-normal">{product.flavorProfile}</span>
              </p>
              <div>
                <p className="font-bold text-gray-900 mb-1.5">Key Health Benefits:</p>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                  {product.benefits.slice(0, 4).map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-gray-100 space-y-2 mt-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>Less Info</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Quick View</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onSelect(product)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-juplu-cyan hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Full Details
            </button>
          </div>

          <a
            href={`${SITE_INFO.whatsappUrl}&text=Hi%20Juplu%20team,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Quick WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  );
};

