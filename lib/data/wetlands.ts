import { Wetland } from "@/types/wetland";

export const WETLANDS_DATA: Wetland[] = [
  {
    id: "chilika-lake",
    name: "Chilika Lake",
    state: "Odisha",
    coordinates: { lat: 19.7183, lng: 85.3211 },
    designation: "Ramsar Site",
    designationYear: 1981,
    areaKm2: 1165,
    category: "Brackish Lagoon",
    shortDescription:
      "Asia's largest brackish water lagoon, spanning three coastal districts and providing crucial sanctuary for the rare, endangered Irrawaddy dolphin population.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Irrawaddy Dolphin", "Greater Flamingo", "White-bellied Sea Eagle"],
    threatLevel: "Moderate",
  },
  {
    id: "sundarbans-wetland",
    name: "Sundarbans Wetland",
    state: "West Bengal",
    coordinates: { lat: 21.9497, lng: 88.8999 },
    designation: "Ramsar Site",
    designationYear: 2019,
    areaKm2: 4230,
    category: "Mangrove Swamps",
    shortDescription:
      "The world's largest contiguous tidal halophytic mangrove forest, spanning the delta of the Ganga, Brahmaputra, and Meghna rivers.",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Royal Bengal Tiger", "Estuarine Crocodile", "Fishing Cat"],
    threatLevel: "High",
  },
  {
    id: "loktak-lake",
    name: "Loktak Lake",
    state: "Manipur",
    coordinates: { lat: 24.55, lng: 93.7833 },
    designation: "Ramsar Site",
    designationYear: 1990,
    areaKm2: 287,
    category: "Freshwater Lake",
    shortDescription:
      "The largest natural freshwater lake in Northeast India, famous worldwide for its circular floating vegetative biomass islands known as 'phumdis'.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Sangai Brow-antlered Deer", "Indian Python", "Spot-billed Duck"],
    threatLevel: "High",
  },
  {
    id: "keoladeo-national-park",
    name: "Keoladeo National Park",
    state: "Rajasthan",
    coordinates: { lat: 27.16, lng: 77.52 },
    designation: "Ramsar Site",
    designationYear: 1981,
    areaKm2: 29,
    category: "Wetland Complex",
    shortDescription:
      "A human-managed mosaic of grasslands, woodlands, and shallow freshwater swamps on the Indo-Gangetic Plain, hosting 370+ bird species.",
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Sarus Crane", "Painted Stork", "Bar-headed Goose"],
    threatLevel: "Moderate",
  },
  {
    id: "vembanad-kol-wetland",
    name: "Vembanad-Kol Wetland",
    state: "Kerala",
    coordinates: { lat: 9.6, lng: 76.45 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 1512,
    category: "Brackish Lagoon",
    shortDescription:
      "The longest lake in India and the hydrological heart of the Kerala backwaters, famous for its salt-water barrage and below-sea-level farming system.",
    imageUrl:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Indian Spot-billed Duck", "Malabar Grey Hornbill", "Pearl Spot"],
    threatLevel: "High",
  },
  {
    id: "harike-wetland",
    name: "Harike Wetland",
    state: "Punjab",
    coordinates: { lat: 31.15, lng: 74.95 },
    designation: "Ramsar Site",
    designationYear: 1990,
    areaKm2: 41,
    category: "Riverine Floodplain",
    shortDescription:
      "A deep freshwater riverine wetland created at the confluence of the Beas and Sutlej rivers, serving as a vital winter stopover for migratory wildfowl.",
    imageUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Indus River Dolphin", "Smooth-coated Otter", "Tufted Duck"],
    threatLevel: "Moderate",
  },
  {
    id: "tso-moriri",
    name: "Tso Moriri",
    state: "Ladakh",
    coordinates: { lat: 32.9, lng: 78.31 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 120,
    category: "High-Altitude Lake",
    shortDescription:
      "A sacred high-altitude trans-Himalayan brackish lake at 4,522 meters elevation on the Changthang plateau, supporting rare alpine breeding avifauna.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Black-necked Crane", "Bar-headed Goose", "Tibetan Wild Ass (Kiang)"],
    threatLevel: "Low",
  },
  {
    id: "deepor-beel",
    name: "Deepor Beel",
    state: "Assam",
    coordinates: { lat: 26.1264, lng: 91.6483 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 40,
    category: "Freshwater Lake",
    shortDescription:
      "A permanent, deep freshwater lake situated in a former channel of the Brahmaputra River, acting as an irreplaceable ecological corridor for Asian elephants.",
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Asian Elephant", "Greater Adjutant Stork", "Spot-billed Pelican"],
    threatLevel: "Critical",
  },
  {
    id: "bhoj-wetland",
    name: "Bhoj Wetland",
    state: "Madhya Pradesh",
    coordinates: { lat: 23.2392, lng: 77.34 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 32,
    category: "Wetland Complex",
    shortDescription:
      "An artificial wetland system composed of the Upper and Lower Lakes of Bhopal, constructed originally in the 11th century by Paramara King Bhoja.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Sarus Crane", "White-rumped Vulture", "Eurasian Coot"],
    threatLevel: "Moderate",
  },
  {
    id: "point-calimere",
    name: "Point Calimere Sanctuary",
    state: "Tamil Nadu",
    coordinates: { lat: 10.3, lng: 79.8667 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 385,
    category: "Mangrove Swamps",
    shortDescription:
      "A coastal peninsula on the Palk Strait featuring shallow saline mudflats, tropical dry evergreen forest, and salt marshes that attract mass flamingo congregations.",
    imageUrl:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    keyWildlife: ["Greater Flamingo", "Blackbuck", "Olive Ridley Sea Turtle"],
    threatLevel: "Moderate",
  },
];

// Helper to extract unique states
export const ALL_STATES = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.state))
).sort();

// Helper to extract unique designations
export const ALL_DESIGNATIONS = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.designation))
).sort();

// Helper to extract unique categories
export const ALL_CATEGORIES = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.category))
).sort();
