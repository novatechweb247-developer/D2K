import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO, ASSOCIATED_VENTURES } from '../data/content';
import { Phone, Mail, Instagram, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <footer className="bg-[#070707] border-t border-[#1f1f1f] text-[#A3A3A3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1f1f1f]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161616] border border-[#333333] flex items-center justify-center text-[#D4AF37] font-bold text-lg tracking-wider">
                D2
              </div>
              <div>
                <span className="text-xl font-bold tracking-widest text-[#F5F5F5]">
                  {BRAND_INFO.name}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">
                  Executive Brand
                </span>
              </div>
            </div>
            <p className="text-sm text-[#888888] leading-relaxed">
              {BRAND_INFO.subtitle}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Professional Services</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About D2K
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Professional Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('experience'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Experience & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Associated Profiles */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-4">
              Associated Profiles
            </h4>
            <ul className="space-y-3 text-sm">
              {ASSOCIATED_VENTURES.map((venture) => (
                <li key={venture.handle}>
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-[#D4AF37]/50 transition-all"
                  >
                    <div>
                      <div className="text-[#F5F5F5] font-medium group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-xs">
                        <span>{venture.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#D4AF37]" />
                      </div>
                      <span className="text-[11px] text-[#888888]">{venture.handle}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-[#D4AF37] transition-all text-[#E5E5E5]"
              >
                <div className="p-2 rounded bg-[#1a1a1a] text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#888888] block">Phone</span>
                  <span className="font-medium text-xs sm:text-sm">{BRAND_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-[#D4AF37] transition-all text-[#E5E5E5]"
              >
                <div className="p-2 rounded bg-[#1a1a1a] text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#888888] block">Email</span>
                  <span className="font-medium text-xs sm:text-sm">{BRAND_INFO.email}</span>
                </div>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-[#D4AF37] transition-all text-[#E5E5E5]"
              >
                <div className="p-2 rounded bg-[#1a1a1a] text-[#D4AF37]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#888888] block">Instagram</span>
                  <span className="font-medium text-xs sm:text-sm">{BRAND_INFO.handle}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name} ({BRAND_INFO.handle}). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Global Professional Services
            </span>
            <span>Entrepreneur • Consultant • Logistics • Realtor • PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
