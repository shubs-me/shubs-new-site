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
  async headers() {
    // Never cache the kill-switch service workers, so stale devices always
    // fetch the current self-destructing version on their update check.
    const noStore = [
      { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
    ];
    return [
      { source: "/sw.js", headers: noStore },
      { source: "/service-worker.js", headers: noStore },
    ];
  },
};

export default nextConfig;
