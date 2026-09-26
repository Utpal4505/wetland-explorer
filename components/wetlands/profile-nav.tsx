"use client";

import * as React from "react";
import { BookOpen, Sparkles, Feather, AlertCircle, FileText } from "lucide-react";

interface ProfileNavProps {
  wildlifeCount: number;
  threatsCount: number;
  sourcesCount: number;
}

export function ProfileNav({
  wildlifeCount,
  threatsCount,
  sourcesCount,
}: ProfileNavProps) {
  const [activeSection, setActiveSection] = React.useState("overview");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "values", "wildlife", "threats", "sources"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "values", label: "Ecological Value", icon: Sparkles },
    { id: "wildlife", label: `Wildlife (${wildlifeCount})`, icon: Feather },
    { id: "threats", label: `Threats (${threatsCount})`, icon: AlertCircle },
    { id: "sources", label: `Sources (${sourcesCount})`, icon: FileText },
  ];

  return (
    <nav
      className="sticky top-14 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5 bg-background/95 backdrop-blur-md border-y border-border/80 transition-colors"
      aria-label="Profile section navigation"
    >
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all select-none border ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                  : "bg-surface text-muted-foreground border-border hover:text-foreground hover:bg-surface-muted"
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
