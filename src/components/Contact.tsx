import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted", formState);
    alert("Thank you for your inquiry. We will get back to you shortly.");
    setFormState({
      name: '', email: '', phone: '', company: '', projectType: '', message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            LET'S <span className="text-primary">TALK</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold mb-8 text-white">Luxe Frame Production L.L.C</h4>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h5 className="font-bold text-sm tracking-widest uppercase mb-1 text-white">Location</h5>
                  <p className="text-gray-300 font-light text-lg">Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h5 className="font-bold text-sm tracking-widest uppercase mb-1 text-white">Phone</h5>
                  <a href="tel:+971505219355" className="text-gray-300 font-light text-lg hover:text-primary transition-colors block">
                    +971 50 521 9355
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h5 className="font-bold text-sm tracking-widest uppercase mb-1 text-white">Email</h5>
                  <a href="mailto:hello@luxeframeme.com" className="text-gray-300 font-light text-lg hover:text-primary transition-colors block">
                    hello@luxeframeme.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h5 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">Connect With Us</h5>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 bg-[#141414] border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/971505219355" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-12 h-12 bg-[#141414] border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#121212] p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="projectType" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a] text-gray-400">Select a project type</option>
                  <option value="commercial" className="bg-[#1a1a1a] text-white">Commercial Video</option>
                  <option value="corporate" className="bg-[#1a1a1a] text-white">Corporate Video</option>
                  <option value="event" className="bg-[#1a1a1a] text-white">Event Coverage</option>
                  <option value="brand" className="bg-[#1a1a1a] text-white">Brand Film</option>
                  <option value="social" className="bg-[#1a1a1a] text-white">Social Media Content</option>
                  <option value="other" className="bg-[#1a1a1a] text-white">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none placeholder-gray-500"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-primary hover:bg-white text-black font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-white/20"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
