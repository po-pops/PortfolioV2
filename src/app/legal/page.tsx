"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import styles from './legal.module.css';

export default function LegalPage() {
  const marqueeItems = ["Mentions Légales", "Mentions Légales", "Mentions Légales", "Mentions Légales"];

  return (
    <main className={styles.legalPage}>
      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.legalTitle}>
            <span>MENTIONS</span>
            <span className={styles.legalTitleLarge}>LÉGALES</span>
          </h1>
          <motion.div
            className={styles.stickerWrapper}
            animate={{ rotate: [-3, 5, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.lostSticker}>
              tu t'es perdu ?
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.legalMarquee}>
        <Marquee items={marqueeItems} />
      </div>

      {/* CONTENT SECTION */}
      <section className={`${styles.contentSection} bg-grid`}>
        <div className={styles.container}>
          <div className={styles.legalGrid}>

            <div className={styles.legalBlock}>
              <h2>Éditeur du site</h2>
              <p>Le présent site Internet accessible à l'adresse <a href="https://paulineyvelin.net">paulineyvelin.net</a> est un site personnel édité par :</p>
              <p>
                <strong>Pauline Yvelin</strong><br />
                Email : <a href="mailto:pauline.yvelin@mmi-bordeaux.com">pauline.yvelin@mmi-bordeaux.com</a><br />
                Téléphone : 06 00 00 00 00
              </p>
              <p>Conformément à l’article 6 III-2 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), l’adresse personnelle de l’éditrice n’est pas rendue publique et se demande. Le site n’ayant aucun caractère commercial ni professionnel.</p>
            </div>

            <div className={styles.legalBlock}>
              <h2>Statut du site</h2>
              <p>Ce site constitue un portfolio personnel présentant des travaux réalisés dans un cadre académique.</p>
              <p>Il ne s’agit pas d’un site professionnel.<br />Aucune prestation de service, vente, ni transaction commerciale n’est proposée via ce site.</p>
            </div>

            <div className={styles.legalBlock}>
              <h2>Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <p>
                <strong>Netlify, Inc.</strong><br />
                2325 3rd Street, Suite 296<br />
                San Francisco, California 94107<br />
                États-Unis<br />
                Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">https://www.netlify.com</a>
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h2>Propriété intellectuelle</h2>
              <p>L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, icônes, mises en page, design et éléments visuels) est la propriété exclusive de Pauline Yvelin, sauf mention contraire.</p>
              <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.</p>
            </div>

            <div className={styles.legalBlock}>
              <h2>Données personnelles</h2>
              <p>Le site comporte un formulaire de contact permettant aux visiteurs d'envoyer un message à l'éditrice du site.</p>
              <p>Les données susceptibles d'être collectées sont :</p>
              <ul>
                <li>nom ou pseudonyme,</li>
                <li>adresse e-mail,</li>
                <li>contenu du message.</li>
              </ul>
              <p>Ces données sont utilisées uniquement pour répondre aux demandes envoyées via le formulaire de contact. Elles ne sont ni vendues, ni cédées, ni utilisées à des fins commerciales.</p>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant.</p>
              <p>Vous pouvez exercer ce droit en contactant : <a href="mailto:pauline.yvelin@mmi-bordeaux.com">pauline.yvelin@mmi-bordeaux.com</a></p>
            </div>

            <div className={styles.legalBlock}>
              <h2>Cookies</h2>
              <p>Le site n'utilise pas de cookies de suivi, de mesure d'audience ou de publicité.</p>
              <p>Seuls des cookies techniques strictement nécessaires au fonctionnement de l'hébergement peuvent être utilisés.</p>
            </div>
            <div className={styles.legalBlock}>
              <h2 style={{ marginTop: '2rem' }}>Responsabilité</h2>
              <p>L'éditrice du site s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes et carences dans la mise à jour.</p>
              <p>Les liens externes présents sur le site sont fournis à titre informatif. L'éditrice ne peut être tenue responsable du contenu de ces sites.</p>
            </div>
            <div className={styles.legalBlock}>
              <h2 style={{ marginTop: '2rem' }}>Droit applicable</h2>
              <p>Le présent site est soumis au droit français.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer roundedTop={true} />
    </main>
  );
}
