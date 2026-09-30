import { Wetland } from "@/types/wetland";

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
  isDarkMode: boolean;
  locateSlug?: string | null;
}
