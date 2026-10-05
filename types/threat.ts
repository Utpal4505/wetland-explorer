import { WetlandSource } from "@/types/wetland";

export interface ThreatCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  overview: string;
  ecologicalImpact: string;
  keyDrivers: string[];
  iconName: "Droplets" | "Building" | "Sprout" | "Dam" | "Layers" | "CloudRain";
  wetlands: string[]; // Wetland IDs referencing WETLANDS_DATA
  sources?: WetlandSource[];
}
