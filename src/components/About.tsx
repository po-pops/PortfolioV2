import React from 'react';
import styles from './About.module.css';
import { Button } from './Button';

export const About = () => {
  return (
    <section id="apropos" className={`${styles.about} bg-grid`}>
      <div className={styles.container}>

        {/* Left column: Photo container with decorative blob */}
        <div className={styles.imageCol}>
          <div className={styles.blobBackground} aria-hidden="true"></div>
          <div className={styles.photoContainer}>
            <img
              src="/moi.webp"
              alt="Portrait de Pauline"
              className={styles.photoImage}
            />
          </div>
        </div>

        {/* Right column: Text content */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            <span className={styles.hello}>Hello !</span> <br />
            Moi c'est Pauline
          </h2>
          <div className={styles.description}>
            <p>
              Jeune designeuse <span className="medium">franco-allemande</span> de <span className="medium">20 ans</span> et passionnée par les <span className="medium">arts</span> divers et variés depuis mon enfance, je m’intéresse actuellement principalement à <span className="medium">l’UI/UX</span>.
            </p>
            <p>
              De nature très <span className="medium">curieuse</span> et <span className="medium">polyvalente</span>, j’adore découvrir et apprendre de nouvelles techniques <span className="medium">créatives</span>.
            </p>
          </div>

          <Button
            variant="primary"
            icon
            className={styles.cvButton}
            href="/cv_pauline_yvelin.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir mon CV
          </Button>
        </div>

      </div>
    </section>
  );
};
