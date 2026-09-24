"use client";

import * as React from "react";
import { Search, X, SlidersHorizontal, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ALL_STATES, ALL_CATEGORIES } from "@/lib/data/wetlands";
import { cn } from "@/lib/utils";

interface ExploreFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedState: string;
  onStateChange: (state: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: "name-asc" | "area-desc" | "year-desc";
  onSortChange: (sort: "name-asc" | "area-desc" | "year-desc") => void;
  onResetFilters: () => void;
  totalCount: number;
  filteredCount: number;
}

export function ExploreFilters({
  searchQuery,
  onSearchChange,
  selectedState,
  onStateChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onResetFilters,
  totalCount,
  filteredCount,
}: ExploreFiltersProps) {
  const isFiltered =
    Boolean(searchQuery.trim()) ||
    selectedState !== "all" ||
    selectedCategory !== "all";

  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by wetland name, state, wildlife, or ecosystem..."
          className="h-11 pl-10 pr-10 text-sm bg-surface rounded-lg shadow-xs"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 text-muted-foreground hover:text-foreground p-0.5 rounded-sm"
            aria-label="Clear search text"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter Row: State Pills + Dropdown Controls */}
      <div className="flex flex-col gap-3">
        {/* Horizontal State Pills Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 scrollbar-none text-xs">
          <span className="text-label shrink-0 mr-1.5 flex items-center gap-1">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>State:</span>
          </span>
          <button
            type="button"
            onClick={() => onStateChange("all")}
            className={cn(
              "px-3 py-1.5 rounded-full font-medium transition-colors shrink-0 border",
              selectedState === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-surface-muted text-muted-foreground border-border hover:text-foreground hover:bg-muted"
            )}
          >
            All States ({totalCount})
          </button>
          {ALL_STATES.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => onStateChange(state)}
              className={cn(
                "px-3 py-1.5 rounded-full font-medium transition-colors shrink-0 border",
                selectedState === state
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface-muted text-muted-foreground border-border hover:text-foreground hover:bg-muted"
              )}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Secondary Bar: Category Filter, Sort Select, and Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground font-medium">Type:</span>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-8 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="all">All Ecosystems</option>
                {ALL_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  onSortChange(
                    e.target.value as "name-asc" | "area-desc" | "year-desc"
                  )
                }
                className="h-8 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="name-asc">Alphabetical (A → Z)</option>
                <option value="area-desc">Area (Largest first)</option>
                <option value="year-desc">Designation Year</option>
              </select>
            </div>
          </div>

          {/* Reset Filters Action */}
          {isFiltered && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onResetFilters}
              className="h-8 text-xs text-muted-foreground hover:text-foreground gap-1.5"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear filters</span>
            </Button>
          )}
        </div>
      </div>

      {/* Result Count and Active Filters Bar */}
      <div className="flex items-center justify-between border-y border-border/70 py-2.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>
            Showing <strong className="text-foreground font-mono">{filteredCount}</strong> of{" "}
            <span className="font-mono">{totalCount}</span> documented wetlands
          </span>
          {isFiltered && (
            <span className="hidden sm:inline-block text-[11px] text-primary bg-accent px-2 py-0.5 rounded-full font-medium">
              Filter Active
            </span>
          )}
        </div>

        <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
          Geographic Registry • India
        </div>
      </div>
    </div>
  );
}
