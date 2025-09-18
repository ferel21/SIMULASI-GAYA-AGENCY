
import React from 'react';
import { WHATSAPP_BASE_URL } from '../constants';

const CTA: React.FC = () => {
  return (
    <section id="hubungi-kami" className="bg-brand-beige py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-dark mb-4">
          Siap Mengubah Simulasi Menjadi Realita?
        </h2>
        <p className="text-lg text-brand-brown mb-8 max-w-2xl mx-auto">
          Hubungi kami sekarang untuk konsultasi gratis dan mari kita bangun brand fashion Anda bersama.
        </p>
        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-dark text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-brand-brown transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Mulai Proyek Anda di WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
