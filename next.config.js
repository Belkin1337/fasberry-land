/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.mcstatus.io/v2/status/java/play.fasberry.ru',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { 
            key: 'Access-Control-Allow-Origin', 
            value: '*' 
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
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
};