import { i18n as i18NextConfig } from '../i18next.config';

import type { ReactNode } from 'react';

import '../styles/globals.scss';

async function getLocale() {
  return i18NextConfig.defaultLocale;
}

export interface RootLayoutProps {
  children: ReactNode;
}

async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
