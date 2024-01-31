/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:  'infinitaproductions.com',
                port: '',
                pathname: '/admin/wp-content/**'
            }
        ]
    }
}

module.exports = nextConfig
