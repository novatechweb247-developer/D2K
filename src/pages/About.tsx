import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/content';
import { ArrowRight, ShieldCheck, Briefcase, Truck, Building, Target, Zap, Phone, Mail, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] pt-24 pb-20">
      {/* Header Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#1c1c1c]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2e2e2e] text-xs font-medium text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Professional Biography</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
            About <span className="text-[#D4AF37]">{BRAND_INFO.name}</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Multidisciplinary professional and strategist operating at the pinnacle of modern entrepreneurship, business consulting, logistics, real estate, and project management.
          </p>
        </div>
      </section>

      {/* Main Content & Portrait */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#262626] bg-[#121212] aspect-[4/5] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
                alt="D2K Executive Portrait"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-[#222222]">
                <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Professional Identity
                </div>
                <div className="text-lg font-bold text-[#F5F5F5]">{BRAND_INFO.name} ({BRAND_INFO.handle})</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Consultant • Realtor • Logistics • PM</div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Direct Channels
              </div>
              <div className="space-y-3 text-xs">
                <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-3 text-[#E5E5E5] hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
                <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-3 text-[#E5E5E5] hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
                <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#E5E5E5] hover:text-[#D4AF37] transition-colors">
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>{BRAND_INFO.handle}</span>
                </a>
              </div>
              <button
                onClick={onOpenContactModal}
                className="w-full mt-2 py-3 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c558] transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                Bridging Vision With Impeccable Execution
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                As an entrepreneur and multidisciplinary professional, D2K brings clarity, structure, and strategic direction to every business challenge. Whether advising on enterprise scaling, directing complex logistics operations, managing high-value real estate investments, or overseeing project delivery, the focus remains constant: unyielding quality and measurable outcomes.
              </p>
            </div>

            {/* Five Pillars Detail */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold text-[#F5F5F5] border-b border-[#222222] pb-3">
                Core Professional Pillars
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: <Briefcase className="w-5 h-5 text-[#D4AF37]" />,
                    title: 'Business Consulting & Advisory',
                    desc: 'Helping founders and corporate teams navigate growth phases, optimize operational models, and refine business strategies for maximum efficiency and profitability.'
                  },
                  {
                    icon: <Truck className="w-5 h-5 text-[#D4AF37]" />,
                    title: 'Logistics & Operations Expertise',
                    desc: 'Designing robust supply chain frameworks, coordinating transport logistics, and ensuring seamless operational execution from inception to completion.'
                  },
                  {
                    icon: <Building className="w-5 h-5 text-[#D4AF37]" />,
                    title: 'Real Estate & Investment Interests',
                    desc: 'Providing expert guidance on property acquisitions, commercial and residential portfolio development, and market evaluation.'
                  },
                  {
                    icon: <Target className="w-5 h-5 text-[#D4AF37]" />,
                    title: 'Project Management & Leadership',
                    desc: 'Applying structured methodologies to coordinate cross-functional teams, manage timelines, control budgets, and achieve project milestones.'
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
                    title: 'Entrepreneurship & Ventures',
                    desc: 'Incubating and building innovative commercial ventures with disciplined risk management and strategic market positioning.'
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#222222] space-y-2 hover:border-[#D4AF37]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]">
                        {pillar.icon}
                      </div>
                      <h4 className="text-base font-bold text-[#F5F5F5]">{pillar.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed pl-11">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2a2a2a] space-y-4">
              <h3 className="text-xl font-bold text-[#F5F5F5]">Ready to Collaborate With D2K?</h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3]">
                Discuss your business objectives, consulting needs, or project requirements directly.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c558] transition-all flex items-center gap-2"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] text-[#F5F5F5] font-semibold text-xs uppercase tracking-wider hover:bg-[#222222] transition-all"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
