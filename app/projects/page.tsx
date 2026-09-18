import ProjectsGallery from '@/components/projects-gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Saddam Hossain | Full Stack Developer Portfolio',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, task management apps, and AI dashboards built with React, Next.js, and modern technologies.',
  keywords: ['portfolio', 'web development projects', 'React projects', 'Next.js projects', 'full stack development'],
  openGraph: {
    title: 'Projects - Saddam Hossain Portfolio',
    description: 'Explore my portfolio of innovative web development projects and applications.',
    url: 'https://saddam-six.vercel.app/projects',
    images: [
      {
        url: '/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Saddam Hossain Projects Portfolio',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}