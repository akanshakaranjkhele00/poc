/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://13.53.33.52:3000/",
    productKey: "http://13.53.33.52:3000/products/name",
  },
};
