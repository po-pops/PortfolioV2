import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pauline | Portfolio Designeuse Digital',
  description: 'Portfolio de Pauline, designeuse franco-allemande spécialisée en UX/UI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
