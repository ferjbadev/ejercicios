import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Deshabilitar el uso de Image de next/image si no lo estás usando
  // o configurar correctamente los dominios de imágenes
  // images: {
  //   domains: ['example.com'],
  // },
  // Configuración de redirecciones si es necesario
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;
