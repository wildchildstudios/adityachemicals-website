import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adityachemicals.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "adityachemicals.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
