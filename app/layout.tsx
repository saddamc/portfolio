import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/custom-cursor';
import FloatingActions from '@/components/floating-actions';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const ServiceWorkerRegister = dynamic(
  () => import('@/components/service-worker-register')
);

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://saddam.thenexcraft.net'),
  title: {
    default: 'Saddam Hossain | Full-Stack Web Developer',
    template: '%s | Saddam Hossain',
  },
  description:
    'Full-Stack Web Developer building modern web applications, e-commerce platforms, SaaS products and business systems with React, Next.js, Node.js and TypeScript.',
  applicationName: 'Saddam Hossain Portfolio',
  authors: [{ name: 'Saddam Hossain', url: 'https://saddam.thenexcraft.net' }],
  generator: 'Next.js',
  keywords: [
    'Saddam Hossain',
    'Full Stack Developer',
    'Next.js 15 Developer',
    'React Developer',
    'TypeScript Engineer',
    'MERN Stack Developer',
    'Headless E-Commerce Developer',
    'Tailwind CSS Expert',
    'Node.js REST APIs',
    'PostgreSQL & MongoDB Architect',
    'Web Application Developer',
    'Software Engineer Bangladesh',
    'Full Stack Freelancer',
  ],
  creator: 'Saddam Hossain',
  publisher: 'Saddam Hossain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://saddam.thenexcraft.net',
  },
  icons: {
    icon: [
      { url: '/icon', sizes: 'any' },
    ],
    apple: [
      { url: '/icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saddam.thenexcraft.net',
    siteName: 'Saddam Hossain Portfolio',
    title: 'Saddam Hossain | Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer building modern web applications, e-commerce platforms, SaaS products and business systems with React, Next.js, Node.js and TypeScript.',
    images: [
      {
        url: '/shapla.png',
        width: 1200,
        height: 630,
        alt: 'Saddam Hossain | Full-Stack Web Developer Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saddam Hossain | Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer building modern web applications, e-commerce platforms, SaaS products and business systems with React, Next.js, Node.js and TypeScript.',
    images: ['/shapla.png'],
    creator: '@saddamc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://saddam.thenexcraft.net/#person',
        name: 'Saddam Hossain',
        jobTitle: 'Full-Stack Web Developer',
        description:
          'Full-Stack Web Developer building modern web applications, e-commerce platforms, SaaS products and business systems with React, Next.js, Node.js and TypeScript.',
        url: 'https://saddam.thenexcraft.net',
        image: 'https://saddam.thenexcraft.net/shapla.png',
        email: 'saddam13bd@gmail.com',
        telephone: '+8801974544443',
        sameAs: [
          'https://github.com/saddamc',
          'https://www.linkedin.com/in/saddam-hossain-09299535/',
        ],
        knowsAbout: [
          'Web Development',
          'E-Commerce Development',
          'SaaS Development',
          'Business Applications',
          'API & Backend Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://saddam.thenexcraft.net/#website',
        url: 'https://saddam.thenexcraft.net',
        name: 'Saddam Hossain Portfolio',
        description:
          'Portfolio and engineering services of Saddam Hossain, Full-Stack Web Developer.',
        publisher: {
          '@id': 'https://saddam.thenexcraft.net/#person',
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external asset origins for instant performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CustomCursor />
          {children}
          <FloatingActions />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}