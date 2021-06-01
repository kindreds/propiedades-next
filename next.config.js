const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  future: { webpack5: true },
  images: { domains: ['bit.ly', 'images.unsplash.com'] },
  webpack: (config) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    return config;
  },
});
