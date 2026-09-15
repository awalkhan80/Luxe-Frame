import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Equipment from './components/Equipment';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Portfolio />
        <Equipment />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

