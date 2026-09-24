import Link from "next/link";
import { BookOpen, ArrowLeft, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="accent" size="sm">
            About Project
          </Badge>
          <Badge variant="outline" size="sm">
            Digital Atlas
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-h1">About Wetland Explorer</h1>
          <p className="text-body text-muted-foreground">
            A digital discovery platform dedicated to documenting and cataloging India&apos;s wetland ecosystems.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <BookOpen className="h-4 w-4" />
              <span>Project Mission & Scope</span>
            </div>
            <CardTitle className="text-lg">Open Ecological Documentation</CardTitle>
            <CardDescription>
              India hosts over 85 designated Ramsar sites of international importance, ranging from 
              high-altitude Himalayan lakes to coastal mangroves and inland freshwater marshes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-small text-muted-foreground leading-relaxed">
            <p>
              Wetland Explorer is engineered as an authoritative, accessible geographic atlas to help 
              citizens, researchers, and policymakers understand ecological vulnerability, biodiversity 
              support, and conservation imperatives.
            </p>
            <div className="rounded-md bg-surface-muted p-4 text-xs font-mono space-y-1.5 text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground font-semibold pb-1 border-b border-border/50">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>PLANNED DATA SOURCES</span>
              </div>
              <div>• Ramsar Convention on Wetlands (RSIS)</div>
              <div>• Ministry of Environment, Forest and Climate Change (MoEFCC)</div>
              <div>• State Wetland Authorities & Conservation Registries</div>
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
