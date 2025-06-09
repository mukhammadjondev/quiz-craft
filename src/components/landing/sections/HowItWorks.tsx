'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Wand2, Users, Trophy } from 'lucide-react';

const iconMap = {
  upload: Upload,
  wand: Wand2,
  users: Users,
  trophy: Trophy,
} as const;

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
} as const;

const stepConfig = [
  { icon: 'upload', color: 'blue' },
  { icon: 'wand', color: 'purple' },
  { icon: 'users', color: 'green' },
  { icon: 'trophy', color: 'orange' },
] as const;

const animationConfig = {
  container: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  step: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  icon: {
    hover: { rotate: [0, -5, 5, 0] as number[] },
    transition: { duration: 0.5 },
  },
} as const;

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...animationConfig.container}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('title.prefix')}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              {' '}
              {t('title.highlight')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-sm" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stepConfig.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              const colorClass = colorMap[step.color];

              return (
                <motion.div
                  key={index}
                  initial={animationConfig.step.initial}
                  whileInView={animationConfig.step.animate}
                  transition={{
                    ...animationConfig.step.transition,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  <Card className="h-full group/card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border/50 bg-background/80 backdrop-blur-md pt-8 hover:border-primary/20">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${colorClass} text-white mb-6 group-hover/card:scale-110 transition-all duration-300 shadow-lg`}
                        whileHover={animationConfig.icon.hover}
                        transition={animationConfig.icon.transition}
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover/card:text-primary transition-colors duration-300">
                        {t(`steps.${index}.title`)}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`steps.${index}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
