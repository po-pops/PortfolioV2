"use client";

import React from 'react';
import styles from './Projects.module.css';
import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';

const projectsData = [
  {
    id: "aki",
    title: "Aki' tu penses",
    description: "Aki’tu penses est un jeu interactif conçu lors d’une collaboration entre le département MMI et le Musée des Beaux-Arts de Bordeaux. Installé dans une salle du musée, il s’inspire du principe d’Akinator pour faire deviner un personnage d’un des tableaux identifiés à partir de questions.",
    meta: "UI/UX Design, DA & Illustration",
    year: "2026",
    color: "#eab8d1", // Pink
    buttonVariant: "primary",
    image: "/projects/aki/hero.png",
  },
  {
    id: "tcheen",
    title: "Refonte web Tcheen",
    description: "Afin d’accompagner l’évolution de son positionnement une refonte du site web de Tcheen été nécessaire. Réalisée en collaboration avec Hyperrealist et Fière Allure, j’ai conçu les maquettes Figma en m’appuyant sur le branding et les besoins des utilisateurs cibles, afin de proposer une expérience pertinente, accessible et émotionnelle.",
    meta: "UI/UX Design",
    year: "2026",
    color: "#f5e751", // Yellow
    buttonVariant: "black",
    image: "/projects/tcheen/hero.png",
  },
  {
    id: "loucantou",
    title: "Rebranding & Refonte Lou Cantou",
    description: "Ce projet consiste en la création d’une identité visuelle et d’une maquette de site web pour les chambres d’hôtes de ma mère. Réalisé en une semaine, il comprend un rebranding complet ainsi que la refonte de son site internet, pensé pour moderniser l’image de l’établissement et valoriser son univers.",
    meta: "DA & UI/UX Design",
    year: "2025",
    color: "#a3deb3", // Green
    buttonVariant: "primary",
    image: "/projects/loucantou/hero.png",
  },
  {
    id: "1000bugs",
    title: "Création d'un jeu de cartes",
    description: "Mille Bugs est un jeu de cartes inspiré du Mille Bornes, conçu lors d’un workshop réunissant les trois promotions MMI. Porté par la gendarmerie de Bordeaux, le projet vise à sensibiliser les seniors aux risques numériques à travers un jeu ludique et pédagogique autour de la cybersécurité.",
    meta: "DA, Illustration & Print",
    year: "2025",
    color: "#A9D0E4", // Blue
    buttonVariant: "primary",
    image: "/projects/millebugs/hero.png",
  }
];

export const Projects = () => {
  return (
    <section id="creations" className={styles.projectsWrapper}>
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className={styles.projectCard}
          style={{
            backgroundColor: project.color,
            zIndex: index + 1,
            top: `${index * 40}px`,
          }}
        >
          <div className={styles.container}>
            {/* Left Col: Image/Mockup */}
            <div className={styles.imageCol}>
              <div className={styles.mockupWrapper}>
                <Image
                  src={project.image}
                  alt={`Mockup ${project.title}`}
                  width={400}
                  height={500}
                  className={styles.mockupImage}
                />
              </div>
            </div>

            {/* Right Col: Details */}
            <div className={styles.textCol}>
              <h2 className={styles.title}>{project.title}</h2>
              <div className={styles.description}>
                <p>{project.description}</p>

                <p className={styles.meta}>
                  {project.meta}<br />
                  {project.year}
                </p>
              </div>

              <Link href={`/projects/${project.id}`}>
                <Button
                  variant={project.buttonVariant as any}
                  icon
                  className={styles.projectButton}
                >
                  Découvrir le projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};


