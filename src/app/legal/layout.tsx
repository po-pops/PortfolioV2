import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales et informations réglementaires concernant le portfolio de Pauline Yvelin.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
