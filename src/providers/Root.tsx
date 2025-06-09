import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from './Theme';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
