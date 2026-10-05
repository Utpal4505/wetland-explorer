import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  ShieldCheck,
  Droplets,
  Leaf,
  Layers,
  Scale,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Atom,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About & Methodology — CHE110 Environmental Atlas",
  description:
    "Scientific methodology, biogeochemical wetland functions, Ramsar criteria, and statutory conservation frameworks documented in Wetland Explorer.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="sm">
            CHE110 Academic Submission
          </Badge>
          <Badge variant="default" size="sm">
            Methodology &amp; Scientific Atlas
          </Badge>
          <Badge variant="outline" size="sm" className="font-mono text-[11px]">
            Ramsar Convention (1971)
          </Badge>
        </div>

        <h1 className="text-display sm:text-4xl lg:text-5xl">
          Scientific Documentation &amp; Methodology
        </h1>
        <p className="text-body-lead text-muted-foreground max-w-3xl leading-relaxed">
          Wetland Explorer is an interactive ecological atlas and chemical-environmental informatics system
          developed to analyze India&apos;s designated Ramsar wetlands, indicator taxa, and anthropogenic degradation pathways.
        </p>
      </div>

      {/* Grid of Key Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Scope & Course Context */}
        <Card className="border-border/80 bg-surface/40">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase">
              <BookOpen className="h-4 w-4" />
              <span>Academic Purpose</span>
            </div>
            <CardTitle className="text-xl">CHE110 Environmental Chemistry</CardTitle>
            <CardDescription>
              Bridging environmental chemistry, spatial geography, and conservation policy into a unified digital reference.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-small text-muted-foreground leading-relaxed">
            <p>
              India encompasses over <strong className="text-foreground">85 Ramsar sites</strong> spanning more than 1.3 million hectares.
              Despite their ecological primacy, wetland systems face acute anthropogenic stress from untreated municipal effluents,
              agricultural eutrophication, industrial runoff, and urban encroachment.
            </p>
            <p>
              This atlas categorizes 10 flagship wetlands across diverse biogeographic realms—from high-altitude Himalayan waters
              to hyper-saline coastal lagoons—quantifying their spatial footprints, chemical vulnerability vectors, and flagship taxa.
            </p>
          </CardContent>
        </Card>

        {/* Biogeochemical Role */}
        <Card className="border-border/80 bg-surface/40">
          <CardHeader>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase">
              <Atom className="h-4 w-4" />
              <span>Biogeochemical Dynamics</span>
            </div>
            <CardTitle className="text-xl">Nature&apos;s Chemical Kidney</CardTitle>
            <CardDescription>
              How wetland ecosystems govern nutrient cycles and water purification.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-small text-muted-foreground leading-relaxed">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Denitrification &amp; Nutrient Sinks:</strong> Anaerobic sediments promote bacterial
                  reduction of nitrates (NO₃⁻ → N₂), shielding downstream hydrological networks from severe eutrophication.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Blue Carbon Sequestration:</strong> Anaerobic, waterlogged soils severely inhibit microbial
                  oxidation, sequestering organic carbon at rates up to 55 times faster than tropical terrestrial forests.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Xenobiotic &amp; Metal Attenuation:</strong> Hydrophytes (e.g. <em>Phragmites australis</em>, <em>Eichhornia</em>)
                  bio-accumulate heavy metals (Pb, Cd, As) and particulate sediment loads via root-rhizome complexes.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ramsar & Montreux Framework */}
      <section className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-h2">The Ramsar Convention &amp; Montreux Record</h2>
          <p className="text-small text-muted-foreground">
            International statutory mechanisms governing ecological classification and threat alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-border bg-surface/30 space-y-2">
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase">
              <Layers className="h-4 w-4" />
              <span>Criteria 1 &amp; 2</span>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Representative &amp; Threatened Species</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sites containing representative, rare, or unique natural wetland types within biogeographic realms, or supporting vulnerable, endangered, or critically endangered species.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-surface/30 space-y-2">
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase">
              <Droplets className="h-4 w-4" />
              <span>Criteria 5 &amp; 6</span>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Waterbird Population Thresholds</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sites regularly supporting 20,000 or more waterbirds, or regularly supporting 1% of the individuals in a population of one species or subspecies of waterbird (e.g., Chilika Lake).
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-surface/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase">
              <Scale className="h-4 w-4" />
              <span>The Montreux Record</span>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Ecological Character Jeopardy</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A register of Ramsar sites where changes in ecological character have occurred or are imminent due to pollution, technological changes, or human interference (e.g., Keoladeo National Park and Loktak Lake).
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Conservation Framework in India */}
      <section className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <h2 className="text-h2">Indian Statutory Framework</h2>
          <p className="text-small text-muted-foreground">
            National legislation and institutional machinery for wetland conservation.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-border bg-surface/50 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-foreground">Wetlands Rules (2017):</span>
              <p className="text-muted-foreground leading-relaxed">
                Promulgated under the Environment (Protection) Act, 1986 by MoEFCC. Mandates State Wetland Authorities (SWAs) to identify, demarcate, and notify all significant wetlands, prohibiting industrial expansion, untreated solid waste dumping, and permanent construction within zone of influence.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-foreground">Amrit Dharohar Initiative (2023):</span>
              <p className="text-muted-foreground leading-relaxed">
                Government initiative aimed at promoting the conservation values of Ramsar sites, boosting eco-tourism, and generating sustainable livelihoods for local riparian and fishing communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reference Bibliography */}
      <section className="space-y-4">
        <div className="border-b border-border/80 pb-2">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Primary Sources &amp; Citations</span>
          </div>
          <h2 className="text-h2">Verified Scientific Bibliography</h2>
          <p className="text-small text-muted-foreground">
            All geographic coordinates, surface boundaries, designated species, and pressure profiles in this atlas are directly derived from peer-reviewed and statutory registries:
          </p>
        </div>

        <div className="divide-y divide-border/60 rounded-lg border border-border bg-surface/30">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-semibold text-foreground text-sm">
                Ramsar Sites Information Service (RSIS)
              </div>
              <div className="text-xs text-muted-foreground">
                Secretariat of the Convention on Wetlands, Gland, Switzerland. Official Ramsar Information Sheets (RIS) for Sites #264, #462, #1022, #1208, #1210, etc.
              </div>
            </div>
            <a
              href="https://rsis.ramsar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline shrink-0"
            >
              <span>rsis.ramsar.org</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-semibold text-foreground text-sm">
                MoEFCC — Wetlands of India Portal
              </div>
              <div className="text-xs text-muted-foreground">
                Ministry of Environment, Forest and Climate Change, Government of India. Wetland health report cards, statutory boundaries, and GIS shapefiles.
              </div>
            </div>
            <a
              href="https://indianwetlands.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline shrink-0"
            >
              <span>indianwetlands.in</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-semibold text-foreground text-sm">
                IUCN Red List of Threatened Species (v2024-2)
              </div>
              <div className="text-xs text-muted-foreground">
                International Union for Conservation of Nature. Global conservation red-list assessments for indicator species (<em>Platanista gangetica</em>, <em>Rucervus eldii eldii</em>, etc.).
              </div>
            </div>
            <a
              href="https://www.iucnredlist.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline shrink-0"
            >
              <span>iucnredlist.org</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-semibold text-foreground text-sm">
                Zoological Survey of India (ZSI) &amp; WII
              </div>
              <div className="text-xs text-muted-foreground">
                Faunal diversity in wetland ecosystems of India. Technical research monographs on avifaunal census, benthic macro-invertebrates, and aquatic bio-indicators.
              </div>
            </div>
            <a
              href="https://wii.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline shrink-0"
            >
              <span>wii.gov.in</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/explore" className="gap-2">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Explore Catalog</span>
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <Button asChild variant="default" size="sm">
            <Link href="/map" className="gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>Launch Interactive Map</span>
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/wildlife" className="gap-1.5">
              <Leaf className="h-3.5 w-3.5" />
              <span>Explore Wildlife Taxa</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
