import * as React from "react";
import { Compass, Loader2 } from "lucide-react";

export function MapLoadingSkeleton() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-surface-muted/40 border border-border rounded-xl relative overflow-hidden">
      {/* Background cartographic grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* Center Radar Scanner Card */}
      <div className="relative z-10 flex flex-col items-center gap-3 p-6 rounded-lg bg-surface/90 border border-border shadow-xs max-w-sm text-center">
        <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
          <Compass className="h-6 w-6 animate-spin duration-3000" />
          <span className="absolute h-full w-full rounded-full border border-primary/30 animate-ping opacity-30" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Loader2 className="h-3 w-3 animate-spin" />
            <span>Loading Geographic Canvas</span>
          </div>
          <h3 className="text-sm font-semibold text-foreground">
            Mapping Indian Subcontinent
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Projecting Ramsar wetlands, boundaries, and spatial coordinates.
          </p>
        </div>
      </div>
    </div>
  );
}
