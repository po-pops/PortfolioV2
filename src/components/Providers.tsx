"use client";

import { ContactProvider, useContact } from '@/context/ContactContext';
import { ContactModal } from './ContactModal';
import { SmoothScroll } from './SmoothScroll';

const GlobalModal = () => {
  const { isOpen, closeContactModal } = useContact();
  return <ContactModal isOpen={isOpen} onClose={closeContactModal} />;
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContactProvider>
      <SmoothScroll>
        {children}
        <GlobalModal />
      </SmoothScroll>
    </ContactProvider>
  );
};
