/**
 * API endpoint paths.
 *
 * Kept separate from `lib/api/*` so paths can be audited or changed in one
 * place as the Django URL conf settles. Paths are relative to `API_BASE_URL`.
 */

export const API_ENDPOINTS = {
  products: "/api/products/",
  productBySlug: (slug: string) => `/api/products/${slug}/`,
  categories: "/api/categories/",
  categoryBySlug: (slug: string) => `/api/categories/${slug}/`,
} as const;

/** Page size for paginated list endpoints. */
export const DEFAULT_PAGE_SIZE = 12;