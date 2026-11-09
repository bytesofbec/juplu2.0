import React from 'react';
import { X, CheckCircle, Flame, Shield, HeartHandshake, Phone } from 'lucide-react';
import { Product } from '../types';
import { SITE_INFO } from '../data/content';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 text-gray-700 shadow-md transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-sky-500 to-juplu-cyan p-6 text-white">
          <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm mb-2">
            {product.badge || 'Roasted Super-Snack'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {product.title}
          </h3>
          <p className="text-sky-100 text-sm mt-1">{product.subtitle}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Image & Quick Specs */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 bg-sky-50 rounded-xl overflow-hidden border border-sky-100 p-2 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                onError={(e) => {
                  if (product.fallbackImage) {
                    (e.target as HTMLImageElement).src = product.fallbackImage;
                  }
                }}
                className="w-full h-full object-contain hover:scale-105 transition-transform"
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                <Flame className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">{product.flavorProfile}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              {product.netWeight && (
                <p className="text-xs text-gray-500 font-semibold">
                  Pack Sizes Available: <span className="text-gray-800">{product.netWeight}</span>
                </p>
              )}
            </div>
          </div>

          {/* Health Benefits */}
          <div>
            <h4 className="text-base font-extrabold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-3">
              <HeartHandshake className="w-5 h-5 text-juplu-cyan" />
              Key Health Benefits
            </h4>
            <div className="grid grid-cols-1 gap-2.5 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="text-base font-extrabold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-juplu-cyan" />
              Ingredients
            </h4>
            <p className="text-sm text-gray-600 bg-gray-50 p-3.5 rounded-xl border border-gray-200 leading-relaxed">
              {product.ingredients}
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`${SITE_INFO.whatsappUrl}&text=Hello!%20I%20am%20interested%20in%20ordering%20Juplu%20${encodeURIComponent(product.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              Inquire via WhatsApp
            </a>
            <a
              href={SITE_INFO.bulkOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-juplu-cyan hover:bg-sky-600 text-white font-bold text-sm shadow-md transition-all"
            >
              Bulk Order Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

