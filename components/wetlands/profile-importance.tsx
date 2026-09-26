import { Wetland } from "@/types/wetland";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Bird, Users, Sparkles, CheckCircle2 } from "lucide-react";

interface ProfileImportanceProps {
  wetland: Wetland;
}

export function ProfileImportance({ wetland }: ProfileImportanceProps) {
  const importanceItems = [
    {
      title: "Ecological & Hydrological Value",
      subtitle: "Hydrology, Buffering & Microclimate",
      icon: Waves,
      content: wetland.importance.ecological,
      tag: "Ecosystem Service",
    },
    {
      title: "Biodiversity & Avian Flyways",
      subtitle: "Keystone Species & Migratory Staging",
      icon: Bird,
      content: wetland.importance.wildlife,
      tag: "Faunal Refuge",
    },
    {
      title: "Community Livelihoods & Culture",
      subtitle: "Subsistence, Agriculture & Heritage",
      icon: Users,
      content: wetland.importance.local,
      tag: "Socio-Ecological",
    },
  ];

  return (
    <section id="values" className="scroll-mt-28 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          <span>Conservation Value</span>
        </div>
        <h2 className="text-h2">Why It Matters</h2>
        <p className="text-small text-muted-foreground">
          Multidimensional ecological analysis covering catchment hydrological buffering, biodiversity support, and traditional livelihoods.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-1">
        {importanceItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="border border-border/80 bg-surface/90 hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 border-b border-border/60 bg-surface-muted/40 gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground border border-accent-foreground/15">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <div className="text-[11px] text-muted-foreground font-mono">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{item.tag}</span>
                </span>
              </div>

              <CardContent className="p-4 sm:p-5 text-small text-muted-foreground leading-relaxed">
                {item.content}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
