"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { getAllWetlands } from "@/lib/data/wetlands";
import { Wetland } from "@/types/wetland";
import { WetlandPreviewCard } from "@/components/map/wetland-preview-card";
import { MapLoadingSkeleton } from "@/components/map/map-loading";
import { MapViewMode } from "./map-types";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  Search,
  Filter,
  RotateCcw,
  Globe,
  Map as MapIcon,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamically import Leaflet component with SSR disabled
const InteractiveMap = dynamic(
  () => import("@/components/map/interactive-map").then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => <MapLoadingSkeleton />,
  }
);

export function MapView() {
  const searchParams = useSearchParams();
  const locateSlug = searchParams.get("locate");
  const [mounted, setMounted] = React.useState(false);

  const allWetlands = React.useMemo(() => getAllWetlands(), []);
  const [selectedWetland, setSelectedWetland] = React.useState<Wetland | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("All");
  const [viewMode, setViewMode] = React.useState<MapViewMode>("satellite");
  const [fitBoundsTrigger, setFitBoundsTrigger] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-select wetland if locate param is present
  React.useEffect(() => {
    if (locateSlug) {
      const match = allWetlands.find((w) => w.id === locateSlug);
      if (match) {
        setSelectedWetland(match);
      }
    }
  }, [locateSlug, allWetlands]);

  // Unique sorted list of states
  const uniqueStates = React.useMemo(() => {
    const states = Array.from(new Set(allWetlands.map((w) => w.state))).sort();
    return ["All", ...states];
  }, [allWetlands]);

  // Filtered wetlands list
  const filteredWetlands = React.useMemo(() => {
    return allWetlands.filter((wetland) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        wetland.name.toLowerCase().includes(query) ||
        wetland.state.toLowerCase().includes(query) ||
        wetland.category.toLowerCase().includes(query) ||
        wetland.designation.toLowerCase().includes(query);

      const matchesState =
        selectedState === "All" || wetland.state === selectedState;

      return matchesSearch && matchesState;
    });
  }, [allWetlands, searchQuery, selectedState]);

  // Trigger fit to all bounds
  const handleResetView = () => {
    setFitBoundsTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* 1. Header Toolbar & Geographic Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-surface p-3 sm:p-4 rounded-xl border border-border shadow-xs">
        {/* Left: Search input */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search wetlands, states, biomes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-8 h-9 text-xs sm:text-sm bg-surface-muted/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Center: State filter quick pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-1" />
          {uniqueStates.map((state) => {
            const isSelected = selectedState === state;
            return (
              <button
                key={state}
                onClick={() => {
                  setSelectedState(state);
                  handleResetView();
                }}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border cursor-pointer select-none",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                    : "bg-surface-muted text-muted-foreground border-border hover:text-foreground hover:bg-muted"
                )}
              >
                {state}
              </button>
            );
          })}
        </div>

        {/* Right: View Mode Switcher (Satellite, Terrain, Dark, Light) & Reset Controls */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 border-t lg:border-t-0 pt-2 lg:pt-0 border-border/60">
          {/* Layer View Mode Segmented Controls */}
          <div className="flex items-center rounded-lg border border-border bg-surface-muted/70 p-0.5 text-xs font-medium">
            <button
              onClick={() => setViewMode("satellite")}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer select-none",
                viewMode === "satellite"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Satellite Aerial Imagery"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Satellite</span>
            </button>

            <button
              onClick={() => setViewMode("terrain")}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer select-none",
                viewMode === "terrain"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Topographic Relief & Contours"
            >
              <MapIcon className="h-3.5 w-3.5" />
              <span>Terrain</span>
            </button>

            <button
              onClick={() => setViewMode("dark")}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer select-none",
                viewMode === "dark"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Dark Atlas Canvas"
            >
              <Moon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Dark</span>
            </button>

            <button
              onClick={() => setViewMode("light")}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer select-none",
                viewMode === "light"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Light Atlas Canvas"
            >
              <Sun className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Light</span>
            </button>
          </div>

          {/* Reset Extent Button */}
          <button
            onClick={handleResetView}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-surface-muted hover:bg-muted text-foreground border border-border transition-colors cursor-pointer"
            title="Reset map view to encompass all wetlands"
          >
            <RotateCcw className="h-3.5 w-3.5 text-primary" />
            <span className="hidden sm:inline">Fit All</span>
          </button>

          <Badge variant="outline" size="sm" className="font-mono text-[11px] whitespace-nowrap">
            {filteredWetlands.length} of {allWetlands.length} Plotted
          </Badge>
        </div>
      </div>

      {/* 2. Interactive Map Viewport with Overlaid Floating Preview Card */}
      <div className="relative w-full h-[620px] sm:h-[700px] lg:h-[760px] rounded-xl overflow-hidden border border-border shadow-xs bg-surface-muted">
        {mounted && (
          <InteractiveMap
            wetlands={filteredWetlands}
            selectedWetland={selectedWetland}
            onSelectWetland={setSelectedWetland}
            viewMode={viewMode}
            locateSlug={locateSlug}
            fitBoundsTrigger={fitBoundsTrigger}
          />
        )}

        {/* Floating Marker Preview Card (when clicked) */}
        {selectedWetland && (
          <div className="absolute top-3 left-3 sm:left-auto sm:right-3 right-3 sm:max-w-sm z-30 pointer-events-auto">
            <WetlandPreviewCard
              wetland={selectedWetland}
              onClose={() => setSelectedWetland(null)}
            />
          </div>
        )}

        {/* Floating Map Legend (Bottom-Left) */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-auto hidden sm:flex flex-col gap-1.5 p-2.5 rounded-lg bg-surface/90 backdrop-blur-md border border-border shadow-md text-[11px]">
          <div className="flex items-center gap-1.5 font-semibold text-foreground">
            <Compass className="h-3.5 w-3.5 text-primary" />
            <span>Threat Status Legend</span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-1 text-muted-foreground font-mono text-[10px]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              <span>Critical / Severe</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span>High Threat</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-600" />
              <span>Moderate Threat</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span>Low / Baseline</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
