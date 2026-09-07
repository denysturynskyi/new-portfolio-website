import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Denys Turynskyi — Product Designer',
  description: 'Ukrainian Product Designer based in Croatia. Selected works and experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light"><body>{children}</body></html>;
}
