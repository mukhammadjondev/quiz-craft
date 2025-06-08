import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { Locale, locales } from '@/lib/config';
import { routing } from '@/i18n/routing';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}`])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      alternateLocale: locales.filter(l => l !== locale),
    },
  };
}
