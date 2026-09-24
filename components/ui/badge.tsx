import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-surface-muted text-foreground border border-border",
        outline:
          "border border-border text-foreground bg-transparent",
        accent:
          "bg-accent text-accent-foreground border border-accent-foreground/15",
        muted:
          "bg-muted text-muted-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs gap-1.5",
        sm: "px-2 py-0.5 text-[11px] gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
