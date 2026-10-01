/**
 * Category domain model.
 *
 * `parentId` supports nested trees (e.g. face care under skin care) without
 * committing to a full tree structure before the backend defines one.
 */

export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
  parentId?: number | null;
}