import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import { Button } from './Button';
import { useContact } from '@/context/ContactContext';

export const Contact = () => {
  const { openContactModal } = useContact();
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        {/* Left Col: Text */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            💡 Une idée ? Un projet ? <br />
            Parlons-en autour d'un café.
          </h2>
          <div className={styles.description}>
            <p>
              De l'UX/UI au Branding, en passant par le graphisme et l'illustration, je
              conçois des expériences innovantes pensées pour les besoins réels de
              vos utilisateurs suscitant l'émotion et donnant du sens à votre projet.
            </p>
          </div>

          <Button variant="primary" icon className={styles.contactButton} onClick={openContactModal}>
            Créons ensemble
          </Button>
        </div>

        {/* Right Col: Coffee Cup Image Placeholder */}
        <div className={styles.imageCol}>
          <div className={styles.coffeeContainer}>
            {/* Speech bubble */}
            <div className={styles.speechBubbleWrapper}>
              <Image
                src="/bulle.svg"
                alt="Speech bubble saying BlaBla"
                width={280}
                height={280}
                className={styles.speechBubbleImg}
              />
            </div>
            {/* Coffee Cups placeholder */}
            <div className={styles.coffeeCups}>
              <Image
                src="/cafe.webp"
                alt="Tasses de café"
                width={300}
                height={300}
                className={styles.coffeeImg}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
