import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beek Automotive - Premium Auto Dealership',
  description: 'Gespecialiseerd in exclusieve sportauto\'s en luxe voertuigen. Drive en passie voor specialer, strakker en sneller.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}