import styles from './Marquee.module.css';
import { clsx } from 'clsx';

interface MarqueeProps {
  items?: string[];
  variant?: 'yellow' | 'pink';
}

export const Marquee = ({ 
  items = [
    "Brand Design", "Montage", "Graphisme", "Illustrations", 
    "Adobe", "UX/UI Design", "Figma", "Accessibilité"
  ],
  variant = 'yellow'
}: MarqueeProps) => {
  // Duplicate items to ensure smooth infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={clsx(styles.marqueeContainer, variant === 'pink' && styles['variant-pink'])}>
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
