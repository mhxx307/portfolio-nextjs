/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
    reactStrictMode: true,
    i18n,
    images: {
        domains: [
            'localhost',
            'res.cloudinary.com',
            'cdn.hashnode.com',
            'images.unsplash.com',
            'sp-ao.shortpixel.ai',
        ],
    },
};

module.exports = nextConfig;
