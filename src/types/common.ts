/**
 * Shared types used across the domain.
 * Keep this file small — add a type here only when at least two modules need it.
 */

/** A value that may be absent. Use sparingly; prefer omitting the key instead. */
export type Nullable<T> = T | null;

/** Wrapper for DRF (Django REST Framework) list responses. */
export interface Paginated<T> {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: T[];
}

/** Normalised failure shape for every `lib/api` call. */
export interface ApiError {
  message: string;
  status: number;
  details?: Record<string, string[]>;
}

/** Sort options accepted by list endpoints. */
export type SortDirection = "asc" | "desc";