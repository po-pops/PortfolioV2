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
import { Borel, M_PLUS_Rounded_1c } from 'next/font/google';

const borel = Borel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '500', '900'],
  subsets: ['latin'],
  display: 'swap',
});


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
                src="/projects/loucantou/hero.png"
                alt="Lou Cantou Mockup"
                width={800}
                height={600}
                className={`${styles.mockupImg}`}
              />
  
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Direction Artistique", "UI/UX Design", "Direction Artistique", "UI/UX Design",]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <WordReveal
              className={styles.besoinParagraph}
              text={`Dans le cadre de la modernisation de l'offre de chambres d'hôtes, l'objectif était de repenser l'image de l'établissement et de créer une présence en ligne plus actuelle et cohérente.

                Le projet devait traduire l'esprit chaleureux et authentique des chambres d'hôtes tout en offrant une interface simple et agréable à parcourir pour les futurs clients.`}
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
              title="Analyse de l'identité et de l'offre du lieu"
              content="Immersion dans l'univers de Lou Cantou pour extraire l'essence du lieu et les valeurs de convivialité et de terroir."
              index={0}
              backgroundColor="#a3deb3"
            />
            <Step
              number="2"
              title="Création de l'identité visuelle"
              content="Design d'un logo moderne mais qui conserve son aspect organique pour refléter la nature et l'accueil des chambres d'hôtes."
              index={1}
              backgroundColor="#a3deb3"
            />
            <Step
              number="3"
              title="Conception de l'expérience fluide"
              content="Le parcours de réservation devait être clair et direct."
              index={2}
              backgroundColor="#a3deb3"
            />
            <Step
              number="4"
              title="Design system et développement"
              content="Définition des couleurs terreuses et d'une typographie élégante pour renforcer l'image de marque."
              index={3}
              backgroundColor="#a3deb3"
            />
          </div>
        </div>
      </section>

      {/* ART DIRECTION */}
      <section className={`${styles.artSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Direction artistique du projet" />

          <div className={styles.artLayout}>
            {/* Top Row: Colors and Fonts */}
            <div className={styles.artTop}>
              <div className={styles.swatchesRow} style={{ "--swatch-cols": 2 } as React.CSSProperties}>
                <div className={styles.swatch} style={{ backgroundColor: '#111' }} data-color="#111"></div>
                <div className={styles.swatch} style={{ backgroundColor: '#f5f5f5' }} data-color="#f5f5f5"></div>
                <div className={styles.swatch} style={{ backgroundColor: '#4a6741' }} data-color="#4a6741"></div>
                <div className={styles.swatch} style={{ backgroundColor: '#f9a825' }} data-color="#f9a825"></div>
              </div>

              <div className={styles.artMeta}>
                <div className={styles.metaCol}>
                  <h4>Titres</h4>
                  <p className={borel.className}>Borel</p>
                </div>
                <div className={styles.metaCol}>
                  <h4>Corps de texte</h4>
                  <p className={mPlusRounded.className} style={{ fontWeight: 400 }}>Rounded Mplus 1c</p>
                  <p className={mPlusRounded.className} style={{ fontWeight: 500 }}>Rounded Mplus 1c</p>
                  <p className={mPlusRounded.className} style={{ fontWeight: 900 }}>Rounded Mplus 1c</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Logos */}
            <div className={styles.artBottom}>
              <div className={styles.logoCol}>
                <h4>Logo</h4>
                <Image src="/projects/loucantou/logo.svg" width={220} height={120} alt="Logo Lou Cantou" style={{ height: 'auto', display: 'block' }} />
              </div>
              <div className={styles.logoCol}>
                <h4>Variante logo</h4>
                <Image src="/projects/loucantou/logo2.svg" width={180} height={180} alt="Variante Logo" style={{ height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "100px" }} className={styles.mockupFullWidth}>
            <Image
              src="/projects/loucantou/mockups1.png"
              width={1200}
              height={800}
              alt="Maquettes Lou Cantou"
              priority
              className={styles.desktopOnly}
            />
            <Image
              src="/projects/loucantou/mockups1_phone.png"
              width={1200}
              height={800}
              alt="Maquettes Lou Cantou Mobile"
              className={styles.mobileOnly}
            />
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />

          <div className={styles.mockupFullWidth}>
            <Image
              src="/projects/loucantou/mockups2.png"
              width={1200}
              height={600}
              alt="Maquettes Lou Cantou"
              priority
              className={styles.desktopOnly}
            />
            <Image
              src="/projects/loucantou/mockups2_phone.png"
              width={1200}
              height={800}
              alt="Maquettes Lou Cantou Mobile"
              className={styles.mobileOnly}
            />
          </div>
          <p className={styles.mockupBottom}>Pour les plus curieux, le projet est disponible dans son intégralité sur Figma. Vous pourrez y découvrir plus en détail les maquettes, les composants et la structure complète de l’interface.</p>
          <div className={styles.finalButtonWrapper}>
            <Button variant="primary" href="https://www.figma.com/design/reOvDVpeBUdTe3eXb0W1AT/Lou-Cantou?node-id=19-1275&t=P5xnEShtJRx1Qdz0-1" target="_blank" icon>Accéder au figma</Button>
          </div>
        </div>
      </section>

      <Footer color="#a3deb3" roundedTop={true} />
    </main>
  );
}
