import React, { useState } from 'react';
import { PageId } from '../types';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';
import { Phone, Mail, Instagram, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Business Consulting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] pt-24 pb-20">
      {/* Header Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#1c1c1c]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2e2e2e] text-xs font-medium text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
            Contact <span className="text-[#D4AF37]">D2K</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Connect directly via verified phone, email, or Instagram, or submit an enquiry using the form below.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#222222] space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Verified Contact Channels
                </span>
                <h2 className="text-2xl font-bold text-[#F5F5F5] mt-1">Get In Touch</h2>
                <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
                  Available for strategic advisory, consulting engagements, logistics coordination, real estate consultations, and project management inquiries.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#121212] border border-[#2e2e2e] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] block">Direct Phone</span>
                    <span className="text-sm font-bold text-[#F5F5F5]">{BRAND_INFO.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#121212] border border-[#2e2e2e] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] block">Email Address</span>
                    <span className="text-sm font-bold text-[#F5F5F5]">{BRAND_INFO.email}</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#121212] border border-[#2e2e2e] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] block">Instagram Profile</span>
                    <span className="text-sm font-bold text-[#F5F5F5]">{BRAND_INFO.handle}</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-[#222222] flex items-center gap-3 text-xs text-[#888888]">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Global Professional Advisory & Operations</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-[#222222] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#f3e5ab] to-[#D4AF37]" />

              {!submitted ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                      Secure Message
                    </span>
                    <h2 className="text-2xl font-bold text-[#F5F5F5]">Send an Enquiry</h2>
                    <p className="text-xs text-[#A3A3A3]">
                      Fill out the form below and D2K will respond promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234..."
                          className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-2">
                        Professional Focus / Service
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.title} className="bg-[#181818]">
                            {service.title}
                          </option>
                        ))}
                        <option value="General Professional Enquiry">General Professional Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-2">
                        Project Details & Objectives *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project, objectives, or consultation requirements..."
                        className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#e5c558] transition-all shadow-lg shadow-[#D4AF37]/25 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry to D2K</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F5]">Enquiry Received Successfully</h3>
                  <p className="text-sm text-[#A3A3A3] max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting <span className="text-[#D4AF37] font-semibold">{BRAND_INFO.name}</span>. Your enquiry has been received and logged. D2K will review and respond promptly.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[#222222] text-[#F5F5F5] font-semibold text-sm hover:bg-[#333333] transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
