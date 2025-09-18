
import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portofolio" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-brand-dark mb-4">
            Inspirasi Gaya dari Simulasi Kami
          </h2>
          <p className="text-lg text-brand-brown max-w-3xl mx-auto">
            Desain yang kami ciptakan berfokus pada estetika minimalis, modern, dan relevan dengan tren pasar saat ini.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PORTFOLIO_IMAGES.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={src}
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
