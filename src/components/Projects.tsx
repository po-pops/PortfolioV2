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
    description: "Aki'tu penses est un jeu interactif conçu lors d'une collaboration entre le département MMI et le Musée des Beaux-Arts de Bordeaux. Basé sur le principe d'Akinator pour faire deviner un personnage des collections.",
    meta: "UI/UX Design, DA & Illustration",
    year: "2026",
    color: "#eab8d1", // Pink
    buttonVariant: "primary",
    image: "/projects/aki/hero.png",
  },
  {
    id: "tcheen",
    title: "Refonte web Tcheen",
    description: "Accompagner l'évolution du positionnement de Tcheen avec une refonte complète de leur plateforme web, en collaboration avec l'agence Théo Abonneau.",
    meta: "UI/UX Design",
    year: "2026",
    color: "#f5e751", // Yellow
    buttonVariant: "black",
    image: "/projects/tcheen/hero.png",
  },
  {
    id: "loucantou",
    title: "Rebranding & Refonte Lou Cantou",
    description: "Modernisation de l'image de marque d'un établissement hôtelier chaleureux. Refonte globale incluant logo, direction artistique et site web.",
    meta: "DA & UI/UX Design",
    year: "2025",
    color: "#a3deb3", // Green
    buttonVariant: "primary",
    image: "/projects/loucantou/hero.png",
  },
  {
    id: "1000bugs",
    title: "Création d'un jeu de cartes",
    description: "Conception d'un jeu de société ludique et pédagogique pour sensibiliser à la biodiversité à travers un univers illustré unique.",
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
            top: `${index * 25}px`,
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


