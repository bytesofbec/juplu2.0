import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { SITE_INFO } from './data/content';
import { MessageCircle } from 'lucide-react';

// Scroll to top automatically on route changes
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 404 Not Found Page
const NotFoundPage: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center pt-24 px-4 text-center">
    <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl max-w-md mx-auto space-y-4">
      <span className="text-6xl font-black text-juplu-cyan">404</span>
      <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="text-sm text-gray-600">The page you are looking for does not exist or has been moved.</p>
      <a
        href="/"
        className="inline-block px-6 py-3 rounded-xl bg-juplu-cyan text-white font-bold text-sm uppercase tracking-wider shadow"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/terms&conditions" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Action Pill */}
        <a
          href={SITE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 group"
          aria-label="Chat with Juplu on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-semibold">WhatsApp Us</span>
        </a>
      </div>
    </Router>
  );
};

export default App;

