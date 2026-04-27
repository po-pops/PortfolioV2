'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Global variable to track if the application has already been mounted once in this session.
// This persists across Template remounts during navigation, but resets on full reload/tab duplication.
let hasAppLoaded = false;

const projectColors: Record<string, string> = {
  '/projects/aki': '#eab8d1',
  '/projects/tcheen': '#f5e751',
  '/projects/loucantou': '#a3deb3',
  '/projects/1000bugs': '#A9D0E4',
};

const DEFAULT_COLOR = '#A9D0E4';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  
  // Track if this is the very first time the template is mounting after a cold boot or duplication.
  const [isInitialLoad, setIsInitialLoad] = useState(!hasAppLoaded);

  useEffect(() => {
    setIsMounted(true);
    hasAppLoaded = true;
  }, []);

  const isHome = pathname === '/';
  const transitionColor = projectColors[pathname] || DEFAULT_COLOR;

  return (
    <>
      {isMounted && (
        <motion.div
          key={pathname + "-curtain"}
          initial={{ y: '0%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.1 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: isHome ? 'transparent' : transitionColor,
            backgroundImage: isHome ? "url('/background-ciel.webp')" : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      )}
      <motion.div
        key={pathname + "-content"}
        // If it's the very first render, skip the 'initial' hidden state (false) to ensure instant visibility.
        // On subsequent navigations, animate from opacity 0 to maintain the exit/entry feel.
        initial={isInitialLoad ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ width: '100%', maxWidth: '100vw', overflowX: 'clip' }}
      >
        {children}
      </motion.div>
    </>
  );
}
