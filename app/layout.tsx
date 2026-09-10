import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Denys Turynskyi — Product Designer',
  description: 'Ukrainian Product Designer based in Croatia. Selected works and experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(() => {
    let saved;
    try { saved = localStorage.getItem('portfolio-theme'); } catch {}
    document.documentElement.dataset.theme = saved === 'light' || saved === 'dark'
      ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  })();` }} /></head><body>{children}</body></html>;
}
