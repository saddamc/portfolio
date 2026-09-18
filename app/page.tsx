import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/sections/hero-section'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    ),
  }
);

const TimelineSection = dynamic(
  () => import('@/components/sections/timeline-section'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    ),
  }
);

const AboutSection = dynamic(
  () => import('@/components/sections/about-section'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    ),
  }
);

const ContactSection = dynamic(
  () => import('@/components/sections/contact-section'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}