/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Asegúrate de que las rutas de estáticos funcionen correctamente
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Configuración para optimización de imágenes
  images: {
    unoptimized: process.env.NODE_ENV !== 'production',
    domains: [],
  },
  // Configuración de encabezados de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
