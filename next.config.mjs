/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/react-nextjs-sandbox',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/react-nextjs-sandbox',
        basePath: false,
        permanent: false,
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
