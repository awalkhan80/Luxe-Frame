import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const highlights = [
    "Creative direction",
    "Professional production",
    "Cinematic visuals",
    "Attention to detail",
    "Reliable execution"
  ];

  const stats = [
    "Dubai Based",
    "Creative Production",
    "Premium Visuals",
    "End-to-End Service"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d0d0d] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-6">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              WE TURN IDEAS <br className="hidden md:block" />
              INTO <span className="text-primary">VISUAL STORIES.</span>
            </h3>
            
            <div className="prose prose-lg text-gray-300 mb-10 max-w-none font-light leading-relaxed">
              <p>
                Luxe Frame Production L.L.C delivers high-quality video production and visual storytelling for brands, companies, events, and campaigns in Dubai. We blend creative vision with technical excellence to produce content that resonates and inspires.
              </p>
              <p className="mt-4">
                Our approach is rooted in understanding your brand's unique narrative. From concept to final frame, we ensure every aspect of production is meticulously crafted.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  <span className="font-medium text-sm tracking-wide text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-[#181818] border border-white/10">
              <img 
                src="https://images.pexels.com/photos/38366666/pexels-photo-38366666.jpeg" 
                alt="Behind the scenes film production" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-2 border-primary/40 pointer-events-none m-4" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-[#121212] text-white p-8 shadow-2xl max-w-xs border border-primary/30 border-l-4 border-l-primary shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <ul className="flex flex-col gap-5">
                {stats.map((stat, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="text-primary font-bold text-lg">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="text-xs tracking-widest uppercase font-semibold text-gray-200">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
