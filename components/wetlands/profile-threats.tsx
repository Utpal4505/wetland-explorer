import { Wetland, ThreatSeverity } from "@/types/wetland";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProfileThreatsProps {
  wetland: Wetland;
}

function getSeverityBadge(severity: ThreatSeverity) {
  switch (severity) {
    case "Critical":
    case "Severe":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
          {severity} Pressure
        </span>
      );
    case "High":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
          High Pressure
        </span>
      );
    case "Moderate":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-surface-muted text-muted-foreground border border-border">
          Moderate Pressure
        </span>
      );
    case "Low":
    default:
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-primary/10 text-primary border border-primary/20">
          Low Pressure
        </span>
      );
  }
}

export function ProfileThreats({ wetland }: ProfileThreatsProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <AlertCircle className="h-4 w-4" />
          <span>Conservation Assessment</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Documented Pressures & Threats</h2>
          {wetland.threatLevel && (
            <Badge variant="outline" size="sm" className="font-mono text-[11px]">
              Overall Status: {wetland.threatLevel}
            </Badge>
          )}
        </div>
        <p className="text-small text-muted-foreground">
          Factual anthropogenic and environmental pressures recorded in official site assessments and state management reports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        {wetland.threats.map((threat) => (
          <Card
            key={threat.title}
            className="border border-border bg-surface flex flex-col justify-between"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">
                  Pressure Factor
                </span>
                {getSeverityBadge(threat.severity)}
              </div>
              <CardTitle className="text-sm font-semibold mt-2 leading-snug">
                {threat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-small text-muted-foreground leading-relaxed">
                {threat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
