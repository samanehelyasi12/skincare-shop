/**
 * Product domain model.
 *
 * Deliberately minimal: these are the fields the store UI actually needs today.
 * Extend alongside the Django `Product` serializer rather than pre-emptively.
 */

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  /** Price in the store's base currency (Toman). */
  price: number;
  image: string;
  categoryId: number;
  stock: number;
}

export interface ProductListParams {
  category?: string;
  search?: string;
  page?: number;
  sort?: ProductSort;
}

export const PRODUCT_SORTS = ["newest", "price_asc", "price_desc"] as const;

export type ProductSort = (typeof PRODUCT_SORTS)[number];