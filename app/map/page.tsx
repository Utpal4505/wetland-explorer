import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function MapPage() {
  return (
    <div className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="accent" size="sm">
            Phase 3 Preview
          </Badge>
          <Badge variant="outline" size="sm">
            Cartographic Canvas
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-h1">Geographic Map</h1>
          <p className="text-body text-muted-foreground">
            Interactive geospatial mapping of Indian wetlands will be integrated in subsequent phases.
          </p>
        </div>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <Compass className="h-4 w-4" />
              <span>Geospatial Foundation</span>
            </div>
            <CardTitle className="text-lg">Cartographic Viewport</CardTitle>
            <CardDescription>
              Future releases will integrate interactive map layers, coordinate projections, 
              wetland boundary contours, and geospatial clustering across India&apos;s biogeographic zones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-surface-muted p-4 text-xs font-mono space-y-2 text-muted-foreground">
              <div className="flex justify-between border-b border-border/50 pb-1.5">
                <span>GEOGRAPHIC EXTENT</span>
                <span className="text-foreground">INDIAN SUBCONTINENT</span>
              </div>
              <div className="flex justify-between">
                <span>LATITUDE SPAN:</span>
                <span className="text-foreground">8.4° N to 37.6° N</span>
              </div>
              <div className="flex justify-between">
                <span>LONGITUDE SPAN:</span>
                <span className="text-foreground">68.7° E to 97.25° E</span>
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
