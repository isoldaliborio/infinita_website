/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: 'https://infinitaproductions.com/temp/', // remove
    images: {
        unoptimized: true,
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
