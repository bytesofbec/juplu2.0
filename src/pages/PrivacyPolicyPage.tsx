import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-juplu-mintLight min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-800 bg-white shadow-sm mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-juplu-cyan" />
            Legal & Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Privacy Policy for Juplu
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-100 text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            At Juplu, accessible from <strong>https://www.juplu.in/</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Juplu and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>{SITE_INFO.email}</strong> or via WhatsApp at <strong>{SITE_INFO.phoneFormatted}</strong>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Information We Collect
          </h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly via our Netlify contact form, email, or WhatsApp, we may receive additional information about you such as your name, email address, phone number, the contents of your message, and any attachments you may send us.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            How We Use Your Information
          </h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our snack catalog and services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you for customer support, product updates, and order confirmations</li>
            <li>Process bulk inquiries and distribution partnerships</li>
            <li>Prevent fraudulent transactions and enhance security</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Log Files & Hosting on Netlify
          </h2>
          <p>
            Juplu follows standard procedures of using log files provided by our CDN host (Netlify). These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Cookies
          </h2>
          <p>
            Like any other website, Juplu uses 'cookies' to optimize users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-juplu-cyan pl-3">
            Contact Information
          </h2>
          <p>
            If you have questions regarding this policy, feel free to write to:
            <br />
            <strong>Juplu Group</strong>
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

