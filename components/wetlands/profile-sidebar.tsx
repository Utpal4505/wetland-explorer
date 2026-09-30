"use client";

import * as React from "react";
import Link from "next/link";
import { Wetland, ThreatSeverity } from "@/types/wetland";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Maximize2,
  Calendar,
  Compass,
  Mountain,
  Globe2,
  ShieldAlert,
  Copy,
  Check,
} from "lucide-react";

interface ProfileSidebarProps {
  wetland: Wetland;
}

function getThreatStatusColor(status?: ThreatSeverity) {
  switch (status) {
    case "Critical":
    case "Severe":
      return {
        bg: "bg-red-500/10 dark:bg-red-500/20",
        text: "text-red-700 dark:text-red-400",
        border: "border-red-500/30",
        label: "Critical Conservation Watch",
      };
    case "High":
      return {
        bg: "bg-orange-500/10 dark:bg-orange-500/20",
        text: "text-orange-700 dark:text-orange-400",
        border: "border-orange-500/30",
        label: "High Environmental Pressure",
      };
    case "Moderate":
      return {
        bg: "bg-sky-500/10 dark:bg-sky-500/20",
        text: "text-sky-700 dark:text-sky-400",
        border: "border-sky-500/30",
        label: "Moderate Ecological Watch",
      };
    case "Low":
    default:
      return {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
        text: "text-emerald-700 dark:text-emerald-400",
        border: "border-emerald-500/30",
        label: "Stable Ecological Baseline",
      };
  }
}

export function ProfileSidebar({ wetland }: ProfileSidebarProps) {
  const [copied, setCopied] = React.useState(false);

  const latFormatted = `${Math.abs(wetland.coordinates.lat).toFixed(4)}° ${
    wetland.coordinates.lat >= 0 ? "N" : "S"
  }`;
  const lngFormatted = `${Math.abs(wetland.coordinates.lng).toFixed(4)}° ${
    wetland.coordinates.lng >= 0 ? "E" : "W"
  }`;

  const citationText = `Wetland Explorer (${new Date().getFullYear()}). "${wetland.name} (${wetland.state}) — Digital Atlas Record". India Wetland Conservation Registry.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const threatTheme = getThreatStatusColor(wetland.threatLevel);

  return (
    <aside className="space-y-6">
      {/* 1. Quick Facts Registry Panel */}
      <Card className="border border-border bg-surface shadow-xs">
        <CardHeader className="border-b border-border/70 pb-3">
          <div className="flex items-center justify-between">
            <span className="text-label">ATLAS PARAMETERS</span>
            <Badge variant="outline" size="sm" className="font-mono text-[10px]">
              ID: {wetland.id}
            </Badge>
          </div>
          <CardTitle className="text-sm font-semibold mt-1">
            Geographic & Registry Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-3 divide-y divide-border/60 text-xs">
            <div className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>State</span>
              </span>
              <span className="font-semibold text-foreground">{wetland.state}</span>
            </div>

            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Maximize2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Surface Area</span>
              </span>
              <span className="font-mono font-semibold text-foreground">
                {wetland.areaKm2.toLocaleString()} km²
              </span>
            </div>

            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Designation</span>
              </span>
              <span className="font-semibold text-foreground">
                {wetland.designationYear ? `${wetland.designation} (${wetland.designationYear})` : wetland.designation}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Compass className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Coordinates</span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-foreground">
                {latFormatted}, {lngFormatted}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Mountain className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Elevation</span>
              </span>
              <span className="font-mono font-semibold text-foreground">
                {wetland.elevationMeters !== undefined
                  ? `${wetland.elevationMeters}m MSL`
                  : "Sea Level"}
              </span>
            </div>

            <div className="flex items-start justify-between pt-2.5">
              <span className="flex items-center gap-1.5 text-muted-foreground shrink-0">
                <Globe2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Biogeographic Zone</span>
              </span>
              <span className="font-medium text-right text-foreground max-w-[160px] leading-tight">
                {wetland.biogeographicZone ?? "Subcontinent"}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/map"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Compass className="h-3.5 w-3.5 text-primary" />
              <span>Locate in Geographic Atlas</span>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* 2. Conservation Status Gauge */}
      <Card className="border border-border bg-surface">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <span className="text-label">CONSERVATION ASSESSMENT</span>
            <ShieldAlert className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <CardTitle className="text-sm font-semibold mt-1">Ecosystem Health & Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-1">
          <div className={`rounded-md p-3 border ${threatTheme.bg} ${threatTheme.border}`}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Threat Status
              </span>
              <span className={`text-xs font-bold ${threatTheme.text}`}>
                {wetland.threatLevel ?? "Moderate"}
              </span>
            </div>
            <div className="text-xs font-medium text-foreground mt-1">
              {threatTheme.label}
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Protected under the Ramsar Convention on Wetlands of International Importance and the Wetlands (Conservation and Management) Rules of India.
          </p>
        </CardContent>
      </Card>

      {/* 3. CHE110 Bibliography Citation Card */}
      <Card className="border border-border bg-surface">
        <CardHeader className="pb-2">
          <span className="text-label">ACADEMIC CITATION</span>
          <CardTitle className="text-sm font-semibold mt-0.5">Cite This Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5 pt-0">
          <div className="rounded-md bg-surface-muted p-2.5 text-[11px] font-mono text-muted-foreground leading-relaxed border border-border/60 break-words select-all">
            {citationText}
          </div>
          <button
            onClick={copyCitation}
            type="button"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-surface py-1.5 text-xs font-medium text-foreground hover:bg-surface-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Citation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Copy APA Bibliography Citation</span>
              </>
            )}
          </button>
        </CardContent>
      </Card>
    </aside>
  );
}
