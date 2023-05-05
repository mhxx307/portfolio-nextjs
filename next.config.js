/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'cdn.hashnode.com'],
    },
};

module.exports = nextConfig;
