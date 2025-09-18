
import React from 'react';
import { PRICING_PACKAGES } from '../constants';
import CheckIcon from './icons/CheckIcon';

const PricingCard: React.FC<{ packageInfo: typeof PRICING_PACKAGES[0] }> = ({ packageInfo }) => {
    const { title, price, features, whatsappLink, popular } = packageInfo;
    const cardClasses = popular 
      ? "bg-brand-dark text-white border-brand-brown transform scale-105 shadow-2xl" 
      : "bg-white text-brand-dark border-gray-200 shadow-lg";
    const buttonClasses = popular
      ? "bg-brand-cream text-brand-dark hover:bg-brand-beige"
      : "bg-brand-dark text-white hover:bg-brand-brown";

    return (
        <div className={`relative border rounded-xl p-8 flex flex-col transition-all duration-300 ${cardClasses}`}>
            {popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-beige text-brand-dark px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                </div>
            )}
            <h3 className="text-2xl font-bold font-display mb-2">{title}</h3>
            <p className={`text-4xl font-bold mb-6 ${popular ? 'text-brand-beige' : 'text-brand-dark'}`}>{price}</p>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${popular ? 'text-brand-beige' : 'text-brand-brown'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center block ${buttonClasses} px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105`}
            >
                Pilih Paket {title.split(' ')[0]}
            </a>
        </div>
    );
};


const Pricing: React.FC = () => {
  return (
    <section id="paket-harga" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-display text-brand-dark mb-4">
          Paket Kolaborasi Marketing & Visual
        </h2>
        <p className="text-lg text-brand-brown mb-12 max-w-2xl mx-auto">
          Pilih paket yang paling sesuai dengan kebutuhan dan visi brand Anda. Kami siap membantu Anda di setiap langkah.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard key={pkg.title} packageInfo={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
