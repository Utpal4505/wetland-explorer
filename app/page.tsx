import Link from "next/link";
import { ArrowRight, Compass, MapPin, Layers, Sparkles, ShieldAlert, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero / Atlas Orientation */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="accent" size="sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Digital Atlas • India
            </Badge>
            <Badge variant="outline" size="sm">
              Phase 1 Foundation
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="text-display">
              Wetland Explorer
            </h1>
            <p className="text-h2 font-normal text-muted-foreground">
              Discover India&apos;s wetlands.
            </p>
          </div>

          <p className="text-body text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
            Explore India&apos;s wetlands through maps, places, wildlife, and documented threats. 
            A modern, data-driven geographic atlas designed for conservationists, researchers, and explorers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="default">
              <Link href="/explore" className="gap-2">
                <span>Enter Exploration</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href="/map" className="gap-2">
                <Compass className="h-4 w-4 text-muted-foreground" />
                <span>Geographic Map</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href="/wildlife" className="gap-2">
                <Feather className="h-4 w-4 text-muted-foreground" />
                <span>Wildlife Explorer</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href="/threats" className="gap-2">
                <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                <span>Threat Explorer</span>
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="my-14" />

        {/* Foundation & Design System Overview */}
        <div className="space-y-8">
          <div>
            <span className="text-label">System Architecture</span>
            <h2 className="text-h2 mt-1">Design System & Foundation</h2>
            <p className="text-small text-muted-foreground mt-1 max-w-2xl">
              Phase 1 establishes the visual language, semantic design tokens, typography hierarchy, 
              and core primitives tailored for digital atlas exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <Layers className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" size="sm">Tokens</Badge>
                </div>
                <CardTitle className="text-base mt-2">Semantic Tokens</CardTitle>
                <CardDescription>
                  Intentional light and dark palettes with ecological green accents and neutral surfaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  <div className="h-7 rounded-sm bg-background border border-border flex items-center justify-center text-[10px] text-muted-foreground" title="Background">bg</div>
                  <div className="h-7 rounded-sm bg-surface border border-border flex items-center justify-center text-[10px] text-muted-foreground" title="Surface">srf</div>
                  <div className="h-7 rounded-sm bg-surface-muted border border-border flex items-center justify-center text-[10px] text-muted-foreground" title="Surface Muted">mut</div>
                  <div className="h-7 rounded-sm bg-accent text-accent-foreground flex items-center justify-center text-[10px] font-medium" title="Accent">acc</div>
                  <div className="h-7 rounded-sm bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-medium" title="Primary">pri</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" size="sm">Cartographic</Badge>
                </div>
                <CardTitle className="text-base mt-2">Geographic Typography</CardTitle>
                <CardDescription>
                  Precise sans-serif hierarchy paired with tabular data rendering for coordinates and metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-surface-muted p-2.5 text-xs space-y-1 font-mono text-muted-foreground">
                  <div className="flex justify-between">
                    <span>INDEX:</span>
                    <span className="text-foreground font-medium">85 RAMSAR SITES</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COORD:</span>
                    <span className="text-foreground font-medium">20.5937° N, 78.9629° E</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" size="sm">Phase 2 Ready</Badge>
                </div>
                <CardTitle className="text-base mt-2">Modular Primitives</CardTitle>
                <CardDescription>
                  Composable Button, Input, Badge, Card, and Separator components ready for exploration view.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="default" size="sm">Active</Badge>
                  <Badge variant="secondary" size="sm">Ramsar</Badge>
                  <Badge variant="muted" size="sm">Protected</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
