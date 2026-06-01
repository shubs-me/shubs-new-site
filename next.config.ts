import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve the Decap CMS visual editor at /admin
      { source: "/admin", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
