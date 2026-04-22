"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Helper component that resets scroll on pathname change.
 */
function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

/**
 * SmoothScroll component using Lenis.
 * Wraps the application to provide momentum scrolling.
 */
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5,
      smoothWheel: true 
    }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
};
