import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg'),
    );

    if (fileLoaderRule) {
      // Exclude SVGs from the default file loader
      fileLoaderRule.exclude = /\.svg$/i;

      config.module.rules.push(
        // Keep handling *.svg?url via file loader
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // import icon from './icon.svg?url'
        },
        // Handle all other *.svg as React components using SVGR
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        }
        
      );
    }

    return config;
  },  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
