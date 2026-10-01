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
  MapPin,
  ChevronDown,
  Check,
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

  // Dropdown open states
  const [isStateDropdownOpen, setIsStateDropdownOpen] = React.useState(false);
  const [isViewModeDropdownOpen, setIsViewModeDropdownOpen] = React.useState(false);

  const stateDropdownRef = React.useRef<HTMLDivElement>(null);
  const viewModeDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Click-outside listener for both dropdowns
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target as Node)
      ) {
        setIsStateDropdownOpen(false);
      }
      if (
        viewModeDropdownRef.current &&
        !viewModeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsViewModeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      {/* 1. Pro Header Toolbar & Geographic Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface p-3 sm:p-3.5 rounded-xl border border-border shadow-xs">
        {/* Left Cluster: Comfortable Search Input + State Dropdown */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 flex-1 min-w-0">
          {/* Search input with fixed, comfortable width */}
          <div className="relative w-full sm:w-72 lg:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Search wetlands, biomes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-8 h-9 text-xs sm:text-sm bg-surface-muted/60 focus:bg-surface w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
                title="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Scalable State Filter Dropdown */}
          <div ref={stateDropdownRef} className="relative">
            <button
              onClick={() => setIsStateDropdownOpen((prev) => !prev)}
              className={cn(
                "inline-flex items-center gap-2 h-9 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer select-none",
                selectedState !== "All"
                  ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                  : "bg-surface-muted/60 text-foreground border-border hover:bg-surface-muted"
              )}
              title="Filter by Indian State"
            >
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="truncate max-w-[130px]">
                {selectedState === "All" ? "All States" : selectedState}
              </span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform opacity-70",
                  isStateDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {isStateDropdownOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-56 max-h-64 overflow-y-auto rounded-lg bg-surface border border-border shadow-xl p-1 z-40 space-y-0.5 animate-in fade-in-50 zoom-in-95 duration-100">
                <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border/60 mb-1">
                  Filter by State / UT
                </div>
                {uniqueStates.map((state) => {
                  const isSelected = selectedState === state;
                  const count =
                    state === "All"
                      ? allWetlands.length
                      : allWetlands.filter((w) => w.state === state).length;
                  return (
                    <button
                      key={state}
                      onClick={() => {
                        setSelectedState(state);
                        setIsStateDropdownOpen(false);
                        handleResetView();
                      }}
                      className={cn(
                        "flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer text-left",
                        isSelected
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-foreground hover:bg-surface-muted"
                      )}
                    >
                      <span className="truncate">{state}</span>
                      <span className="font-mono text-[10px] text-muted-foreground bg-surface-muted px-1.5 py-0.5 rounded-xs border border-border/60">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Cluster: Map View Mode Dropdown + Fit All + Plotted Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
          {/* Map View Mode Dropdown */}
          <div ref={viewModeDropdownRef} className="relative">
            <button
              onClick={() => setIsViewModeDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-surface-muted/60 hover:bg-surface-muted text-xs font-semibold text-foreground transition-colors cursor-pointer select-none"
              title="Change Map View Mode"
            >
              {viewMode === "satellite" && <Globe className="h-3.5 w-3.5 text-primary" />}
              {viewMode === "terrain" && <MapIcon className="h-3.5 w-3.5 text-primary" />}
              {viewMode === "dark" && <Moon className="h-3.5 w-3.5 text-primary" />}
              {viewMode === "light" && <Sun className="h-3.5 w-3.5 text-primary" />}
              <span className="capitalize">{viewMode} View</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform opacity-70",
                  isViewModeDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {isViewModeDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-48 rounded-lg bg-surface border border-border shadow-xl p-1.5 z-40 space-y-1 animate-in fade-in-50 zoom-in-95 duration-100">
                <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border/60 mb-1">
                  Basemap View Mode
                </div>

                <button
                  onClick={() => {
                    setViewMode("satellite");
                    setIsViewModeDropdownOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer text-left",
                    viewMode === "satellite"
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-surface-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                    <span>Satellite (Default)</span>
                  </span>
                  {viewMode === "satellite" && <Check className="h-3.5 w-3.5 text-primary" />}
                </button>

                <button
                  onClick={() => {
                    setViewMode("terrain");
                    setIsViewModeDropdownOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer text-left",
                    viewMode === "terrain"
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-surface-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <MapIcon className="h-3.5 w-3.5 text-primary" />
                    <span>Topographic Relief</span>
                  </span>
                  {viewMode === "terrain" && <Check className="h-3.5 w-3.5 text-primary" />}
                </button>

                <button
                  onClick={() => {
                    setViewMode("dark");
                    setIsViewModeDropdownOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer text-left",
                    viewMode === "dark"
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-surface-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Moon className="h-3.5 w-3.5 text-primary" />
                    <span>Dark Canvas</span>
                  </span>
                  {viewMode === "dark" && <Check className="h-3.5 w-3.5 text-primary" />}
                </button>

                <button
                  onClick={() => {
                    setViewMode("light");
                    setIsViewModeDropdownOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer text-left",
                    viewMode === "light"
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-surface-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Sun className="h-3.5 w-3.5 text-primary" />
                    <span>Light Canvas</span>
                  </span>
                  {viewMode === "light" && <Check className="h-3.5 w-3.5 text-primary" />}
                </button>
              </div>
            )}
          </div>

          {/* Reset Extent Button */}
          <button
            onClick={handleResetView}
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-medium bg-surface-muted/60 hover:bg-surface-muted text-foreground border border-border transition-colors cursor-pointer select-none"
            title="Reset map view to encompass all wetlands"
          >
            <RotateCcw className="h-3.5 w-3.5 text-primary" />
            <span className="hidden sm:inline">Fit All</span>
          </button>

          {/* Plotted Count Badge */}
          <Badge
            variant="outline"
            size="sm"
            className="font-mono text-[11px] h-9 px-2.5 flex items-center whitespace-nowrap"
          >
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
