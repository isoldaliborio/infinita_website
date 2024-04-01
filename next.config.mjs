/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    trailingSlash: true,
    optimizeFonts: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                // hostname:  'infinitaproductions.com', // go back to this domain eventually
                hostname: 'infinitaproducoes.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    reactStrictMode: false,
};


export default nextConfig;
