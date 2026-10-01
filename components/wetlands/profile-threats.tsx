import Link from "next/link";
import { Wetland, ThreatSeverity } from "@/types/wetland";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { getThreatsForWetland, matchThreatTitleToSlug } from "@/lib/data/threats";
import { getThreatIcon } from "@/components/threats/threat-card";

interface ProfileThreatsProps {
  wetland: Wetland;
}

function getSeverityDetails(severity: ThreatSeverity) {
  switch (severity) {
    case "Critical":
      return {
        label: "Documented High Stress",
        barColor: "bg-red-600 dark:bg-red-500",
        bars: 4,
        badgeBg: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
      };
    case "Severe":
      return {
        label: "Documented Severe Stress",
        barColor: "bg-rose-500",
        bars: 4,
        badgeBg: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",
      };
    case "High":
      return {
        label: "High Documented Pressure",
        barColor: "bg-orange-500",
        bars: 3,
        badgeBg: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30",
      };
    case "Moderate":
      return {
        label: "Moderate Documented Pressure",
        barColor: "bg-sky-500",
        bars: 2,
        badgeBg: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
      };
    case "Low":
    default:
      return {
        label: "Baseline Monitored Pressure",
        barColor: "bg-emerald-500",
        bars: 1,
        badgeBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      };
  }
}

export function ProfileThreats({ wetland }: ProfileThreatsProps) {
  const overallSeverity = getSeverityDetails(wetland.threatLevel ?? "Moderate");
  const connectedThreats = getThreatsForWetland(wetland.id);

  return (
    <section id="threats" className="scroll-mt-28 space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <AlertCircle className="h-4 w-4" />
          <span>Ecological Risk Assessment</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-h2">Documented Pressures & Threats</h2>
          {wetland.threatLevel && (
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-mono font-semibold border ${overallSeverity.badgeBg}`}
            >
              Registry Status: {wetland.threatLevel}
            </span>
          )}
        </div>
        <p className="text-small text-muted-foreground">
          Factual anthropogenic and environmental pressures recorded in official site assessments, Ramsar management plans, and State Wetland Authority reports.
        </p>
      </div>

      {/* Connected Threat Explorer Categories Banner */}
      {connectedThreats.length > 0 && (
        <div className="rounded-xl border border-border/80 bg-surface/70 p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-semibold">
              <ShieldAlert className="h-3.5 w-3.5 text-primary" />
              <span>Explore in Threat Explorer</span>
            </span>
            <Link
              href="/threats"
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>All Pressure Categories</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-0.5">
            {connectedThreats.map((category) => (
              <Link
                key={category.slug}
                href={`/threats/${category.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface hover:bg-surface-muted border border-border text-foreground transition-colors group cursor-pointer shadow-2xs"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {getThreatIcon(category.iconName, "h-3.5 w-3.5")}
                </span>
                <span>{category.name}</span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  ({category.wetlands.length} sites)
                </span>
                <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* List of Documented Threats for this Wetland */}
      <div className="space-y-3 pt-1">
        {wetland.threats.map((threat) => {
          const severityInfo = getSeverityDetails(threat.severity);
          const categorySlug = matchThreatTitleToSlug(threat.title);

          return (
            <Card
              key={threat.title}
              className="border border-border/80 bg-surface/90 hover:border-border transition-colors overflow-hidden"
            >
              <CardContent className="p-4 sm:p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-surface-muted text-muted-foreground">
                      <AlertTriangle className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">
                      {threat.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {/* Visual Pressure Level Bars */}
                    <div
                      className="flex items-center gap-1"
                      title={`Documented Field Assessment: ${threat.severity}`}
                    >
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          className={`h-2.5 w-3.5 rounded-xs transition-colors ${
                            step <= severityInfo.bars
                              ? severityInfo.barColor
                              : "bg-surface-muted border border-border/70"
                          }`}
                        />
                      ))}
                    </div>

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-mono font-semibold border ${severityInfo.badgeBg}`}
                    >
                      {severityInfo.label}
                    </span>
                  </div>
                </div>

                <p className="text-small text-muted-foreground leading-relaxed">
                  {threat.description}
                </p>

                {/* Direct Link to Threat Explorer for this pressure */}
                {categorySlug && (
                  <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Documented in official site assessments
                    </span>
                    <Link
                      href={`/threats/${categorySlug}`}
                      className="inline-flex items-center gap-1 font-medium text-primary hover:underline group/link"
                    >
                      <span>Explore this pressure across India</span>
                      <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
