import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Product Designer & UI/UX Specialist | Pauline Yvelin',
    template: '%s | Pauline Yvelin',
  },
  description: 'Portfolio de Pauline Yvelin, Product Designer spécialisée en UI/UX. Conception d\'expériences digitales élégantes, accessibles et centrées utilisateur.',
  keywords: [
    'Product Designer', 'UI/UX Design', 'Figma', 'Web Design', 
    'Portfolio Design', 'Freelance Designer', 'Accessibility', 
    'User Experience', 'Interaction Design'
  ],
  authors: [{ name: 'Pauline Yvelin' }],
  creator: 'Pauline Yvelin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://paulineyvelin.net',
    siteName: 'Pauline Yvelin Portfolio',
    images: [
      {
        url: '/vignette.jpg',
        width: 1200,
        height: 630,
        alt: 'Pauline Yvelin - Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Designer & UI/UX Specialist | Pauline Yvelin',
    description: 'Portfolio de Pauline Yvelin, Product Designer spécialisée en UI/UX.',
    images: ['/vignette.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }} className={poppins.variable}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Pauline Yvelin" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="firstname" />
          <input type="text" name="lastname" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
          <input type="text" name="bot-field" />
        </form>

      </body>
    </html>
  );
}
