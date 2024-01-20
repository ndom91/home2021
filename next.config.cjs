const withMDX = require("@next/mdx")({
  experimental: {
    mdxRs: true,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
  pageExtensions: ["tsx", "md", "mdx"],
}

module.exports = withMDX(nextConfig)
