import { MetadataRoute } from "next";
import { WETLANDS_DATA } from "@/lib/data/wetlands";
import { SPECIES_DATA } from "@/lib/data/species";
import { THREATS_DATA } from "@/lib/data/threats";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wetland-explorer.vercel.app";
  const currentDate = new Date().toISOString();

  // Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/map`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wildlife`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/threats`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // All 10 Wetland Profiles
  const wetlandRoutes: MetadataRoute.Sitemap = WETLANDS_DATA.map((w) => ({
    url: `${baseUrl}/wetlands/${w.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // All 22 Wildlife Species Profiles
  const speciesRoutes: MetadataRoute.Sitemap = SPECIES_DATA.map((s) => ({
    url: `${baseUrl}/wildlife/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  // All 6 Threat Category Profiles
  const threatRoutes: MetadataRoute.Sitemap = THREATS_DATA.map((t) => ({
    url: `${baseUrl}/threats/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...wetlandRoutes,
    ...speciesRoutes,
    ...threatRoutes,
  ];
}
