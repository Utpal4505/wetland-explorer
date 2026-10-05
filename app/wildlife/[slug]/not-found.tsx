import Link from "next/link";
import { Feather, ArrowLeft } from "lucide-react";

export default function SpeciesNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-muted text-muted-foreground border border-border">
            <Feather className="h-8 w-8 text-primary" />
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Species Record Not Found
          </h1>
          <p className="text-small text-muted-foreground leading-relaxed">
            The requested wildlife species does not exist in our documented registry or may have been renamed.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/wildlife"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Wildlife Explorer</span>
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-medium bg-surface-muted hover:bg-muted text-foreground border border-border transition-colors w-full sm:w-auto"
          >
            <span>Explore All Wetlands</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
