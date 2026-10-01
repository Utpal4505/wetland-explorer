import { Metadata } from "next";
import { getAllThreats } from "@/lib/data/threats";
import { WETLANDS_DATA } from "@/lib/data/wetlands";
import { ThreatsExplorerView } from "@/components/threats/threats-explorer-view";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Threat Explorer | Documented Pressures on Indian Wetlands",
  description:
    "Explore documented environmental and anthropogenic pressures across India's wetlands, including pollution, encroachment, hydrological alteration, invasive species, and climate extremes.",
};

export default function ThreatsPage() {
  const threats = getAllThreats();
  const totalWetlandsCount = WETLANDS_DATA.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner / Hero Header */}
      <section className="border-b border-border/80 bg-surface/40 backdrop-blur-xs py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary/10">
              <ShieldAlert className="h-3.5 w-3.5" />
            </span>
            <span>Ecosystem Conservation Registry</span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Threat Explorer
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore documented ecological pressures across India&apos;s wetlands. Rather than isolated profiles, trace systemic challenges from pollution to encroachment across interconnected aquatic habitats.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Explorer */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ThreatsExplorerView
          threats={threats}
          totalWetlandsCount={totalWetlandsCount}
        />
      </main>
    </div>
  );
}
