"use client";

import * as React from "react";
import { Wetland } from "@/types/wetland";
import { ProfileAbout } from "@/components/wetlands/profile-about";
import { ProfileQuickFacts } from "@/components/wetlands/profile-quick-facts";
import { ProfileImportance } from "@/components/wetlands/profile-importance";
import { ProfileWildlife } from "@/components/wetlands/profile-wildlife";
import { ProfileThreats } from "@/components/wetlands/profile-threats";
import { ProfileSources } from "@/components/wetlands/profile-sources";
import { ProfileSidebar } from "@/components/wetlands/profile-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Sparkles,
  Feather,
  AlertCircle,
  FileText,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  wetland: Wetland;
}

export type TabKey = "overview" | "values" | "wildlife" | "threats" | "sources" | "all";

export function ProfileTabs({ wetland }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = React.useState<TabKey>("overview");
  const tabContainerRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    // Smoothly ensure tabs bar remains in view without scrolling past the top
    if (tabContainerRef.current) {
      const rect = tabContainerRef.current.getBoundingClientRect();
      if (rect.top < 70) {
        window.scrollTo({
          top: window.scrollY + rect.top - 70,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { id: "overview" as TabKey, label: "Overview", icon: BookOpen },
    { id: "values" as TabKey, label: "Ecological Value", icon: Sparkles },
    {
      id: "wildlife" as TabKey,
      label: `Wildlife (${wetland.keyWildlife.length})`,
      icon: Feather,
    },
    {
      id: "threats" as TabKey,
      label: `Threats (${wetland.threats.length})`,
      icon: AlertCircle,
    },
    {
      id: "sources" as TabKey,
      label: `Sources (${wetland.sources.length})`,
      icon: FileText,
    },
    { id: "all" as TabKey, label: "All Sections", icon: Layers },
  ];

  return (
    <div ref={tabContainerRef} className="space-y-6">
      {/* Sticky Tab Switcher Bar */}
      <div className="sticky top-14 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5 bg-background/95 backdrop-blur-md border-y border-border/80 transition-colors shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all select-none border cursor-pointer",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                    : "bg-surface text-muted-foreground border-border hover:text-foreground hover:bg-surface-muted"
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Focused, Minimal Tab Content Panels */}
      <div className="pt-2 animate-in fade-in-50 duration-200">
        {activeTab === "overview" && (
          <div className="space-y-8 max-w-4xl">
            <ProfileAbout wetland={wetland} />
            <Separator />
            <ProfileQuickFacts wetland={wetland} />
          </div>
        )}

        {activeTab === "values" && (
          <div className="max-w-4xl">
            <ProfileImportance wetland={wetland} />
          </div>
        )}

        {activeTab === "wildlife" && (
          <div className="max-w-4xl">
            <ProfileWildlife wetland={wetland} />
          </div>
        )}

        {activeTab === "threats" && (
          <div className="max-w-4xl space-y-6">
            <ProfileThreats wetland={wetland} />
          </div>
        )}

        {activeTab === "sources" && (
          <div className="max-w-4xl space-y-6">
            <ProfileSources wetland={wetland} />
          </div>
        )}

        {activeTab === "all" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              <ProfileAbout wetland={wetland} />
              <Separator />
              <ProfileImportance wetland={wetland} />
              <Separator />
              <ProfileWildlife wetland={wetland} />
              <Separator />
              <ProfileThreats wetland={wetland} />
              <Separator />
              <ProfileSources wetland={wetland} />
            </div>

            <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <ProfileSidebar wetland={wetland} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
