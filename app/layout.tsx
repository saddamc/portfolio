import { ThemeProvider } from '@/components/theme-provider';
// import { Analytics } from '@vercel/analytics/next';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://saddambhossain.dev'),
  title: 'Saddam Hossain | Premium Full-Stack Engineer & AI Solutions Architect',
  description: 'Elite Full-Stack Developer specializing in Next.js, Custom GPT & AI integrations, programmatic social media automations, and premium high-performance software systems for growing businesses.',
  icons: {
    icon: '/icon',
    apple: '/icon',
  },
  keywords: [
    'Premium Full-Stack Developer USA',
    'Next.js Senior Engineer',
    'Custom GPT & LLM AI Integrations',
    'Social Media Automation Developer',
    'High-Performance React Architectures',
    'SaaS Product Designer',
    'Framer Motion Animations Expert',
    'React Native Mobile Developer'
  ],
  authors: [{ name: 'Saddam Hossain' }],
  creator: 'Saddam Hossain',
  publisher: 'Saddam Hossain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saddambhossain.dev',
    title: 'Saddam Hossain | Premium Full-Stack Engineer & AI Solutions Architect',
    description: 'Elite Full-Stack Developer specializing in Next.js, Custom GPT & AI integrations, programmatic social media automations, and premium high-performance software systems for growing businesses.',
    siteName: 'Saddam Hossain Portfolio Portal',
    images: [
      {
        url: '/icon',
        width: 512,
        height: 512,
        alt: 'Saddam Hossain | Full-Stack & AI Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saddam Hossain | Premium Full-Stack Engineer & AI Solutions Architect',
    description: 'Elite Full-Stack Developer specializing in Next.js, Custom GPT & AI integrations, programmatic social media automations, and premium high-performance software systems for growing businesses.',
    images: ['/icon'],
    creator: '@saddamc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saddam Hossain",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    "url": "https://book-4-woad.vercel.app",
    "sameAs": [
      "https://github.com/saddamc",
      "https://www.linkedin.com/in/saddam-hossain-09299535/",
      // "https://twitter.com/alexjohnsondev"
    ],
    "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "Full Stack Development"],
    "email": "saddam13bd@gmail.com"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Open Graph meta tags for SEO and social sharing */}
        <meta property="og:title" content="Saddam Hossain - Web Developer" />
        <meta property="og:description" content="Check my projects, skills, and contact info." />
        <meta property="og:image" content="https://saddambd.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://saddambd.vercel.app" />
        <meta property="og:type" content="website" />
        
        <meta name="google-site-verification" content="google65b891fb2321ea24.html" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
        <meta property="og:see_also" content="https://github.com/saddamc" />
        <meta property="og:see_also" content="https://www.linkedin.com/in/saddam-hossain-09299535/" />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          {children}
          <FloatingActions />
          <ServiceWorkerRegister />
          {/* <SpeedInsights />
          <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}