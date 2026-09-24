"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
      title={mounted ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="h-4 w-4 text-foreground/80 transition-transform duration-200 hover:rotate-12" />
        ) : (
          <Moon className="h-4 w-4 text-foreground/80 transition-transform duration-200 hover:-rotate-12" />
        )
      ) : (
        <span className="h-4 w-4 inline-block" />
      )}
    </Button>
  );
}
