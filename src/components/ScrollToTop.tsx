"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Retour en haut"
        >
          <span className={styles.iconWrapper}>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 34 34" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <path 
                d="M26.452 16.6033V17.8018L19.2865 25.1968L17.935 23.8453L23.6215 18.1333H8.5V16.2463H23.596L17.935 10.5598L19.2865 9.20825L26.452 16.6033Z" 
                fill="white"
              />
            </svg>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
