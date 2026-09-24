import { Wetland } from "@/types/wetland";
import { Card } from "@/components/ui/card";
import { Feather, ShieldCheck } from "lucide-react";

interface ProfileWildlifeProps {
  wetland: Wetland;
}

export function ProfileWildlife({ wetland }: ProfileWildlifeProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <Feather className="h-4 w-4" />
          <span>Faunal Biodiversity</span>
        </div>
        <h2 className="text-h2">Key Wildlife</h2>
        <p className="text-small text-muted-foreground">
          Documented flagship and indicator species supported by the {wetland.name} ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
        {wetland.keyWildlife.map((species) => (
          <Card
            key={species}
            className="p-3.5 border border-border bg-surface hover:border-primary/40 transition-colors flex flex-col justify-between space-y-2"
          >
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-surface-muted text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                Species
              </span>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                {species}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Site Resident / Migrant
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
