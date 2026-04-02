import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import { Button } from './Button';

interface ContactProps {
  onContactClick?: () => void;
}

export const Contact = ({ onContactClick }: ContactProps) => {
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
          
          <Button variant="primary" icon className={styles.contactButton} onClick={onContactClick}>
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
                  width={150} 
                  height={150} 
                  className={styles.speechBubbleImg}
                />
              </div>
              {/* Coffee Cups placeholder */}
              <div className={styles.coffeeCups}>
                <Image 
                  src="/café.webp" 
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
