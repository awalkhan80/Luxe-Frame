import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "MUSIC VIDEOS",
    desc: "Bold Visuals. Bigger Stories.",
    image: "https://images.pexels.com/photos/8041345/pexels-photo-8041345.jpeg",
    videoUrl: "https://youtube.com", // Replace with your actual video link
  },
  {
    id: 2,
    title: "SHORT FILMS",
    desc: "Stories That Stay.",
    image: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg",
    videoUrl: "https://youtube.com", // Replace with your actual video link
  },
  {
    id: 3,
    title: "COMMERCIALS",
    desc: "Brands in Motion.",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtube.com", // Replace with your actual video link
  },
  {
    id: 4,
    title: "FASHION REELS",
    desc: "Style. Motion. Impact.",
    image: "https://images.pexels.com/photos/39190660/pexels-photo-39190660.jpeg",
    videoUrl: "https://youtube.com", // Replace with your actual video link
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0d0d0d] text-white border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-white/10 pb-6 gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">FEATURED WORK</h2>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary/80 uppercase hidden md:block">OUR WORK SPEAKS LOUDER</span>
          </div>

          <a href="#contact" className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-primary hover:text-white transition-colors">
            VIEW ALL &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video mb-4 overflow-hidden bg-[#181818] border border-white/10 group-hover:border-primary/50 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Play button icon overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-primary text-primary bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                     <Play className="ml-1" fill="currentColor" size={16} />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xs font-bold tracking-widest uppercase mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-[11px] text-gray-400 font-medium">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
