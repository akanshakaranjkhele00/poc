/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "http://16.171.110.47:3000/",
    productKey: "http://16.171.110.47:3000/products/name",
  },
};
