import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function WetlandNotFound() {
  return (
    <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto flex items-center justify-center">
      <Card className="border border-dashed border-border p-6 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-muted-foreground">
          <Compass className="h-6 w-6" />
        </div>

        <CardHeader className="p-0 space-y-1">
          <CardTitle className="text-h2">Wetland Not Found</CardTitle>
          <CardDescription className="text-small">
            The requested wetland record does not exist in the digital atlas registry or may have been relocated.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 pt-2">
          <Button asChild variant="default" size="default">
            <Link href="/explore" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Explore Catalog</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
