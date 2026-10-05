import Link from "next/link";
import {
  ArrowRight,
  Compass,
  ShieldAlert,
  Feather,
  Droplets,
  Atom,
  ShieldCheck,
  Globe,
  Waves,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { WETLANDS_DATA } from "@/lib/data/wetlands";
import { WetlandCard } from "@/components/explore/wetland-card";

export default function HomePage() {
  // Select 3 premier flagship wetlands for the spotlight
  const featuredWetlands = WETLANDS_DATA.filter((w) =>
    ["sundarbans-wetland", "chilika-lake", "loktak-lake"].includes(w.id)
  );

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24 lg:py-28">
        {/* Subtle decorative background topography aura */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20">
          <div className="h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
          <div className="h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-3xl -ml-40 mt-32" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Context Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" size="sm" className="gap-1.5 font-medium">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Ramsar Ecological Atlas • India</span>
              </Badge>
              <Badge variant="outline" size="sm" className="font-mono text-[11px] text-muted-foreground">
                CHE110 Scientific Informatics
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-display sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Guardians of India&apos;s Living Waters
              </h1>
              <p className="text-h3 sm:text-2xl font-normal text-muted-foreground leading-relaxed">
                A scientific cartographic atlas documenting protected Ramsar wetlands, indicator taxa, and environmental pressures across the Indian subcontinent.
              </p>
            </div>

            {/* Narrative Description */}
            <p className="text-body text-muted-foreground/90 max-w-2xl text-base sm:text-lg leading-relaxed">
              From high-altitude glacial waters in Ladakh to the dense tidal mangrove labyrinths of the Sundarbans delta, explore verified geographic boundaries, biodiversity networks, and anthropogenic threats through an interconnected spatial registry.
            </p>

            {/* Primary Calls to Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="shadow-sm gap-2">
                <Link href="/explore">
                  <span>Explore Wetland Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/map">
                  <Compass className="h-4 w-4 text-primary" />
                  <span>Launch Satellite Map</span>
                </Link>
              </Button>
            </div>

            {/* Quick Filter Pill Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Direct Access:</span>
              <Link
                href="/wildlife"
                className="inline-flex items-center gap-1 rounded-md bg-surface-muted px-2.5 py-1 text-foreground hover:bg-surface border border-border/60 transition-colors"
              >
                <Feather className="h-3 w-3 text-emerald-500" />
                <span>22 Indicator Species</span>
              </Link>
              <Link
                href="/threats"
                className="inline-flex items-center gap-1 rounded-md bg-surface-muted px-2.5 py-1 text-foreground hover:bg-surface border border-border/60 transition-colors"
              >
                <ShieldAlert className="h-3 w-3 text-amber-500" />
                <span>6 Documented Threat Vectors</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 rounded-md bg-surface-muted px-2.5 py-1 text-foreground hover:bg-surface border border-border/60 transition-colors"
              >
                <Atom className="h-3 w-3 text-sky-500" />
                <span>CHE110 Research Dossier</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cartographic Telemetry & Key Impact Metrics */}
      <section className="border-b border-border/80 bg-surface/40 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className="text-display sm:text-3xl font-bold text-foreground">10</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Flagship Ramsar Sites
              </div>
              <div className="text-[11px] text-muted-foreground">
                Documented across 9 states and union territories.
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-display sm:text-3xl font-bold text-foreground">8,927+ <span className="text-base font-normal text-muted-foreground">km²</span></div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Protected Surface Area
              </div>
              <div className="text-[11px] text-muted-foreground">
                Geospatially mapped with WGS84 coordinates.
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-display sm:text-3xl font-bold text-foreground">22</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Indicator Species
              </div>
              <div className="text-[11px] text-muted-foreground">
                IUCN Red List evaluated taxa across biomes.
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-display sm:text-3xl font-bold text-foreground">2 <span className="text-base font-normal text-muted-foreground">Sites</span></div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Montreux Record
              </div>
              <div className="text-[11px] text-muted-foreground">
                Keoladeo Ghana &amp; Loktak Lake ecological surveillance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sanctuaries Spotlight */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
              <Globe className="h-3.5 w-3.5" />
              <span>Subcontinent Spotlights</span>
            </div>
            <h2 className="text-h2 sm:text-3xl font-bold text-foreground">
              Flagship Wetland Sanctuaries
            </h2>
            <p className="text-small text-muted-foreground max-w-2xl">
              Preview representative ecosystems across different biogeographic zones—from coastal deltaic mangroves to montane freshwater lakes.
            </p>
          </div>

          <Button asChild variant="outline" size="sm" className="shrink-0 gap-1.5">
            <Link href="/explore">
              <span>View All 10 Cataloged Wetlands</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* 3 Featured Wetland Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWetlands.map((wetland) => (
            <WetlandCard key={wetland.id} wetland={wetland} />
          ))}
        </div>
      </section>

      {/* Four Dimensions of the Atlas (Replaces technical Phase 1 boxes) */}
      <section className="border-y border-border/80 bg-surface/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="accent" size="sm" className="font-mono">
              ECOLOGICAL KNOWLEDGE GRAPH
            </Badge>
            <h2 className="text-h2 sm:text-3xl font-bold text-foreground">
              Four Dimensions of Exploration
            </h2>
            <p className="text-small text-muted-foreground">
              Wetland Explorer interconnects cartography, species distributions, documented threats, and chemical ecology into a single seamless loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dimension 1: Map */}
            <Card className="border-border/80 bg-surface/60 hover:border-primary/50 transition-colors flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">01 • Cartography</span>
                  <CardTitle className="text-lg">Satellite Atlas</CardTitle>
                </div>
                <CardDescription className="text-xs leading-relaxed">
                  Interactive multi-layer geospatial engine with ESRI high-resolution satellite imagery, topographic terrain, and boundary markers.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between text-xs text-primary hover:text-primary">
                  <Link href="/map">
                    <span>Launch Map View</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dimension 2: Wildlife */}
            <Card className="border-border/80 bg-surface/60 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Feather className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">02 • Biodiversity</span>
                  <CardTitle className="text-lg">Wildlife Registry</CardTitle>
                </div>
                <CardDescription className="text-xs leading-relaxed">
                  22 indicator species including Gangetic dolphins, Sangai deer, and migratory waterfowl indexed by IUCN Red List status.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500">
                  <Link href="/wildlife">
                    <span>Explore Species</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dimension 3: Threats */}
            <Card className="border-border/80 bg-surface/60 hover:border-amber-500/50 transition-colors flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">03 • Vulnerability</span>
                  <CardTitle className="text-lg">Threat Pressures</CardTitle>
                </div>
                <CardDescription className="text-xs leading-relaxed">
                  Documented anthropogenic pressures—eutrophication, municipal siltation, invasive hyacinth, and hydrological alteration.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between text-xs text-amber-600 dark:text-amber-400 hover:text-amber-500">
                  <Link href="/threats">
                    <span>Inspect Pressures</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dimension 4: Methodology */}
            <Card className="border-border/80 bg-surface/60 hover:border-sky-500/50 transition-colors flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20">
                  <Atom className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">04 • CHE110 Research</span>
                  <CardTitle className="text-lg">Scientific Rationale</CardTitle>
                </div>
                <CardDescription className="text-xs leading-relaxed">
                  Biogeochemical dynamics: Anaerobic denitrification, blue carbon sequestration, and verified Ramsar RSIS citations.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" size="sm" className="w-full justify-between text-xs text-sky-600 dark:text-sky-400 hover:text-sky-500">
                  <Link href="/about">
                    <span>Read Documentation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Wetlands Matter: Environmental Science Focus */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <Waves className="h-3.5 w-3.5" />
            <span>Ecological Services</span>
          </div>
          <h2 className="text-h2 sm:text-3xl font-bold text-foreground">
            Why India&apos;s Wetlands Are Irreplaceable
          </h2>
          <p className="text-small text-muted-foreground leading-relaxed">
            Wetlands occupy less than 5% of India&apos;s landmass, yet provide natural ecological infrastructure worth billions in water purification, flood resilience, and carbon stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-border bg-surface/40 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Droplets className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-foreground text-base">The Kidneys of the Biosphere</h3>
            </div>
            <p className="text-small text-muted-foreground leading-relaxed">
              Wetland sediment beds and macrophyte rhizomes trap toxic heavy metals (Pb, Cd, As) and facilitate microbial denitrification—transforming agricultural runoff nitrates into inert atmospheric nitrogen gas (N₂) before reaching regional drinking aquifers.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-surface/40 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                <Atom className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-foreground text-base">Blue Carbon Vaults</h3>
            </div>
            <p className="text-small text-muted-foreground leading-relaxed">
              Anaerobic waterlogged conditions in wetland peatlands and coastal mangroves drastically inhibit microbial organic decomposition, sequestering carbon up to 55 times faster than terrestrial tropical rainforests.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-surface/40 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Waves className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-foreground text-base">Hydrological Buffering &amp; Flood Sinks</h3>
            </div>
            <p className="text-small text-muted-foreground leading-relaxed">
              Wetlands serve as immense natural flood retention basins during monsoon surges, absorbing catastrophic runoffs, reducing peak river hydrographs, and recharging depleted regional water tables.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-surface/40 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                <Globe className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-foreground text-base">Central Asian Flyway Lifelines</h3>
            </div>
            <p className="text-small text-muted-foreground leading-relaxed">
              India&apos;s freshwater and brackish lagoons form critical staging and wintering sanctuaries along the trans-Himalayan Central Asian Flyway, sustaining over 1.5 million migratory waterfowl traveling between Siberia and South Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Data Partners & Verification Strip */}
      <section className="border-t border-border/80 bg-surface/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Verified Scientific Heritage</span>
              </div>
              <p className="text-xs text-muted-foreground">
                All coordinates, area metrics, species statuses, and pressure reports are verified against official registers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
              <a
                href="https://rsis.ramsar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <span>Ramsar RSIS</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <a
                href="https://indianwetlands.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <span>MoEFCC Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <a
                href="https://www.iucnredlist.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <span>IUCN Red List</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <a
                href="https://wii.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <span>WII Dehradun</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action Banner */}
      <section className="border-t border-border/80 bg-gradient-to-t from-surface via-background to-background py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <Badge variant="outline" size="sm" className="font-mono text-xs">
            START YOUR DISCOVERY
          </Badge>
          <h2 className="text-display sm:text-4xl font-bold text-foreground">
            Explore India&apos;s Wetland Sanctuaries
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Delve into high-resolution satellite cartography, cross-reference endangered wildlife, or examine documented conservation pressures across the subcontinent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="gap-2">
              <Link href="/explore">
                <span>Browse All Wetlands</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/map">
                <Compass className="h-4 w-4 text-primary" />
                <span>Open Cartographic Map</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
