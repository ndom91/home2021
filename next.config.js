const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

const nextConfig = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  pageExtensions: ['tsx', 'md', 'mdx'],
})

module.exports = nextConfig
