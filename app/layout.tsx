import './globals.css';
import type { Metadata } from 'next';

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
      <body style={{ fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  );
}