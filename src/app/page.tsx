"use client";

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { useState } from 'react';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  return (
    <main>
      <Header onContactClick={openModal} />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact onContactClick={openModal} />
      <Footer />
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
    </main>
  );
}
