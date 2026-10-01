"use client";

import * as React from "react";
import L from "leaflet";
import { Wetland } from "@/types/wetland";
import { MapViewMode, InteractiveMapProps } from "./map-types";

function getTileLayerConfig(mode: MapViewMode) {
  switch (mode) {
    case "terrain":
      return {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Topographic Relief',
        maxZoom: 18,
      };
    case "dark":
      return {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Dark Canvas',
        maxZoom: 16,
      };
    case "light":
      return {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Light Canvas',
        maxZoom: 16,
      };
    case "satellite":
    default:
      return {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; High-Res Satellite Imagery',
        maxZoom: 18,
      };
  }
}

// Function to generate clean, high-contrast circular pins with threat-colored rings
function createCustomMarkerIcon(wetland: Wetland, isSelected: boolean) {
  let badgeColor = "bg-emerald-600 text-white border-emerald-400";
  let pulseRing = "";

  switch (wetland.threatLevel) {
    case "Critical":
      badgeColor = "bg-red-600 text-white border-red-400";
      break;
    case "Severe":
      badgeColor = "bg-rose-600 text-white border-rose-400";
      break;
    case "High":
      badgeColor = "bg-orange-500 text-white border-orange-300";
      break;
    case "Moderate":
      badgeColor = "bg-sky-600 text-white border-sky-400";
      break;
    case "Low":
    default:
      badgeColor = "bg-emerald-600 text-white border-emerald-400";
      break;
  }

  if (isSelected) {
    pulseRing = `<span class="absolute -inset-2.5 rounded-full border-2 border-primary bg-primary/20 animate-marker-pulse pointer-events-none"></span>`;
  }

  const iconHtml = `
    <div class="relative flex items-center justify-center cursor-pointer select-none group">
      ${pulseRing}
      <div class="flex items-center justify-center rounded-full shadow-lg border-2 ${badgeColor} transition-transform duration-200 group-hover:scale-120 ${
        isSelected
          ? "w-8 h-8 scale-110 shadow-xl ring-3 ring-white/50"
          : "w-6 h-6 hover:shadow-xl"
      }">
        <svg xmlns="http://www.w3.org/2000/svg" class="${
          isSelected ? "w-4 h-4" : "w-3 h-3"
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: "custom-wetland-pin",
    iconSize: isSelected ? [32, 32] : [24, 24],
    iconAnchor: isSelected ? [16, 16] : [12, 12],
    tooltipAnchor: [0, isSelected ? -16 : -12],
  });
}

// Function to generate the sleek floating hover microcard
function createHoverMicrocardHtml(wetland: Wetland) {
  let threatColorText = "text-emerald-600 dark:text-emerald-400";
  let threatDotBg = "bg-emerald-500";
  let threatLabel = "Low Pressure • Stable";

  switch (wetland.threatLevel) {
    case "Critical":
    case "Severe":
      threatColorText = "text-red-600 dark:text-red-400";
      threatDotBg = "bg-red-500";
      threatLabel = `${wetland.threatLevel} Risk Watch`;
      break;
    case "High":
      threatColorText = "text-orange-600 dark:text-orange-400";
      threatDotBg = "bg-orange-500";
      threatLabel = "High Environmental Pressure";
      break;
    case "Moderate":
      threatColorText = "text-sky-600 dark:text-sky-400";
      threatDotBg = "bg-sky-500";
      threatLabel = "Moderate Ecological Watch";
      break;
    case "Low":
    default:
      threatColorText = "text-emerald-600 dark:text-emerald-400";
      threatDotBg = "bg-emerald-500";
      threatLabel = "Stable Baseline";
      break;
  }

  return `
    <div class="space-y-1 select-none pointer-events-none min-w-[170px]">
      <div class="flex items-center gap-1.5 pb-0.5">
        <span class="text-xs">🌿</span>
        <span class="font-bold text-xs text-foreground tracking-tight leading-snug">${wetland.name}</span>
      </div>
      <div class="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
        <span>${wetland.state}</span>
        <span>•</span>
        <span>${wetland.areaKm2.toLocaleString()} km²</span>
      </div>
      <div class="flex items-center gap-1.5 pt-1 text-[10px] border-t border-border/60">
        <span class="inline-block h-1.5 w-1.5 rounded-full ${threatDotBg}"></span>
        <span class="${threatColorText} font-semibold">${threatLabel}</span>
      </div>
    </div>
  `;
}

export function InteractiveMap({
  wetlands,
  selectedWetland,
  onSelectWetland,
  viewMode = "satellite",
  locateSlug,
  fitBoundsTrigger = 0,
}: InteractiveMapProps) {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const mapInstanceRef = React.useRef<L.Map | null>(null);
  const tileLayerRef = React.useRef<L.TileLayer | null>(null);
  const markersLayerRef = React.useRef<L.LayerGroup | null>(null);

  // Initialize Map Instance
  React.useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Center over central India to display the entire subcontinent
    const map = L.map(mapContainerRef.current, {
      center: [22.0, 79.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 18,
      zoomControl: false,
    });

    // Custom positioned Zoom Controls
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Initial Tile Layer (defaults to high-res satellite)
    const tileConfig = getTileLayerConfig(viewMode);
    const tileLayer = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: tileConfig.maxZoom,
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Markers layer group
    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;

    // Deselect wetland when clicking map background
    map.on("click", () => {
      onSelectWetland(null);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle Tile Layer View Mode Switching (Satellite, Terrain, Dark, Light)
  React.useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const tileConfig = getTileLayerConfig(viewMode);
    const newTileLayer = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: tileConfig.maxZoom,
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [viewMode]);

  // Update Markers when wetlands list or selection changes
  React.useEffect(() => {
    const markersLayer = markersLayerRef.current;
    const map = mapInstanceRef.current;
    if (!markersLayer || !map) return;

    markersLayer.clearLayers();

    wetlands.forEach((wetland) => {
      // Validate coordinates safely
      if (
        !wetland.coordinates ||
        typeof wetland.coordinates.lat !== "number" ||
        typeof wetland.coordinates.lng !== "number" ||
        isNaN(wetland.coordinates.lat) ||
        isNaN(wetland.coordinates.lng)
      ) {
        return;
      }

      const isSelected = selectedWetland?.id === wetland.id;
      const markerIcon = createCustomMarkerIcon(wetland, isSelected);

      const marker = L.marker([wetland.coordinates.lat, wetland.coordinates.lng], {
        icon: markerIcon,
        zIndexOffset: isSelected ? 1000 : 0,
      });

      // Sleek floating hover micro-card
      marker.bindTooltip(createHoverMicrocardHtml(wetland), {
        direction: "top",
        offset: [0, isSelected ? -16 : -12],
        className: "wetland-hover-microcard",
        opacity: 1,
      });

      // Marker click interaction
      marker.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        onSelectWetland(wetland);

        // Smooth pan/zoom to selected marker
        map.flyTo(
          [wetland.coordinates.lat, wetland.coordinates.lng],
          Math.max(map.getZoom(), 7),
          {
            duration: 0.8,
            easeLinearity: 0.25,
          }
        );
      });

      marker.addTo(markersLayer);
    });
  }, [wetlands, selectedWetland, onSelectWetland]);

  // Handle locateSlug (deep linking e.g. /map?locate=bhoj-wetland)
  React.useEffect(() => {
    if (!locateSlug || !mapInstanceRef.current || wetlands.length === 0) return;

    const target = wetlands.find((w) => w.id === locateSlug);
    if (target && target.coordinates) {
      onSelectWetland(target);
      mapInstanceRef.current.flyTo(
        [target.coordinates.lat, target.coordinates.lng],
        8,
        { duration: 1.2 }
      );
    }
  }, [locateSlug, wetlands, onSelectWetland]);

  // Handle Fit to All Wetlands trigger
  React.useEffect(() => {
    if (fitBoundsTrigger === 0 || !mapInstanceRef.current || wetlands.length === 0) return;

    const validCoords = wetlands
      .filter((w) => w.coordinates && !isNaN(w.coordinates.lat) && !isNaN(w.coordinates.lng))
      .map((w) => [w.coordinates.lat, w.coordinates.lng] as [number, number]);

    if (validCoords.length > 0) {
      const bounds = L.latLngBounds(validCoords);
      mapInstanceRef.current.fitBounds(bounds, {
        padding: [60, 60],
        maxZoom: 7,
        animate: true,
      });
    }
  }, [fitBoundsTrigger, wetlands]);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}
