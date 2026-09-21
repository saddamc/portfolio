'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { faqs, FaqItem } from '@/data/services';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-6 border-b border-white/[0.06] relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-4xl mx-auto text-left">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>CLARITY & EXPECTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Honest answers to common questions.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
            Direct, realistic expectations on how we work together, project timelines, and post-launch maintenance.
          </p>
        </motion.div>

        {/* Accessible Radix Accordion with first item open for instant preview */}
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4 mb-12">
          {faqs.map((faq: FaqItem, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <AccordionItem
                value={`item-${idx}`}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/40 px-6 sm:px-8 border-b-0 hover:border-cyan-400/30 transition-all data-[state=open]:border-cyan-500/40 data-[state=open]:bg-slate-900/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-white hover:no-underline hover:text-cyan-300 py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-300 leading-relaxed font-sans pb-6 border-t border-white/[0.04] pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Still Have Questions Box */}
        <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-zinc-400 text-left">
            Have a custom requirement or specific technical constraint not listed here?
          </p>
          <a
            href="https://wa.me/8801974544443?text=Hi%20Saddam!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>ASK DIRECTLY ON WHATSAPP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
