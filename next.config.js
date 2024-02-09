const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "avatars.githubusercontent.com",
      port: '',
      pathname: "/**"
    }, 
    {
      protocol: "https",
      hostname: "cdn.discordapp.com",
      port: '',
      pathname: "/**"
    },
    {
      protocol: "https",
      hostname: "media.discordapp.net",
      port: '',
      pathname: "/**"
    },
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
      port: '',
      pathname: "/**"
    },
     {
      protocol: "https",
      hostname: "storage.easyx.ru",
      port: '',
      pathname: "/**"
    }
    ]
  },
}

module.exports = withMDX(nextConfig)