/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://13.51.174.136:3000/",
    productKey: "http://13.51.174.136:3000/products/name",
  },
};
