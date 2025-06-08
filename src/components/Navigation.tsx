import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');
  const tAuth = useTranslations('auth');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
    { href: '/services', label: t('services') },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-900 hover:text-blue-600"
            >
              {tAuth('login')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
