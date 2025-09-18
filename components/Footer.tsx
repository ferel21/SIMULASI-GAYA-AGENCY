
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import BehanceIcon from './icons/BehanceIcon';

const socialLinks = [
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { name: 'Behance', icon: BehanceIcon, href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-offwhite py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.name}`}
              className="text-brand-offwhite hover:text-brand-beige transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} SIMULASI GAYA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
