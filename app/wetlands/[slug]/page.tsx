import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react";
import { getWetlandBySlug, getAllWetlandSlugs } from "@/lib/data/wetlands";
import { ProfileHeader } from "@/components/wetlands/profile-header";
import { ProfileHero } from "@/components/wetlands/profile-hero";
import { ProfileNav } from "@/components/wetlands/profile-nav";
import { ProfileSidebar } from "@/components/wetlands/profile-sidebar";
import { ProfileQuickFacts } from "@/components/wetlands/profile-quick-facts";
import { ProfileAbout } from "@/components/wetlands/profile-about";
import { ProfileImportance } from "@/components/wetlands/profile-importance";
import { ProfileWildlife } from "@/components/wetlands/profile-wildlife";
import { ProfileThreats } from "@/components/wetlands/profile-threats";
import { ProfileSources } from "@/components/wetlands/profile-sources";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface WetlandProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWetlandSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WetlandProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const wetland = getWetlandBySlug(slug);

  if (!wetland) {
    return {
      title: "Wetland Record Not Found — Wetland Explorer",
    };
  }

  return {
    title: `${wetland.name}, ${wetland.state} — Wetland Explorer`,
    description: wetland.shortDescription,
  };
}

export default async function WetlandProfilePage({
  params,
}: WetlandProfilePageProps) {
  const { slug } = await params;
  const wetland = getWetlandBySlug(slug);

  if (!wetland) {
    notFound();
  }

  return (
    <article className="flex-1 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* 1. Profile Header & Context */}
      <ProfileHeader wetland={wetland} />

      {/* 2. Landscape Hero Image */}
      <ProfileHero wetland={wetland} />

      {/* 3. Sticky In-Page Navigation Bar */}
      <ProfileNav
        wildlifeCount={wetland.keyWildlife.length}
        threatsCount={wetland.threats.length}
        sourcesCount={wetland.sources.length}
      />

      {/* Mobile/Tablet Quick Facts (Visible only on < lg screens) */}
      <div className="block lg:hidden">
        <ProfileQuickFacts wetland={wetland} />
      </div>

      {/* 4. Asymmetric 2-Column Discovery Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Content Column (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* About / Ecosystem Narrative */}
          <ProfileAbout wetland={wetland} />

          <Separator />

          {/* Structured Importance (Ecological, Wildlife, Local) */}
          <ProfileImportance wetland={wetland} />

          <Separator />

          {/* Key Wildlife with Taxa & IUCN Badges */}
          <ProfileWildlife wetland={wetland} />

          <Separator />

          {/* Documented Environmental Pressures & Threat Dossier */}
          <ProfileThreats wetland={wetland} />

          <Separator />

          {/* Scientific Verification & Authoritative Bibliography */}
          <ProfileSources wetland={wetland} />

          {/* Bottom Atlas Return Action */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button asChild variant="outline" size="default">
              <Link href="/explore" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Explore Catalog</span>
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Compass className="h-3.5 w-3.5 text-primary" />
              <span>Digital Atlas Dossier • Record ID: {wetland.id}</span>
            </div>
          </div>
        </div>

        {/* Sticky Desktop Atlas Sidebar (Right 4 cols) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
          <ProfileSidebar wetland={wetland} />
        </div>
      </div>
    </article>
  );
}
