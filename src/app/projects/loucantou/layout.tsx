import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identité Visuelle & Web Design',
  description: 'Projet Lou Cantou : création d\'une identité de marque moderne et d\'une interface web intuitive alliant authenticité et performance digitale.',
  openGraph: {
    title: 'Design de Marque Lou Cantou | Pauline Yvelin',
    description: 'Transformation digitale et branding pour Lou Cantou : découvrez l\'étude de cas.',
    images: ['/mockup-loucantou-hp.webp'],
  },
};

export default function LouCantouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
