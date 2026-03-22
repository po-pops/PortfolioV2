"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactModal.module.css';
import Image from 'next/image';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.notebookContent}>
              <div className={styles.header}>
                <div className={styles.titleWrapper}>
                  <Image src="/smiley.svg" alt="Smiley" width={40} height={40} className={styles.smiley} />
                  <h2 className={styles.title}>Créons ensemble</h2>
                  <Image src="/star.svg" alt="Star" width={40} height={40} className={styles.star} />
                </div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" placeholder="Janja" className={styles.input} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" id="lastname" placeholder="Garnbret" className={styles.input} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="janja.garnbret@arkose.com" className={styles.input} />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Hello..." className={styles.textarea}></textarea>
                </div>

                <div className={styles.submitWrapper}>
                  <Button type="submit" variant="primary" icon className={styles.submitButton}>
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
