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

            <Button variant="black" href="https://tcheen.com" icon className={styles.visitButton} target='_blank'>
              Découvrir la refonte
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                TCHEEN <br /> TCHEEN <br /> TCHEEN <br /> TCHEEN
              </div>
              <Image
                src="/projects/tcheen/hero.png"
                alt="Tcheen Mockup"
                width={800}
                height={600}
                className={`${styles.mockupImg} `}
              />

            </div>
          </div>
        </div>
      </section>

      <Marquee variant="pink" items={["UX/UI Design", "UX/UI Design", "UX/UI Design", "UX/UI Design"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline variant="pink" title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <WordReveal
              className={styles.besoinParagraph}
              text={`Suite à une évolution de son positionnement, Tcheen souhaitait moderniser son site web afin de mieux refléter sa nouvelle stratégie et toucher une cible plus professionnelle.

                L’objectif était également de concevoir une expérience digitale cohérente avec leur branding, capable de renforcer leur crédibilité.`}
            />
          </div>
        </div>
      </section>

      {/* CONCEPTION SECTION */}
      <section className={`${styles.conceptionSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline variant="pink" title="Conception du projet" />
          <div className={styles.stepsGrid}>
            <Step
              number="1"
              title="Analyse du positionnement et du branding"
              content="Approfondissement du branding existant pour bien comprendre les composantes de l'identité graphique et le nouveau positionnement de Tcheen."
              index={0}
              backgroundColor="#f5e751"
            />
            <Step
              number="2"
              title="Structuration de l'arborescence du site"
              content="Définition du parcours client idéal, organisation des contenus et de la structure de l'information pour garantir une hiérarchie claire et intuitive."
              index={1}
              backgroundColor="#f5e751"
            />
            <Step
              number="3"
              title="Création d'un design system modulable"
              content="Design d'une bibliothèque de composants réutilisables dans Figma afin de faciliter la conception des différentes pages du site et d'assurer une cohérence visuelle globale."
              index={2}
              backgroundColor="#f5e751"
            />
            <Step
              number="4"
              title="Conception des interactions et préparation au développement"
              content="L’étape de prototypage sur Figma nous a permis de tester les parcours utilisateurs et de préparer le développement sur WordPress, en collaboration avec l’équipe en charge du développement et du SEO."
              index={3}
              backgroundColor="#f5e751"
            />
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline variant="pink" title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/projects/tcheen/mockups.png" width={1050} height={1050} alt="Tcheen Screen" className={`${styles.mockupPhone} ${styles.desktopOnly}`} />
            <Image src="/projects/tcheen/mockups_phone.png" width={1050} height={1050} alt="Tcheen Screen Mobile" className={`${styles.mockupPhone} ${styles.mobileOnly}`} />
          </div>
        </div>
      </section>

      <Footer color="var(--color-primary-yellow)" roundedTop={true} />
    </main>
  );
}
