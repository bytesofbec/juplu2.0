import React from 'react';
import { TEAM_MEMBERS, SITE_INFO } from '../data/content';
import { Sparkles, Heart, Award, Users, ShoppingBag } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-juplu-mintLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Our Mission & Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            About Juplu
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            "The healthiest, tastiest brings wow in your mind, so, take a taste."
          </p>
        </div>

        {/* Brand Story Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-8 sm:p-12 max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 border-l-4 border-juplu-cyan pl-4">
            Our Journey & Passion
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4 font-normal">
            <p>
              <strong>Juplu Group</strong> has been founded with a dedicated objective: to provide healthy, nutrient-rich snacks for all age groups, taking every effort to create a brilliant harmony of taste and well-being.
            </p>
            <p>
              Juplu is a delicious and nutritious snack crafted from the seeds of water lily plants, traditionally known across India and the globe as <strong>Makhana (Foxnuts)</strong>. Handpicked by our experienced harvesters, only the plumpest and cleanest seeds make their way into our roasting facility.
            </p>
            <p>
              Makhana has been consumed for centuries across India as an Ayurvedic superfood. At Juplu, we celebrate this ancient heritage with a contemporary twist—infusing aromatic Indian spices and slow roasting them to achieve an airy, irresistible crunch.
            </p>
            <p>
              It is time to replace oily chips and fried snacks with a lighter, crispier, and tastier bite.
            </p>
          </div>

          {/* Core Values Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-sky-50 border border-sky-100">
              <Heart className="w-8 h-8 text-sky-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Nutrient Rich</h4>
                <p className="text-xs text-gray-600">High plant protein & minerals</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <Award className="w-8 h-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Slow-Roasted</h4>
                <p className="text-xs text-gray-600">Never fried, zero trans-fat</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <Users className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">For All Ages</h4>
                <p className="text-xs text-gray-600">Loved by kids & elders alike</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-700 bg-white mb-2">
              The Minds Behind Juplu
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Team Showcase
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Meet our passionate team of administrators, product innovators, designers, and creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg border border-sky-100 overflow-hidden text-center p-6 juplu-card flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden bg-sky-50 border-4 border-sky-100 shadow-inner mb-4 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  {member.name}
                </h3>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-sky-700 bg-sky-50 mt-1 mb-2 capitalize">
                  {member.role}
                </span>
                {member.bio && (
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-juplu-cyan to-sky-600 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Partner or Order in Bulk?</h3>
          <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto">
            We partner with corporate offices, schools, supermarkets, cafes, and health outlets across India.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={SITE_INFO.bulkOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sky-900 font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-gray-100 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Fill Bulk Order Form
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

