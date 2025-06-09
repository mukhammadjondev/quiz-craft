'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, BookOpen, Users, Zap } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { routes } from '@/lib/routes';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex items-start justify-center overflow-hidden py-18">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/10" />

        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {[
        {
          size: 'w-4 h-4',
          color: 'bg-blue-500',
          position: 'top-20 left-10',
          delay: 0,
        },
        {
          size: 'w-6 h-6',
          color: 'bg-purple-500',
          position: 'top-40 right-20',
          delay: 1,
        },
        {
          size: 'w-3 h-3',
          color: 'bg-indigo-500',
          position: 'bottom-40 left-20',
          delay: 2,
        },
        {
          size: 'w-5 h-5',
          color: 'bg-green-500',
          position: 'bottom-20 right-10',
          delay: 0.5,
        },
        {
          size: 'w-2 h-2',
          color: 'bg-pink-500',
          position: 'top-60 left-1/3',
          delay: 1.5,
        },
        {
          size: 'w-4 h-4',
          color: 'bg-yellow-500',
          position: 'bottom-60 right-1/3',
          delay: 2.5,
        },
      ].map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full opacity-40 blur-[0.5px]`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'backOut' }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-full px-3 py-1 mb-4 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary">
              {t('badge')}
            </span>
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
          >
            {t('title.part1')} <br className="hidden sm:block" />
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {t('title.interactive')}
            </motion.span>{' '}
            {t('title.and')}{' '}
            <motion.span
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {t('title.fun')}
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href={routes.auth.signup}>
                  {t('buttons.startCreatingFree')}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg font-semibold border-2 hover:bg-accent/50 transition-all duration-300"
                asChild
              >
                <Link href="/demo">
                  <motion.div
                    className="mr-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Play className="h-5 w-5" />
                  </motion.div>
                  {t('buttons.watchDemo')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              {
                icon: BookOpen,
                count: 'stats.quizzesCreated.count',
                label: 'stats.quizzesCreated.label',
                color: 'text-blue-600',
                bgColor: 'bg-blue-100 dark:bg-blue-900/20',
              },
              {
                icon: Users,
                count: 'stats.activeLearners.count',
                label: 'stats.activeLearners.label',
                color: 'text-purple-600',
                bgColor: 'bg-purple-100 dark:bg-purple-900/20',
              },
              {
                icon: Zap,
                count: 'stats.questionsGenerated.count',
                label: 'stats.questionsGenerated.label',
                color: 'text-green-600',
                bgColor: 'bg-green-100 dark:bg-green-900/20',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                <div className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
                  {t(stat.count)}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {t(stat.label)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
