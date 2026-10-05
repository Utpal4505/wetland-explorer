"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log exception to error monitoring service if needed
    console.error("Atlas Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full border-destructive/30 bg-surface/50 backdrop-blur-sm text-center shadow-lg">
        <CardContent className="pt-8 pb-8 px-6 space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive border border-destructive/20">
            <AlertTriangle className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <Badge variant="outline" size="sm" className="font-mono text-destructive border-destructive/30">
              ATLAS RUNTIME RECOVERY
            </Badge>
            <h1 className="text-h2 text-foreground">Hydrological Stream Interrupted</h1>
            <p className="text-small text-muted-foreground">
              An unexpected runtime error occurred while rendering this view. You can reload the dataset or return to the atlas catalog.
            </p>
            {error.digest && (
              <p className="font-mono text-[10px] text-muted-foreground/70">
                Digest: {error.digest}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="default"
              size="sm"
              className="w-full gap-2"
              onClick={() => reset()}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Retry Operation</span>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full gap-2">
              <Link href="/">
                <Home className="h-3.5 w-3.5" />
                <span>Return to Home</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
