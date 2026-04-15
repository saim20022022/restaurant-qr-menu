import './globals.css';
import type { Metadata } from 'next';
import { MainNav } from '../components/main-nav';

export const metadata: Metadata = {
  title: 'Restaurant QR Menu',
  description: 'QR menu, mutfak ekranı, kasiyer ve garson paneli',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="tr">
      <body>
        <MainNav />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
