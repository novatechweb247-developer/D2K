import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, BRAND_INFO } from '../data/content';
import { ArrowRight, CheckCircle2, Briefcase, Truck, Building, Target, Zap, Phone } from 'lucide-react';
import { ScrollPop } from '../components/ScrollPop';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, onOpenContactModal }) => {
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
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] pt-24 pb-20">
      {/* Header Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#1c1c1c]">
        <ScrollPop direction="up" className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Professional Offerings
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
            Professional <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Specialised expertise across five core pillars, delivered with rigorous strategic discipline and execution excellence by {BRAND_INFO.name}.
          </p>
        </ScrollPop>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollPop key={service.id} direction={isEven ? 'left' : 'right'}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-[#222222] rounded-3xl p-6 sm:p-10 overflow-hidden relative`}>
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F5]">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs uppercase tracking-wider text-[#C0C0C0] font-semibold">
                      Key Focus Areas:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#D4D4D4]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenContactModal(service.title)}
                      className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:bg-[#e5c558] transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                    >
                      <span>Enquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#262626] aspect-[16/10] shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </ScrollPop>
          );
        })}
      </section>

      {/* Enquiry Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollPop direction="up">
          <div className="rounded-3xl bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#282828] p-8 sm:p-14 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Customised Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
              Have a Specific Project or Strategic Requirement?
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto leading-relaxed">
              Every engagement is tailored to your unique organisational goals. Contact D2K directly to discuss scope and scheduling.
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
          </div>
        </ScrollPop>
      </section>
    </div>
  );
};
