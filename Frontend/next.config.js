/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://13.48.105.9:3000/",
    productKey: "http://13.48.105.9:3000/products/name",
  },
};
