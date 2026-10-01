"use client";

import * as React from "react";
import { ThreatCategory } from "@/types/threat";
import { ThreatCard } from "@/components/threats/threat-card";
import { Input } from "@/components/ui/input";
import { Search, ShieldAlert, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreatsExplorerViewProps {
  threats: ThreatCategory[];
  totalWetlandsCount: number;
}

export function ThreatsExplorerView({
  threats,
  totalWetlandsCount,
}: ThreatsExplorerViewProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedSlug, setSelectedSlug] = React.useState<string>("all");

  // Filter threats based on search query and category pill
  const filteredThreats = React.useMemo(() => {
    return threats.filter((threat) => {
      // Category slug filter
      if (selectedSlug !== "all" && threat.slug !== selectedSlug) {
        return false;
      }

      // Keyword search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        threat.name.toLowerCase().includes(q) ||
        threat.shortDescription.toLowerCase().includes(q) ||
        threat.keyDrivers.some((d) => d.toLowerCase().includes(q))
      );
    });
  }, [threats, selectedSlug, searchQuery]);

  return (
    <div className="space-y-6">
      {/* 1. Metric Telemetry Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Threat Categories
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-foreground">
              {threats.length}
            </span>
            <span className="text-xs text-muted-foreground">Primary Pressures</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Monitored Wetlands
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold font-mono text-primary">
              {totalWetlandsCount}
            </span>
            <span className="text-xs text-muted-foreground">Ramsar & Sanctuaries</span>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 rounded-xl border border-border bg-surface p-4 flex flex-col justify-between shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Documentation Standard
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm font-semibold text-foreground">
              Official Registry Verified
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground mt-0.5">
            Sourced from Ramsar RIS & State Wetland Authorities
          </span>
        </div>
      </div>

      {/* 2. Interactive Search & Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface p-3.5 rounded-xl border border-border shadow-xs">
        {/* Search Input */}
        <div className="relative w-full sm:w-80 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Filter by pressure or driver..."
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

        {/* Quick Filter Pill Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
          <button
            onClick={() => setSelectedSlug("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
              selectedSlug === "all"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
            )}
          >
            All Pressures ({threats.length})
          </button>
          {threats.map((threat) => (
            <button
              key={threat.slug}
              onClick={() => setSelectedSlug(threat.slug)}
              className={cn(
                "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer select-none border",
                selectedSlug === threat.slug
                  ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                  : "bg-surface-muted/60 hover:bg-surface-muted text-muted-foreground hover:text-foreground border-border"
              )}
            >
              {threat.name.split(" ")[0]} ({threat.wetlands.length})
            </button>
          ))}
        </div>
      </div>

      {/* 3. Threats Discovery Grid */}
      {filteredThreats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThreats.map((threat) => (
            <ThreatCard key={threat.slug} threat={threat} />
          ))}
        </div>
      ) : (
        /* Empty Search State */
        <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center space-y-4">
          <div className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-muted-foreground">
              <ShieldAlert className="h-6 w-6" />
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-foreground">
              No matching threat pressures found
            </h3>
            <p className="text-small text-muted-foreground max-w-sm mx-auto">
              No documented threats matched your search term &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedSlug("all");
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. Methodology & Safety Notice */}
      <div className="rounded-xl border border-border/80 bg-surface/60 p-4 sm:p-5 flex items-start gap-3.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
          <AlertCircle className="h-4 w-4" />
        </span>
        <div className="space-y-1 text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground block">
            Objective Ecological Pressure Mapping
          </span>
          <p>
            Unlike subjective risk scoring systems, Wetland Explorer documents factual pressures verified by scientific field assessments and governmental gazettes. Select any pressure card to view the specific biological mechanics and the full network of affected wetland ecosystems across India.
          </p>
        </div>
      </div>
    </div>
  );
}
