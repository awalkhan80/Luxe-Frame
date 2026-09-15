import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#0a0a0a]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-6">
          <a href="#home" className="flex flex-col z-50 group">
            <img 
              src="https://raw.githubusercontent.com/awalkhan80/Luxe-Frame/main/luxe_frame_logo.png" 
              alt="Luxe Frame Productions" 
              className="h-24 md:h-32 object-contain group-hover:opacity-80 transition-opacity"
            />
            <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.25em] text-white/50 uppercase mt-2 text-center md:text-left">
              Ideas | People | Places | Impact
            </span>
          </a>

          {/* Right Text blocks */}
          <div className="hidden lg:flex gap-12 text-[10px] font-bold tracking-[0.2em] text-right uppercase leading-loose">
            <div className="text-white/80">
              Film <br /> Beyond <br /> Borders
            </div>
            <div className="text-primary/80 border-l border-white/10 pl-8">
              Dubai <br /> Abu Dhabi <br /> Worldwide
            </div>
          </div>

          <button
            className="lg:hidden z-50 text-white hover:text-primary p-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Bottom Row */}
        <div className="hidden lg:flex justify-between items-center pt-4 border-t border-white/10">
          <nav className="flex gap-8 text-[11px] font-bold tracking-[0.15em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="bg-primary hover:bg-white text-black px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-white/20 flex items-center gap-2"
          >
            Get A Quote &rarr;
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121212] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-[0.15em] uppercase text-white/90 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-black px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase mt-4 hover:bg-white transition-colors"
              >
                Get A Quote &rarr;
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
