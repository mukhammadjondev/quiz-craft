'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-18 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 80%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      </div>

      <motion.div
        className="absolute top-20 left-16 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-24 right-20 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-5 h-5 bg-white/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-4 h-4 bg-white/20 rounded-full backdrop-blur-sm"
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 mb-4 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm font-semibold text-white">
              {t('badge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-8 leading-tight"
          >
            {t('title')}
            <br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t('subtitle')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/95 hover:scale-105 group font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white/20"
              asChild
            >
              <Link href="/register">
                {t('primaryButton')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40  dark:text-white hover:bg-white/15 hover:scale-105 font-bold px-10 py-4 text-lg backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/demo">{t('secondaryButton')}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white/80 text-base font-medium">
              {t('trustText')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">{t('feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="font-medium">{t('feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="font-medium">{t('feature3')}</span>
              </div>
            </div>

            <div className="text-white/70 text-sm font-medium">
              {t('additionalInfo')}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
