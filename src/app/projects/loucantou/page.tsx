"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Button } from '@/components/Button';
import styles from '../projects.module.css';

// Component for the animated underline
const AnimatedUnderline = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className={styles.sectionTitleWrapper} ref={ref}>
      <h2 className={styles.sectionTitle}>
        {title}
        <motion.div
          className={styles.underline}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </h2>
    </div>
  );
};

// Component for the line-by-line text fade
const FadeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


// Component for the sliding steps
const Step = ({ number, title, content, index }: { number: string, title: string, content: string, index: number }) => {
  return (
    <motion.div
      className={styles.stepCard}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.stepNumber} style={{ backgroundColor: '#a3deb3' }}>{number}</div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};


export default function LouCantouProject() {
  return (
    <main className={styles.projectPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.cloudBackground}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoCard} style={{ backgroundColor: '#a3deb3' }}>
            <a href="/" className={styles.subTitleHero}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99988 11.72V12.566L11.0579 17.786L12.0119 16.832L7.99787 12.8H18.6719V11.468H8.01587L12.0119 7.454L11.0579 6.5L5.99988 11.72Z" fill="#1E1E1E" />
              </svg>
              Revenir à l’accueil</a>
            <h1 className={styles.projectTitle}>Rebranding Lou Cantou</h1>
            <p className={styles.projectDesc}>
              Lou Cantou, un établissement hôtelier chaleureux, souhaitait moderniser son image de marque afin de mieux communiquer ses valeurs d'authenticité et de proximité. Cette refonte complète inclut le logo, la direction artistique et le nouveau site web pour offrir une expérience utilisateur simple et accueillante.
            </p>

            <div className={styles.metaInfo}>
              <p className={styles.brand}>DA & UI/UX Design</p>
              <p className={styles.year}>2025</p>
            </div>

            <Button variant="primary" icon className={styles.visitButton} href="https://loucantou.yvelin.net" target="_blank">
              Visiter l'expérience
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                LOU <br /> CANTOU <br /> LOU <br /> CANTOU
              </div>
              <Image
                src="/mockup-loucantou-hp.webp"
                alt="Lou Cantou Mockup"
                width={800}
                height={600}
                className={styles.mockupImg}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Branding", "•", "UI/UX Design", "•", "Lou Cantou", "•", "Web Design", "•"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <FadeText>
              <p className={styles.besoinParagraph}>Dans le cadre de la modernisation de l'offre de chambres d'hôtes, l'objectif était de repenser l'image de l'établissement et de créer une présence en ligne plus actuelle et cohérente.</p>
              <p className={styles.besoinParagraph}>Le projet devait traduire l'esprit chaleureux et authentique des chambres d'hôtes tout en offrant une interface simple et agréable à parcourir pour les futurs clients.</p>
            </FadeText>
          </div>
        </div>
      </section>

      {/* CONCEPTION SECTION */}
      <section className={`${styles.conceptionSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Conception du projet" />
          <div className={styles.stepsGrid}>
            <Step
              number="1"
              title="Analyse de l'identité et de l'offre du lieu"
              content="Immersion dans l'univers de Lou Cantou pour extraire l'essence du lieu et les valeurs de convivialité et de terroir."
              index={0}
            />
            <Step
              number="2"
              title="Création de l'identité visuelle"
              content="Design d'un logo moderne mais qui conserve son aspect organique pour refléter la nature et l'accueil des chambres d'hôtes."
              index={1}
            />
            <Step
              number="3"
              title="Conception de l'expérience fluide"
              content="Le parcours de réservation devait être clair et direct."
              index={2}
            />
            <Step
              number="4"
              title="Design system et développement"
              content="Définition des couleurs terreuses et d'une typographie élégante pour renforcer l'image de marque."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ART DIRECTION */}
      <section className={`${styles.artSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Direction artistique du projet" />

          <div className={styles.artLayout}>
            <div className={styles.swatchesRow}>
              <div className={styles.swatch} style={{ backgroundColor: '#111' }} data-color="#111"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#f5f5f5' }} data-color="#f5f5f5"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#4a6741' }} data-color="#4a6741"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#f9a825' }} data-color="#f9a825"></div>
            </div>

            <div className={styles.artMeta}>
              <div className={styles.metaCol}>
                <h4>Titres</h4>
                <p>Iberpangea (Variable)</p>
              </div>
              <div className={styles.metaCol}>
                <h4>Corps de texte</h4>
                <p>Iberpangea (Regular)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <Image src="/projects/loucantou/mockups2.png" width={650} height={650} alt="Aki Screen 1" className={styles.mockupPhone} />
          <p className={styles.mockupBottom}>Une présence en ligne optimisée qui met l'accent sur les visuels haute qualité de l'établissement et facilite la réservation directe.</p>

          <div className={styles.finalButtonWrapper}>
            <Button variant="primary" href="https://www.figma.com/design/reOvDVpeBUdTe3eXb0W1AT/Lou-Cantou?node-id=19-1275&t=P5xnEShtJRx1Qdz0-1" target="_blank" icon>Accéder au figma</Button>
          </div>
        </div>
      </section>

      <Footer color="#a3deb3" roundedTop={true} />
    </main>
  );
}
