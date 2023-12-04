/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
};