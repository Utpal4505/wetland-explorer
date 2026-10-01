import * as React from "react";
import Link from "next/link";
import {
  Droplets,
  Building2,
  Sprout,
  Waves,
  Layers,
  CloudRain,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { ThreatCategory } from "@/types/threat";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThreatCardProps {
  threat: ThreatCategory;
  className?: string;
}

export function getThreatIcon(iconName: ThreatCategory["iconName"], className = "h-5 w-5") {
  switch (iconName) {
    case "Droplets":
      return <Droplets className={className} />;
    case "Building":
      return <Building2 className={className} />;
    case "Sprout":
      return <Sprout className={className} />;
    case "Dam":
      return <Waves className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "CloudRain":
      return <CloudRain className={className} />;
    default:
      return <ShieldAlert className={className} />;
  }
}

export function ThreatCard({ threat, className }: ThreatCardProps) {
  return (
    <Card
      className={cn(
        "group flex flex-col justify-between border border-border bg-surface transition-all duration-200 hover:border-primary/50 hover:shadow-md h-full relative overflow-hidden",
        className
      )}
    >
      <div className="p-5 sm:p-6 space-y-4">
        {/* Top Header: Icon + Affected Wetlands Count */}
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform duration-200">
            {getThreatIcon(threat.iconName, "h-5 w-5")}
          </span>

          <Badge
            variant="outline"
            size="sm"
            className="font-mono text-xs bg-surface-muted/60 text-muted-foreground border-border/80 group-hover:border-primary/30 group-hover:text-foreground transition-colors"
          >
            {threat.wetlands.length} {threat.wetlands.length === 1 ? "Site" : "Sites"} Documented
          </Badge>
        </div>

        {/* Threat Title & Description */}
        <div className="space-y-2">
          <Link
            href={`/threats/${threat.slug}`}
            className="group/title block focus-visible:outline-hidden focus-visible:underline"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover/title:text-primary">
              {threat.name}
            </h3>
          </Link>
          <p className="text-small text-muted-foreground leading-relaxed line-clamp-3">
            {threat.shortDescription}
          </p>
        </div>

        {/* Primary Contributing Drivers */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
            Primary Pressure Drivers
          </span>
          <div className="flex flex-wrap gap-1.5">
            {threat.keyDrivers.slice(0, 3).map((driver) => (
              <span
                key={driver}
                className="inline-flex items-center rounded-sm bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-foreground/80 border border-border/60"
              >
                {driver}
              </span>
            ))}
            {threat.keyDrivers.length > 3 && (
              <span className="inline-flex items-center rounded-sm bg-surface-muted px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground border border-border/60">
                +{threat.keyDrivers.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Action Link */}
      <div className="px-5 sm:px-6 py-3.5 bg-surface-muted/30 border-t border-border/70 flex items-center justify-between text-xs mt-auto">
        <span className="font-mono text-muted-foreground text-[11px]">
          Threat Registry ID: #{threat.slug}
        </span>
        <Link
          href={`/threats/${threat.slug}`}
          className="font-medium text-primary hover:underline inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Explore Affected Wetlands</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}
