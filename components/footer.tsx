"use client";

import { motion } from 'framer-motion';
import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saddamc', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saddam-hossain-09299535/', label: 'LinkedIn' },
    { icon: Mail, href: "mailto:sadddam13bd@gmail.com", label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className=" border-border/50 mt-4 py-8 text-center text-muted-foreground"
        >
          <p className="flex items-center justify-center">
            © {currentYear} Saddam Hossain. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-1 text-red-500"
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            and lots of coffee.
          </p>
        </motion.div>
    </footer>
  );
}