/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['sgp1.digitaloceanspaces.com', 'teky.edu.vn', 'lh3.googleusercontent.com', 'upload.wikimedia.org'],
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        esmExternals: true,
    },
}

module.exports = nextConfig
