
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
