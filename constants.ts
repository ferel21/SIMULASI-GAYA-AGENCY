
import type { NavLink, PricingPackage } from './types';

export const WHATSAPP_BASE_URL = "https://wa.me/6281244286970";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Paket Harga', href: '#paket-harga' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Tentang Kami', href: '#tentang-kami' },
  { name: 'Hubungi Kami', href: '#hubungi-kami' },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    title: 'STARTER STYLE',
    price: 'Rp 1.500.000',
    features: [
      '3 Desain Kaos Eksklusif',
      '5 Mockup Produk Profesional',
      'Setup 1 Kampanye Iklan (Meta Ads)',
      'Konsultasi Strategi 1 Sesi',
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Halo%20SIMULASI%20GAYA,%20saya%20tertarik%20dengan%20Paket%20Starter%20Style.`,
  },
  {
    title: 'GROWTH COLLECTION',
    price: 'Rp 3.500.000',
    features: [
      '7 Desain Kaos Eksklusif',
      '12 Mockup Produk Profesional',
      'Manajemen Iklan 2 Minggu',
      'Konten Plan untuk 1 Bulan',
      'Konsultasi Strategi 2 Sesi',
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Halo%20SIMULASI%20GAYA,%20saya%20tertarik%20dengan%20Paket%20Growth%20Collection.`,
    popular: true,
  },
  {
    title: 'RUNWAY DOMINATOR',
    price: 'Rp 7.000.000',
    features: [
      '15 Desain Kaos Eksklusif',
      '25 Mockup Produk & Marketing Kit',
      'Manajemen Iklan 1 Bulan Penuh',
      'Pembuatan Konten (15 post)',
      'Sesi Foto Produk (opsional)',
      'Konsultasi & Reporting Bulanan',
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Halo%20SIMULASI%20GAYA,%20saya%20tertarik%20dengan%20Paket%20Runway%20Dominator.`,
  },
];

export const PORTFOLIO_IMAGES: string[] = [
  'https://picsum.photos/seed/fashion1/600/800',
  'https://picsum.photos/seed/fashion2/600/800',
  'https://picsum.photos/seed/fashion3/600/800',
  'https://picsum.photos/seed/fashion4/600/800',
  'https://picsum.photos/seed/fashion5/600/800',
  'https://picsum.photos/seed/fashion6/600/800',
  'https://picsum.photos/seed/fashion7/600/800',
  'https://picsum.photos/seed/fashion8/600/800',
];
