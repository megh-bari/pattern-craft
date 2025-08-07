import type { NextConfig } from "next";

// Bundle analyzer support
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Optional: Configure trailing slash behavior
  trailingSlash: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-tabs', 'sonner'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Tree shaking optimization
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // GitHub Pages serves from subdirectory if not using custom domain
  // Uncomment and adjust if deploying to username.github.io/repository-name
  basePath: '/pattern-craft',
  assetPrefix: '/pattern-craft/',
};

export default withBundleAnalyzer(nextConfig);
