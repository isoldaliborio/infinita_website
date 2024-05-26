const variables = {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
}


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    optimizeFonts: false,
    trailingSlash: true,
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
    env: variables,
    reactStrictMode: false,
};


export default nextConfig;
