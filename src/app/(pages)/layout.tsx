import { ReactNode } from 'react';

import Footer from '@layout/Footer';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
