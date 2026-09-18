// "use client";

// import SkillCard from '@/components/skill-card';
// import { Card, CardContent } from '@/components/ui/card';
// import { motion } from 'framer-motion';
// import { Code2, Database, Heart, Zap } from 'lucide-react';

// export default function AboutSection() {
//   const skills = [
//     {
//       icon: Code2,
//       name: 'Frontend Development',
//       description: 'React, Next.js, TypeScript, Tailwind CSS, REDUX, ShadCN',
//       color: 'from-purple-400 to-pink-400',
//     },
//     {
//       icon: Zap,
//       name: 'Backend Development',
//       description: 'Node.js, ExpressJS, PostgreSQL, MongoDB, GitHub, passport, JWT, password hash ',
//       color: 'from-cyan-400 to-blue-400',
//     },
//     {
//       icon: Database,
//       name: 'Mern Stack Developer',
//       description: 'MongoDB, Express.js, React, Node.js',
//       color: 'from-green-400 to-teal-400',
//     },
//     {
//       icon: Heart,
//       name: 'Problem Solving',
//       description: 'Website issue, System Architecture',
//       color: 'from-amber-400 to-orange-400',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//             About <span className="gradient-text">Me</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             I am Mern Stack developer with 2+ years of experience creating 
//             beautiful, functional web applications. I love turning complex problems into 
//             simple, elegant solutions.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center about-perspective">
//           {/* Enhanced Journey Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="journey-card glass p-8 neon-purple relative overflow-visible">
//               <CardContent className="p-0">
//                 <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
//                 <p className="text-muted-foreground mb-6">
//                   Started as a curious computer science student, I quickly fell in love with 
//                   web development. From building my first HTML page to creating complex 
//                   full-stack applications, every project has been a learning adventure.
//                 </p>
//                 <p className="text-muted-foreground mb-6">
//                   I specialize in React ecosystem, modern JavaScript, and creating seamless 
//                   user experiences. When I am not coding, you find me exploring new 
//                   technologies, contributing to open source, or mentoring aspiring developers.
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 mt-8">
//                   <div className="stat-card text-center p-4 glass rounded-lg">
//                     <div className="text-3xl font-bold gradient-text">20+</div>
//                     <div className="text-sm text-muted-foreground">Projects Completed</div>
//                   </div>
//                   <div className="stat-card text-center p-4 glass rounded-lg">
//                     <div className="text-3xl font-bold gradient-text">2+</div>
//                     <div className="text-sm text-muted-foreground">Years Experience</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Enhanced Skills Grid */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-6 skills-perspective"
//           >
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="skill-card-wrapper"
//               >
//                 <SkillCard skill={skill} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



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
   name: 'Mern Stack Developer',
   description: 'javaScript, HTML, CSS, MongoDB, React, Node.js',
   color: 'from-purple-500 to-pink-500'
  },
  {
   icon: Brain,
   name: 'Problem Sloving',
   description: 'Website issue, System Architecture',
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