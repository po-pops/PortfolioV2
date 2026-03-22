"use client";

import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="accueil" className={styles.hero}>
      {/* Background Cloud Layer - pure CSS for now, user can replace with an image or complex drawing later */}
      <div className={styles.cloudBackground}></div>

      <div className={styles.content}>
        {/* Aki Sticker */}
        <motion.img
          src="/Aki_Sticker.svg"
          alt="Aki Sticker"
          className={`${styles.sticker} ${styles.stickerAki}`}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          aria-hidden="true"
        />

        {/* Tcheen Sticker */}
        <motion.img
          src="/Tcheen_Sticker.svg"
          alt="Tcheen Sticker"
          className={`${styles.sticker} ${styles.stickerTcheen}`}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          aria-hidden="true"
        />

        {/* Central Text Stack */}
        <div className={styles.titleContainer}>
          <h1 className={styles.titleBase}>
            <span className={styles.titleWord}>PORT</span>
            <span className={styles.subtitleWrapper}>
              <div className={styles.subtitle}>d’une product designer</div>
            </span>
            <span className={styles.titleWord}>FOLIO</span>
          </h1>
        </div>

        {/* Lou Cantou Sticker */}
        <motion.img
          src="/LouCantou_Sticker.svg"
          alt="Lou Cantou Sticker"
          className={`${styles.sticker} ${styles.stickerLou}`}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          aria-hidden="true"
        />

        {/* Mille Bugs Sticker */}
        <motion.img
          src="/Sticker_Millebugs2.svg"
          alt="1000 Bugs Sticker"
          className={`${styles.sticker} ${styles.stickerBugs}`}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          aria-hidden="true"
        />

      </div>
    </section>
  );
};
