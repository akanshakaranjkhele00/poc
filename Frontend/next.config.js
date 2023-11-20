/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://51.20.107.142:3000/",
    productKey: "http://51.20.107.142:3000/products/name",
  },
};
