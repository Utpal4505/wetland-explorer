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

export type ThreatImpactCategory =
  | "Water Quality"
  | "Habitat Loss"
  | "Hydrological Alteration"
  | "Climate Impact"
  | "Biological Invasion"
  | "Urban Encroachment";

export interface WetlandThreat {
  title: string;
  description: string;
  severity: ThreatSeverity;
  impactCategory?: ThreatImpactCategory;
}

export interface WetlandSource {
  title: string;
  organization: string;
  year?: number;
  url?: string;
  citationType?: "Official Registry" | "Research Paper" | "Government Gazette";
}

export type IucnStatusCode = "LC" | "NT" | "VU" | "EN" | "CR";

export interface WildlifeSpecies {
  commonName: string;
  scientificName?: string;
  taxa: "Avifauna" | "Mammal" | "Aquatic & Fish" | "Reptile";
  iucnStatus: IucnStatusCode;
  seasonality: "Resident" | "Winter Migrant" | "Breeding Visitor" | "Endemic Resident";
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
  wildlifeDetails?: WildlifeSpecies[];
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
