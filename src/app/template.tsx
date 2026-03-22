'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const projectColors: Record<string, string> = {
  '/projects/aki': '#eab8d1',
  '/projects/tcheen': '#f5e751',
  '/projects/loucantou': '#a3deb3',
  '/projects/1000bugs': '#A9D0E4',
};

const DEFAULT_COLOR = '#A9D0E4';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const transitionColor = projectColors[pathname] || DEFAULT_COLOR;

  return (
    <>
      <motion.div
        key={pathname + "-curtain"}
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isHome ? 'transparent' : transitionColor,
          backgroundImage: isHome ? "url('/background-ciel.webp')" : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
