import { Metadata } from "next";
import { getAllSpecies } from "@/lib/data/species";
import { WETLANDS_DATA } from "@/lib/data/wetlands";
import { WildlifeExplorerView } from "@/components/wildlife/wildlife-explorer-view";
import { Feather } from "lucide-react";

export const metadata: Metadata = {
  title: "Wildlife Explorer | Species Dependent on Indian Wetlands",
  description:
    "Explore the flagship species, migratory birds, mammals, reptiles, and aquatic life that depend upon India's wetlands and Ramsar sites.",
};

export default function WildlifePage() {
  const species = getAllSpecies();
  const totalWetlandsCount = WETLANDS_DATA.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner / Hero Header */}
      <section className="border-b border-border/80 bg-surface/40 backdrop-blur-xs py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary/10">
              <Feather className="h-3.5 w-3.5" />
            </span>
            <span>Faunal Biodiversity Atlas</span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Wildlife Explorer
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Discover the diverse species that depend on India&apos;s wetlands. Rather than isolated encyclopedia entries, trace how flagship wildlife connect across interconnected lakes, lagoons, and floodplains.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Explorer */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <WildlifeExplorerView
          species={species}
          totalWetlandsCount={totalWetlandsCount}
        />
      </main>
    </div>
  );
}
