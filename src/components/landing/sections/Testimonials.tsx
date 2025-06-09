'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonialData: Omit<Testimonial, 'name' | 'role' | 'content'>[] = [
  {
    id: 'sarah-chen',
    avatar:
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
  {
    id: 'marcus-rodriguez',
    avatar:
      'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
  {
    id: 'emily-watson',
    avatar:
      'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
  {
    id: 'james-park',
    avatar:
      'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
  {
    id: 'lisa-thompson',
    avatar:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
  {
    id: 'alex-kumar',
    avatar:
      'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
  },
];

const animationConfig = {
  container: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors duration-200 ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => (
  <motion.div
    initial={animationConfig.card.initial}
    whileInView={animationConfig.card.animate}
    transition={{
      ...animationConfig.card.transition,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border/50 bg-background/80 backdrop-blur-md hover:border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-8 h-8 text-primary" />
      </div>

      <CardContent className="p-6 relative z-10">
        <StarRating rating={testimonial.rating} />

        <blockquote className="text-muted-foreground mb-6 leading-relaxed italic relative">
          <span className="text-primary/60 text-2xl absolute -left-2 -top-2">
            &ldquo;
          </span>
          {testimonial.content}
          <span className="text-primary/60 text-2xl">&rdquo;</span>
        </blockquote>

        <div className="flex items-center gap-3 pt-4 border-t border-border/30">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <AvatarImage
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {testimonial.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="text-muted-foreground text-xs">
              {testimonial.role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials: Testimonial[] = testimonialData.map(data => ({
    ...data,
    name: t(`people.${data.id}.name`),
    role: t(`people.${data.id}.role`),
    content: t(`people.${data.id}.content`),
  }));

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--secondary))_0%,transparent_50%)] opacity-[0.03]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={animationConfig.container.initial}
          whileInView={animationConfig.container.animate}
          transition={animationConfig.container.transition}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{t('trust.rating')}</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span>{t('trust.users')}</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span>{t('trust.reviews')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
