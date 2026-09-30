import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ListFilter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/map/map-view";
import { MapLoadingSkeleton } from "@/components/map/map-loading";

export const metadata: Metadata = {
  title: "Geographic Map — Wetland Explorer",
  description:
    "Explore India's wetlands geographically on an interactive map. Discover spatial distributions, Ramsar coordinates, and conservation statuses.",
};

export default function MapPage() {
  return (
    <div className="flex-1 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/80 pb-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="accent" size="sm">
              <Compass className="h-3 w-3 mr-1 text-primary" />
              <span>Cartographic Atlas</span>
            </Badge>
            <Badge variant="outline" size="sm">
              Indian Subcontinent
            </Badge>
          </div>

          <h1 className="text-h1">Geographic Map</h1>
          <p className="text-small text-muted-foreground max-w-2xl">
            Interactive spatial visualization of India&apos;s Ramsar wetlands. Explore geographic distributions, 
            inspect coordinates, and click any marker to open preview dossiers.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button asChild variant="outline" size="sm">
            <Link href="/explore" className="gap-2">
              <ListFilter className="h-3.5 w-3.5" />
              <span>Catalog View</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Interactive Map Experience (Suspended for useSearchParams) */}
      <React.Suspense fallback={<MapLoadingSkeleton />}>
        <MapView />
      </React.Suspense>
    </div>
  );
}
