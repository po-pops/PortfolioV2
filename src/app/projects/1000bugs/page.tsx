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
      <div className={styles.stepNumber} style={{ backgroundColor: '#A9D0E4' }}>{number}</div>
      <div className={styles.stepContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};


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
                src="/mockup-millebugs-hp.webp"
                alt="Mille Bugs Mockup"
                width={800}
                height={600}
                className={styles.mockupImg}
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Illustration", "Mille Bugs", "Jeu de cartes", "Biodiversité"]} />

      {/* BESOIN SECTION */}
      <section className={`${styles.besoinSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Besoin du client" />
          <div className={styles.besoinTextContainer}>
            <FadeText>
              <p className={styles.besoinParagraph}>Dans le cadre d’un workshop, notre mission était de concevoir un projet réalisable, utile et original avec les enjeux du numérique.</p>
              <p className={styles.besoinParagraph}>Le projet a été proposé par la gendarmerie de Bordeaux, qui souhaitait répondre à une problématique concrète : la fracture numérique chez les seniors. Moins familiarisées avec les outils digitaux, ces populations sont souvent plus exposées aux risques de cybermalveillance (phishing, arnaques en ligne, e-mails frauduleux…).</p>
              <p className={styles.besoinParagraph}>L’objectif était de concevoir un outil accessible, ludique et facilement déployable par des associations, collectivités ou structures accompagnant les personnes âgées, tout en répondant au besoin de l’utilisateur : comprendre les dangers du numérique de manière simple et concrète.</p>
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
              title="Recherches et immersion sur le sujet"
              content="Étude des espèces et de l'iconographie biodiversité pour créer un contenu pédagogique pertinent et scientifiquement fondé."
              index={0}
            />
            <Step
              number="2"
              title="Réalisation du scénario de jeu"
              content="Mise en place de mécaniques de jeu équilibrées favorisant l'apprentissage par le jeu et la coopération."
              index={1}
            />
            <Step
              number="3"
              title="Illustration et direction artistique du produit"
              content="Création d'un univers visuel unique avec des illustrations originales pour chaque espèce de 'bug'."
              index={2}
            />
            <Step
              number="4"
              title="Réalisation et test de prototype"
              content="Tests utilisateurs avec des prototypes physiques pour affiner les règles et l'ergonomie des cartes."
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
              <div className={styles.swatch} style={{ backgroundColor: '#FFF' }} data-color="#FFF"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#A9D0E4' }} data-color="#A9D0E4"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#f4aacf' }} data-color="#f4aacf"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#ff7a42' }} data-color="#ff7a42"></div>
              <div className={styles.swatch} style={{ backgroundColor: '#a3deb3' }} data-color="#a3deb3"></div>
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

            <div className={styles.stickersGallery}>
              <Image src="/Sticker_Millebugs2.svg" alt="Mille Bugs Sticker" width={400} height={400} className={styles.mainSticker} />
              <Image src="/MilleBugs_Sticker.svg" alt="Mille Bugs Logo" width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/aki_mockups3 mob-1.webp" alt="Mille Bugs Cards 1" width={280} height={560} className={styles.mockupPhone} />
            <Image src="/mockup-millebugs-hp.webp" alt="Mille Bugs Cards 2" width={320} height={640} className={`${styles.mockupPhone} ${styles.mockupLarge}`} />
            <Image src="/aki_mockups3 mob-1.webp" alt="Mille Bugs Cards 3" width={280} height={560} className={styles.mockupPhone} />
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
