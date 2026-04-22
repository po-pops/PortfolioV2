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



export default function MilleBugsProject() {
  return (
    <main className={styles.projectPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.cloudBackground}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoCard} style={{ backgroundColor: '#A9D0E4' }}>
            <a href="/" className={styles.subTitleHero}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99988 11.72V12.566L11.0579 17.786L12.0119 16.832L7.99787 12.8H18.6719V11.468H8.01587L12.0119 7.454L11.0579 6.5L5.99988 11.72Z" fill="#1E1E1E" />
              </svg>
              Revenir à l’accueil</a>
            <h1 className={styles.projectTitle}>Création d'un jeu de cartes</h1>
            <p className={styles.projectDesc}>
              Dans le cadre d’un projet MMI, nous devions concevoir un produit d’un nouveau genre pour sensibiliser à la biodiversité. Mille Bugs est un jeu de cartes ludique et pédagogique qui permet de découvrir la richesse du vivant tout en s'amusant.
            </p>

            <div className={styles.metaInfo}>
              <p className={styles.brand}>DA, Illustration & Print</p>
              <p className={styles.year}>2025</p>
            </div>

            <Button variant="primary" href="https://www.safe-n-tech.org/mille-bugs/" target='_blank' icon className={styles.visitButton}>
              Visiter l'expérience
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                MILLE <br /> BUGS <br /> MILLE <br /> BUGS
              </div>
              <Image
                src="/projects/millebugs/hero.png"
                alt="Mille Bugs Mockup"
                width={800}
                height={600}
                className={`${styles.mockupImg}`}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Direction artistique", "Illustration", "Print", "Direction artistique", "Illustration", "Print"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <WordReveal
              className={styles.besoinParagraph}
              text={`Dans le cadre d’un workshop, notre mission était de concevoir un projet réalisable, utile et original avec les enjeux du numérique.

Le projet a été proposé par la gendarmerie de Bordeaux, qui souhaitait répondre à une problématique concrète : la fracture numérique chez les seniors. Moins familiarisées avec les outils digitaux, ces populations sont souvent plus exposées aux risques de cybermalveillance (phishing, arnaques en ligne, e-mails frauduleux…).

L’objectif était de concevoir un outil accessible, ludique et facilement déployable par des associations, collectivités ou structures accompagnant les personnes âgées, tout en répondant au besoin de l’utilisateur : comprendre les dangers du numérique de manière simple et concrète.`}
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
              title="Analyse de la problématique et des utilisateurs"
              content="Nous avons d’abord étudié la problématique de la fracture numérique afin d’identifier les risques rencontrés par les seniors face à la cybersécurité."
              index={0}
              backgroundColor="#A9D0E4"
            />
            <Step
              number="2"
              title="Définition du concept de jeu"
              content="Nous avons ensuite imaginé un concept ludique inspiré du fonctionnement du jeu Mille Bornes. L’objectif était de créer un jeu simple et accessible permettant de sensibiliser les joueurs aux menaces numériques tout en leur apprenant les bonnes pratiques de cybersécurité."
              index={1}
              backgroundColor="#A9D0E4"
            />
            <Step
              number="3"
              title="Conception des cartes et du contenu pédagogique"
              content="Nous avons conçu différentes cartes représentant des situations de cybermalveillance ainsi que des cartes de protection et d’action. Chaque carte permettait d’illustrer une situation concrète et de transmettre des réflexes essentiels pour se protéger sur internet."
              index={2}
              backgroundColor="#A9D0E4"
            />
            <Step
              number="4"
              title="Design et accessibilité du jeu"
              content="Enfin, nous avons travaillé sur le design du jeu afin de rendre les informations claires et compréhensibles. Les pictogrammes, les textes et les visuels ont été pensés pour faciliter la lecture et proposer une expérience à la fois pédagogique, ludique et accessible."
              index={3}
              backgroundColor="#A9D0E4"
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
              <div className={styles.swatch} style={{ backgroundColor: '#FFFFFF' }} data-color="#FFFFFF"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#F7F2E2' }} data-color="#F7F2E2"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#78B1F9' }} data-color="#78B1F9"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#E83D5D' }} data-color="#E83D5D"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#9366D0' }} data-color="#9366D0"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#FCEE59' }} data-color="#FCEE59"></div>
            </div>

            <div className={styles.artMeta}>
              <div className={styles.metaCol}>
                <h4>Titres</h4>
                <p>Archivo Black <br /> Archivo Black <br /> Archivo Black</p>
              </div>
              <div className={styles.metaCol}>
                <h4>Corps de texte</h4>
                <p>Albert Sans <br /> Albert Sans <br /> Albert Sans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <div className={styles.mockupSideBySide}>
            <div className={styles.mockupItem}>
              <Image src="/projects/millebugs/mockups1.png" alt="Mille Bugs Game Board" width={1000} height={800} className={`${styles.fullWidthMockup}`} />
            </div>

            <div className={styles.mockupItem}>
              <Image src="/projects/millebugs/mockups2.png" alt="Mille Bugs Table Composition" width={1000} height={800} className={`${styles.fullWidthMockup}`} />
            </div>
          </div>
          <p className={styles.mockupBottom}>Pour les plus curieux, une vidéo est disponible de notre intervention à l’Échoppe Seniors au Club de Queyries-Bastide !</p>

          <div className={styles.finalButtonWrapper}>
            <Button variant="primary" href="https://www.youtube.com/watch?v=qiTeMJV5abU" target='_blank' icon>Accéder à la vidéo</Button>
          </div>
        </div>
      </section>

      <Footer roundedTop={true} />
    </main>
  );
}
