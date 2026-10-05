"use client";

import * as React from "react";
import { Species } from "@/types/species";
import { SpeciesCard } from "@/components/wildlife/species-card";
import { Input } from "@/components/ui/input";
import { Search, X, Feather, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface WildlifeExplorerViewProps {
  species: Species[];
  totalWetlandsCount: number;
}

export function WildlifeExplorerView({
  species,
  totalWetlandsCount,
}: WildlifeExplorerViewProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTaxa, setSelectedTaxa] = React.useState<string>("all");

  // Calculate counts per taxa
  const taxaCounts = React.useMemo(() => {
    const counts: Record<string, number> = {
      all: species.length,
      Avifauna: 0,
      Mammal: 0,
      Reptile: 0,
      "Aquatic & Fish": 0,
    };
    species.forEach((s) => {
      if (counts[s.taxa] !== undefined) {
        counts[s.taxa]++;
      }
    });
    return counts;
  }, [species]);

  // Filter species based on search query and taxa
  const filteredSpecies = React.useMemo(() => {
    return species.filter((item) => {
      // Taxa filter
      if (selectedTaxa !== "all" && item.taxa !== selectedTaxa) {
        return false;
      }

      // Keyword search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.scientificName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ecologicalRole.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [species, selectedTaxa, searchQuery]);

  return (
    <div className="space-y-6">
      {/* 1. Telemetry Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Documented Species
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-foreground">
              {species.length}
            </span>
            <span className="text-xs text-muted-foreground">Flagship Fauna</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Wetland Sanctuaries
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-primary">
              {totalWetlandsCount}
            </span>
            <span className="text-xs text-muted-foreground">Monitored Habitats</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Avifauna & Migrants
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-foreground">
              {taxaCounts["Avifauna"]}
            </span>
            <span className="text-xs text-muted-foreground">Flyway Birds</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Mammals & Aquatic
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-foreground">
              {taxaCounts["Mammal"] + taxaCounts["Aquatic & Fish"]}
            </span>
            <span className="text-xs text-muted-foreground">Keystone Taxa</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Search & Taxa Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface p-3.5 rounded-xl border border-border shadow-xs">
        {/* Search Input */}
        <div className="relative w-full sm:w-80 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search species, scientific name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-8 h-9 text-xs sm:text-sm bg-surface-muted/60 focus:bg-surface w-full"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
              title="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Quick Taxa Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
          <button
            onClick={() => setSelectedTaxa("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedTaxa === "all"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            All Species ({species.length})
          </button>
          <button
            onClick={() => setSelectedTaxa("Avifauna")}
            className={cn(
              "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedTaxa === "Avifauna"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            Birds ({taxaCounts["Avifauna"]})
          </button>
          <button
            onClick={() => setSelectedTaxa("Mammal")}
            className={cn(
              "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedTaxa === "Mammal"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            Mammals ({taxaCounts["Mammal"]})
          </button>
          <button
            onClick={() => setSelectedTaxa("Reptile")}
            className={cn(
              "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedTaxa === "Reptile"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            Reptiles ({taxaCounts["Reptile"]})
          </button>
          <button
            onClick={() => setSelectedTaxa("Aquatic & Fish")}
            className={cn(
              "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedTaxa === "Aquatic & Fish"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            Aquatic & Fish ({taxaCounts["Aquatic & Fish"]})
          </button>
        </div>
      </div>

      {/* 3. Species Grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecies.map((item) => (
            <SpeciesCard key={item.slug} species={item} />
          ))}
        </div>
      ) : (
        /* Empty Search State */
        <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center space-y-4">
          <div className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-muted-foreground">
              <Feather className="h-6 w-6" />
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-foreground">
              No matching species found
            </h3>
            <p className="text-small text-muted-foreground max-w-sm mx-auto">
              No documented species matched &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTaxa("all");
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. Ecological Information Notice */}
      <div className="rounded-xl border border-border/80 bg-surface/60 p-4 sm:p-5 flex items-start gap-3.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="space-y-1 text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground block">
            Habitats That Sustain India&apos;s Biodiversity
          </span>
          <p>
            Wetlands serve as crucial biological lifelines—from wintering stopovers along the Central Asian Flyway to unique micro-habitats like floating phumdis and tidal mangrove islands. Select any species card to discover why these wetland sanctuaries are indispensable for their survival.
          </p>
        </div>
      </div>
    </div>
  );
}
