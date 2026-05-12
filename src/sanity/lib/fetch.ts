import { client } from "./client";
import { isConfigured } from "../env";

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!isConfigured) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.warn("[sanity] fetch failed:", err);
    return null;
  }
}
