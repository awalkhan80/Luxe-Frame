import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    "Creative storytelling",
    "Premium visual quality",
    "Professional production",
    "Attention to detail",
    "Dubai-based service",
    "Flexible production solutions"
  ];

  return (
    <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark-grey transform skew-x-12 translate-x-32 hidden lg:block opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-6">Why Luxe Frame</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              ELEVATING BRANDS THROUGH EXCELLENCE
            </h3>
            <p className="text-white/70 font-light leading-relaxed mb-10 text-lg">
              We don't just capture footage; we craft experiences. Our team brings a cinematic eye to every project, ensuring your message is delivered with uncompromising quality and impact.
            </p>
            
            <a href="#contact" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white hover:text-primary transition-colors group">
              Let's Talk
              <div className="w-12 h-[1px] bg-white group-hover:bg-primary group-hover:w-16 transition-all" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12"
          >
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </div>
                </div>
                <span className="font-medium tracking-wide text-white/90">{reason}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
