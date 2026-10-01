import { Wetland } from "@/types/wetland";

export type MapViewMode = "satellite" | "terrain" | "dark" | "light";

export interface MapViewportState {
  center: [number, number];
  zoom: number;
}

export interface MapFilterState {
  searchQuery: string;
  selectedState: string;
  threatLevel: string;
}

export interface InteractiveMapProps {
  wetlands: Wetland[];
  selectedWetland: Wetland | null;
  onSelectWetland: (wetland: Wetland | null) => void;
  viewMode: MapViewMode;
  locateSlug?: string | null;
  fitBoundsTrigger?: number;
}
