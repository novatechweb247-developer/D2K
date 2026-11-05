import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data/content';
import { ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            onLoaded();
          }, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#070707] flex flex-col items-center justify-center p-6 text-[#F5F5F5]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center space-y-8 max-w-md w-full"
          >
            {/* Logo Emblem */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#141414] border border-[#333333] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-50" />
              <span className="text-3xl font-extrabold text-[#D4AF37] tracking-wider font-sans">
                D2
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Executive Experience
              </span>
              <h1 className="text-3xl font-extrabold tracking-widest text-[#F5F5F5]">
                {BRAND_INFO.name}
              </h1>
              <p className="text-xs text-[#888888] tracking-wider">
                {BRAND_INFO.handle} • Professional Services
              </p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-3 w-full max-w-xs mx-auto pt-4">
              <div className="h-1.5 w-full bg-[#161616] rounded-full overflow-hidden border border-[#262626]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#f5e5ab]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-[#737373] tracking-widest uppercase font-mono">
                <span>Initializing Secure Portal</span>
                <span>{progress}%</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#888888]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Vision. Strategy. Execution.</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
