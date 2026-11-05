import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO, SERVICES_DATA, ASSOCIATED_VENTURES } from '../data/content';
import { ArrowRight, Briefcase, Truck, Building, Target, Zap, Shield, CheckCircle, ExternalLink, Phone, Mail, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (serviceName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenContactModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building': return <Building className="w-6 h-6 text-[#D4AF37]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-b border-[#1c1c1c]">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2e2e2e] text-xs font-medium text-[#D4AF37]">
              <Shield className="w-3.5 h-3.5" />
              <span>Official Executive Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] font-sans leading-[1.1]">
              VISION. <br />
              STRATEGY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f7e8b0] to-[#D4AF37]">
                EXECUTION.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A3A3A3] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {BRAND_INFO.subtitle}
            </p>

            {/* Identity Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Entrepreneur', 'Consultant', 'Logistics Expert', 'Realtor', 'Project Manager'].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-md bg-[#141414] border border-[#262626] text-xs text-[#C0C0C0] font-medium"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenContactModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#e5c558] shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 group"
              >
                <span>Work With D2K</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('specialities');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#161616] border border-[#2e2e2e] text-[#F5F5F5] font-semibold text-sm tracking-wider uppercase transition-all hover:bg-[#222222] hover:border-[#D4AF37]/50 flex items-center justify-center gap-2"
              >
                <span>Explore My Services</span>
              </button>
            </div>
          </motion.div>

          {/* Hero Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37] to-transparent rounded-2xl opacity-30 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-[#2e2e2e] bg-[#121212] aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                  alt="D2K Professional Executive"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md border border-[#222222]">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    Executive Profile
                  </div>
                  <div className="text-lg font-bold text-[#F5F5F5]">{BRAND_INFO.name} ({BRAND_INFO.handle})</div>
                  <div className="text-xs text-[#A3A3A3] mt-0.5">Multidisciplinary Professional & Strategist</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Professional Standing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
              Driven by Excellence, Defined by Results.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Operating at the intersection of business strategy, logistics execution, real estate investment, and rigorous project management. D2K delivers uncompromising leadership and clarity to every engagement.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline"
              >
                <span>Read Full About Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Strategic Advisory', desc: 'Transforming operational challenges into scalable commercial advantages.' },
              { title: 'Logistics Precision', desc: 'Coordinating complex supply chains and transport networks with zero margin for error.' },
              { title: 'Real Estate Insight', desc: 'Evaluating high-value property acquisitions and strategic portfolio opportunities.' },
              { title: 'Project Leadership', desc: 'Guiding cross-functional teams from initial concept to immaculate delivery.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#D4AF37]/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Specialities */}
      <section id="specialities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] border-y border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5]">
              Professional Specialities
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3]">
              Five dedicated pillars of professional expertise designed to drive sustainable value and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl bg-[#121212] border border-[#222222] overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333]">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#F5F5F5]">{service.title}</h3>
                    <p className="text-xs text-[#A3A3A3] leading-relaxed">{service.shortDesc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenContactModal(service.title)}
                    className="w-full py-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] text-[#F5F5F5] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] group-hover:border-[#D4AF37] transition-all"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* 6th Card: Entrepreneurship overview */}
            <div className="rounded-2xl bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-[#262626] p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Comprehensive Outlook
                </span>
                <h3 className="text-2xl font-bold text-[#F5F5F5]">Multidisciplinary Entrepreneurship</h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Combining commercial acumen across multiple sectors to provide holistic solutions for complex business challenges.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm font-semibold text-[#D4AF37] flex items-center gap-2 hover:underline"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#282828] p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Philosophy & Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] leading-tight">
              Transforming Ideas Into Organised, Practical Execution.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              True leadership is not merely about conceiving grand strategies—it is about the discipline of execution. Every project, consultancy, and logistical operation is approached with precision, transparency, and an unwavering commitment to results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0d0d0d] border border-[#222222]">
                <div className="text-lg font-bold text-[#D4AF37]">01. Vision</div>
                <div className="text-xs text-[#888888] mt-1">Clear strategic direction and objective setting.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0d0d0d] border border-[#222222]">
                <div className="text-lg font-bold text-[#D4AF37]">02. Strategy</div>
                <div className="text-xs text-[#888888] mt-1">Methodical planning and risk mitigation.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0d0d0d] border border-[#222222]">
                <div className="text-lg font-bold text-[#D4AF37]">03. Execution</div>
                <div className="text-lg font-bold text-[#D4AF37]"></div>
                <div className="text-xs text-[#888888] mt-1">Flawless implementation and measurable impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associated Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Network & Ecosystem
              </span>
              <h2 className="text-3xl font-extrabold text-[#F5F5F5]">Associated Profiles</h2>
            </div>
            <p className="text-xs text-[#888888] max-w-sm">
              Explore associated professional profiles and collaborative ventures linked with D2K.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ASSOCIATED_VENTURES.map((venture) => (
              <a
                key={venture.handle}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#121212] border border-[#222222] p-6 hover:border-[#D4AF37] transition-all flex flex-col sm:flex-row gap-6 items-center"
              >
                <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-[#1a1a1a] flex-shrink-0 border border-[#2a2a2a]">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform filter grayscale contrast-110"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#1a1a1a] text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider">
                    {venture.badge}
                  </span>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                      {venture.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-[#737373] group-hover:text-[#D4AF37]" />
                  </div>
                  <div className="text-xs text-[#D4AF37] font-medium">{venture.handle}</div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">{venture.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight uppercase">
            Let's Turn The Next Opportunity Into Action.
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto">
            Ready to initiate a project, discuss a strategic partnership, or engage professional consulting? Contact D2K today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContactModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-sm tracking-wider uppercase hover:bg-[#e5c558] transition-all shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
            >
              <span>Contact D2K</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#161616] border border-[#2e2e2e] text-[#F5F5F5] font-semibold text-sm tracking-wider uppercase hover:bg-[#222222] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {BRAND_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#888888]">
            <span>Email: {BRAND_INFO.email}</span>
            <span>•</span>
            <span>Instagram: {BRAND_INFO.handle}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
