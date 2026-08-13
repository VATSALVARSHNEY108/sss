/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { dev }) {
    // OneDrive can race webpack's filesystem cache writes during Fast Refresh.
    // Keep production caching untouched while making local development stable.
    if (dev) config.cache = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
