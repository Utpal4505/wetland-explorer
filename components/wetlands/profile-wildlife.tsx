import { Wetland, IucnStatusCode } from "@/types/wetland";
import { getWetlandWildlife } from "@/lib/data/wetlands";
import { Card } from "@/components/ui/card";
import { Feather, Footprints, Fish, ShieldAlert, Sparkles } from "lucide-react";

interface ProfileWildlifeProps {
  wetland: Wetland;
}

function getTaxaIcon(taxa: string) {
  switch (taxa) {
    case "Mammal":
      return <Footprints className="h-4 w-4" />;
    case "Aquatic & Fish":
      return <Fish className="h-4 w-4" />;
    case "Reptile":
      return <ShieldAlert className="h-4 w-4" />;
    case "Avifauna":
    default:
      return <Feather className="h-4 w-4" />;
  }
}

function getIucnBadge(code: IucnStatusCode) {
  switch (code) {
    case "CR":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30"
          title="IUCN Red List: Critically Endangered"
        >
          CR • Critically Endangered
        </span>
      );
    case "EN":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30"
          title="IUCN Red List: Endangered"
        >
          EN • Endangered
        </span>
      );
    case "VU":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
          title="IUCN Red List: Vulnerable"
        >
          VU • Vulnerable
        </span>
      );
    case "NT":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-teal-500/15 text-teal-700 dark:text-teal-400 border border-teal-500/30"
          title="IUCN Red List: Near Threatened"
        >
          NT • Near Threatened
        </span>
      );
    case "LC":
    default:
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
          title="IUCN Red List: Least Concern"
        >
          LC • Least Concern
        </span>
      );
  }
}

export function ProfileWildlife({ wetland }: ProfileWildlifeProps) {
  const speciesList = getWetlandWildlife(wetland);

  return (
    <section id="wildlife" className="scroll-mt-28 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <Feather className="h-4 w-4" />
          <span>Faunal Biodiversity & Keystone Species</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Key Wildlife</h2>
          <span className="text-xs font-mono text-muted-foreground bg-surface-muted px-2.5 py-1 rounded-sm border border-border">
            {speciesList.length} Flagship Species Documented
          </span>
        </div>
        <p className="text-small text-muted-foreground">
          Documented indicator species, IUCN conservation status ratings, and seasonal migration patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
        {speciesList.map((species) => (
          <Card
            key={species.commonName}
            className="p-4 border border-border bg-surface hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground border border-accent-foreground/15">
                  {getTaxaIcon(species.taxa)}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {species.commonName}
                  </h3>
                  {species.scientificName && (
                    <div className="text-[11px] text-muted-foreground italic font-serif">
                      {species.scientificName}
                    </div>
                  )}
                </div>
              </div>

              <span className="text-[11px] font-mono text-muted-foreground bg-surface-muted px-2 py-0.5 rounded-xs border border-border/80 shrink-0">
                {species.taxa}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/60">
              {getIucnBadge(species.iucnStatus)}

              <span className="text-[11px] font-medium text-foreground/80 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <span>{species.seasonality}</span>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
