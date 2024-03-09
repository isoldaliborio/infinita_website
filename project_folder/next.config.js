/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                // hostname:  'infinitaproductions.com', // go back to this domain eventually
                hostname:  'infinitaproducoes.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    reactStrictMode: false,
}

module.exports = nextConfig
