export type WetlandDesignation = "Ramsar Site" | "National Wetland" | "Wildlife Sanctuary";

export type WetlandCategory =
  | "Brackish Lagoon"
  | "Freshwater Lake"
  | "Mangrove Swamps"
  | "High-Altitude Lake"
  | "Riverine Floodplain"
  | "Wetland Complex";

export interface WetlandCoordinates {
  lat: number;
  lng: number;
}

export interface WetlandImportance {
  ecological: string;
  wildlife: string;
  local: string;
}

export type ThreatSeverity = "Low" | "Moderate" | "High" | "Severe" | "Critical";

export interface WetlandThreat {
  title: string;
  description: string;
  severity: ThreatSeverity;
}

export interface WetlandSource {
  title: string;
  organization: string;
  year?: number;
  url?: string;
  citationType?: "Official Registry" | "Research Paper" | "Government Gazette";
}

export interface Wetland {
  id: string;
  name: string;
  state: string;
  country?: string;
  coordinates: WetlandCoordinates;
  designation: WetlandDesignation;
  designationYear?: number;
  areaKm2: number;
  elevationMeters?: number;
  biogeographicZone?: string;
  category: WetlandCategory;
  shortDescription: string;
  overview: string;
  importance: WetlandImportance;
  imageUrl: string;
  imageCaption?: string;
  keyWildlife: string[];
  threats: WetlandThreat[];
  sources: WetlandSource[];
  threatLevel?: ThreatSeverity;
}

export interface ExploreFiltersState {
  searchQuery: string;
  selectedState: string;
  selectedDesignation: string;
  selectedCategory: string;
  sortBy: "name-asc" | "area-desc" | "year-desc";
}
