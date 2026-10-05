import { WetlandSource } from "@/types/wetland";

export type SpeciesTaxa = "Avifauna" | "Mammal" | "Aquatic & Fish" | "Reptile";

export type SpeciesIucnStatus = "CR" | "EN" | "VU" | "NT" | "LC";

export type SpeciesSeasonality =
  | "Resident"
  | "Winter Migrant"
  | "Breeding Visitor"
  | "Endemic Resident";

export interface Species {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  taxa: SpeciesTaxa;
  category: string; // Human-friendly label, e.g. "Birds", "Mammals", "Reptiles", "Aquatic & Fish"
  description: string;
  ecologicalRole: string; // Why wetland habitats are vital for this species
  image: string;
  imageCaption?: string;
  photoCredit?: string;
  iucnStatus: SpeciesIucnStatus;
  seasonality: SpeciesSeasonality;
  wetlands: string[]; // Wetland IDs referencing WETLANDS_DATA
  sources?: WetlandSource[];
}
