import { locales, defaultLocale } from '@/lib/config';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales,
  defaultLocale,
});
