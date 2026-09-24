import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react";
import { getWetlandBySlug, getAllWetlandSlugs } from "@/lib/data/wetlands";
import { ProfileHeader } from "@/components/wetlands/profile-header";
import { ProfileHero } from "@/components/wetlands/profile-hero";
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
    <article className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
      {/* 1. Profile Header & Context */}
      <ProfileHeader wetland={wetland} />

      {/* 2. Landscape Hero Image */}
      <ProfileHero wetland={wetland} />

      {/* 3. Quick Facts & Cartographic Metrics */}
      <ProfileQuickFacts wetland={wetland} />

      <Separator />

      {/* 4. About & Narrative Overview */}
      <ProfileAbout wetland={wetland} />

      <Separator />

      {/* 5. Structured Importance (Ecological, Wildlife, Local) */}
      <ProfileImportance wetland={wetland} />

      <Separator />

      {/* 6. Key Wildlife */}
      <ProfileWildlife wetland={wetland} />

      <Separator />

      {/* 7. Documented Pressures & Threats */}
      <ProfileThreats wetland={wetland} />

      <Separator />

      {/* 8. Sources & Academic Bibliography */}
      <ProfileSources wetland={wetland} />

      {/* Bottom Atlas Return Action */}
      <div className="pt-6 pb-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button asChild variant="outline" size="default">
          <Link href="/explore" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Explore Catalog</span>
          </Link>
        </Button>

        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Compass className="h-3.5 w-3.5 text-primary" />
          <span>Wetland Explorer • Place Record ID: {wetland.id}</span>
        </div>
      </div>
    </article>
  );
}
