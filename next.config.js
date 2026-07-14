/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment on university servers
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
  },

  // Add trailing slashes for better compatibility
  trailingSlash: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  // Redirect configuration can be added here if needed
  async redirects() {
    return [];
  },

  // Rewrite configuration for server-side proxies
  async rewrites() {
    return [];
  },
};

export default nextConfig;
