
import React from 'react';
import { TESTIMONIALS } from '../constants';
import QuoteIcon from './icons/QuoteIcon';

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => {
    const { quote, name, brand } = testimonial;
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            <QuoteIcon className="w-12 h-12 text-brand-beige mb-4" />
            <blockquote className="text-brand-brown text-base md:text-lg italic mb-6 flex-grow">
                <p>"{quote}"</p>
            </blockquote>
            <footer className="mt-auto">
                <p className="font-bold text-brand-dark">{name}</p>
                <p className="text-sm text-gray-500">{brand}</p>
            </footer>
        </div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-brand-dark mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-brand-brown max-w-3xl mx-auto">
            Kami bangga bisa menjadi bagian dari perjalanan sukses brand-brand lokal yang luar biasa ini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
