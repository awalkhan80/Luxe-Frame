import React from 'react';
import { motion } from 'motion/react';

const equipmentItems = [
  {
    id: 1,
    title: "SONY FX3",
    desc: "Cinema Line",
    image: "https://images.pexels.com/photos/36786135/pexels-photo-36786135.jpeg"
  },
  {
    id: 2,
    title: "ARRI ALEXA LF",
    desc: "Premium Cinema",
    image: "https://i.ebayimg.com/images/g/j9QAAOSwdNdmX5WH/s-l1600.webp"
  },
  {
    id: 3,
    title: "G MASTER LENSES",
    desc: "14mm | 24-70mm | 50mm",
    image: "https://d1ncau8tqf99kp.cloudfront.net/converted/102462_original_local_1200x1050_v3_converted.webp"
  },
  {
    id: 4,
    title: "ASTERA LIGHTS",
    desc: "6 Tube Kit",
    image: "https://media.astera-led.com/wp-content/uploads/FP6_in-use_5_V1-400x225.jpg"
  },
  {
    id: 5,
    title: "DRONE",
    desc: "Aerial Cinematography",
    image: "https://images.squarespace-cdn.com/content/v1/63beedd71c7b3f3e6bef67b5/4646fae8-af56-478a-82ec-b346202729a7/Lithium+Aerial+Cinematography+in+Saudi+Arabia.jpg"
  },
  {
    id: 6,
    title: "DJI RONIN",
    desc: "Stabilization",
    image: "https://images.pexels.com/photos/10300318/pexels-photo-10300318.jpeg"
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-white/10 pb-6 gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">OUR EQUIPMENT</h2>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary/80 uppercase hidden md:block">INDUSTRY STANDARD GEAR</span>
          </div>

          <a href="#contact" className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-primary hover:text-white transition-colors">
            VIEW FULL LIST &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {equipmentItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id}
              className="text-center group cursor-pointer"
            >
              <div className="aspect-square bg-[#141414] border border-white/10 mb-4 flex items-center justify-center overflow-hidden group-hover:border-primary/50 group-hover:bg-[#181818] transition-all">
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to high-quality unsplash cinema camera gear asset if external link fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-[10px] text-gray-400 uppercase font-medium tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
