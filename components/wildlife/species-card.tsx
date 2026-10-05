"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Species } from "@/types/species";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";
import { TaxaIcon, IucnBadge } from "@/components/wildlife/wildlife-ui";
import { cn } from "@/lib/utils";

export { TaxaIcon, IucnBadge };

interface SpeciesCardProps {
  species: Species;
  className?: string;
}

export function SpeciesCard({ species, className }: SpeciesCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between border border-border bg-surface transition-all duration-200 hover:border-primary/50 hover:shadow-md h-full relative overflow-hidden",
        className
      )}
    >
      <div>
        {/* Top Media Viewport */}
        <Link
          href={`/wildlife/${species.slug}`}
          className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted block cursor-pointer"
        >
          {!imageError ? (
            <Image
              src={species.image}
              alt={species.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-surface-muted text-muted-foreground">
              <span className="text-xs font-mono uppercase tracking-wider">
                {species.taxa} • {species.name}
              </span>
            </div>
          )}

          {/* Top Gradient Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Taxa Badge on Top-Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium bg-black/75 text-white backdrop-blur-xs border border-white/20">
              <TaxaIcon taxa={species.taxa} className="h-3.5 w-3.5 text-primary-foreground" />
              <span>{species.taxa}</span>
            </span>
          </div>

          {/* Seasonality on Top-Right */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-mono font-semibold bg-primary text-primary-foreground shadow-xs">
              {species.seasonality}
            </span>
          </div>

          {/* Bottom Wetlands Count Strip */}
          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white/95 text-xs font-mono">
            <span className="flex items-center gap-1 drop-shadow-xs">
              <MapPin className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="font-sans font-medium text-white">
                {species.wetlands.length} {species.wetlands.length === 1 ? "Wetland System" : "Wetland Systems"}
              </span>
            </span>
          </div>
        </Link>

        {/* Content Area */}
        <div className="p-4 sm:p-5 space-y-2.5">
          {/* Species Names */}
          <div className="space-y-0.5">
            <Link
              href={`/wildlife/${species.slug}`}
              className="group/title block focus-visible:outline-hidden focus-visible:underline"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover/title:text-primary">
                {species.name}
              </h3>
            </Link>
            <p className="text-xs text-muted-foreground italic font-serif">
              {species.scientificName}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-small text-muted-foreground leading-relaxed line-clamp-2 h-10 overflow-hidden">
            {species.description}
          </p>

          {/* IUCN Status Badge */}
          <div className="pt-1">
            <IucnBadge code={species.iucnStatus} />
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="px-4 sm:px-5 py-3 bg-surface-muted/30 border-t border-border/70 flex items-center justify-between text-xs mt-auto">
        <span className="font-mono text-muted-foreground text-[11px]">
          ID: #{species.slug}
        </span>
        <Link
          href={`/wildlife/${species.slug}`}
          className="font-medium text-primary hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Explore Associated Wetlands</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}
