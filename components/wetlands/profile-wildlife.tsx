import Link from "next/link";
import { Wetland, IucnStatusCode } from "@/types/wetland";
import { getWetlandWildlife } from "@/lib/data/wetlands";
import { getSpeciesForWetland, matchSpeciesNameToSlug } from "@/lib/data/species";
import { Card } from "@/components/ui/card";
import { Feather, Footprints, Fish, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

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
  const connectedSpecies = getSpeciesForWetland(wetland.id);

  return (
    <section id="wildlife" className="scroll-mt-28 space-y-5">
      {/* Header */}
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

      {/* Connected Wildlife Explorer Banner */}
      {connectedSpecies.length > 0 && (
        <div className="rounded-xl border border-border/80 bg-surface/70 p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-semibold">
              <Feather className="h-3.5 w-3.5 text-primary" />
              <span>Explore in Wildlife Explorer</span>
            </span>
            <Link
              href="/wildlife"
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>All Species Profiles</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-0.5">
            {connectedSpecies.map((s) => (
              <Link
                key={s.slug}
                href={`/wildlife/${s.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface hover:bg-surface-muted border border-border text-foreground transition-colors group cursor-pointer shadow-2xs"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {getTaxaIcon(s.taxa)}
                </span>
                <span>{s.name}</span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  ({s.wetlands.length} {s.wetlands.length === 1 ? "site" : "sites"})
                </span>
                <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Grid of Species */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
        {speciesList.map((species) => {
          const speciesSlug = matchSpeciesNameToSlug(species.commonName);

          return (
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

              {/* Direct Link to Species Profile */}
              {speciesSlug && (
                <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Documented Species Dossier
                  </span>
                  <Link
                    href={`/wildlife/${speciesSlug}`}
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline group/link"
                  >
                    <span>Explore species profile</span>
                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
