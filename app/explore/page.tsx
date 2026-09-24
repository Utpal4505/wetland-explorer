import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ExplorePage() {
  return (
    <div className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="accent" size="sm">
            Phase 2 Preview
          </Badge>
          <Badge variant="outline" size="sm">
            Exploration Hub
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-h1">Explore Wetlands</h1>
          <p className="text-body text-muted-foreground">
            The core discovery interface is slated for Phase 2 implementation.
          </p>
        </div>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Upcoming in Phase 2</span>
            </div>
            <CardTitle className="text-lg">Wetland Discovery Experience</CardTitle>
            <CardDescription>
              This section will feature the comprehensive wetland index for India, multi-criteria filtering 
              by state and Ramsar designation, searchable catalogs, and deep ecological profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-surface-muted p-4 text-xs font-mono space-y-2 text-muted-foreground">
              <div className="flex items-center justify-between border-b border-border/50 pb-1.5">
                <span>MODULE</span>
                <span className="text-foreground">STATUS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>01. Design System & Shell</span>
                <span className="text-primary font-semibold">ESTABLISHED (PHASE 1)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>02. Wetland Catalog & Filters</span>
                <span className="text-muted-foreground">QUEUED FOR PHASE 2</span>
              </div>
              <div className="flex items-center justify-between">
                <span>03. Interactive Cartography</span>
                <span className="text-muted-foreground">QUEUED FOR PHASE 3</span>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="gap-2">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Return to Foundation Overview</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
