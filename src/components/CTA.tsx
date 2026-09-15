import React from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-black flex items-center border-t border-b border-primary/20">
      {/* Background with Dark Dubai Skyline */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2800&q=80" 
          alt="Dubai Skyline" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-center lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10 md:mb-0 text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wide">
            LET'S CREATE <span className="text-primary">TOGETHER</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 font-normal max-w-2xl">
            Whether it's a music video, film, commercial or a bold new idea — we're ready to bring it to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="#contact"
            className="px-10 py-5 bg-primary hover:bg-white text-black font-bold tracking-[0.2em] text-xs uppercase transition-all whitespace-nowrap shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-white/20"
          >
            GET IN TOUCH &rarr;
          </a>
          
          {/* Faux handwritten text */}
          <div className="font-serif italic text-2xl md:text-3xl text-primary/60 transform -rotate-6 text-right leading-none hidden lg:block">
            Ideas <br />
            People <br />
            Places <br />
            Impact
          </div>
        </motion.div>
      </div>
    </section>
  );
}
