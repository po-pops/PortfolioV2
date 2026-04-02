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
      <div className={styles.stepNumber}>{number}</div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default function AkiProject() {
  return (
    <main className={styles.projectPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.cloudBackground}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoCard}>
            <a href="/" className={styles.subTitleHero}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99988 11.72V12.566L11.0579 17.786L12.0119 16.832L7.99787 12.8H18.6719V11.468H8.01587L12.0119 7.454L11.0579 6.5L5.99988 11.72Z" fill="#1E1E1E" />
              </svg>
              Revenir à l’accueil</a>
            <h1 className={styles.projectTitle}>Aki' tu penses</h1>
            <p className={styles.projectDesc}>
              Aki’tu penses est un jeu interactif conçu lors d’une collaboration entre le département MMI et le Musée des Beaux-Arts de Bordeaux.<br />
              Installé dans une salle du musée, il s’inspire du principe d’Akinator pour faire deviner un personnage d’un des tableaux identifiés à partir de questions.
            </p>

            <div className={styles.metaInfo}>
              <p className={styles.brand}>UI/UX Design, DA & Illustration</p>
              <p className={styles.year}>2026</p>
            </div>

            <Button variant="primary" href="https://aki-tu-penses.netlify.app" icon className={styles.visitButton} target='_blank'>
              Tester l’expérience
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                AKI’ TU <br /> PENSES <br /> AKI’ TU <br /> PENSES
              </div>
              <Image
                src="/mockup-aki-hp.webp"
                alt="Aki Mockup"
                width={400}
                height={800}
                className={styles.mockupImg}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["UX/UI Design", "Direction artistique", "UX/UI Design", "Direction artistique", "UX/UI Design", "Direction artistique",]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <FadeText>
              <p className={styles.besoinParagraph}>Dans le cadre de la Bacchanight, nocturne étudiante organisée par le Musée des Beaux-Arts de Bordeaux, notre mission était de concevoir une expérience interactive capable de dynamiser la visite du musée et de capter un public jeune.</p>
              <p className={styles.besoinParagraph}>Le musée souhaitait offrir une médiation innovante, capable de transformer la posture traditionnelle du visiteur souvent passive en une expérience participative. Il fallait créer un outil à la fois pédagogique, ludique et adapté aux usages numériques des étudiants.</p>
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
              title="Analyse des besoins et du public"
              content="Nous avons ciblé les 18-25 ans cherchant la participation, en tenant compte des contraintes de l'espace pour une immersion totale et accessible."
              index={0}
            />
            <Step
              number="2"
              title="Adaptation du mécanisme de jeu au contexte"
              content="Nous avons élaboré un mécanisme de questionnement en entonnoir, reprenant le principe d'Akinator tout en le simplifiant pour garantir fluidité et rapidité."
              index={1}
            />
            <Step
              number="3"
              title="UX / Design de l'expérience numérique"
              content="Le parcours utilisateur se concentre sur : accessibilité et flexibilité, interface claire et guidée, attractivité et impact visuel, immersion et cohérence."
              index={2}
            />
            <Step
              number="4"
              title="Dimension sociale et engagement"
              content="Le dispositif encourage le partage et l'interaction directe avec les oeuvres, transformant la visite solitaire en un moment de découverte partagé et ludique avec une pointe de challenge."
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
              <div className={styles.swatch} style={{ backgroundColor: '#151515' }} data-color="#151515"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#FFF' }} data-color="#FFF"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#A9D0E4' }} data-color="#A9D0E4"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#F5A3E0' }} data-color="#F5A3E0"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#FF7442' }} data-color="#FF7442"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#8BC062' }} data-color="#8BC062"></div>
            </div>

            <div className={styles.artMeta}>
              <div className={styles.metaCol}>
                <h4>Titres</h4>
                <p>Rubik <br /> Rubik <br /> Rubik</p>
              </div>
              <div className={styles.metaCol}>
                <h4>Corps de texte</h4>
                <p>Bricolage Grotesque <br />Bricolage Grotesque <br /> Bricolage Grotesque</p>
              </div>
            </div>
          </div>
          <div className={styles.stickersGallery}>
            <Image src="/projects/aki/stickers.png" alt="Aki Stickers" width={650} height={350} className={styles.mainSticker} />
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/projects/aki/mockups.png" width={650} height={650} alt="Aki Screen 1" className={styles.mockupPhone} />
          </div>
          <p className={styles.mockupBottom}>Pour les plus curieux, le projet est disponible dans son intégralité sur Figma. Vous pourrez y découvrir plus en détail les maquettes, les composants et la structure complète de l’interface.</p>

          <div className={styles.finalButtonWrapper}>
            <Button variant="primary" href="https://www.figma.com/design/FNKMAXDrtiWOpFbIikUPGQ/Aki--tu-penses?node-id=0-1&t=2kRZIlD8EBxm90W9-1" icon target="_blank">Accéder au Figma</Button>
          </div>
        </div>
      </section>

      <Footer color="var(--color-tertiary-pink)" roundedTop={true} />
    </main>
  );
}
