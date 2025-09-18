import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';
import type { PortfolioItem, PortfolioCategory } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group aspect-[3/4]">
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-brand-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-4 text-center">
        <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <h3 className="text-xl font-bold text-white font-display mb-2">{item.title}</h3>
            <p className="text-brand-beige text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  // Fix: Widen the state's type to allow any value from PORTFOLIO_CATEGORIES, not just the first element's type.
  const [activeFilter, setActiveFilter] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>('Semua');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Semua') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portofolio" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold font-display text-brand-dark mb-4">
            Inspirasi Gaya dari Simulasi Kami
          </h2>
          <p className="text-lg text-brand-brown max-w-3xl mx-auto">
            Desain yang kami ciptakan berfokus pada estetika minimalis, modern, dan relevan dengan tren pasar saat ini.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {PORTFOLIO_CATEGORIES.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                        activeFilter === category 
                        ? 'bg-brand-dark text-white shadow-md' 
                        : 'bg-white text-brand-dark hover:bg-brand-beige'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;