
export interface NavLink {
  name: string;
  href: string;
}

export interface PricingPackage {
  title: string;
  price: string;
  features: string[];
  whatsappLink: string;
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  brand: string;
}

export type PortfolioCategory = 'Desain Kaos' | 'Kampanye Iklan' | 'Mockup Produk';

export interface PortfolioItem {
  src: string;
  title: string;
  description: string;
  category: PortfolioCategory;
}
