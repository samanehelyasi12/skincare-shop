/**
 * Category endpoints.
 */

import { apiFetch } from "./client";
import { API_ENDPOINTS } from "@/lib/constants/api";
import type { Paginated } from "@/types/common";
import type { Category } from "@/types/category";

type CategoryDto = Partial<Category> & Record<string, unknown>;

export function toCategory(dto: CategoryDto): Category {
  return {
    id: dto.id ?? 0,
    name: dto.name ?? "",
    slug: dto.slug ?? "",
    image: dto.image ?? undefined,
    parentId: dto.parentId ?? (dto.parent as number | undefined) ?? null,
  };
}

export async function getCategories(): Promise<Category[]> {
  const data = await apiFetch<CategoryDto[] | Paginated<CategoryDto>>(
    API_ENDPOINTS.categories,
  );

  const items = Array.isArray(data) ? data : data.results;
  return items.map(toCategory);
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const data = await apiFetch<CategoryDto>(
    API_ENDPOINTS.categoryBySlug(encodeURIComponent(slug)),
  );
  return toCategory(data);
}