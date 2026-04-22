"use client";

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, MotionValue, useMotionValue } from 'framer-motion';
import styles from './ProjectComponents.module.css';
import { clsx } from 'clsx';

// Sub-component for an individual word linked to scroll progress
const IndividualWord = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  // Pure opacity transition, removing the 'y' movement and blur for a cleaner look
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{
        opacity,
        marginRight: "0.25em",
        display: "inline-block"
      }}
    >
      {word === "" ? "\u00A0" : word}
    </motion.span>
  );
};

// Component for word-by-word reveal linked to scroll progress (One-Way)
export const WordReveal = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Detection for different behavior on PC vs Mobile
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"] // Centered timing for premium feel
  });

  // Track the maximum scroll progress reached (makes it "once revealed, stay revealed")
  const maxProgress = useMotionValue<number>(0);
  React.useEffect(() => {
    return scrollYProgress.onChange(v => {
      if (v > maxProgress.get()) {
        maxProgress.set(v);
      }
    });
  }, [scrollYProgress, maxProgress]);

  // Smooth the scroll progress for a premium feel
  const smoothProgress = useSpring(maxProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const lines = text.split("\n");
  const totalWords = text.split(/\s+/).filter(w => w.length > 0).length;
  let wordCounter = 0;

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

              const currentWordIndex = wordCounter;
              const start = currentWordIndex / totalWords;
              const end = (currentWordIndex + 1) / totalWords;
              wordCounter++;

              // On mobile, we use a simple staggered fade-in triggered by InView
              // since scroll-linked animations can be jittery on touch devices.
              if (isMobile) {
                return (
                  <motion.span
                    key={`${i}-${j}`}
                    initial={{ opacity: 0.15 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: (currentWordIndex / totalWords) * 0.8, // Staggered delay based on word position
                      ease: "easeOut"
                    }}
                    style={{ marginRight: "0.25em", display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                );
              }

              // On PC, we use the requested scroll-linked opacity reveal
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
        <motion.span
          className={clsx(styles.underlineText, variant === 'pink' && styles.underlineTextPink)}
          initial={{ backgroundSize: "0% 5px" }}
          animate={isInView ? { backgroundSize: "100% 5px" } : { backgroundSize: "0% 5px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.span>
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
