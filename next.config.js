/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
