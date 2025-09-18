import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';
import type { PortfolioItem } from '../types';
import Modal from './Modal';

const PortfolioCard: React.FC<{ item: PortfolioItem; onReadMore: (item: PortfolioItem) => void; }> = ({ item, onReadMore }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group aspect-[3/4]">
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-brand-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-4 text-center">
        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <h3 className="text-xl font-bold text-white font-display mb-4">{item.title}</h3>
            <button
                onClick={() => onReadMore(item)}
                className="px-5 py-2 text-sm bg-brand-beige text-brand-dark font-semibold rounded-full hover:bg-white transition-colors duration-300"
                aria-label={`View details for ${item.title}`}
            >
              Read More
            </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<typeof PORTFOLIO_CATEGORIES[number]>('Semua');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Semua') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);
  
  const openModal = (item: PortfolioItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

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
            <PortfolioCard key={item.src} item={item} onReadMore={openModal} />
          ))}
        </div>
      </div>
      
      {selectedItem && (
        <Modal isOpen={!!selectedItem} onClose={closeModal}>
            <img src={selectedItem.src} alt={selectedItem.title} className="w-full max-h-80 object-cover" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold font-display text-brand-dark mb-2">{selectedItem.title}</h3>
              <p className="text-sm font-semibold text-brand-brown bg-brand-beige inline-block px-3 py-1 rounded-full mb-4">{selectedItem.category}</p>
              <p className="text-brand-brown leading-relaxed">{selectedItem.description}</p>
            </div>
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;