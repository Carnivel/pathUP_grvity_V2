/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Matches Django's default APPEND_SLASH=True behavior
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**', // Allow all media assets from Django
      },
      {
        protocol: 'https',
        hostname: '*.ngrok-free.dev',
        pathname: '/**', // Allow media through ngrok
      },
      {
        protocol: 'https',
        hostname: 'api.pathup.in',
        pathname: '/**', // Allow media from the VPS API
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ],
      },
    ];
  },
};

export default nextConfig;

