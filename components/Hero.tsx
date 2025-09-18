
import React from 'react';
import { WHATSAPP_BASE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-cream min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-brand-dark leading-tight mb-4">
            Bawa Brand Lokal Anda ke Level Selanjutnya.
          </h1>
          <p className="text-lg md:text-xl text-brand-brown mb-8">
            SIMULASI GAYA adalah partner strategis Anda dalam membangun identitas visual dan strategi marketing yang menjual untuk brand fashion Anda.
          </p>
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-dark text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-brown transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Diskusi Proyek Anda via WhatsApp
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-80 h-96 md:w-96 md:h-[480px] bg-white rounded-xl shadow-2xl overflow-hidden transform lg:rotate-3">
             <img src="https://picsum.photos/seed/hero-model/600/800" alt="Mockup Kaos Modern" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
