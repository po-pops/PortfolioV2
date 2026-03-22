"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Button } from '@/components/Button';
import styles from './page.module.css';

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
const FadeText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"]
  });

  return (
    <p ref={containerRef} className={styles.besoinParagraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);

        return (
          <motion.span key={i} style={{ opacity }} className={styles.word}>
            {word}
          </motion.span>
        );
      })}
    </p>
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

const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0001 9C18.6298 8.52776 19.0949 7.86939 19.3296 7.11813C19.5642 6.36687 19.5566 5.56082 19.3077 4.81415C19.0588 4.06748 18.5813 3.41804 17.9428 2.95784C17.3043 2.49764 16.5372 2.25 15.7501 2.25H9.00013C8.21307 2.25 7.44596 2.49764 6.80747 2.95784C6.16897 3.41804 5.69146 4.06748 5.44257 4.81415C5.19368 5.56082 5.18603 6.36687 5.4207 7.11813C5.65538 7.86939 6.12048 8.52776 6.75013 9C6.27339 9.35728 5.88864 9.823 5.62774 10.3586C5.36684 10.8942 5.2373 11.4842 5.24986 12.0798C5.26241 12.6755 5.41669 13.2595 5.69993 13.7837C5.98316 14.3078 6.3872 14.7569 6.87857 15.0938C6.31966 15.5187 5.87847 16.0792 5.59675 16.7223C5.31504 17.3654 5.20213 18.0698 5.26873 18.7687C5.33532 19.4676 5.5792 20.138 5.97729 20.7163C6.37537 21.2947 6.91448 21.7618 7.54357 22.0735C8.17266 22.3853 8.87091 22.5313 9.5722 22.4978C10.2735 22.4642 10.9546 22.2522 11.5511 21.8819C12.1476 21.5115 12.6396 20.995 12.9807 20.3814C13.3218 19.7677 13.5005 19.0771 13.5001 18.375V15C14.2958 15.5967 15.2959 15.853 16.2805 15.7123C17.265 15.5717 18.1534 15.0456 18.7501 14.25C19.3469 13.4544 19.6031 12.4542 19.4624 11.4697C19.3218 10.4851 18.7958 9.59674 18.0001 9ZM18.0001 6C18.0001 6.59674 17.7631 7.16903 17.3411 7.59099C16.9192 8.01295 16.3469 8.25 15.7501 8.25H13.5001V3.75H15.7501C16.3469 3.75 16.9192 3.98705 17.3411 4.40901C17.7631 4.83097 18.0001 5.40326 18.0001 6ZM6.75013 6C6.75013 5.40326 6.98718 4.83097 7.40914 4.40901C7.8311 3.98705 8.40339 3.75 9.00013 3.75H12.0001V8.25H9.00013C8.40339 8.25 7.8311 8.01295 7.40914 7.59099C6.98718 7.16903 6.75013 6.59674 6.75013 6ZM9.00013 14.25C8.40339 14.25 7.8311 14.0129 7.40914 13.591C6.98718 13.169 6.75013 12.5967 6.75013 12C6.75013 11.4033 6.98718 10.831 7.40914 10.409C7.8311 9.98705 8.40339 9.75 9.00013 9.75H12.0001V14.25H9.00013ZM12.0001 18.375C12.0001 18.8942 11.8462 19.4017 11.5577 19.8334C11.2693 20.2651 10.8593 20.6015 10.3797 20.8002C9.90002 20.9989 9.37222 21.0508 8.86302 20.9496C8.35382 20.8483 7.88609 20.5983 7.51897 20.2312C7.15186 19.864 6.90185 19.3963 6.80057 18.8871C6.69928 18.3779 6.75127 17.8501 6.94994 17.3705C7.14863 16.8908 7.48508 16.4808 7.91676 16.1924C8.34844 15.904 8.85595 15.75 9.37513 15.75H12.0001V18.375ZM15.7501 14.25C15.3051 14.25 14.8701 14.118 14.5001 13.8708C14.1301 13.6236 13.8417 13.2722 13.6714 12.861C13.5011 12.4499 13.4565 11.9975 13.5434 11.561C13.6302 11.1246 13.8445 10.7237 14.1591 10.409C14.4738 10.0943 14.8747 9.88005 15.3112 9.79323C15.7476 9.70642 16.2 9.75097 16.6112 9.92127C17.0223 10.0916 17.3737 10.38 17.6209 10.75C17.8682 11.12 18.0001 11.555 18.0001 12C18.0001 12.5967 17.7631 13.169 17.3411 13.591C16.9192 14.0129 16.3469 14.25 15.7501 14.25Z" fill="black" />
  </svg>
);

const NotionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.25 3.75H15.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5C15 4.69891 15.079 4.88968 15.2197 5.03033C15.3603 5.17098 15.5511 5.25 15.75 5.25H17.25V16.5797L10.4062 4.13812C10.3415 4.02067 10.2465 3.92271 10.1311 3.85445C10.0157 3.78619 9.88409 3.75012 9.75 3.75H3.75C3.55109 3.75 3.36032 3.82902 3.21967 3.96967C3.07902 4.11032 3 4.30109 3 4.5C3 4.69891 3.07902 4.88968 3.21967 5.03033C3.36032 5.17098 3.55109 5.25 3.75 5.25H5.25V18.75H3.75C3.55109 18.75 3.36032 18.829 3.21967 18.9697C3.07902 19.1103 3 19.3011 3 19.5C3 19.6989 3.07902 19.8897 3.21967 20.0303C3.36032 20.171 3.55109 20.25 3.75 20.25H8.25C8.44891 20.25 8.63968 20.171 8.78033 20.0303C8.92098 19.8897 9 19.6989 9 19.5C9 19.3011 8.92098 19.1103 8.78033 18.9697C8.63968 18.829 8.44891 18.75 8.25 18.75H6.75V7.42031L13.5938 19.8619C13.6585 19.9793 13.7535 20.0773 13.8689 20.1455C13.9843 20.2138 13.9843 20.2138 14.1591 20.2499C14.25 20.25H18C18.1989 20.25 18.3897 20.171 18.5303 20.0303C18.671 19.8897 18.75 19.6989 18.75 19.5V5.25H20.25C20.4489 5.25 20.6397 5.17098 20.7803 5.03033C20.921 4.88968 21 4.5C21 4.30109 20.921 4.11032 20.7803 3.96967C20.6397 3.82902 20.4489 3.75 20.25 3.75ZM7.26844 5.25H9.30656L16.7316 18.75H14.6934L7.26844 5.25Z" fill="black" />
  </svg>
);

const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.25 8.68873C23.2506 8.49167 23.212 8.29646 23.1366 8.11443C23.0611 7.93241 22.9502 7.7672 22.8103 7.62842L16.3715 1.18873C16.2322 1.0494 16.0669 0.938885 15.8849 0.863481C15.7028 0.788078 15.5078 0.749268 15.3107 0.749268C15.1137 0.749268 14.9187 0.788078 14.7366 0.863481C14.5546 0.938885 14.3893 1.0494 14.25 1.18873L11.5847 3.85404L6.14715 5.89498C5.90003 5.98714 5.68146 6.1426 5.51331 6.34579C5.34516 6.54899 5.23333 6.79279 5.18903 7.05279L3.01028 20.1262C2.9923 20.2337 2.99795 20.3438 3.02685 20.4488C3.05574 20.5539 3.10717 20.6514 3.17758 20.7346C3.24798 20.8177 3.33566 20.8846 3.43451 20.9304C3.53336 20.9762 3.64101 21 3.74997 21C3.79142 20.9998 3.8328 20.9964 3.87372 20.9897L16.9462 18.8109C17.2059 18.7676 17.4496 18.6567 17.6528 18.4893C17.8561 18.3219 18.0117 18.104 18.104 17.8575L20.145 12.42L22.8103 9.74998C22.9502 9.61105 23.0612 9.44569 23.1367 9.2635C23.2122 9.08131 23.2507 8.88593 23.25 8.68873ZM16.6997 17.3315L5.93622 19.125L10.3772 14.684C10.9318 14.9838 11.5759 15.0739 12.1915 14.9379C12.8072 14.8019 13.3533 14.4488 13.73 13.9433C14.1068 13.4377 14.289 12.8135 14.2433 12.1846C14.1977 11.5558 13.9272 10.9644 13.4814 10.5186C13.0356 10.0727 12.4442 9.80227 11.8153 9.75661C11.1865 9.71096 10.5622 9.89316 10.0567 10.2699C9.55111 10.6467 9.19805 11.1928 9.06203 11.8084C8.92602 12.4241 9.01613 13.0681 9.3159 13.6228L4.87497 18.0656L6.6684 7.29935L11.8125 5.37092L18.6281 12.1875L16.6997 17.3315ZM10.5 12.375C10.5 12.1525 10.5659 11.935 10.6896 11.75C10.8132 11.565 10.9889 11.4208 11.1944 11.3356C11.4 11.2505 11.6262 11.2282 11.8444 11.2716C12.0627 11.315 12.2631 11.4221 12.4205 11.5795C12.5778 11.7368 12.6849 11.9373 12.7284 12.1555C12.7718 12.3737 12.7495 12.5999 12.6643 12.8055C12.5792 13.0111 12.435 13.1868 12.25 13.3104C12.065 13.434 11.8475 13.5 11.625 13.5C11.3266 13.5 11.0405 13.3815 10.8295 13.1705C10.6185 12.9595 10.5 12.6733 10.5 12.375ZM19.5 10.9387L13.0603 4.49998L15.3103 2.24998L21.75 8.68873L19.5 10.9387Z" fill="black" />
  </svg>
);

export default function LouCantouProject() {
  return (
    <main className={styles.projectPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.cloudBackground}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoCard} style={{ backgroundColor: '#a3deb3' }}>
            <span className={styles.subTitleHero}># Rebranding & Refonte</span>
            <h1 className={styles.projectTitle}>Rebranding Lou Cantou</h1>
            <p className={styles.projectDesc}>
              Lou Cantou, un établissement hôtelier chaleureux, souhaitait moderniser son image de marque afin de mieux communiquer ses valeurs d'authenticité et de proximité. Cette refonte complète inclut le logo, la direction artistique et le nouveau site web pour offrir une expérience utilisateur simple et accueillante.
            </p>

            <div className={styles.metaInfo}>
              <p className={styles.brand}>DA & UI/UX Design</p>
              <p className={styles.year}>2025</p>
            </div>

            <div className={styles.tagsContainer}>
              <FigmaIcon />
              <PenIcon />
            </div>

            <Button variant="primary" icon className={styles.visitButton}>
              Visiter l'expérience
            </Button>
          </div>

          <div className={styles.heroMockup}>
            <div className={styles.mockupWrapper}>
              <div className={styles.floatingLabels}>
                LOU <br /> CANTOU <br /> LOU <br /> CANTOU
              </div>
              <Image
                src="/mockup-loucantou-hp.png"
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
            <FadeText text="Dans le cadre de la modernisation de l'offre de chambres d'hôtes, l'objectif était de repenser l'image de l'établissement et de créer une présence en ligne plus actuelle et cohérente." />
            <FadeText text="Le projet devait traduire l'esprit chaleureux et authentique des chambres d'hôtes tout en offrant une interface simple et agréable à parcourir pour les futurs clients." />
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
              <div className={styles.swatch} style={{ backgroundColor: '#111' }}></div>
              <div className={styles.swatch} style={{ backgroundColor: '#f5f5f5' }}></div>
              <div className={styles.swatch} style={{ backgroundColor: '#4a6741' }}></div>
              <div className={styles.swatch} style={{ backgroundColor: '#f9a825' }}></div>
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
              <Image src="/LouCantou_Sticker.svg" alt="Lou Cantou Logos" width={400} height={400} className={styles.mainSticker} />
            </div>
          </div>
        </div>
      </section>

      {/* MAQUETTE SECTION */}
      <section className={`${styles.maquetteSection} bg-grid`}>
        <div className={styles.container}>
          <AnimatedUnderline title="Maquette du projet" />
          <div className={styles.mockupTriple}>
            <Image src="/aki_mockups3 mob-1.png" alt="Aki Screen 1" width={280} height={560} className={styles.mockupPhone} />
            <Image src="/aki_mockups3 mob.png" alt="Aki Screen 2" width={320} height={640} className={`${styles.mockupPhone} ${styles.mockupLarge}`} />
            <Image src="/aki_mockups3 mob-1.png" alt="Aki Screen 3" width={280} height={560} className={styles.mockupPhone} />
          </div>
          <p className={styles.mockupBottom}>Une présence en ligne optimisée qui met l'accent sur les visuels haute qualité de l'établissement et facilite la réservation directe.</p>

          <div className={styles.finalButtonWrapper}>
            <Button variant="primary" icon>Accéder au figma</Button>
          </div>
        </div>
      </section>

      <Footer color="#a3deb3" roundedTop={true} />
    </main>
  );
}
