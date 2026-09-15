import React from 'react';
import { Mail, Globe, Instagram, Film, Users, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-14 md:py-20 border-t border-primary/20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        
        {/* Logo and Location */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/LUXE FRAME PRODUCTION LOGO.png" 
            alt="Luxe Frame Productions" 
            className="h-16 md:h-20 object-contain mb-4"
          />
          <p className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase mb-4">
            Dubai, United Arab Emirates
          </p>
          <div className="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase hidden lg:block mt-2">
            FILM &nbsp;|&nbsp; COMMERCIAL &nbsp;|&nbsp; ENTERTAINMENT &nbsp;|&nbsp; BRAND STORIES
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 lg:gap-16">
          <div className="flex flex-col items-center">
            <Film size={24} className="mb-2 text-primary" strokeWidth={1.5} />
            <span className="block font-bold text-xl leading-none text-white">50+</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/70 mt-1">PROJECTS</span>
          </div>
          <div className="flex flex-col items-center">
            <Users size={24} className="mb-2 text-primary" strokeWidth={1.5} />
            <span className="block font-bold text-xl leading-none text-white">30+</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/70 mt-1">CLIENTS</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe size={24} className="mb-2 text-primary" strokeWidth={1.5} />
            <span className="block font-bold text-xl leading-none text-white">5+</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/70 mt-1">COUNTRIES</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:items-end gap-3 text-xs font-medium tracking-wide text-gray-300">
          <a href="tel:+971505219355" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-end w-full">
            <Phone size={16} className="text-primary" /> +971 50 521 9355
          </a>
          <a href="mailto:info@luxeframeme.com" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-end w-full">
            <Mail size={16} className="text-primary" /> info@luxeframeme.com
          </a>
          <a href="https://www.luxeframeme.com" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-end w-full">
            <Globe size={16} className="text-primary" /> www.luxeframeme.com
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-end w-full">
            <Instagram size={16} className="text-primary" /> @luxeframeme
          </a>
          
          <div className="font-serif italic text-3xl text-primary transform -rotate-2 mt-4 hidden lg:block">
            Create What Lasts
          </div>
        </div>

      </div>
    </footer>
  );
}
