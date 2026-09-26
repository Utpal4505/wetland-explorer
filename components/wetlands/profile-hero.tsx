"use client";

import * as React from "react";
import Image from "next/image";
import { Camera, MapPin } from "lucide-react";
import { Wetland } from "@/types/wetland";

interface ProfileHeroProps {
  wetland: Wetland;
}

export function ProfileHero({ wetland }: ProfileHeroProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <figure className="space-y-2">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full overflow-hidden rounded-xl border border-border bg-surface-muted shadow-xs">
        {!imageError ? (
          <Image
            src={wetland.imageUrl}
            alt={`${wetland.name} landscape in ${wetland.state}, India`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-muted text-muted-foreground">
            <span className="text-sm font-mono uppercase tracking-wider">
              Atlas Landscape View • {wetland.name}
            </span>
          </div>
        )}

        {/* Ambient Bottom Gradient for Caption Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Top-Right Geographic Stamp */}
        <div className="absolute top-3.5 right-3.5 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] font-mono bg-black/60 text-white backdrop-blur-xs border border-white/15">
          <MapPin className="h-3 w-3 text-emerald-400" />
          <span>{wetland.state}</span>
        </div>

        {/* Bottom Caption & Taxonomy Watermark */}
        <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-end justify-between text-white/90 text-xs font-mono drop-shadow-xs gap-3">
          <span className="flex items-center gap-1.5 text-xs text-white max-w-xl">
            <Camera className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span className="font-sans text-xs leading-normal">
              {wetland.imageCaption ?? `${wetland.name}, ${wetland.state}`}
            </span>
          </span>
          <span className="hidden sm:inline-block text-[11px] opacity-80 shrink-0 uppercase tracking-wider">
            {wetland.category}
          </span>
        </div>
      </div>
    </figure>
  );
}
