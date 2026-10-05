import { Wetland } from "@/types/wetland";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink, ShieldCheck } from "lucide-react";

interface ProfileSourcesProps {
  wetland: Wetland;
}

export function ProfileSources({ wetland }: ProfileSourcesProps) {
  return (
    <section id="sources" className="scroll-mt-28 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
          <FileText className="h-4 w-4" />
          <span>Scientific Verification & Sourced Bibliography</span>
        </div>
        <h2 className="text-h2">Authoritative Sources & Citations</h2>
        <p className="text-small text-muted-foreground">
          Official registries, Ramsar Information Sheets, and peer-reviewed government publications establishing factual validity for research and project documentation.
        </p>
      </div>

      <Card className="border border-border bg-surface">
        <CardHeader className="border-b border-border/70 pb-3">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>VERIFIED CITATIONS ({wetland.sources.length})</span>
            </span>
            <span className="text-[11px] text-foreground/70 hidden sm:inline-block">
              Peer-Reviewed / Institutional Registry
            </span>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-border/60 p-0">
          {wetland.sources.map((source, index) => (
            <div
              key={source.title}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 hover:bg-surface-muted/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-primary font-bold">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {source.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/90">{source.organization}</span>
                  {source.year && (
                    <>
                      <span>•</span>
                      <span>Published {source.year}</span>
                    </>
                  )}
                  {source.citationType && (
                    <>
                      <span>•</span>
                      <span className="font-mono text-[10px] uppercase text-foreground/80 bg-surface-muted px-1.5 py-0.5 rounded-xs border border-border">
                        {source.citationType}
                      </span>
                    </>
                  )}
                  {source.accessedAt && (
                    <>
                      <span>•</span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Verified {source.accessedAt}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline shrink-0"
                >
                  <span>Open Registry</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
