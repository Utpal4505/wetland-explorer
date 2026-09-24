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

export interface Wetland {
  id: string;
  name: string;
  state: string;
  coordinates: WetlandCoordinates;
  designation: WetlandDesignation;
  designationYear?: number;
  areaKm2: number;
  category: WetlandCategory;
  shortDescription: string;
  imageUrl: string;
  keyWildlife: string[];
  threatLevel?: "Low" | "Moderate" | "High" | "Critical";
}

export interface ExploreFiltersState {
  searchQuery: string;
  selectedState: string;
  selectedDesignation: string;
  selectedCategory: string;
  sortBy: "name-asc" | "area-desc" | "year-desc";
}
