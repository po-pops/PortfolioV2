import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UX/UI Design & Expérience Interactive',
  description: 'Conception d\'une interface ludique pour le Musée des Beaux-Arts de Bordeaux. Un projet mêlant UX research, gamification et illustrations personnalisées.',
  openGraph: {
    title: 'Design Interactif Aki\'tu penses | Pauline Yvelin',
    description: 'Interface interactive et gamification au musée : découvrez mon approche design.',
    images: ['/mockup-aki-hp.webp'],
  },
};

export default function AkiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
