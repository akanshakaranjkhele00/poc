/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://13.49.65.161:3000/",
    productKey: "http://13.49.65.161:3000/products/name",
  },
};
