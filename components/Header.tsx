
import React, { useState } from 'react';
import { NAV_LINKS, WHATSAPP_BASE_URL } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-offwhite/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-display text-brand-dark tracking-wider">
          SIMULASI GAYA
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-brand-dark hover:text-brand-brown transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <a 
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-brand-dark text-white px-6 py-2 rounded-full hover:bg-brand-brown transition-transform duration-300 hover:scale-105"
        >
          Konsultasi Sekarang
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-offwhite pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-dark hover:text-brand-brown transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-8 py-3 rounded-full hover:bg-brand-brown transition-transform duration-300 hover:scale-105"
            >
              Konsultasi Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
