import { SpeciesTaxa, SpeciesIucnStatus } from "@/types/species";
import { Feather, Footprints, Fish, ShieldAlert } from "lucide-react";

export function TaxaIcon({
  taxa,
  className = "h-3.5 w-3.5",
}: {
  taxa: SpeciesTaxa;
  className?: string;
}) {
  switch (taxa) {
    case "Mammal":
      return <Footprints className={className} />;
    case "Aquatic & Fish":
      return <Fish className={className} />;
    case "Reptile":
      return <ShieldAlert className={className} />;
    case "Avifauna":
    default:
      return <Feather className={className} />;
  }
}

export function IucnBadge({ code }: { code: SpeciesIucnStatus }) {
  switch (code) {
    case "CR":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30"
          title="IUCN Red List: Critically Endangered"
        >
          CR • Critically Endangered
        </span>
      );
    case "EN":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30"
          title="IUCN Red List: Endangered"
        >
          EN • Endangered
        </span>
      );
    case "VU":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
          title="IUCN Red List: Vulnerable"
        >
          VU • Vulnerable
        </span>
      );
    case "NT":
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-teal-500/15 text-teal-700 dark:text-teal-400 border border-teal-500/30"
          title="IUCN Red List: Near Threatened"
        >
          NT • Near Threatened
        </span>
      );
    case "LC":
    default:
      return (
        <span
          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
          title="IUCN Red List: Least Concern"
        >
          LC • Least Concern
        </span>
      );
  }
}
