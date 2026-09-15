import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "DISCOVER",
      desc: "Understand the brand, project and objective."
    },
    {
      id: "02",
      title: "CREATE",
      desc: "Develop the creative direction and production concept."
    },
    {
      id: "03",
      title: "PRODUCE",
      desc: "Capture the project with professional production standards."
    },
    {
      id: "04",
      title: "DELIVER",
      desc: "Edit, refine and deliver polished final content."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold">FROM CONCEPT TO FINAL FRAME</h3>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-8 relative group-hover:border-primary transition-colors duration-300">
                  <span className="text-2xl font-bold text-gray-300 group-hover:text-primary transition-colors duration-300">{step.id}</span>
                  <div className="absolute inset-2 border border-gray-100 rounded-full group-hover:scale-90 transition-transform duration-300" />
                </div>
                
                <h4 className="text-lg font-bold tracking-widest uppercase mb-4">{step.title}</h4>
                <p className="text-charcoal/60 font-light text-sm max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
