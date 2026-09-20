import ProjectsGallery from '@/components/projects-gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects Portfolio',
  description:
    'Explore production web engineering projects by Saddam Hossain including logistics platforms, fleet dispatch portals, headless e-commerce storefronts, and multi-user SaaS systems.',
  alternates: {
    canonical: 'https://saddam.thenexcraft.net/projects',
  },
  keywords: [
    'Saddam Hossain Projects',
    'Next.js Portfolio Projects',
    'React Full-Stack Projects',
    'Headless E-Commerce Showcase',
    'SaaS Web Applications',
  ],
  openGraph: {
    title: 'Projects Portfolio | Saddam Hossain — Full-Stack Developer',
    description:
      'Explore production web engineering projects by Saddam Hossain including logistics platforms, fleet dispatch portals, and headless e-commerce storefronts.',
    url: 'https://saddam.thenexcraft.net/projects',
    type: 'website',
    images: [
      {
        url: '/shapla.png',
        width: 1200,
        height: 630,
        alt: 'Saddam Hossain Projects Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Saddam Hossain',
    description:
      'Explore production web applications, headless e-commerce, and business management systems by Saddam Hossain.',
    images: ['/shapla.png'],
    creator: '@saddamc',
  },
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}