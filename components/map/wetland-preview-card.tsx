"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wetland } from "@/types/wetland";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, X, Maximize2, ShieldAlert } from "lucide-react";
import { getThreatStatusColor } from "@/components/wetlands/profile-sidebar";

interface WetlandPreviewCardProps {
  wetland: Wetland;
  onClose: () => void;
}

export function WetlandPreviewCard({ wetland, onClose }: WetlandPreviewCardProps) {
  const threatTheme = getThreatStatusColor(wetland.threatLevel);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Card className="border border-border/90 bg-surface/95 backdrop-blur-md shadow-lg overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200 w-full sm:w-80 md:w-96">
      {/* Wetland Image Header with Overlay Badges */}
      <div className="relative aspect-video w-full bg-surface-muted overflow-hidden">
        <Image
          src={wetland.imageUrl}
          alt={wetland.name}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Top Floating Controls */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <Badge
            variant="accent"
            size="sm"
            className="text-[10px] font-semibold bg-background/80 backdrop-blur-xs border border-border"
          >
            {wetland.category}
          </Badge>

          <button
            onClick={onClose}
            aria-label="Close preview"
            className="h-6 w-6 rounded-full bg-background/80 backdrop-blur-xs text-foreground/80 hover:text-foreground hover:bg-background border border-border flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom Image Overlay Badges */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
          <span className="font-mono text-[11px] text-foreground font-semibold flex items-center gap-1 drop-shadow-xs">
            <Maximize2 className="h-3 w-3 text-primary" />
            <span>{wetland.areaKm2.toLocaleString()} km²</span>
          </span>

          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-[10px] font-mono font-semibold border ${threatTheme.bg} ${threatTheme.text} ${threatTheme.border} backdrop-blur-xs`}
          >
            <ShieldAlert className="h-3 w-3" />
            <span>{wetland.threatLevel ?? "Moderate"}</span>
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <CardContent className="p-4 space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{wetland.state}, India</span>
            <span>•</span>
            <span className="font-mono text-[11px]">{wetland.designation}</span>
          </div>

          <h3 className="text-base font-bold text-foreground mt-0.5 leading-snug">
            {wetland.name}
          </h3>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {wetland.shortDescription}
        </p>

        {/* Footer Navigation CTA */}
        <div className="pt-1">
          <Button asChild size="sm" className="w-full justify-between group">
            <Link href={`/wetlands/${wetland.id}`}>
              <span>View Wetland Profile</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
