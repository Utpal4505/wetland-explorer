"use client";

import * as React from "react";
import L from "leaflet";
import { Wetland } from "@/types/wetland";

interface InteractiveMapProps {
  wetlands: Wetland[];
  selectedWetland: Wetland | null;
  onSelectWetland: (wetland: Wetland | null) => void;
  isDarkMode: boolean;
  locateSlug?: string | null;
  fitBoundsTrigger?: number;
}

// Function to generate threat-coded custom DivIcon markers
function createCustomMarkerIcon(wetland: Wetland, isSelected: boolean) {
  let colorClass = "bg-emerald-600 text-white border-emerald-400";
  let pulseRing = "";

  switch (wetland.threatLevel) {
    case "Critical":
      colorClass = "bg-red-600 text-white border-red-400";
      break;
    case "Severe":
      colorClass = "bg-rose-600 text-white border-rose-400";
      break;
    case "High":
      colorClass = "bg-orange-500 text-white border-orange-300";
      break;
    case "Moderate":
      colorClass = "bg-sky-600 text-white border-sky-400";
      break;
    case "Low":
    default:
      colorClass = "bg-emerald-600 text-white border-emerald-400";
      break;
  }

  if (isSelected) {
    pulseRing = `<span class="absolute -inset-2.5 rounded-full border-2 border-primary bg-primary/20 animate-marker-pulse pointer-events-none"></span>`;
  }

  const iconHtml = `
    <div class="relative flex items-center justify-center cursor-pointer select-none">
      ${pulseRing}
      <div class="flex items-center justify-center rounded-full shadow-md border-2 ${colorClass} transition-transform duration-200 hover:scale-115 ${
        isSelected ? "w-8 h-8 scale-110 shadow-lg ring-3 ring-foreground/20" : "w-6 h-6"
      }">
        <svg xmlns="http://www.w3.org/2000/svg" class="${isSelected ? "w-4 h-4" : "w-3 h-3"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: "custom-wetland-marker",
    iconSize: isSelected ? [32, 32] : [24, 24],
    iconAnchor: isSelected ? [16, 16] : [12, 12],
    tooltipAnchor: [0, isSelected ? -16 : -12],
  });
}

export function InteractiveMap({
  wetlands,
  selectedWetland,
  onSelectWetland,
  isDarkMode,
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

    // Centered on India with natural bounds
    const map = L.map(mapContainerRef.current, {
      center: [22.0, 79.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 13,
      zoomControl: false,
    });

    // Custom positioned Zoom Controls
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Initial Esri World Canvas Tile Layer based on theme (100% free, zero API key)
    const tileUrl = isDarkMode
      ? "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      : "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";

    const tileLayer = L.tileLayer(tileUrl, {
      attribution:
        '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Digital Atlas Canvas',
      maxZoom: 16,
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

  // Handle Dynamic Theme Switching (Light/Dark basemaps)
  React.useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const tileUrl = isDarkMode
      ? "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      : "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";

    const newTileLayer = L.tileLayer(tileUrl, {
      attribution:
        '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Digital Atlas Canvas',
      maxZoom: 16,
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [isDarkMode]);

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

      // Tooltip with wetland name and state
      marker.bindTooltip(
        `<div class="font-sans"><strong>${wetland.name}</strong> <span class="text-muted-foreground font-normal">(${wetland.state})</span></div>`,
        {
          direction: "top",
          offset: [0, isSelected ? -16 : -12],
          className: "wetland-tooltip",
        }
      );

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
