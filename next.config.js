/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
