import Link from "next/link";
import { Compass, Map, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full border-border/80 bg-surface/50 backdrop-blur-sm text-center shadow-lg">
        <CardContent className="pt-8 pb-8 px-6 space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
            <Compass className="h-7 w-7 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <Badge variant="accent" size="sm" className="font-mono">
              HTTP 404 • UNMAPPED COORDINATE
            </Badge>
            <h1 className="text-h2 text-foreground">Dossier Not Found</h1>
            <p className="text-small text-muted-foreground">
              The wetland territory, species record, or document you requested does not exist or has been relocated within the digital atlas.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button asChild variant="default" size="sm" className="w-full gap-2">
              <Link href="/explore">
                <Search className="h-3.5 w-3.5" />
                <span>Browse Wetland Catalog</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full gap-2">
              <Link href="/map">
                <Map className="h-3.5 w-3.5" />
                <span>Open Cartographic Map</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Overview</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
