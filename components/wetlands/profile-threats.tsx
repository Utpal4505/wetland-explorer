import { Wetland, ThreatSeverity } from "@/types/wetland";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProfileThreatsProps {
  wetland: Wetland;
}

function getSeverityDetails(severity: ThreatSeverity) {
  switch (severity) {
    case "Critical":
      return {
        label: "Critical Risk",
        barColor: "bg-red-600 dark:bg-red-500",
        bars: 4,
        badgeBg: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
      };
    case "Severe":
      return {
        label: "Severe Risk",
        barColor: "bg-rose-500",
        bars: 3,
        badgeBg: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30",
      };
    case "High":
      return {
        label: "High Pressure",
        barColor: "bg-amber-500",
        bars: 2,
        badgeBg: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
      };
    case "Moderate":
      return {
        label: "Moderate Pressure",
        barColor: "bg-yellow-500",
        bars: 2,
        badgeBg: "bg-yellow-500/15 text-yellow-800 dark:text-yellow-400 border-yellow-500/30",
      };
    case "Low":
    default:
      return {
        label: "Low Pressure",
        barColor: "bg-emerald-500",
        bars: 1,
        badgeBg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
      };
  }
}

export function ProfileThreats({ wetland }: ProfileThreatsProps) {
  return (
    <section id="threats" className="scroll-mt-28 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <AlertCircle className="h-4 w-4" />
          <span>Ecological Risk Assessment</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Documented Pressures & Threats</h2>
          {wetland.threatLevel && (
            <Badge variant="outline" size="sm" className="font-mono text-xs">
              Baseline Status: {wetland.threatLevel}
            </Badge>
          )}
        </div>
        <p className="text-small text-muted-foreground">
          Factual anthropogenic and environmental pressures recorded in official site assessments, Ramsar management plans, and State Wetland Authority reports.
        </p>
      </div>

      <div className="space-y-3 pt-1">
        {wetland.threats.map((threat) => {
          const severityInfo = getSeverityDetails(threat.severity);
          return (
            <Card
              key={threat.title}
              className="border border-border/80 bg-surface/90 hover:border-border transition-colors overflow-hidden"
            >
              <CardContent className="p-4 sm:p-5 space-y-2.5">
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
                    {/* Visual Risk Meter Bars */}
                    <div
                      className="hidden sm:flex items-center gap-1"
                      title={`Severity Rating: ${threat.severity}`}
                    >
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          className={`h-2 w-3 rounded-xs ${
                            step <= severityInfo.bars
                              ? severityInfo.barColor
                              : "bg-surface-muted border border-border"
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
