"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export interface NavLinkProps {
  href: string;
  label: string;
}

/**
 * Navigation link that marks itself as current.
 * Client component because it depends on the active pathname.
 */
export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-md px-3 py-2 text-sm transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
        isActive
          ? "font-semibold text-emerald-800"
          : "text-neutral-600 hover:text-neutral-900",
      )}
    >
      {label}
    </Link>
  );
}