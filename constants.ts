
import type { NavLink, PricingPackage, Testimonial, PortfolioItem, PortfolioCategory } from './types';

export const WHATSAPP_BASE_URL = "https://wa.me/6281244286970";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Paket Harga', href: '#paket-harga' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Testimoni', href: '#testimoni' },
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

export const PORTFOLIO_CATEGORIES: ['Semua', ...PortfolioCategory[]] = ['Semua', 'Desain Kaos', 'Kampanye Iklan', 'Mockup Produk'];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: 'https://picsum.photos/seed/fashion1/600/800',
    title: 'Monochrome Bold',
    description: 'Desain kaos minimalis untuk brand streetwear.',
    category: 'Desain Kaos',
  },
  {
    src: 'https://picsum.photos/seed/fashion2/600/800',
    title: 'Urban Explorer Campaign',
    description: 'Kampanye Meta Ads yang menargetkan audiens perkotaan.',
    category: 'Kampanye Iklan',
  },
  {
    src: 'https://picsum.photos/seed/fashion3/600/800',
    title: 'KALAWEAR Hoodie Mockup',
    description: 'Mockup realistis untuk katalog produk musim hujan.',
    category: 'Mockup Produk',
  },
  {
    src: 'https://picsum.photos/seed/fashion4/600/800',
    title: 'Tropical Vibes',
    description: 'Desain grafis cerah untuk koleksi musim panas.',
    category: 'Desain Kaos',
  },
  {
    src: 'https://picsum.photos/seed/fashion5/600/800',
    title: 'Benang Merah Totebag',
    description: 'Visualisasi produk totebag dengan berbagai varian warna.',
    category: 'Mockup Produk',
  },
  {
    src: 'https://picsum.photos/seed/fashion6/600/800',
    title: 'Sustainable Threads',
    description: 'Kampanye influencer untuk mempromosikan fashion berkelanjutan.',
    category: 'Kampanye Iklan',
  },
  {
    src: 'https://picsum.photos/seed/fashion7/600/800',
    title: 'Heritage Series',
    description: 'Desain yang terinspirasi dari motif batik kontemporer.',
    category: 'Desain Kaos',
  },
  {
    src: 'https://picsum.photos/seed/fashion8/600/800',
    title: 'Ruang Ganti Lookbook',
    description: 'Layout mockup untuk lookbook digital.',
    category: 'Mockup Produk',
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Kerja sama dengan SIMULASI GAYA benar-benar mengubah cara kami memandang marketing. Desain kaos mereka fresh dan sangat laku di pasaran!",
    name: "Andi Wijaya",
    brand: "Founder, KALAWEAR"
  },
  {
    quote: "Dari konsep hingga eksekusi, timnya profesional dan suportif. Kampanye iklan yang mereka jalankan berhasil meningkatkan penjualan kami 200% dalam sebulan.",
    name: "Citra Lestari",
    brand: "Marketing Director, BENANG MERAH"
  },
  {
    quote: "Mockup produk yang dihasilkan sangat realistis dan membantu kami dalam presentasi ke investor. Pelayanan cepat dan hasilnya melebihi ekspektasi.",
    name: "Budi Santoso",
    brand: "CEO, RUANG GANTI"
  }
];
