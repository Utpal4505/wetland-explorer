import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSpecies,
  getSpeciesBySlug,
  getWetlandsForSpecies,
  getRelatedSpecies,
} from "@/lib/data/species";
import { TaxaIcon, IucnBadge } from "@/components/wildlife/wildlife-ui";
import { SpeciesCard } from "@/components/wildlife/species-card";
import { WetlandCard } from "@/components/explore/wetland-card";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SpeciesDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSpecies().map((species) => ({
    slug: species.slug,
  }));
}

export async function generateMetadata({
  params,
}: SpeciesDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);

  if (!species) {
    return {
      title: "Species Not Found | Wetland Explorer",
    };
  }

  return {
    title: `${species.name} (${species.scientificName}) | Wildlife Explorer`,
    description: species.description,
  };
}

export default async function SpeciesDetailPage({
  params,
}: SpeciesDetailPageProps) {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);

  if (!species) {
    notFound();
  }

  const associatedWetlands = getWetlandsForSpecies(slug);
  const otherSpecies = getRelatedSpecies(slug, species.taxa).slice(0, 3);
  const fallbackOtherSpecies =
    otherSpecies.length < 3
      ? getRelatedSpecies(slug).slice(0, 3)
      : otherSpecies;

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
            href="/wildlife"
            className="hover:text-foreground transition-colors"
          >
            Wildlife Explorer
          </Link>
          <ChevronRight className="h-3 w-3 opacity-60" />
          <span className="text-foreground font-medium truncate">
            {species.name}
          </span>
        </div>
      </nav>

      {/* 2. Hero Header */}
      <header className="border-b border-border/80 bg-surface/50 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/wildlife"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Documented Species</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Species Image */}
            <div className="lg:col-span-5 relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-border bg-surface-muted shadow-sm">
              <Image
                src={species.image}
                alt={species.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              {species.imageCaption && (
                <div className="absolute bottom-3 left-3 right-3 text-white/90 text-xs font-mono drop-shadow-xs">
                  {species.imageCaption}
                </div>
              )}
            </div>

            {/* Species Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  <TaxaIcon taxa={species.taxa} className="h-3.5 w-3.5" />
                  <span>{species.taxa}</span>
                </span>

                <Badge
                  variant="outline"
                  size="default"
                  className="font-mono text-xs bg-surface-muted text-foreground border-border"
                >
                  {species.seasonality}
                </Badge>

                <div className="ml-auto">
                  <IucnBadge code={species.iucnStatus} />
                </div>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {species.name}
                </h1>
                <p className="text-base text-muted-foreground italic font-serif mt-1">
                  {species.scientificName}
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-1">
                {species.description}
              </p>

              {/* Quick Info Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-border/60">
                <div className="rounded-lg bg-surface-muted/60 p-3 border border-border/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Taxonomic Class
                  </span>
                  <span className="text-xs font-semibold text-foreground mt-0.5 block">
                    {species.category}
                  </span>
                </div>

                <div className="rounded-lg bg-surface-muted/60 p-3 border border-border/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Associated Sites
                  </span>
                  <span className="text-xs font-semibold text-primary mt-0.5 block">
                    {associatedWetlands.length} {associatedWetlands.length === 1 ? "Wetland" : "Wetlands"}
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-lg bg-surface-muted/60 p-3 border border-border/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Regional Status
                  </span>
                  <span className="text-xs font-semibold text-foreground mt-0.5 block">
                    {species.seasonality}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Body */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
        {/* Why Wetlands Matter */}
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="h-4 w-4" />
            <span>Ecological Dependency</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Why Wetland Habitats Matter for {species.name}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {species.ecologicalRole}
          </p>
        </section>

        {/* 4. Associated Wetlands Grid */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" />
                <span>Habitat Occurrences</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Associated Wetlands ({associatedWetlands.length})
              </h2>
              <p className="text-small text-muted-foreground">
                Protected wetland sites where {species.name} has documented habitat associations.
              </p>
            </div>

            <Link
              href="/map"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Inspect Habitats on Map</span>
            </Link>
          </div>

          {associatedWetlands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {associatedWetlands.map((wetland) => (
                <WetlandCard key={wetland.id} wetland={wetland} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center text-muted-foreground">
              No wetland records currently linked to this species.
            </div>
          )}
        </section>

        {/* 5. Explore Other Species */}
        <section className="space-y-6 pt-6 border-t border-border/80">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Continue Exploration
            </span>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Other Documented Species
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackOtherSpecies.map((other) => (
              <SpeciesCard key={other.slug} species={other} />
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/wildlife"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              <span>View All Documented Species</span>
              <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
