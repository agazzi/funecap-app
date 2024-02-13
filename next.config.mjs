/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.funecap.localdev',
                pathname: '/api/**',
            },
        ],
    }
};

export default nextConfig;
