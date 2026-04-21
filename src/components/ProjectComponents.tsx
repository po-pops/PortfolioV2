"use client";

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import styles from './ProjectComponents.module.css';
import { clsx } from 'clsx';

// Sub-component for an individual word linked to scroll progress
const IndividualWord = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const blur = useTransform(progress, range, [4, 0]);

  return (
    <motion.span 
      style={{ 
        opacity, 
        y, 
        filter: blur.get() === 0 ? 'none' : `blur(${blur}px)`,
        marginRight: "0.25em",
        display: "inline-block"
      }}
    >
      {word === "" ? "\u00A0" : word}
    </motion.span>
  );
};

// Component for word-by-word reveal linked to scroll
export const WordReveal = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"] // Starts revealing at 90% of viewport, finishes at 30%
  });

  // Smooth the scroll progress for a more "premium" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Split logic that preserves newlines
  const lines = text.split("\n");
  const totalWords = text.split(/\s+/).filter(w => w.length > 0).length;
  let currentWordIndex = 0;

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden" }}
    >
      {lines.map((line, i) => {
        const words = line.split(" ");
        return (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {words.map((word, j) => {
              if (word === "") return null;
              
              const start = currentWordIndex / totalWords;
              const end = (currentWordIndex + 1) / totalWords;
              currentWordIndex++;

              return (
                <IndividualWord 
                  key={`${i}-${j}`} 
                  word={word} 
                  progress={smoothProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
};

// Component for the animated underline
export const AnimatedUnderline = ({ title, variant = 'yellow' }: { title: string, variant?: 'yellow' | 'pink' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className={styles.sectionTitleWrapper} ref={ref}>
      <h2 className={styles.sectionTitle}>
        {title}
        <motion.div
          className={clsx(styles.underline, variant === 'pink' && styles.underlinePink)}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </h2>
    </div>
  );
};

// Component for the line-by-line text fade
export const FadeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Sophisticated easing
    >
      {children}
    </motion.div>
  );
};

// Component for the sliding steps
export const Step = ({ number, title, content, index, backgroundColor }: { 
  number: string, 
  title: string, 
  content: string, 
  index: number,
  backgroundColor?: string 
}) => {
  return (
    <motion.div
      className={styles.stepCard}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div 
        className={styles.stepNumber} 
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        {number}
      </div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};
