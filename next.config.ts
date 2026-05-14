import type { NextConfig } from "next";

const baseCsp = [
  "default-src 'self'",
  "img-src 'self' data: https://cdn.sanity.io",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self' https://*.sanity.io https://cdn.sanity.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const studioCsp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.sanity.io",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sanity.io",
  "style-src 'self' 'unsafe-inline' https://*.sanity.io",
  "font-src 'self' data: https://*.sanity.io",
  "connect-src 'self' https://*.sanity.io https://cdn.sanity.io wss://*.sanity.io",
  "frame-src 'self' https://*.sanity.io",
  "base-uri 'self'",
].join("; ");

const baseHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: [
          ...baseHeaders,
          { key: "Content-Security-Policy", value: studioCsp },
        ],
      },
      {
        source: "/:path*",
        headers: [
          ...baseHeaders,
          { key: "Content-Security-Policy", value: baseCsp },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
