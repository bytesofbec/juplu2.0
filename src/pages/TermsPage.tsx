import React from 'react';
import { FileText } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-juplu-mintLight min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
            <FileText className="w-3.5 h-3.5 text-juplu-cyan" />
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome to Juplu! Please review these terms governing use of our website and products.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-100 text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            By accessing this website at <strong>https://www.juplu.in/</strong>, we assume you accept these terms and conditions in full. Do not continue to use Juplu if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, Juplu and/or its licensors own the intellectual property rights for all material on Juplu, including trademarks, brand imagery, logos, packaging design, and copy. All intellectual property rights are reserved.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Product Descriptions & Nutritional Information
          </h2>
          <p>
            We attempt to be as accurate as possible in our product images, ingredients lists, and nutritional benefits. However, natural agricultural variations in raw Makhana may result in slight changes in weight, shape, or roast texture.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Bulk Orders & Deliveries
          </h2>
          <p>
            Bulk orders placed through our official Google Form or direct WhatsApp communications are subject to minimum order quantities (MOQ) and delivery confirmation schedules agreed in writing.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Questions & Inquiries
          </h2>
          <p>
            For any clarifications regarding our Terms & Conditions, please contact us at:
            <br />
            <strong>Juplu Customer Relations</strong>
            <br />
            Email: <a href={`mailto:${SITE_INFO.email}`} className="text-juplu-cyan hover:underline">{SITE_INFO.email}</a>
            <br />
            Phone: {SITE_INFO.phoneFormatted}
          </p>
        </div>

      </div>
    </div>
  );
};

