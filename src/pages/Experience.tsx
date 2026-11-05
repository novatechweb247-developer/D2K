import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PORTFOLIO_ITEMS, BRAND_INFO } from '../data/content';
import { ArrowRight, Briefcase, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onNavigate, onOpenContactModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Logistics', 'Real Estate', 'Consulting', 'Project Management'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] pt-24 pb-20">
      {/* Header Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#1c1c1c]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2e2e2e] text-xs font-medium text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Portfolio & Initiatives</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
            Experience & <span className="text-[#D4AF37]">Track Record</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Illustrative showcase of professional engagements, strategic initiatives, logistics operations, and property advisory work directed by {BRAND_INFO.name}.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#1f1f1f]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#0a0a0a] shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#141414] text-[#A3A3A3] border border-[#222222] hover:text-[#F5F5F5] hover:bg-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-3xl bg-[#121212] border border-[#222222] overflow-hidden hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333] text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333] text-[10px] font-medium text-[#C0C0C0]">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#A3A3A3]">
                    <span className="px-2.5 py-1 rounded bg-[#161616]/90 border border-[#333333] text-[#D4AF37] font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={onOpenContactModal}
                  className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2 hover:underline"
                >
                  <span>Discuss Similar Engagement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#282828] p-8 sm:p-14 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Future Collaborations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Ready to Build Your Next Initiative With D2K?
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto leading-relaxed">
            Bring strategic clarity and rigorous project management to your enterprise. Contact D2K to explore collaboration opportunities.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenContactModal}
              className="px-8 py-4 rounded-xl bg-[#D4AF37] text-[#0a0a0a] font-bold text-sm tracking-wider uppercase hover:bg-[#e5c558] transition-all shadow-lg shadow-[#D4AF37]/25 inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
