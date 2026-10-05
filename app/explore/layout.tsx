import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Wetland Catalog — Digital Atlas Initiative",
  description:
    "Filter, search, and analyze India's documented Ramsar wetlands by state, ecological designation, surface area, and conservation priority.",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
