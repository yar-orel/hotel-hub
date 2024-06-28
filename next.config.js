/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["firebasestorage.googleapis.com"],
    },
    distDir: 'build',
  };
  
  module.exports = nextConfig;