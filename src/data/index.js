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

import { ENV } from "../config/env.js";

export const SITE = {
  brand: {
    name: "Chubbies",
    tagline: "Bhook lage? Yahein ruko.",
    established: 2026,
    logo: "/logo.webp",
    cartGallery: [
      {
        src: "/cart-render-1.webp",
        caption:
          "Studio front view — LED-lit canopy, twin bamboo steamers, built-in signage.",
      },
      {
        src: "/cart-render-2.webp",
        caption: "On-site at a mall entrance — the same cart, ready to trade.",
      },
      {
        src: "/cart-render-3.webp",
        caption:
          "Every branded panel, wheel, and light comes standard — no customisation needed.",
      },
    ],
  },

  contact: {
    phone: ENV.contact.phone,
    phone2: ENV.contact.phone2,
    email: ENV.contact.email,
    whatsappNumber: ENV.contact.whatsappNumber,
    instagramHandle: "@onlychubbies",
  },

  // icon is a string key — mapped to an actual icon component where it's rendered
  socials: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/onlychubbies",
    },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@onlychubbies",
    },
  ],

  // Short list for the footer's "Find our carts" column — links through to /locations
  carts: ["Pandav Nagar, Delhi", "Vinod Nagar, Delhi", "& More"],

  stats: {
    customers: "5,000+",
    instagramFollowers: "23K+",
  },

  nav: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/franchise", label: "Franchise" },
    { to: "/menu", label: "Menu" },
    { to: "/locations", label: "Find Us" },
    { to: "/bulkOrders", label: "Bulk Orders" },
  ],

  // Home hero carousel — each slide pairs one photo with one headline
  heroSlides: [
    {
      src: "/momos.webp",
      alt: "Steamed momos in a bamboo basket with chilli dip",
      headline: "Steamed fresh. Franchised smart.",
    },
    {
      src: "/momos2.webp",
      alt: "Steamed momos in a bamboo basket",
      headline: "Unforgettable flavour. Served hygienically.",
    },
    {
      src: "/KurkureMomos.webp",
      alt: "Fried momos plated with dips",
      headline: "Every bite is made to impress.",
    },
    {
      src: "/momos3.webp",
      alt: "Steamed momos",
      headline: "Flavor beyond expectations. Authentic taste.",
    },
    {
      src: "/momos1.webp",
      alt: "Steamed momos",
      headline: "Freshness crafted. Quality guaranteed.",
    },
    {
      src: "/SpringRolls.webp",
      alt: "Steamed momos",
      headline: "Start. Grow. Succeed. Together.",
    },
  ],

  homeUsps: [
    {
      label: "Freshly made",
      detail:
        "Every batch is made fresh, not sitting frozen for months before it reaches you.",
    },
    {
      label: "Frozen & hygienic",
      detail:
        "Sealed, hygienic packing built for easy storage — no compromise on quality in transit.",
    },
    {
      label: "High-margin business",
      detail:
        "Low investment, easy-to-operate model built for vendors, cafes, and cloud kitchens.",
    },
  ],

  franchise: {
    investment: "₹99,000",
    benefits: [
      "Low investment — ₹99,000 all-in",
      "No royalty, ever",
      "FOFO model (Franchise Owned, Franchise Operated)",
      "Own multiple outlets in your city",
      "Strong brand identity & support",
      "Marketing assistance",
      "Training & operational guidance",
      "Proven, easy-to-operate business model",
    ],
  },

  b2b: {
    perfectFor: ["Vendors", "Retailers", "Cafes", "Events", "Cloud Kitchens"],
    features: [
      "Freshly made",
      "Frozen & hygienic",
      "Easy to store & cook",
      "High margin business",
    ],
  },

  // Placeholder menu — replace with real items, prices, and photos.
  menuCategories: [
    {
      name: "Steamed",
      items: [
        {
          name: "Classic Veg Momos",
          price: "₹99",
          desc: "Cabbage, carrot, spring onion",
        },
        {
          name: "Paneer & Chilli Momos",
          price: "₹129",
          desc: "Cottage cheese, roasted chilli flake",
        },
        {
          name: "Chicken Momos",
          price: "₹139",
          desc: "Minced chicken, ginger, garlic",
        },
      ],
    },
    {
      name: "Fried & Tandoori",
      items: [
        {
          name: "Fried Veg Momos",
          price: "₹119",
          desc: "Crisp-fried, served with schezwan mayo",
        },
        {
          name: "Tandoori Chicken Momos",
          price: "₹159",
          desc: "Char-grilled after steaming",
        },
      ],
    },
    {
      name: "In Gravy",
      items: [
        {
          name: "Momos in Chilli Garlic Gravy",
          price: "₹169",
          desc: "Wok-tossed in a fiery red gravy",
        },
        {
          name: "Afghani Gravy Momos",
          price: "₹179",
          desc: "Creamy, mildly spiced white gravy",
        },
      ],
    },
  ],

  // Real outlet status — Pandav Nagar is live, the other two are opening soon.
  outlets: [
    {
      city: "Delhi",
      area: "Pandav Nagar",
      phone: "+91 88007 97710, +91 84484 22646",
      hours: "6 PM to 11 PM",
      location: "https://maps.app.goo.gl/fb2NEXTa1ZhQNHRe8",
    },
    {
      city: "Delhi",
      area: "Vinod Nagar",
      phone: "+91 88007 97710",
      hours: "6 PM to 11 PM",
      location: "https://maps.app.goo.gl/gQgSTMAsgG64uUVD8",
    },
    {
      city: "Delhi",
      area: "Laxmi Nagar",
      phone: "",
      hours: "Coming soon",
      location: "",
    },
  ],
};

// Small helper: turns ['Pandav Nagar', 'Vinod Nagar', 'Laxmi Nagar'] into
// "Pandav Nagar, Vinod Nagar & Laxmi Nagar" for use in copy.
export function formatList(items) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} & ${items[items.length - 1]}`;
}
