/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:  {
    domains: ["article-canvas-bucket.s3.us-east-2.amazonaws.com"]
  },
};

module.exports = nextConfig;