import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center bg-black overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1.02, 1.05, 1.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2800&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full pt-12 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-widest uppercase mb-8">
              TURNING <br />
              VISIONS INTO <br />
              EXTRAORDINARY <br />
              <span className="text-primary">STORIES</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-3 text-[10px] md:text-xs font-bold tracking-[0.25em] text-white/90 uppercase mb-12"
          >
            <p>FILM &nbsp;|&nbsp; COMMERCIAL &nbsp;|&nbsp; MUSIC &nbsp;|&nbsp; BRANDS</p>
            <p>PEOPLE &nbsp;|&nbsp; PLACES &nbsp;|&nbsp; GLOBAL IMPACT</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-white text-black font-bold tracking-[0.2em] text-xs uppercase transition-colors flex items-center justify-center min-w-[220px]"
            >
              START YOUR PROJECT &rarr;
            </a>
            
            <a
              href="https://youtube.com" /* Replace with your actual showreel video link */
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white hover:text-primary font-bold tracking-[0.2em] text-xs uppercase transition-all flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={14} className="ml-1" fill="currentColor" />
              </div>
              WATCH SHOWREEL
            </a>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
