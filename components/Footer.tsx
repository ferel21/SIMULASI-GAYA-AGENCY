
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-offwhite py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} SIMULASI GAYA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
