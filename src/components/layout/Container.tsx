import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Max-width page wrapper that keeps content aligned across all routes. */
export function Container({
  children,
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </Tag>
  );
}