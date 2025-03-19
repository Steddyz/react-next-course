/** @type {import('next').NextConfig} */

import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: [
      // '@material-ui/core',
    ],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
