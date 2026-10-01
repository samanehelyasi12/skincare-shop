import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/category";

export interface CategoryCardProps {
  category: Category;
}

/**
 * Presentational card for a skincare category.
 * Falls back to a neutral panel when the category has no image yet.
 */
export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
    >
      <div className="relative aspect-4/3 w-full bg-neutral-100">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center text-sm text-neutral-400"
          >
            بدون تصویر
          </div>
        )}
      </div>

      <p className="px-4 py-3 text-center text-sm font-medium text-neutral-900">
        {category.name}
      </p>
    </Link>
  );
}