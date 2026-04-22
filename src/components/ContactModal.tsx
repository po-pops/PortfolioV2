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

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
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

              {status === 'success' ? (
                <div className={styles.successMessage}>
                  <h3>Merci !</h3>
                  <p>Votre message a bien été envoyé. Je reviens vers vous très vite.</p>
                  <Button onClick={onClose} variant="primary">Fermer</Button>
                </div>
              ) : (
                <form 
                  className={styles.form} 
                  onSubmit={handleSubmit}
                  name="contact"
                  action="/"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="firstname">Prénom</label>
                      <input type="text" id="firstname" name="firstname" placeholder="Janja" className={styles.input} required />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="lastname">Nom</label>
                      <input type="text" id="lastname" name="lastname" placeholder="Garnbret" className={styles.input} required />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="janja.garnbret@arkose.com" className={styles.input} required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Hello..." className={styles.textarea} required></textarea>
                  </div>

                  <div className={styles.submitWrapper}>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      icon 
                      className={styles.submitButton}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Envoi...' : 'Envoyer le message'}
                    </Button>
                  </div>
                  {status === 'error' && (
                    <p className={styles.errorMessage}>Une erreur est survenue, veuillez réessayer.</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
