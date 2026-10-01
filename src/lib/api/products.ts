/**
 * Product endpoints.
 *
 * The mapping between Django responses and the app's `Product` type lives here,
 * so the UI never depends on the serializer's exact field names.
 */

import { apiFetch } from "./client";
import { API_ENDPOINTS, DEFAULT_PAGE_SIZE } from "@/lib/constants/api";
import type { Paginated } from "@/types/common";
import type { Product, ProductListParams } from "@/types/product";

type ProductDto = Partial<Product> & Record<string, unknown>;

/** Converts a DRF product payload into the frontend `Product` shape. */
export function toProduct(dto: ProductDto): Product {
  return {
    id: dto.id ?? 0,
    name: dto.name ?? "",
    slug: dto.slug ?? "",
    description: dto.description ?? "",
    price: dto.price ?? 0,
    image: dto.image ?? "",
    categoryId: dto.categoryId ?? (dto.category as number | undefined) ?? 0,
    stock: dto.stock ?? 0,
  };
}

export async function getProducts(
  params: ProductListParams = {},
): Promise<Paginated<Product>> {
  const query = {
    category: params.category,
    search: params.search,
    page: params.page,
    ordering: params.sort,
    page_size: DEFAULT_PAGE_SIZE,
  };

  const data = await apiFetch<ProductDto[] | Paginated<ProductDto>>(
    API_ENDPOINTS.products,
    { query },
  );

  const items = Array.isArray(data) ? data : data.results;

  return {
    count: Array.isArray(data) ? data.length : data.count,
    next: Array.isArray(data) ? null : data.next,
    previous: Array.isArray(data) ? null : data.previous,
    results: items.map(toProduct),
  };
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const data = await apiFetch<ProductDto>(
    API_ENDPOINTS.productBySlug(encodeURIComponent(slug)),
  );
  return toProduct(data);
}