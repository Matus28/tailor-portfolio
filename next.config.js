/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
