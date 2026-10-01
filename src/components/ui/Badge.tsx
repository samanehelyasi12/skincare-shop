import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const toneStyles = {
  neutral: "bg-neutral-100 text-neutral-700",
  accent: "bg-emerald-50 text-emerald-800",
  danger: "bg-red-50 text-red-700",
} as const;

export interface BadgeProps {
  tone?: keyof typeof toneStyles;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}