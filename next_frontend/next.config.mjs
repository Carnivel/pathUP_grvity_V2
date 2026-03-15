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
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
