import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saddam Hossain | Full-Stack Web Developer & Solutions Architect',
    short_name: 'Saddam Portfolio',
    description:
      'Senior Full-Stack Web Developer building high-performance web applications, headless e-commerce, and business management systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
