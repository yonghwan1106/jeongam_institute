export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isConfigured = Boolean(
  projectId && projectId !== "placeholder" && projectId.trim() !== "",
);

export function assertSanityConfigured(): void {
  if (process.env.NODE_ENV === "production" && !isConfigured) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is required in production");
  }
}
