"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const latestWorks = [
  {
    id: 'harigurus',
    title: 'Harigurus',
    subtitle: 'Event Booking',
    description:
      'HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.',
    image: 'https://images.unsplash.com/photo-1515165562835-c202d9a8c861?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'Express.js', 'Node.js', 'Swiper.js', 'MongoDB', 'Mongoose', 'CSS', 'JavaScript', 'Figma'],
    liveUrl: 'https://www.harigurus.com/',
  },
  {
    id: 'eazygrad',
    title: 'EazyGrad',
    subtitle: 'EdTech Startup',
    description:
      'Being a lead developer, revamped the site to a highly responsive and interactive website. Created new features and pages while working closely with product and UX.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'EJS', 'Swiper.js', 'HTML', 'CSS', 'JavaScript', 'Lighthouse', 'Figma'],
    liveUrl: 'https://eazygrad.com/',
  },
  {
    id: 'web-dev-english',
    title: 'Web Dev English',
    subtitle: 'Coaching and Consulting',
    description:
      'US-based English Coach website built to guide tech professionals, with improved layout, new sections, and enhanced responsiveness.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    liveUrl: 'https://webdevenglish.com/',
  },
  {
    id: 'money-arjan-solutions',
    title: 'Money Arjan Solutions',
    subtitle: 'Software Development Agency',
    description:
      'Designed and developed the agency site from scratch with a combination of themes and Figma, and integrated a contact form using Netlify.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Netlify', 'Figma'],
    liveUrl: 'https://money-arjan.netlify.app/',
  },
  {
    id: 'pioneer-digital',
    title: 'Pioneer Digital',
    subtitle: 'Digital Marketing Agency',
    description:
      'Worked as a frontend developer on a digital marketing agency website, making it interactive and responsive with a polished user experience.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['JavaScript', 'Bootstrap', 'CSS', 'Sass', 'HTML', 'Figma'],
    liveUrl: 'https://digi-drive.netlify.app/',
  },
  {
    id: 'track-my-expense',
    title: 'Track My Expense',
    subtitle: 'Finance',
    description:
      'A monthly expense tracker WebApp built for personal finance management, now improving continuously based on user feedback.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongo Atlas', 'EJS', 'HTML', 'CSS', 'JavaScript', 'REST API', 'Passport', 'Figma'],
    liveUrl: 'https://www.createios.in/',
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    subtitle: 'Productivity Tool',
    description:
      'A React-based currency converter that fetches live exchange rates from an external API and provides a polished, user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'JSX', 'CSS', 'AJAX', 'Fetch API', 'Figma'],
    liveUrl: 'https://currency-converter-by-anurag.netlify.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="timeline" className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80 mb-4">Latest Works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Latest <span className="gradient-text">Works</span>
          </h2>
        </div>

        <div className="space-y-14">
          {latestWorks.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={`grid gap-8 items-center rounded-[2rem] border border-white/10 bg-white/80 dark:bg-zinc-950/90 shadow-xl p-6 lg:p-10 backdrop-blur-xl ${index % 2 === 0 ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'} `}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl border border-white/10 bg-slate-900/10">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-2">{project.subtitle}</p>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{project.subtitle}</span>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">LIVE</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold tracking-tight">{project.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-900/80 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
