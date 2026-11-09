import React from 'react';
import { SITE_INFO } from '../data/content';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MessageSquare, Clock, ShoppingCart } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-juplu-mintLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pt-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-juplu-cyan" />
            We Are Here To Help
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Have questions regarding our products, distribution, bulk orders, or feedback? Get in touch with our team today.
          </p>
        </div>

        {/* Contact Grid: Details + Netlify Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 space-y-6">
              <h2 className="text-2xl font-extrabold text-gray-900 border-l-4 border-juplu-cyan pl-3">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                For any queries or concerns, please email us, call us, or simply send a WhatsApp message anytime.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-100 transition-colors group"
                >
                  <div className="p-3 bg-emerald-600 text-white rounded-xl shadow group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">WhatsApp</h3>
                    <p className="text-base font-extrabold text-gray-900">{SITE_INFO.phoneFormatted}</p>
                    <span className="text-xs text-emerald-700 font-semibold">Instant response during business hours</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50 hover:bg-sky-100/70 border border-sky-100 transition-colors group"
                >
                  <div className="p-3 bg-sky-600 text-white rounded-xl shadow group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-sky-800">Email Address</h3>
                    <p className="text-base font-extrabold text-gray-900 break-all">{SITE_INFO.email}</p>
                    <span className="text-xs text-sky-700 font-semibold">Replies within 24 hours</span>
                  </div>
                </a>

                {/* Bulk Order */}
                <a
                  href={SITE_INFO.bulkOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 hover:bg-amber-100/70 border border-amber-100 transition-colors group"
                >
                  <div className="p-3 bg-amber-600 text-white rounded-xl shadow group-hover:scale-105 transition-transform">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800">Bulk Orders</h3>
                    <p className="text-base font-extrabold text-gray-900">Google Form Portal</p>
                    <span className="text-xs text-amber-700 font-semibold">Direct institutional and corporate quotes</span>
                  </div>
                </a>

                {/* Hours & Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="p-3 bg-gray-700 text-white rounded-xl shadow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Working Hours</h3>
                    <p className="text-sm font-bold text-gray-900">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm
              title="Send Us a Message"
              subtitle="Fill in the form below and our team will get back to you promptly."
            />
          </div>

        </div>

      </div>
    </div>
  );
};
