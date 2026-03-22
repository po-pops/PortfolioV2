import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  items?: string[];
}

export const Marquee = ({ 
  items = [
    "Brand Design", "Montage", "Graphisme", "Illustrations", 
    "Adobe", "UX/UI Design", "Figma", "Accessibilité"
  ] 
}: MarqueeProps) => {
  // Duplicate items to ensure smooth infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {marqueeItems.map((skill, index) => (
          <span key={index} className={styles.marqueeItem}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
