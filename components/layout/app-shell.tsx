import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/navbar";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      {/* A11y Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring text-xs font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">
        {children}
      </main>

      <footer className="border-t border-border/80 bg-surface/30 py-8 px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground transition-colors">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-foreground tracking-tight uppercase text-[11px]">
                  Wetland Explorer — Digital Atlas Initiative
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/90 max-w-md">
                CHE110 Environmental Chemistry & Ecological Informatics Project.
                Documenting India&apos;s Ramsar sites, biodiversity, and conservation challenges.
              </p>
            </div>

            <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <Link href="/explore" className="hover:text-foreground transition-colors">
                Explore Catalog
              </Link>
              <span>•</span>
              <Link href="/map" className="hover:text-foreground transition-colors">
                Cartographic Map
              </Link>
              <span>•</span>
              <Link href="/wildlife" className="hover:text-foreground transition-colors">
                Wildlife Directory
              </Link>
              <span>•</span>
              <Link href="/threats" className="hover:text-foreground transition-colors">
                Threat Pressures
              </Link>
              <span>•</span>
              <Link href="/about" className="hover:text-foreground transition-colors">
                CHE110 & Methodology
              </Link>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px]">
            <div>
              Data verified against{" "}
              <span className="font-medium text-foreground/80">Ramsar RSIS</span>,{" "}
              <span className="font-medium text-foreground/80">MoEFCC Wetlands Portal</span>, and{" "}
              <span className="font-medium text-foreground/80">IUCN Red List</span>.
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/80">
              <span>WGS84 20.5937° N, 78.9629° E</span>
              <span>•</span>
              <span>10 Ramsar Sites • 22 Taxa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
