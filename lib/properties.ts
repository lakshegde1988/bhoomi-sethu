export type PropertyStatus = "Available" | "Sold" | "Under Negotiation";

export type PropertyType =
  | "Farm Land"
  | "Agricultural Land"
  | "Residential Plot"
  | "Villa"
  | "Independent House"
  | "Apartment / Flat"
  | "Commercial Property"
  | "Industrial Property";

export type PropertyUnit = "Sqft" | "Acres" | "Guntas" | "Hectares";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  area: number;
  unit: PropertyUnit;
  city: string;
  district: string;
  state: string;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
  features: string[];
  images: string[];
  contactNumber: string;
  status: PropertyStatus;
  featured: boolean;
  createdAt: string;
};

export const propertyCategories: PropertyType[] = [
  "Farm Land",
  "Agricultural Land",
  "Residential Plot",
  "Villa",
  "Independent House",
  "Apartment / Flat",
  "Commercial Property",
  "Industrial Property",
];

export const properties: Property[] = [
  {
    id: "LN-1001",
    title: "Green Horizon Farm Land",
    type: "Farm Land",
    price: 2850000,
    area: 2.5,
    unit: "Acres",
    city: "Pune",
    district: "Pune",
    state: "Maharashtra",
    address: "Near Sopan Baug, Pune-Satara Road, Pune",
    latitude: 18.5196,
    longitude: 73.8567,
    description:
      "A well-connected farm land parcel ideal for agricultural investment, weekend retreat planning, or future villa development. The plot offers clean access roads, fertile soil, and wide green surroundings.",
    features: ["Fertile soil", "Road frontage", "Water access", "Gated approach", "Open skies"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 98765 43210",
    status: "Available",
    featured: true,
    createdAt: "2026-07-12",
  },
  {
    id: "LN-1002",
    title: "River View Agricultural Estate",
    type: "Agricultural Land",
    price: 4200000,
    area: 4.2,
    unit: "Acres",
    city: "Nashik",
    district: "Nashik",
    state: "Maharashtra",
    address: "Along Gangapur Road, Near Anjaneri Hills, Nashik",
    latitude: 20.011,
    longitude: 73.790,
    description:
      "This agricultural estate offers irrigation support, elevated terrain, and a peaceful river-facing setting. Suitable for organic cultivation, seasonal farming, or long-term land banking.",
    features: ["Irrigation ready", "River proximity", "Level terrain", "Easy access", "High soil fertility"],
    images: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 98220 33445",
    status: "Under Negotiation",
    featured: true,
    createdAt: "2026-07-10",
  },
  {
    id: "LN-1003",
    title: "Emerald Grove Residential Plot",
    type: "Residential Plot",
    price: 1850000,
    area: 1800,
    unit: "Sqft",
    city: "Bengaluru",
    district: "Bengaluru Urban",
    state: "Karnataka",
    address: "Near Whitefield Main Road, Bengaluru",
    latitude: 12.9716,
    longitude: 77.5946,
    description:
      "A premium residential plot in a fast-growing neighborhood with clear titles, developed utilities, and convenient access to schools, IT parks, and retail hubs.",
    features: ["DTCP approved", "Wide roads", "Street lighting", "Near metro", "Ready utilities"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 98888 11223",
    status: "Available",
    featured: false,
    createdAt: "2026-07-20",
  },
  {
    id: "LN-1004",
    title: "Sierra Villa Residency",
    type: "Villa",
    price: 7150000,
    area: 3200,
    unit: "Sqft",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Vaishali Nagar Extension, Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
    description:
      "An elegant villa with landscaped open spaces, double-height living, and a family-friendly layout designed for modern comfort and natural light.",
    features: ["Private garden", "3 car parking", "Modular kitchen", "Smart home ready", "Club facility"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 99880 45678",
    status: "Available",
    featured: true,
    createdAt: "2026-07-14",
  },
  {
    id: "LN-1005",
    title: "Maple Crest Independent House",
    type: "Independent House",
    price: 5400000,
    area: 2500,
    unit: "Sqft",
    city: "Hyderabad",
    district: "Ranga Reddy",
    state: "Telangana",
    address: "Madhapur, Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
    description:
      "A spacious independent home in a secure neighborhood with contemporary interiors, a large porch, and easy access to schools, offices, and major roads.",
    features: ["Family lounge", "Two balconies", "Private terrace", "Security cabin", "CCTV coverage"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 97000 11234",
    status: "Sold",
    featured: false,
    createdAt: "2026-06-29",
  },
  {
    id: "LN-1006",
    title: "Skyline Residency Flat",
    type: "Apartment / Flat",
    price: 9800000,
    area: 1800,
    unit: "Sqft",
    city: "Mumbai",
    district: "Mumbai Suburban",
    state: "Maharashtra",
    address: "Andheri East, Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
    description:
      "A west-facing apartment with city views, premium finishes, and high-rise comforts in a centrally connected residential complex.",
    features: ["24x7 security", "Swimming pool", "Lift access", "Power backup", "Covered parking"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 97654 89012",
    status: "Available",
    featured: false,
    createdAt: "2026-07-22",
  },
  {
    id: "LN-1007",
    title: "Metro Trade Hub",
    type: "Commercial Property",
    price: 12500000,
    area: 3500,
    unit: "Sqft",
    city: "Ahmedabad",
    district: "Ahmedabad",
    state: "Gujarat",
    address: "Near Prahlad Nagar, Ahmedabad",
    latitude: 23.0225,
    longitude: 72.5714,
    description:
      "A strategically located commercial property suited for showroom, office, or retail operations in a high-footfall business district.",
    features: ["High visibility", "Power backup", "Lift access", "Frontage access", "Parking facility"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 99221 55667",
    status: "Under Negotiation",
    featured: true,
    createdAt: "2026-06-18",
  },
  {
    id: "LN-1008",
    title: "Industrial Growth Park",
    type: "Industrial Property",
    price: 16200000,
    area: 3.8,
    unit: "Hectares",
    city: "Vadodara",
    district: "Vadodara",
    state: "Gujarat",
    address: "Makarpura Industrial Estate, Vadodara",
    latitude: 22.3072,
    longitude: 73.1812,
    description:
      "A production-ready industrial parcel with road access, utility lines, and potential for warehousing, fabrication, or light manufacturing.",
    features: ["Heavy vehicle access", "Utility lines", "Open storage", "Warehousing space", "Industrial zoning"],
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
    contactNumber: "+91 99111 33445",
    status: "Available",
    featured: false,
    createdAt: "2026-07-04",
  },
];

export const propertyHighlights = [
  { label: "Active Listings", value: "128+" },
  { label: "Cities Covered", value: "24" },
  { label: "Trusted Seller Network", value: "96%" },
  { label: "Site Visits Scheduled", value: "2.4k" },
];
