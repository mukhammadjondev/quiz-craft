import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type Locale } from './config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format numbers according to locale
export function formatNumber(number: number, locale: Locale): string {
  return new Intl.NumberFormat(locale).format(number);
}

// Format dates according to locale
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Format currency according to locale
export function formatCurrency(
  amount: number,
  locale: Locale,
  currency: string = 'UZS'
): string {
  const currencyMap: Record<Locale, string> = {
    uz: 'UZS',
    ru: 'RUB',
    en: 'USD',
  };

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency || currencyMap[locale],
  }).format(amount);
}

// Format relative time
export function formatRelativeTime(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: Locale
): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  return rtf.format(value, unit);
}

// Create localized URL
export function createLocalizedUrl(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}

// Extract locale from pathname
export function extractLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];

  return potentialLocale && ['uz', 'ru', 'en'].includes(potentialLocale)
    ? (potentialLocale as Locale)
    : null;
}
