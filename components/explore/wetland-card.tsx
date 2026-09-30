"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Wetland } from "@/types/wetland";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WetlandCardProps {
  wetland: Wetland;
  className?: string;
}

export function WetlandCard({ wetland, className }: WetlandCardProps) {
  const [imageError, setImageError] = React.useState(false);

  // Format coordinates nicely
  const latFormatted = `${Math.abs(wetland.coordinates.lat).toFixed(2)}° ${
    wetland.coordinates.lat >= 0 ? "N" : "S"
  }`;
  const lngFormatted = `${Math.abs(wetland.coordinates.lng).toFixed(2)}° ${
    wetland.coordinates.lng >= 0 ? "E" : "W"
  }`;

  return (
    <Card
      className={cn(
        "group overflow-hidden flex flex-col justify-between border border-border bg-surface transition-all duration-200 hover:border-primary/40 hover:shadow-md h-full",
        className
      )}
    >
      {/* Top Media Viewport */}
      <div>
        <Link
          href={`/wetlands/${wetland.id}`}
          className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted block cursor-pointer"
        >
          {!imageError ? (
            <Image
              src={wetland.imageUrl}
              alt={wetland.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface-muted text-muted-foreground">
              <span className="text-xs font-mono uppercase tracking-wider">
                Atlas Image • {wetland.category}
              </span>
            </div>
          )}

          {/* Ambient Top Shadow Overlay for Badge Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

          {/* Category Badge on Top-Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-medium bg-black/70 text-white backdrop-blur-xs border border-white/15">
              {wetland.category}
            </span>
          </div>

          {/* Designation Badge on Top-Right */}
          <div className="absolute top-3 right-3 z-10">
            <Badge
              variant="default"
              size="sm"
              className="text-[10px] uppercase tracking-wider font-semibold shadow-xs"
            >
              {wetland.designation}
              {wetland.designationYear ? ` • ${wetland.designationYear}` : ""}
            </Badge>
          </div>

          {/* Bottom Coordinates Strip overlay */}
          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white/90 text-xs font-mono">
            <span className="flex items-center gap-1 drop-shadow-xs">
              <MapPin className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="font-sans font-medium text-white">{wetland.state}</span>
            </span>
            <span className="text-[11px] opacity-80 drop-shadow-xs">
              {latFormatted}, {lngFormatted}
            </span>
          </div>
        </Link>

        {/* Card Content with Standardized Heights */}
        <div className="p-4 sm:p-5 space-y-2.5">
          {/* Place Name Header */}
          <div className="h-7 flex items-center">
            <Link
              href={`/wetlands/${wetland.id}`}
              className="flex items-center justify-between gap-2 group/title w-full"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover/title:text-primary truncate">
                {wetland.name}
              </h3>
              <span
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-surface-muted text-muted-foreground transition-colors group-hover/title:bg-primary group-hover/title:text-primary-foreground"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          {/* Short Place Description (Fixed 2-line height so all cards align) */}
          <p className="text-small text-muted-foreground leading-relaxed line-clamp-2 h-10 overflow-hidden">
            {wetland.shortDescription}
          </p>

          {/* Key Wildlife Tags (Fixed container height for tags so cards stay identical) */}
          <div className="h-14 overflow-hidden flex flex-wrap items-start content-start gap-1.5 pt-0.5">
            {wetland.keyWildlife.slice(0, 3).map((species) => (
              <span
                key={species}
                className="inline-flex items-center rounded-sm bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-foreground/80 border border-border/60"
              >
                {species}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Footer Bar (Always aligned to the bottom) */}
      <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs mt-auto">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span>AREA:</span>
          <span className="font-mono font-medium text-foreground">
            {wetland.areaKm2.toLocaleString()} km²
          </span>
        </div>

        <Link
          href={`/wetlands/${wetland.id}`}
          className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
        >
          <span>Record Details</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}
