/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://51.20.114.154:3000/",
    productKey: "http://51.20.114.154:3000/products/name",
  },
};
