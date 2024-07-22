/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer({
  ...nextConfig,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
});
