import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllThreats,
  getThreatBySlug,
  getWetlandsForThreat,
  getRelatedThreats,
} from "@/lib/data/threats";
import { getThreatIcon, ThreatCard } from "@/components/threats/threat-card";
import { WetlandCard } from "@/components/explore/wetland-card";
import {
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  MapPin,
  Compass,
  FileCheck2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ThreatDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllThreats().map((threat) => ({
    slug: threat.slug,
  }));
}

export async function generateMetadata({
  params,
}: ThreatDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const threat = getThreatBySlug(slug);

  if (!threat) {
    return {
      title: "Threat Not Found | Wetland Explorer",
    };
  }

  return {
    title: `${threat.name} | Threat Explorer — Wetland Explorer`,
    description: threat.shortDescription,
  };
}

export default async function ThreatDetailPage({
  params,
}: ThreatDetailPageProps) {
  const { slug } = await params;
  const threat = getThreatBySlug(slug);

  if (!threat) {
    notFound();
  }

  const affectedWetlands = getWetlandsForThreat(slug);
  const otherThreats = getRelatedThreats(slug);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      {/* 1. Breadcrumb Strip */}
      <nav className="border-b border-border/80 bg-surface/30 backdrop-blur-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-60" />
          <Link
            href="/threats"
            className="hover:text-foreground transition-colors"
          >
            Threat Explorer
          </Link>
          <ChevronRight className="h-3 w-3 opacity-60" />
          <span className="text-foreground font-medium truncate">
            {threat.name}
          </span>
        </div>
      </nav>

      {/* 2. Threat Detail Hero Header */}
      <header className="border-b border-border/80 bg-surface/50 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/threats"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Documented Pressures</span>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
              {getThreatIcon(threat.iconName, "h-7 w-7")}
            </span>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                  Ecological Pressure Profile
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  ID: #{threat.slug}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {threat.name}
              </h1>
            </div>

            <Badge
              variant="outline"
              size="default"
              className="font-mono text-xs bg-surface-muted/60 text-foreground border-border px-3 py-1 shrink-0"
            >
              {affectedWetlands.length} Documented Sites
            </Badge>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {threat.shortDescription}
          </p>
        </div>
      </header>

      {/* 3. Main Exploration Body */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
        {/* Ecological Overview & Contributing Mechanisms */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detailed Overview */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-surface p-6 sm:p-7 space-y-4 shadow-xs">
            <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-primary" />
              <span>How This Threat Affects Wetland Ecosystems</span>
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{threat.overview}</p>
              <div className="border-t border-border/60 pt-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-1.5">
                  Ecological Cascade & Impact
                </h3>
                <p>{threat.ecologicalImpact}</p>
              </div>
            </div>
          </div>

          {/* Key Contributing Drivers */}
          <div className="rounded-xl border border-border bg-surface p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-primary" />
                <span>Primary Drivers</span>
              </h2>
              <p className="text-xs text-muted-foreground">
                Anthropogenic mechanisms and environmental variables commonly observed in field assessments:
              </p>
              <ul className="space-y-2 pt-1">
                {threat.keyDrivers.map((driver) => (
                  <li
                    key={driver}
                    className="text-xs text-foreground/90 flex items-start gap-2 bg-surface-muted/50 p-2 rounded-md border border-border/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border/60 text-[11px] text-muted-foreground font-mono">
              Source: Ramsar RIS & Wetland Management Records
            </div>
          </div>
        </section>

        {/* 4. Affected Wetlands Grid */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" />
                <span>Geographic Occurrences</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Affected Wetlands ({affectedWetlands.length})
              </h2>
              <p className="text-small text-muted-foreground">
                Documented instances of {threat.name.toLowerCase()} across India&apos;s registered wetland sites.
              </p>
            </div>

            <Link
              href="/map"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Inspect on Interactive Map</span>
            </Link>
          </div>

          {affectedWetlands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {affectedWetlands.map((wetland) => (
                <WetlandCard key={wetland.id} wetland={wetland} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center text-muted-foreground">
              No wetland records currently linked to this threat category.
            </div>
          )}
        </section>

        {/* 5. Explore Other Pressures */}
        <section className="space-y-6 pt-6 border-t border-border/80">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Explore More Pressures
            </span>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Other Documented Ecological Pressures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherThreats.slice(0, 3).map((other) => (
              <ThreatCard key={other.slug} threat={other} />
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/threats"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              <span>View All {otherThreats.length + 1} Pressure Categories</span>
              <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
