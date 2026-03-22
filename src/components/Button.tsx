import React from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[`variant-${variant}`],
          className
        )}
        {...props}
      >
        <span className={styles.text}>{children}</span>
        {icon && (
          <span className={styles.iconWrapper}>
             <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.672 5.22V6.066L7.614 11.286L6.66 10.332L10.674 6.3H0V4.968H10.656L6.66 0.954001L7.614 0L12.672 5.22Z" fill="#1E1E1E"/>
            </svg>
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
