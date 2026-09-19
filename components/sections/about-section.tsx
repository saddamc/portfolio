'use client';

import SkillCard from '@/components/skill-card';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    name: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Shadcn/ui, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    name: 'Backend Development',
    description: 'Node.js, Express.js, TypeScript, MongoDB',
    color: 'from-green-500 to-emerald-500'
  },
  {
   icon: Zap,
   name: 'MERN Stack Developer',
   description: 'JavaScript, HTML, CSS, MongoDB, React, Node.js',
   color: 'from-purple-500 to-pink-500'
  },
  {
   icon: Brain,
   name: 'Problem Solving',
   description: 'Website Issues, System Architecture',
   color: 'from-orange-500 to-red-500'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-900 dark:text-gray-100">
            I'm a passionate full-stack developer, creating
            innovative web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card-wrapper"
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center "
        >
          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Approach</h3>
            <p className="leading-relaxed text-gray-900 dark:text-gray-100">
              I believe in writing clean, maintainable code and creating user experiences
              that are both functional and delightful. Every project is an opportunity to
              learn something new and push the boundaries of what's possible on the web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}