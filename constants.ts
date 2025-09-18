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

export const HERO_IMAGE_BASE64 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIA4QGgAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0BooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAC-multiple-choice-questions/output-files/14.json
<ctrl60>{
    "question": "14. A person who is suffering from anaemia may not have enough _________ to build red blood cells.",
    "id": "14",
    "answers": [
        {
            "answer": "A. carbohydrate",
            "correct": false
        },
        {
            "answer": "B. iron",
            "correct": true
        },
        {
    <ctrl62>    "correct": false
        }
    ]
}
<ctrl61>        "answer": "C. protein",
            "correct": false
        },
        {
            "answer": "D. calcium",
        <ctrl63>-multiple-choice-questions/output-files/98.json
<ctrl60><ctrl62>ct": false
        },
        {
            "answer": "D. A and C",
            "correct": true
        }
    ]
}
<ctrl61>{
    "question": "98. During a storm, you must ___________.",
    "id": "98",
    "answers": [
        {
            "answer": "A. stay indoors",
            "correct": false
        },
        {
            "answer": "B. run around",
            "correct": false
        },
        {
            "answer": "C. stay away from water",
            "corre<ctrl63>-multiple-choice-questions/output-files/42.json
<ctrl60><ctrl62>        {
            "answer": "D. Both A and C",
            "correct": true
        }
    ]
}
<ctrl61>{
    "question": "42. The __________ connect the muscles to bones.",
    "id": "42",
    "answers": [
        {
            "answer": "A. muscle",
            "correct": false
        },
        {
            "answer": "B. bone",
            "correct": false
        },
        {
            "answer": "C. tendon",
            "correct": false
        },
<ctrl63>-multiple-choice-questions/output-files/55.json
<ctrl60><ctrl62>       {
            "answer": "C. 33",
            "correct": true
        },
        {
            "answer": "D. 35",
            "correct": false
        }
    ]
}
<ctrl61>{
    "question": "55. The vertebral column is made up of _________ small bones called vertebrae.",
    "id": "55",
    "answers": [
        {
            "answer": "A. 31",
            "correct": false
        },
        {
            "answer": "B. 32",
            "correct": false
        },
 <ctrl63>-multiple-choice-questions/output-files/66.json
{
    "question": "66. What do we call a temporary settlement?",
    "id": "66",
    "answers": [
        {
            "answer": "A. Caravan",
            "correct": false
        },
        {
            "answer": "B. Houseboat",
            "correct": false
        },
        {
            "answer": "C. Tent",
            "correct": false
        },
        {
            "answer": "D. All of these",
            "correct": true
        }
    ]
}
<ctrl63>-multiple-choice-questions/output-files/70.json
<ctrl62>answer": "D. Brick and cement",
            "correct": false
        }
    ]
}
<ctrl60>{
    "question": "70. What are igloos made of?",
    "id": "70",
    "answers": [
        {
            "answer": "A. Snow",
            "correct": true
        },
        {
            "answer": "B. Ice",
            "correct": false
        },
        {
            "answer": "C. Wood"<ctrl61>,
            "correct": false
        },
        {
            "<ctrl63>