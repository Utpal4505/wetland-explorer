import { Wetland } from "@/types/wetland";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge, MapPin, Calendar, Maximize2, Mountain, Compass } from "lucide-react";

interface ProfileQuickFactsProps {
  wetland: Wetland;
}

export function ProfileQuickFacts({ wetland }: ProfileQuickFactsProps) {
  const latFormatted = `${Math.abs(wetland.coordinates.lat).toFixed(4)}° ${
    wetland.coordinates.lat >= 0 ? "N" : "S"
  }`;
  const lngFormatted = `${Math.abs(wetland.coordinates.lng).toFixed(4)}° ${
    wetland.coordinates.lng >= 0 ? "E" : "W"
  }`;

  const facts = [
    {
      label: "LOCATION",
      value: `${wetland.state}, ${wetland.country ?? "India"}`,
      icon: MapPin,
      isMono: false,
    },
    {
      label: "TOTAL SURFACE AREA",
      value: `${wetland.areaKm2.toLocaleString()} km²`,
      icon: Maximize2,
      isMono: true,
    },
    {
      label: "DESIGNATION STATUS",
      value: wetland.ramsarSiteNo
        ? `${wetland.designation} #${wetland.ramsarSiteNo} (${wetland.designationYear})`
        : wetland.designationYear
        ? `${wetland.designation} (${wetland.designationYear})`
        : wetland.designation,
      icon: Calendar,
      isMono: false,
    },
    {
      label: "COORDINATES",
      value: `${latFormatted}, ${lngFormatted}`,
      icon: Compass,
      isMono: true,
    },
    {
      label: "ELEVATION",
      value:
        wetland.elevationMeters !== undefined
          ? `${wetland.elevationMeters} m above sea level`
          : "Sea Level",
      icon: Mountain,
      isMono: true,
    },
    {
      label: "BIOGEOGRAPHIC ZONE",
      value: wetland.biogeographicZone ?? "Indian Subcontinent",
      icon: Gauge,
      isMono: false,
    },
  ];

  return (
    <Card className="border border-border bg-surface">
      <CardHeader className="border-b border-border/70 pb-3">
        <span className="text-label">Atlas Data Registry</span>
        <CardTitle className="text-base font-semibold">Quick Facts & Geographic Parameters</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="space-y-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-[11px] font-mono uppercase tracking-wider">
                    {fact.label}
                  </span>
                </div>
                <div
                  className={`text-sm text-foreground font-semibold ${
                    fact.isMono ? "font-mono" : ""
                  }`}
                >
                  {fact.value}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
