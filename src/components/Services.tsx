import React from 'react';
import { motion } from 'motion/react';
import { Music, Video, Megaphone, Shirt, Settings2, MonitorPlay } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "MUSIC VIDEOS",
      desc: "Concept | Production | Post-Production",
      icon: Music,
      image: "https://images.pexels.com/photos/8041345/pexels-photo-8041345.jpeg"
    },
    {
      id: "02",
      title: "SHORT FILMS & FEATURE FILMS",
      desc: "Development | Production | World Class Execution",
      icon: Video,
      image: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg"
    },
    {
      id: "03",
      title: "COMMERCIALS & ADS",
      desc: "TVCs | Digital Ads | Brand Films",
      icon: Megaphone,
      image: "https://images.pexels.com/photos/10563275/pexels-photo-10563275.jpeg"
    },
    {
      id: "04",
      title: "FASHION REELS & LOOKBOOKS",
      desc: "Creative Shoots | Social Content | Brand Collaborations",
      icon: Shirt,
      image: "https://images.pexels.com/photos/39190660/pexels-photo-39190660.jpeg"
    },
    {
      id: "05",
      title: "EQUIPMENT RENTAL",
      desc: "Cameras | Lenses | Lighting | Grip | Crew",
      icon: Settings2,
      image: "https://images.pexels.com/photos/5840545/pexels-photo-5840545.jpeg"
    },
    {
      id: "06",
      title: "POST PRODUCTION",
      desc: "Editing | VFX | Colour Grading | Sound Design",
      icon: MonitorPlay,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4">OUR SERVICES</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white">
              CREATIVE SOLUTIONS <br /> 
              <span className="text-primary">FOR EVERY STORY</span>
            </h3>
          </div>
          <div className="mt-8 lg:mt-0 flex gap-12 text-sm text-gray-300">
            <p className="max-w-xs leading-relaxed font-light">
              From concept to completion, we provide end-to-end production services tailored to your vision.
            </p>
            <div className="hidden md:block text-[10px] font-bold tracking-[0.3em] uppercase text-primary/70 text-right leading-[2.5] border-l border-white/10 pl-8">
              IDEAS <br /> PEOPLE <br /> PLACES <br /> IMPACT
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 flex flex-col hover:border-primary/50 transition-all bg-[#121212] hover:bg-[#161616] cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-[#1a1a1a]">
                <img 
                  src={service.image} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-primary/40 group-hover:border-primary rounded-full flex items-center justify-center flex-shrink-0 bg-black/40 transition-colors">
                    <service.icon size={18} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-xs tracking-wider text-white group-hover:text-primary transition-colors leading-snug">
                    {service.title}
                  </h4>
                </div>
                
                <p className="text-xs text-gray-400 mb-8 leading-relaxed font-normal">
                  {service.desc}
                </p>
                
                <div className="mt-auto text-primary font-bold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
