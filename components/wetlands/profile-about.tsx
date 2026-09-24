import { Wetland } from "@/types/wetland";
import { BookOpen } from "lucide-react";

interface ProfileAboutProps {
  wetland: Wetland;
}

export function ProfileAbout({ wetland }: ProfileAboutProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 text-primary font-medium text-xs font-mono uppercase tracking-wider">
        <BookOpen className="h-4 w-4" />
        <span>Ecosystem Overview</span>
      </div>

      <h2 className="text-h2">About {wetland.name}</h2>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-3 text-body text-foreground/90 leading-relaxed">
        <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
          {wetland.shortDescription}
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          {wetland.overview}
        </p>
      </div>
    </section>
  );
}
