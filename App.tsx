
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-offwhite text-brand-dark font-sans">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Portfolio />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
