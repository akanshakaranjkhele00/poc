/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://16.170.143.161:3000/",
    productKey: "http://16.170.143.161:3000/products/name",
  },
};
