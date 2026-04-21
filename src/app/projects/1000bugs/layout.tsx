import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direction Artistique & Illustration',
  description: 'Création de l\'univers graphique de Mille Bugs : direction artistique, illustrations et design d\'un produit ludo-pédagogique sur la biodiversité.',
  openGraph: {
    title: 'DA & Illustration Mille Bugs | Pauline Yvelin',
    description: 'Design de produit et univers graphique sur-mesure pour sensibiliser à la biodiversité.',
    images: ['/mockup-millebugs-hp.webp'],
  },
};

export default function MilleBugsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
