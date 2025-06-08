import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';

export default async function HomePage() {
  const t = await getTranslations('common');

  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('welcome')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t('hello')}</p>
        </div>
      </main>
    </>
  );
}
