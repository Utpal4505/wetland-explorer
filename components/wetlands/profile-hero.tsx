"use client";

import * as React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Wetland } from "@/types/wetland";

interface ProfileHeroProps {
  wetland: Wetland;
}

export function ProfileHero({ wetland }: ProfileHeroProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <figure className="space-y-2">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-surface-muted shadow-sm">
        {!imageError ? (
          <Image
            src={wetland.imageUrl}
            alt={`${wetland.name} landscape in ${wetland.state}, India`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-muted text-muted-foreground">
            <span className="text-sm font-mono uppercase tracking-wider">
              Atlas Aerial View • {wetland.name}
            </span>
          </div>
        )}

        {/* Ambient Bottom Gradient for Caption Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Subtle Watermark/Registry Mark */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white/90 text-xs font-mono drop-shadow-xs">
          <span className="flex items-center gap-1.5 text-xs text-white">
            <Camera className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span className="font-sans text-xs">
              {wetland.imageCaption ?? `${wetland.name}, ${wetland.state}`}
            </span>
          </span>
          <span className="hidden sm:inline-block text-[11px] opacity-80">
            {wetland.category}
          </span>
        </div>
      </div>
    </figure>
  );
}
