import * as React from "react";
import { Navbar } from "@/components/navigation/navbar";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="border-t border-border/60 py-4 px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground transition-colors">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>Wetland Explorer — Digital Atlas Initiative</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Phase 1: Foundation</span>
            <span>•</span>
            <span className="text-data">20.5937° N, 78.9629° E</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
