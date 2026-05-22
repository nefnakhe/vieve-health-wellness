import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from /public — these will resolve automatically.
    // Add remote domains here if you use a CDN or external image host later.
    remotePatterns: [],
    // Unoptimized = false means Next.js will optimize images automatically.
    unoptimized: false,
  },
};

export default nextConfig;
