import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve the Decap CMS editor at /admin (its config path is set
      // explicitly in admin/index.html so it loads regardless of slash).
      { source: "/admin", destination: "/admin/index.html" },
      // "Undo recent changes" helper page (reuses the CMS GitHub OAuth).
      { source: "/admin/undo", destination: "/admin/undo.html" },
    ];
  },
};

export default nextConfig;
