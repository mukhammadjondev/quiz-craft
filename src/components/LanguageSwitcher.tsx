'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import { locales, localeNames, localeFlags } from '@/lib/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={e => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {locales.map(loc => (
          <option key={loc} value={loc}>
            {localeFlags[loc]} {localeNames[loc]}
          </option>
        ))}
      </select>

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
}
