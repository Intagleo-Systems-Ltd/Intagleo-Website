/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Self-hosted (Hostinger/Passenger): the built-in Next image optimizer
    // fetches + processes each remote image in-process, which is unreliable on
    // shared hosting (timeouts / memory / upstream rate-limiting) and caused
    // intermittently broken cover images. The remote sources (Unsplash, Sanity
    // CDN) already serve optimized WebP/AVIF via their own `auto=format` CDNs,
    // so we serve originals directly instead of re-optimizing on the server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/ussled",
        destination: "/us-sled",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Immutable cache for hashed Next.js static assets (JS, CSS, fonts)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Long cache for public assets (images, videos, fonts)
        source: "/:path((?!_next).*\\.(?:webm|mp4|webp|png|jpg|jpeg|gif|svg|ico|woff|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
