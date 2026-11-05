import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, Phone, Mail, Instagram, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222] py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0a0a0a]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded bg-[#161616] border border-[#333333] flex items-center justify-center text-[#D4AF37] font-bold text-lg tracking-wider group-hover:border-[#D4AF37] transition-colors shadow-lg shadow-[#D4AF37]/10">
                D2
              </div>
              <div>
                <span className="text-xl font-bold tracking-widest text-[#F5F5F5] font-sans">
                  {BRAND_INFO.name}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase">
                  Executive Brand
                </span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#121212]/80 border border-[#222222] rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#0a0a0a] font-semibold shadow-md shadow-[#D4AF37]/20 scale-105'
                        : 'text-[#C0C0C0] hover:text-[#F5F5F5] hover:bg-[#1f1f1f]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-3"
            >
              <button
                onClick={onOpenContactModal}
                className="relative group overflow-hidden rounded-full bg-[#D4AF37] text-[#0a0a0a] font-semibold px-5 py-2.5 text-sm transition-all duration-300 hover:bg-[#e5c558] hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2 active:scale-95"
              >
                <span>Work With D2K</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Mobile Menu Button with Premium Animation */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenContactModal}
                className="bg-[#D4AF37] text-[#0a0a0a] text-xs font-bold px-3.5 py-2 rounded-lg shadow-md shadow-[#D4AF37]/20"
              >
                Inquire
              </button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#161616] border border-[#333333] text-[#F5F5F5] focus:outline-none flex items-center justify-center shadow-lg"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <motion.div initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6 text-[#D4AF37]" />
                  </motion.div>
                ) : (
                  <motion.div initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6 text-[#D4AF37]" />
                  </motion.div>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Mobile Drawer with Staggered Text Pop-Out Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#070707] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            {/* Background Glow */}
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border-b border-[#222222] pb-6"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Navigation</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#F5F5F5] mt-1 tracking-tight">{BRAND_INFO.name} Portal</h3>
              </motion.div>

              <div className="flex flex-col gap-3">
                {navItems.map((item, idx) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-4.5 rounded-2xl text-lg font-bold transition-all ${
                        isActive
                          ? 'bg-[#D4AF37] text-[#0a0a0a] shadow-xl shadow-[#D4AF37]/30 scale-[1.02]'
                          : 'bg-[#121212] text-[#E5E5E5] border border-[#222222] hover:bg-[#1a1a1a]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-5 h-5 ${isActive ? 'text-[#0a0a0a]' : 'text-[#D4AF37]'}`} />
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="pt-4 border-t border-[#222222]"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full py-4 rounded-2xl bg-[#D4AF37] text-[#0a0a0a] font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/30"
                >
                  <span>Work With D2K</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Contact Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8 pt-6 border-t border-[#222222] space-y-4 relative z-10"
            >
              <div className="text-xs text-[#888888] uppercase tracking-wider">Direct Channels</div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#121212] border border-[#222222] text-[#E5E5E5] hover:border-[#D4AF37]"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37] mb-1.5" />
                  <span className="text-[11px] font-medium">Call</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#121212] border border-[#222222] text-[#E5E5E5] hover:border-[#D4AF37]"
                >
                  <Mail className="w-5 h-5 text-[#D4AF37] mb-1.5" />
                  <span className="text-[11px] font-medium">Email</span>
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#121212] border border-[#222222] text-[#E5E5E5] hover:border-[#D4AF37]"
                >
                  <Instagram className="w-5 h-5 text-[#D4AF37] mb-1.5" />
                  <span className="text-[11px] font-medium">Instagram</span>
                </a>
              </div>
              <div className="text-center text-xs text-[#666666] pt-2">
                {BRAND_INFO.handle} • {BRAND_INFO.phone}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
