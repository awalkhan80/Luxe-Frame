import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#0a0a0a]/95 backdrop-blur-md text-white border-b border-white/[0.08] sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 md:py-4 flex items-center justify-between">
        {/* 1. Logo with image and tagline */}
        <a 
          href="#home" 
          className="flex flex-col justify-center items-start group focus:outline-none"
          aria-label="Luxe Frame Production L.L.C - Home"
        >
          <img 
            src="https://raw.githubusercontent.com/awalkhan80/Luxe-Frame/main/luxe_frame_logo.png" 
            alt="Luxe Frame Productions" 
            className="h-16 sm:h-20 md:h-24 max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain object-left group-hover:opacity-90 transition-opacity duration-200"
          />
          <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-bold tracking-[0.25em] text-white/60 uppercase mt-1 leading-none text-left">
            Ideas | People | Places | Impact
          </span>
        </a>

        {/* 2. Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] lg:text-[14px] font-medium tracking-[0.14em] uppercase text-white/70 hover:text-white transition-colors duration-200 py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* 3. Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="text-[12px] lg:text-[13px] font-medium tracking-[0.16em] uppercase px-5 py-2.5 border border-primary/50 text-white hover:text-primary hover:border-primary hover:bg-primary/[0.06] transition-all duration-300 rounded-none whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-primary"
          >
            Start A Project
          </a>
        </div>

        {/* 4. Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white/90 hover:text-white p-2 -mr-2 focus:outline-none transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <Menu size={22} strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* 5. Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0d0d0d] border-b border-white/[0.08] overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col items-center gap-5 px-6 pt-6 pb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white active:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-[240px] text-center text-[13px] font-medium tracking-[0.16em] uppercase px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 mt-3"
              >
                Start A Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
