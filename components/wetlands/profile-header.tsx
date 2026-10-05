import Link from "next/link";
import { ArrowLeft, MapPin, Compass } from "lucide-react";
import { Wetland } from "@/types/wetland";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShareDossierButton } from "@/components/ui/share-dossier-button";

interface ProfileHeaderProps {
  wetland: Wetland;
}

export function ProfileHeader({ wetland }: ProfileHeaderProps) {
  const latFormatted = `${Math.abs(wetland.coordinates.lat).toFixed(4)}° ${
    wetland.coordinates.lat >= 0 ? "N" : "S"
  }`;
  const lngFormatted = `${Math.abs(wetland.coordinates.lng).toFixed(4)}° ${
    wetland.coordinates.lng >= 0 ? "E" : "W"
  }`;

  return (
    <header className="space-y-4">
      {/* Top Back Action, Navigation Breadcrumbs & Share */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-2.5 h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <Link href="/explore">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Explore Catalog</span>
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex items-center gap-1.5 font-mono text-[11px]" aria-label="Breadcrumb">
            <Link href="/explore" className="hover:text-foreground hover:underline">
              Atlas
            </Link>
            <span>/</span>
            <span className="text-foreground/80">{wetland.state}</span>
            <span>/</span>
            <span className="text-primary font-medium">{wetland.name}</span>
          </nav>

          <ShareDossierButton
            wetlandName={wetland.name}
            wetlandState={wetland.state}
            ramsarSiteNo={wetland.ramsarSiteNo}
          />
        </div>
      </div>

      {/* Main Title & Classification Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="sm" className="font-medium gap-1.5">
            <Compass className="h-3.5 w-3.5 text-primary" />
            <span>{wetland.category}</span>
          </Badge>
          <Badge variant="default" size="sm" className="font-semibold tracking-wide shadow-xs">
            {wetland.designation}
            {wetland.ramsarSiteNo ? ` #${wetland.ramsarSiteNo}` : ""}
            {wetland.designationYear ? ` • ${wetland.designationYear}` : ""}
          </Badge>
          {wetland.biogeographicZone && (
            <span className="inline-flex text-[11px] font-mono text-muted-foreground bg-surface-muted px-2.5 py-0.5 rounded-sm border border-border">
              {wetland.biogeographicZone}
            </span>
          )}
        </div>

        <h1 className="text-display sm:text-4xl lg:text-5xl">{wetland.name}</h1>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-small text-muted-foreground">
          <span className="flex items-center gap-1.5 text-foreground font-medium">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>{wetland.state}, {wetland.country ?? "India"}</span>
          </span>
          <span>•</span>
          <span className="text-data text-xs text-muted-foreground">
            {latFormatted}, {lngFormatted}
          </span>
          {wetland.elevationMeters !== undefined && (
            <>
              <span>•</span>
              <span className="text-data text-xs text-muted-foreground">
                {wetland.elevationMeters}m MSL
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
