/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  env: {
    apiKey: "ec2-user@13.48.104.110:3000/",
    productKey: "ec2-user@13.48.104.110:3000/products/name",
  },
};
