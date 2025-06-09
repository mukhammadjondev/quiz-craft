'use client';

import { motion } from 'framer-motion';
import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const footerLinks = {
  product: [
    { name: 'features', href: '#features' },
    { name: 'howItWorks', href: '#how-it-works' },
    { name: 'pricing', href: '/pricing' },
    { name: 'api', href: '/api' },
  ],
  company: [
    { name: 'aboutUs', href: '/about' },
    { name: 'careers', href: '/careers' },
    { name: 'blog', href: '/blog' },
    { name: 'press', href: '/press' },
  ],
  support: [
    { name: 'helpCenter', href: '/help' },
    { name: 'contactUs', href: '/contact' },
    { name: 'privacyPolicy', href: '/privacy' },
    { name: 'termsOfService', href: '/terms' },
  ],
};

const socialLinks = [
  {
    icon: Twitter,
    href: 'https://twitter.com/eduquiz',
    label: 'Twitter',
    color: 'hover:text-blue-400',
  },
  {
    icon: Github,
    href: 'https://github.com/eduquiz',
    label: 'GitHub',
    color: 'hover:text-gray-700 dark:hover:text-gray-300',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/eduquiz',
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
  {
    icon: Mail,
    href: 'mailto:hello@eduquiz.com',
    label: 'Email',
    color: 'hover:text-green-600',
  },
];

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-muted/60 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Brain className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                </motion.div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  EduQuiz
                </span>
              </Link>

              <p className="text-muted-foreground max-w-sm leading-relaxed">
                {t('description')}
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`h-10 w-10 ${social.color} transition-all duration-200 hover:bg-accent/80`}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground text-sm tracking-wide">
                {t(`sections.${category}`)}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {t(`links.${category}.${link.name}`)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <span>🌍</span>
              <span>{t('madeWith')}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
