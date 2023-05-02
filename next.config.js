/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  nextConfig,
  env: {
    API_KEY: process.env.API_KEY,
  },
};
