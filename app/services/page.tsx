'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import ServicesHero from '@/components/services/services-hero';
import ServiceOverview from '@/components/services/service-overview';
import FeaturedService from '@/components/services/featured-service';
import ServiceDetails from '@/components/services/service-details';
import ProcessSection from '@/components/services/process-section';
import ClientBenefits from '@/components/services/client-benefits';
import TechStack from '@/components/services/tech-stack';
import ProjectProof from '@/components/services/project-proof';
import ServiceFit from '@/components/services/service-fit';
import FaqSection from '@/components/services/faq-section';
import FinalCta from '@/components/services/final-cta';

export default function ServicesPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/20 relative overflow-hidden"
    >
      {/* Existing Global Navbar */}
      <Navbar />

      {/* Subtle Ambient Mouse Follower Light */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(700px at ${position.x}px ${position.y}px, rgba(34,211,238,0.06), transparent 80%)`,
        }}
      />

      {/* Background Architectural Canvas Grid Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Main Services Flow */}
      <main className="relative z-10">
        {/* 1. Services Hero with Abstract Architecture Visual */}
        <ServicesHero />

        {/* 2. Service Overview (What I Do + 6 Editorial Cards) */}
        <ServiceOverview />

        {/* 3. Featured Flagship Service (Full-Stack Web Development + Abstract UI Mockup) */}
        <FeaturedService />

        {/* 4. Detailed Service Scopes */}
        <ServiceDetails />

        {/* 5. How I Work (5-Stage Connected Lifecycle) */}
        <ProcessSection />

        {/* 6. What Clients Get (More Than Just Code) */}
        <ClientBenefits />

        {/* 7. Technology & Stack (Grouped by Purpose) */}
        <TechStack />

        {/* 8. Project Proof (Real Deployed Case Studies) */}
        <ProjectProof />

        {/* 9. Service Fit Matrix (Practical Project Routing) */}
        <ServiceFit />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Final Closing CTA */}
        <FinalCta />
      </main>

      {/* Existing Global Minimal Footer */}
      <Footer />
    </div>
  );
}