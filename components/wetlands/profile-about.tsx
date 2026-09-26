import { Wetland } from "@/types/wetland";
import { BookOpen, Droplets, Map } from "lucide-react";

interface ProfileAboutProps {
  wetland: Wetland;
}

export function ProfileAbout({ wetland }: ProfileAboutProps) {
  return (
    <section id="overview" className="scroll-mt-28 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <BookOpen className="h-4 w-4" />
          <span>Ecosystem Overview</span>
        </div>
        <h2 className="text-h2">About {wetland.name}</h2>
      </div>

      {/* Lead Paragraph with emphasis */}
      <div className="rounded-lg border-l-2 border-primary bg-surface p-4 sm:p-5 shadow-xs">
        <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
          {wetland.shortDescription}
        </p>
      </div>

      {/* Narrative Body */}
      <div className="text-body text-muted-foreground leading-relaxed space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          {wetland.overview}
        </p>
      </div>

      {/* Geographic / Hydrological Pill Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 rounded-sm bg-surface-muted px-2.5 py-1 border border-border">
          <Droplets className="h-3.5 w-3.5 text-primary" />
          <span>Category: <strong className="text-foreground font-medium">{wetland.category}</strong></span>
        </span>
        <span className="flex items-center gap-1.5 rounded-sm bg-surface-muted px-2.5 py-1 border border-border">
          <Map className="h-3.5 w-3.5 text-primary" />
          <span>Biogeographic Basin: <strong className="text-foreground font-medium">{wetland.biogeographicZone ?? "India"}</strong></span>
        </span>
      </div>
    </section>
  );
}
