"use client";

import * as React from "react";
import { SearchX, Compass, Sparkles } from "lucide-react";
import { WETLANDS_DATA } from "@/lib/data/wetlands";
import { WetlandCard } from "@/components/explore/wetland-card";
import { ExploreFilters } from "@/components/explore/explore-filters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("all");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortBy, setSortBy] = React.useState<"name-asc" | "area-desc" | "year-desc">(
    "name-asc"
  );

  // Filter and sort wetlands dynamically
  const filteredWetlands = React.useMemo(() => {
    let result = WETLANDS_DATA.filter((wetland) => {
      // Search matching across name, state, category, wildlife, description
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = wetland.name.toLowerCase().includes(query);
        const matchesState = wetland.state.toLowerCase().includes(query);
        const matchesCategory = wetland.category.toLowerCase().includes(query);
        const matchesWildlife = wetland.keyWildlife.some((w) =>
          w.toLowerCase().includes(query)
        );
        const matchesDesc = wetland.shortDescription.toLowerCase().includes(query);

        if (!matchesName && !matchesState && !matchesCategory && !matchesWildlife && !matchesDesc) {
          return false;
        }
      }

      // State filter
      if (selectedState !== "all" && wetland.state !== selectedState) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && wetland.category !== selectedCategory) {
        return false;
      }

      return true;
    });

    // Sort result
    result = [...result].sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "area-desc") {
        return b.areaKm2 - a.areaKm2;
      }
      if (sortBy === "year-desc") {
        return (b.designationYear ?? 0) - (a.designationYear ?? 0);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedState, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedState("all");
    setSelectedCategory("all");
    setSortBy("name-asc");
  };

  return (
    <div className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Page Header / Discovery Orientation */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="accent" size="sm">
            <Compass className="h-3 w-3 text-primary" />
            <span>Digital Atlas</span>
          </Badge>
          <Badge variant="outline" size="sm">
            Exploration Catalog
          </Badge>
        </div>

        <h1 className="text-display">Explore India&apos;s Wetlands</h1>
        <p className="text-body text-muted-foreground text-base sm:text-lg leading-relaxed">
          Discover Ramsar sites, coastal estuaries, high-altitude alpine lakes, and biodiversity 
          hotspots across India&apos;s biogeographical zones.
        </p>
      </div>

      {/* Search, Filter, Sort Controls */}
      <ExploreFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedState={selectedState}
        onStateChange={setSelectedState}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onResetFilters={handleResetFilters}
        totalCount={WETLANDS_DATA.length}
        filteredCount={filteredWetlands.length}
      />

      {/* Wetland Cards Grid or Empty State */}
      {filteredWetlands.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredWetlands.map((wetland) => (
            <div key={wetland.id} id={wetland.id}>
              <WetlandCard wetland={wetland} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-border bg-surface p-12 text-center max-w-xl mx-auto space-y-4 my-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-muted-foreground">
            <SearchX className="h-6 w-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-h3 font-semibold text-foreground">No wetlands found</h3>
            <p className="text-small text-muted-foreground max-w-md mx-auto">
              No wetland records match your current filter parameters or search term. Try expanding your search or clearing active filters.
            </p>
          </div>

          <div className="pt-2">
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Reset all filters
            </Button>
          </div>
        </div>
      )}

      {/* Bottom Atlas Scope Note */}
      <div className="mt-12 rounded-lg border border-border/80 bg-surface-muted/60 p-4 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          <span>
            Phase 2 Explorer dataset: 10 representative Ramsar ecosystems. Phase 3 will introduce comprehensive ecological profiles.
          </span>
        </div>
        <span className="font-mono text-[11px] text-foreground/80 shrink-0">
          Source: Ramsar Convention RSIS & MoEFCC
        </span>
      </div>
    </div>
  );
}
