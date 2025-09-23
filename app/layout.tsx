import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Beek Automotive - Auto Dealer',
  description: 'Ontdek de nieuwste modellen bij Beek Automotive.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}