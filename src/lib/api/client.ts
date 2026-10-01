/**
 * Central HTTP client for the Django REST API.
 *
 * Every network call in the app goes through `apiFetch` so the base URL,
 * error shape and JSON handling are defined exactly once. Components must not
 * call `fetch` directly, and must never hardcode an API host.
 */

import type { ApiError } from "@/types/common";

/**
 * Base URL of the Django backend, e.g. `http://localhost:8000`.
 * Read from `NEXT_PUBLIC_API_URL`; see `.env.local.example`.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/** Error thrown by every failed `apiFetch` call. */
export class ApiRequestError extends Error implements ApiError {
  readonly status: number;
  readonly details?: Record<string, string[]>;

  constructor(message: string, status: number, details?: Record<string, string[]>) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.details = details;
  }
}

interface ApiFetchOptions extends Omit<RequestInit, "body"> {
  /** Plain object (serialised to JSON) or raw body (e.g. FormData). */
  body?: unknown;
  /** Query values are stringified; `undefined` entries are dropped. */
  query?: Record<string, string | number | boolean | undefined>;
}

/** Builds a `path?query` URL from the configured base URL. */
export function buildApiUrl(
  path: string,
  query?: ApiFetchOptions["query"],
): string {
  if (!API_BASE_URL) {
    throw new ApiRequestError(
      "NEXT_PUBLIC_API_URL is not set. Copy .env.local.example to .env.local and define it.",
      500,
    );
  }

  const base = `${API_BASE_URL.replace(/\/$/, "")}${path}`;
  if (!query) return base;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) params.set(key, String(value));
  }
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

/** Performs a request and returns the decoded JSON body. */
export async function apiFetch<T>(
  path: string,
  { body, query, headers, ...init }: ApiFetchOptions = {},
): Promise<T> {
  const isPlainObject =
    body !== undefined &&
    !(body instanceof FormData) &&
    !(body instanceof URLSearchParams) &&
    typeof body === "object";

  let response: Response;
  try {
    response = await fetch(buildApiUrl(path, query), {
      ...init,
      headers: {
        Accept: "application/json",
        ...(isPlainObject ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: isPlainObject ? JSON.stringify(body) : (body as BodyInit | undefined),
    });
  } catch {
    throw new ApiRequestError(
      "ارتباط با سرور برقرار نشد. لطفاً اتصال اینترنت را بررسی کنید.",
      0,
    );
  }

  if (response.status === 204) return undefined as T;

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const { message, details } = extractErrorPayload(payload, response);
    throw new ApiRequestError(message, response.status, details);
  }

  return payload as T;
}

/** Pulls a human-readable message out of a DRF error response. */
function extractErrorPayload(
  payload: unknown,
  response: Response,
): { message: string; details?: Record<string, string[]> } {
  const fallback = `درخواست با خطا مواجه شد (${response.status}).`;

  if (payload === null || typeof payload !== "object") {
    return { message: fallback };
  }

  const record = payload as Record<string, unknown>;
  const detail = record.detail ?? record.non_field_errors;

  if (typeof detail === "string") return { message: detail };

  const details: Record<string, string[]> = {};
  for (const [field, value] of Object.entries(record)) {
    if (Array.isArray(value) && value.every((item) => typeof item === "string")) {
      details[field] = value as string[];
    }
  }

  return details && Object.keys(details).length > 0
    ? { message: fallback, details }
    : { message: fallback };
}