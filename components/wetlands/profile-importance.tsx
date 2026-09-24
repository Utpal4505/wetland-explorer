import { Wetland } from "@/types/wetland";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Waves, Bird, Users, Sparkles } from "lucide-react";

interface ProfileImportanceProps {
  wetland: Wetland;
}

export function ProfileImportance({ wetland }: ProfileImportanceProps) {
  const importanceItems = [
    {
      title: "Ecological Importance",
      category: "Hydrology & Climate",
      icon: Waves,
      content: wetland.importance.ecological,
    },
    {
      title: "Wildlife Importance",
      category: "Biodiversity & Flyways",
      icon: Bird,
      content: wetland.importance.wildlife,
    },
    {
      title: "Local & Regional Significance",
      category: "Livelihoods & Culture",
      icon: Users,
      content: wetland.importance.local,
    },
  ];

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          <span>Conservation Value</span>
        </div>
        <h2 className="text-h2">Why It Matters</h2>
        <p className="text-small text-muted-foreground">
          Structured ecological analysis across hydrological functions, biodiversity support, and community livelihoods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
        {importanceItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="border border-border bg-surface flex flex-col justify-between"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-base mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-small text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
