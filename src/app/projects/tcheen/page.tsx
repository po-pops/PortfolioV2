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
      <div className={styles.stepNumber} style={{ backgroundColor: '#f5e751' }}>{number}</div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default function TcheenProject() {
  return (
    <main className={styles.projectPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.cloudBackground}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoCard} style={{ backgroundColor: '#f5e751' }}>
            <a href="/" className={styles.subTitleHero}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99988 11.72V12.566L11.0579 17.786L12.0119 16.832L7.99787 12.8H18.6719V11.468H8.01587L12.0119 7.454L11.0579 6.5L5.99988 11.72Z" fill="#1E1E1E" />
              </svg>
              Revenir à l’accueil</a>
            <h1 className={styles.projectTitle}>Refonte web Tcheen</h1>
            <p className={styles.projectDesc}>
              Afin d’accompagner l’évolution de son positionnement une refonte du site web de Tcheen été nécessaire. Réalisée en collaboration avec Hyperrealist et Fière Allure, j’ai conçu les maquettes Figma en m’appuyant sur le branding et les besoins des utilisateurs cibles, afin de proposer une expérience pertinente, accessible et émotionnelle.
            </p>

            <div className={styles.metaInfo}>
              <p className={styles.brand}>UI/UX Design</p>
              <p className={styles.year}>2026</p>
            </div>

            <Button variant="dark" href="https://tcheen.com" icon className={styles.visitButton} target='_blank'>
              Visiter l'expérience
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                TCHEEN <br /> TCHEEN <br /> TCHEEN <br /> TCHEEN
              </div>
              <Image
                src="/mockup-tcheen-hp.webp"
                alt="Tcheen Mockup"
                width={800}
                height={600}
                className={styles.mockupImg}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["UX/UI Design", "UX/UI Design", "UX/UI Design", "UX/UI Design"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <FadeText>
              <p className={styles.besoinParagraph}>Suite à une évolution de son positionnement, Tcheen souhaitait moderniser son site web afin de mieux refléter sa nouvelle stratégie et toucher une cible plus professionnelle.</p>
              <p className={styles.besoinParagraph}>L’objectif était également de concevoir une expérience digitale cohérente avec leur branding, capable de renforcer leur crédibilité.</p>
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
              title="Analyse du positionnement et du branding"
              content="Approfondissement du branding existant pour bien comprendre les composantes de l'identité graphique et le nouveau positionnement de Tcheen."
              index={0}
            />
            <Step
              number="2"
              title="Structuration de l'arborescence du site"
              content="Définition du parcours client idéal, organisation des contenus et de la structure de l'information pour garantir une hiérarchie claire et intuitive."
              index={1}
            />
            <Step
              number="3"
              title="Création d'un design system modulable"
              content="Design d'une bibliothèque de composants réutilisables dans Figma afin de faciliter la conception des différentes pages du site et d'assurer une cohérence visuelle globale."
              index={2}
            />
            <Step
              number="4"
              title="Conception des interactions et préparation au développement"
              content="L’étape de prototypage sur Figma nous a permis de tester les parcours utilisateurs et de préparer le développement sur WordPress, en collaboration avec l’équipe en charge du développement et du SEO."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/projects/tcheen/mockups.png" width={650} height={650} alt="Tcheen Screen" className={styles.mockupPhone} />
          </div>
          <p className={styles.mockupBottom}>Un site plus moderne, le projet est disponible sur figma pour les curieux. Vous pourrez y découvrir plus en détails les maquettes les composants ainsi que toutes les interactions d'interfaces.</p>

          {/* <div className={styles.finalButtonWrapper}>
            <Button href="https://www.figma.com/design/FNKMAXDrtiWOpFbIikUPGQ/Aki--tu-penses?node-id=0-1&t=2kRZIlD8EBxm90W9-1" icon target="_blank">Accéder au figma</Button>
          </div> */}
        </div>
      </section>

      <Footer color="var(--color-primary-yellow)" roundedTop={true} />
    </main>
  );
}
