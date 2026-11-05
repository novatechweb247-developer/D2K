import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Instagram } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';
import { ContactFormData } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: defaultService || 'Business Consulting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'Business Consulting',
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        >
          {/* Header Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#f3e5ab] to-[#D4AF37]" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1c1c] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Direct Engagement
                </span>
                <h3 className="text-2xl font-bold text-[#F5F5F5] mt-1">Work With D2K</h3>
                <p className="text-sm text-[#A3A3A3] mt-1">
                  Submit your enquiry below or connect directly via phone or email.
                </p>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-medium text-[#F5F5F5] hover:border-[#D4AF37] transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-medium text-[#F5F5F5] hover:border-[#D4AF37] transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Email</span>
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-medium text-[#F5F5F5] hover:border-[#D4AF37] transition-all"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Instagram</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234..."
                      className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-1.5">
                    Professional Focus / Service
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
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
                  <label className="block text-xs font-medium text-[#C0C0C0] uppercase tracking-wider mb-1.5">
                    Project Details & Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, objectives, or consultation requirements..."
                    className="w-full bg-[#181818] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#e5c558] transition-all shadow-lg shadow-[#D4AF37]/20 disabled:opacity-50"
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
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5]">Enquiry Received Successfully</h3>
              <p className="text-sm text-[#A3A3A3] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to <span className="text-[#D4AF37] font-semibold">{BRAND_INFO.name}</span>. Your enquiry has been logged and forwarded. D2K will respond via email or phone shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-[#222222] text-[#F5F5F5] font-semibold text-sm hover:bg-[#333333] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
