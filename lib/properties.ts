export type PropertyStatus = "Available" | "Sold";

export type PropertyType =
  | "Farm Land"
  | "Plot"
  | "Independent House"
  | "Flat"
  | "Commercial Property";

export type PropertyUnit = "Sqft" | "Acres" | "Guntas";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  area: number;
  unit: PropertyUnit;
  city: string;
  state: string;
  location: string;
  address: string;
  description: string;
  features: string[];
  images: string[];
  contactNumber: string;
  whatsappNumber: string;
  status: PropertyStatus;
  featured: boolean;
  createdAt: string;
};

export const propertyCategories: PropertyType[] = [
  "Farm Land",
  "Plot",
  "Independent House",
  "Flat",
  "Commercial Property",
];

export const properties: Property[] = [
  {
    id: "BS-101",
    title: "Green Valley Farm Land",
    type: "Farm Land",
    price: 2250000,
    area: 2.4,
    unit: "Acres",
    city: "Pune",
    state: "Maharashtra",
    location: "Pune, Maharashtra",
    address: "Near Sopan Baug, Pune-Satara Road",
    description:
      "A fertile and well-connected agricultural parcel suitable for cultivation, long-term land banking, or a private retreat. The land offers easy access to highways, water lines, and a calm green surroundings.",
    features: ["Road frontage", "Fertile soil", "Water access", "Gated approach", "High appreciation potential"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 98765 43210",
    whatsappNumber: "+91 98765 43210",
    status: "Available",
    featured: true,
    createdAt: "2026-07-06",
  },
  {
    id: "BS-102",
    title: "Sunrise Garden Plot",
    type: "Plot",
    price: 1850000,
    area: 1800,
    unit: "Sqft",
    city: "Bengaluru",
    state: "Karnataka",
    location: "Bengaluru, Karnataka",
    address: "Near Whitefield Main Road, Bengaluru",
    description:
      "A premium residential plot in a high-growth locality with approved layout, clear titles, and close access to metro connectivity, schools, tech parks, and retail zones.",
    features: ["Approved layout", "Wide roads", "Street lighting", "Metro nearby", "Clean title"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 98888 11223",
    whatsappNumber: "+91 98888 11223",
    status: "Available",
    featured: true,
    createdAt: "2026-07-18",
  },
  {
    id: "BS-103",
    title: "Emerald Heights Independent House",
    type: "Independent House",
    price: 6400000,
    area: 2400,
    unit: "Sqft",
    city: "Hyderabad",
    state: "Telangana",
    location: "Hyderabad, Telangana",
    address: "Madhapur, Hyderabad",
    description:
      "A spacious and elegant family home with contemporary interiors, a large front lawn, and seamless access to major business hubs and residential amenities.",
    features: ["3 bedrooms", "Private garden", "Covered parking", "Balcony", "Family-friendly layout"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 97000 11234",
    whatsappNumber: "+91 97000 11234",
    status: "Sold",
    featured: false,
    createdAt: "2026-06-28",
  },
  {
    id: "BS-104",
    title: "Urban Crest Flat",
    type: "Flat",
    price: 5800000,
    area: 1425,
    unit: "Sqft",
    city: "Mumbai",
    state: "Maharashtra",
    location: "Mumbai, Maharashtra",
    address: "Andheri East, Mumbai",
    description:
      "A bright west-facing apartment in a premium residential tower with strong connectivity, secure amenities, and modern lifestyle features for city living.",
    features: ["24x7 security", "Swimming pool", "Lift access", "Power backup", "Covered parking"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 97654 89012",
    whatsappNumber: "+91 97654 89012",
    status: "Available",
    featured: false,
    createdAt: "2026-07-12",
  },
  {
    id: "BS-105",
    title: "Metro Business Plaza",
    type: "Commercial Property",
    price: 12500000,
    area: 3200,
    unit: "Sqft",
    city: "Ahmedabad",
    state: "Gujarat",
    location: "Ahmedabad, Gujarat",
    address: "Prahlad Nagar, Ahmedabad",
    description:
      "A strategically placed commercial asset ideal for offices, retail, or studio use with high visibility, customer access, and proximity to key business corridors.",
    features: ["Frontage access", "Parking", "Power backup", "High visibility", "Business hub location"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 99221 55667",
    whatsappNumber: "+91 99221 55667",
    status: "Available",
    featured: true,
    createdAt: "2026-07-22",
  },
  {
    id: "BS-106",
    title: "Oakridge Residential Plot",
    type: "Plot",
    price: 9200000,
    area: 2200,
    unit: "Sqft",
    city: "Jaipur",
    state: "Rajasthan",
    location: "Jaipur, Rajasthan",
    address: "Vaishali Nagar Extension, Jaipur",
    description:
      "A clean and well-positioned plot near city amenities, parks, and fast-developing residential corridors. Ideal for families planning a custom-built future home.",
    features: ["Clean title", "Developed neighborhood", "Good road access", "Water and power lines", "Good resale value"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 99880 45678",
    whatsappNumber: "+91 99880 45678",
    status: "Available",
    featured: false,
    createdAt: "2026-07-09",
  },
];

export const propertyHighlights = [
  { label: "Active Listings", value: "72+" },
  { label: "Cities Covered", value: "18" },
  { label: "Trusted Network", value: "96%" },
  { label: "Site Visits", value: "2.4k" },
];
