"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

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
      {children}
    </ReactLenis>
  );
};
