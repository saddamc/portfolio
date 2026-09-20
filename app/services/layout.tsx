import type { Metadata } from 'next';
import { faqs, services } from '@/data/services';
export const metadata: Metadata = {
  title: {
    absolute: 'Services | Saddam Hossain — Full-Stack Web Developer',
  },
  description:
    'Explore web development, e-commerce, SaaS, business application and API development services by Saddam Hossain.',
  alternates: {
    canonical: 'https://saddam.thenexcraft.net/services',
  },
  keywords: [
    'Full-Stack Web Development Services',
    'Custom Next.js Development',
    'Headless E-Commerce Developer',
    'SaaS MVP Engineering',
    'Business Management Software',
    'Node.js REST API Development',
    'Next.js 15 Migration & Maintenance',
    'Hire Full-Stack Engineer',
  ],
  openGraph: {
    title: 'Services | Saddam Hossain — Full-Stack Web Developer',
    description:
      'Explore web development, e-commerce, SaaS, business application and API development services by Saddam Hossain.',
    url: 'https://saddam.thenexcraft.net/services',
    type: 'website',
    images: [
      {
        url: '/shapla.png',
        width: 1200,
        height: 630,
        alt: 'Saddam Hossain — Full-Stack Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Saddam Hossain — Full-Stack Web Developer',
    description:
      'Explore web development, e-commerce, SaaS, business application and API development services by Saddam Hossain.',
    images: ['/shapla.png'],
    creator: '@saddamc',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Rich Snippet: FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Google Rich Snippet: ProfessionalService Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Saddam Hossain — Full-Stack Web Development Services',
    image: 'https://saddam.thenexcraft.net/shapla.png',
    url: 'https://saddam.thenexcraft.net/services',
    telephone: '+8801974544443',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    founder: {
      '@type': 'Person',
      name: 'Saddam Hossain',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Full-Stack Software Development Services',
      itemListElement: services.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <>
      {/* Schema.org FAQPage & ProfessionalService Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
