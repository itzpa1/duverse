import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  matcher: ["/duverse/author/:path*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com", 
      },
      {
        protocol: "https",
        hostname: "**.ytimg.com", 
      },
      // Add other image domains as needed
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, 
    formats: ["image/webp"], 
    dangerouslyAllowSVG: false, 
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
};

export default nextConfig;