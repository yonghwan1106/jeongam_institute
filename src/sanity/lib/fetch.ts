import { client } from "./client";
import { isConfigured, assertSanityConfigured } from "../env";
import { REVALIDATE_SECONDS } from "@/lib/site-config";

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  assertSanityConfigured();
  if (!isConfigured) return null;
  // Network/auth failures throw so Next.js error boundaries catch them.
  // Intentional null results from GROQ pass through as `null`.
  return await client.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
}
