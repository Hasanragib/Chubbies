// ─────────────────────────────────────────────────────────────
// SITE — the single source of truth for every piece of content
// used across the Chubbies site. Update a value here and it
// updates everywhere it's referenced, instead of hunting through
// individual components.
//
// Contact details (phone/email/WhatsApp) come from .env — see
// src/config/env.js and .env.example — so they can be changed
// without touching code.
// ─────────────────────────────────────────────────────────────

import { ENV } from '../config/env.js'

export const SITE = {
  brand: {
    name: 'Chubbies',
    tagline: 'Bhook lage? Yahein ruko.',
    established: 2026,
    logo: '/logo.png',
    cartGallery: [
      { src: '/cart-render-1.jpg', caption: 'Studio front view — LED-lit canopy, twin bamboo steamers, built-in signage.' },
      { src: '/cart-render-2.jpg', caption: 'On-site at a mall entrance — the same cart, ready to trade.' },
      { src: '/cart-render-3.jpg', caption: 'Every branded panel, wheel, and light comes standard — no customisation needed.' },
    ],
  },

  contact: {
    phone: ENV.contact.phone,
    email: ENV.contact.email,
    whatsappNumber: ENV.contact.whatsappNumber,
    instagramHandle: '@onlychubbies',
  },

  // icon is a string key — mapped to an actual icon component where it's rendered
  socials: [
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/onlychubbies' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { id: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
  ],

  carts: ['Pandav Nagar', 'Vinod Nagar', 'Laxmi Nagar'],

  stats: {
    customers: '5,000+',
    instagramFollowers: '23K+',
  },

  nav: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/menu', label: 'Menu' },
    { to: '/locations', label: 'Find Us' },
    { to: '/bulk-orders', label: 'Bulk Orders' },
  ],

  // Home hero carousel — each slide pairs one photo with one headline
  heroSlides: [
    {
      src: '/momos.PNG',
      alt: 'Steamed momos in a bamboo basket with chilli dip',
      headline: 'Steamed fresh. Franchised smart.',
    },
    {
      src: '/momos2.PNG',
      alt: 'Steamed momos in a bamboo basket',
      headline: 'Unforgettable flavour. Served hygienically.',
    },
    {
      src: '/KurkureMomos.png',
      alt: 'Fried momos plated with dips',
      headline: 'Every bite is made to impress.',
    },
    {
      src: '/momos3.PNG',
      alt: 'Steamed momos',
      headline: 'Flavor beyond expectations. Authentic taste.',
    },
    {
      src: '/momos1.PNG',
      alt: 'Steamed momos',
      headline: 'Freshness crafted. Quality guaranteed.',
    },
    {
      src: '/SpringRolls.PNG',
      alt: 'Steamed momos',
      headline: 'Start. Grow. Succeed. Together.',
    },
  ],

  homeUsps: [
    { label: 'Freshly made', detail: 'Every batch is made fresh, not sitting frozen for months before it reaches you.' },
    { label: 'Frozen & hygienic', detail: 'Sealed, hygienic packing built for easy storage — no compromise on quality in transit.' },
    { label: 'High-margin business', detail: 'Low investment, easy-to-operate model built for vendors, cafes, and cloud kitchens.' },
  ],

  franchise: {
    investment: '₹99,000',
    benefits: [
      'Low investment — ₹99,000 all-in',
      'No royalty, ever',
      'FOFO model (Franchise Owned, Franchise Operated)',
      'Own multiple outlets in your city',
      'Strong brand identity & support',
      'Marketing assistance',
      'Training & operational guidance',
      'Proven, easy-to-operate business model',
    ],
  },

  b2b: {
    perfectFor: ['Vendors', 'Retailers', 'Cafes', 'Events', 'Cloud Kitchens'],
    features: ['Freshly made', 'Frozen & hygienic', 'Easy to store & cook', 'High margin business'],
  },

  // Placeholder menu — replace with real items, prices, and photos.
  menuCategories: [
    {
      name: 'Steamed',
      items: [
        { name: 'Classic Veg Momos', price: '₹99', desc: 'Cabbage, carrot, spring onion' },
        { name: 'Paneer & Chilli Momos', price: '₹129', desc: 'Cottage cheese, roasted chilli flake' },
        { name: 'Chicken Momos', price: '₹139', desc: 'Minced chicken, ginger, garlic' },
      ],
    },
    {
      name: 'Fried & Tandoori',
      items: [
        { name: 'Fried Veg Momos', price: '₹119', desc: 'Crisp-fried, served with schezwan mayo' },
        { name: 'Tandoori Chicken Momos', price: '₹159', desc: 'Char-grilled after steaming' },
      ],
    },
    {
      name: 'In Gravy',
      items: [
        { name: 'Momos in Chilli Garlic Gravy', price: '₹169', desc: 'Wok-tossed in a fiery red gravy' },
        { name: 'Afghani Gravy Momos', price: '₹179', desc: 'Creamy, mildly spiced white gravy' },
      ],
    },
  ],

  // Placeholder outlet list — swap for real locations once you have them.
  outlets: [
    { city: 'Delhi', area: 'Rajouri Garden', phone: '+91 90000 00001', hours: '11 AM – 11 PM' },
    { city: 'Gurugram', area: 'Sector 29', phone: '+91 90000 00002', hours: '11 AM – 11 PM' },
    { city: 'Noida', area: 'Sector 18', phone: '+91 90000 00003', hours: '11 AM – 11 PM' },
    { city: 'Lucknow', area: 'Hazratganj', phone: '+91 90000 00004', hours: '12 PM – 10:30 PM' },
  ],
}

// Small helper: turns ['Pandav Nagar', 'Vinod Nagar', 'Laxmi Nagar'] into
// "Pandav Nagar, Vinod Nagar & Laxmi Nagar" for use in copy.
export function formatList(items) {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} & ${items[items.length - 1]}`
}
