"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Button } from '@/components/Button';
import { AnimatedUnderline, FadeText, Step, WordReveal } from '@/components/ProjectComponents';
import styles from '../projects.module.css';
import { Rubik, Bricolage_Grotesque } from 'next/font/google';

const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
              Aki’tu penses est un jeu interactif conçu lors d’une collaboration entre le département MMI et le Musée des Beaux-Arts de Bordeaux. Installé dans une salle du musée, il s’inspire du principe d’Akinator pour faire deviner un personnage d’un des tableaux identifiés à partir de questions.
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
                <span>AKI’ TU <br /> PENSES</span><br /><span>AKI’ TU <br /> PENSES</span>
              </div>
              <Image
                src="/projects/aki/hero.png"
                alt="Aki Mockup"
                width={800}
                height={600}
                className={`${styles.mockupImg}`}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["UX/UI Design", "Direction artistique", "Illustration", "UX/UI Design", "Direction artistique", "Illustration", "UX/UI Design", "Direction artistique", "Illustration"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <WordReveal
              className={styles.besoinParagraph}
              text={`Dans le cadre de la Bacchanight, nocturne étudiante organisée par le Musée des Beaux-Arts de Bordeaux, notre mission était de concevoir une expérience interactive capable de dynamiser la visite du musée et de capter un public jeune.

                Le musée souhaitait offrir une médiation innovante, capable de transformer la posture traditionnelle du visiteur souvent passive en une expérience participative. Il fallait créer un outil à la fois pédagogique, ludique et adapté aux usages numériques des étudiants.`}
            />
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
              backgroundColor="var(--color-tertiary-pink)"
            />
            <Step
              number="2"
              title="Adaptation du mécanisme de jeu au contexte"
              content="Nous avons élaboré un mécanisme de questionnement en entonnoir, reprenant le principe d'Akinator tout en le simplifiant pour garantir fluidité et rapidité."
              index={1}
              backgroundColor="var(--color-tertiary-pink)"
            />
            <Step
              number="3"
              title="UX / Design de l'expérience numérique"
              content="Le parcours utilisateur se concentre sur : accessibilité et flexibilité, interface claire et guidée, attractivité et impact visuel, immersion et cohérence."
              index={2}
              backgroundColor="var(--color-tertiary-pink)"
            />
            <Step
              number="4"
              title="Dimension sociale et engagement"
              content="Le dispositif encourage le partage et l'interaction directe avec les oeuvres, transformant la visite solitaire en un moment de découverte partagé et ludique avec une pointe de challenge."
              index={3}
              backgroundColor="var(--color-tertiary-pink)"
            />
          </div>
        </div>
      </section>

      {/* ART DIRECTION */}
      <section className={`${styles.artSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Direction artistique du projet" />

          <div className={styles.artLayout}>
            <div className={styles.artTop}>
              <div className={styles.swatchesRow} style={{ "--swatch-cols": 3 } as React.CSSProperties}>
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
                  <p className={rubik.className} style={{ fontWeight: 700 }}>Rubik</p>
                  <p className={rubik.className} style={{ fontWeight: 500 }}>Rubik</p>
                  <p className={rubik.className} style={{ fontWeight: 400 }}>Rubik</p>
                </div>
                <div className={styles.metaCol}>
                  <h4>Corps de texte</h4>
                  <p className={bricolage.className} style={{ fontWeight: 700 }}>Bricolage Grotesque</p>
                  <p className={bricolage.className} style={{ fontWeight: 500 }}>Bricolage Grotesque</p>
                  <p className={bricolage.className} style={{ fontWeight: 300 }}>Bricolage Grotesque</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stickersGallery}>
            <Image src="/projects/aki/stickers.png" alt="Aki Stickers" width={750} height={350} className={styles.mainSticker} />
          </div>
          <div className={styles.stickersGallery}>
            <Image src="/projects/aki/mockups2.png" alt="Affiche" width={750} height={350} className={styles.mainSticker} />
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/projects/aki/mockups.png" width={950} height={600} alt="Aki Screen 1" className={`${styles.mockupPhone} ${styles.desktopOnly}`} />
            <Image src="/projects/aki/mockups_phone.png" width={650} height={550} alt="Aki Screen 1 Mobile" className={`${styles.mockupPhone} ${styles.mobileOnly}`} />
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
