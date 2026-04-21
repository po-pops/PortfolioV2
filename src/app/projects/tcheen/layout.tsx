import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refonte UX/UI & Design System',
  description: 'Découvrez la refonte complète de Tcheen : de la stratégie produit à la création d\'un design system scalable. Une expérience utilisateur optimisée sur Figma.',
  openGraph: {
    title: 'Refonte UX/UI Tcheen | Pauline Yvelin',
    description: 'De la stratégie au design system : découvrez ma méthode de refonte pour Tcheen.',
    images: ['/mockup-tcheen-hp.webp'],
  },
};

export default function TcheenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
