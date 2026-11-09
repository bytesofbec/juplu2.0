import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Latest Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-juplu-cyanLight/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-juplu-cyanLight shadow-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-juplu-cyan rounded-lg"
            >
              <img
                src="/img/juplu.png"
                alt="Juplu - Healthy Makhana Snacks"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-bold text-sm lg:text-base tracking-wide uppercase transition-all duration-200 ${
                      active
                        ? 'bg-juplu-dark text-white shadow-sm'
                        : 'text-gray-800 hover:bg-juplu-dark/10 hover:text-juplu-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Bulk Order Fast Button */}
              <a
                href={SITE_INFO.bulkOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-juplu-cyan hover:bg-sky-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-sm transition-all hover:shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bulk Order</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-green-700 bg-white/80 rounded-full hover:bg-white"
                aria-label="WhatsApp Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-800 hover:text-gray-950 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-juplu-cyan"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-sky-100 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wider transition-colors ${
                    active
                      ? 'bg-juplu-dark text-white'
                      : 'text-gray-800 hover:bg-sky-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={SITE_INFO.bulkOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-juplu-cyan text-white font-extrabold text-sm uppercase tracking-wider shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Bulk Order Inquiry
              </a>
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-600 text-white font-bold text-sm tracking-wide shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp (+91-9341460719)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

