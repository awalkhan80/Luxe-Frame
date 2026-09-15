import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, Triangle, Circle, Square, Diamond, Octagon, Star } from 'lucide-react';

const brands = [
  { name: 'AURA STUDIOS', icon: Hexagon },
  { name: 'NEXUS MEDIA', icon: Triangle },
  { name: 'OASIS FILMS', icon: Circle },
  { name: 'VORTEX', icon: Square },
  { name: 'ZENITH PRO', icon: Diamond },
  { name: 'ELEVATE', icon: Octagon },
  { name: 'LUMINA', icon: Star },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#050505] border-b border-white/5 overflow-hidden flex flex-col items-center">
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 mb-10">
        <h3 className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
          Trusted By Global Brands & Agencies
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden w-full max-w-[1600px] mx-auto">
        {/* Gradient fades for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
          className="flex items-center w-max"
        >
          {/* Render the list multiple times to ensure seamless looping when it shifts by -50% */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-12 md:px-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-pointer"
            >
              <brand.icon size={26} className="text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <span className="text-sm md:text-base font-bold tracking-[0.25em] text-white uppercase mt-1">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
