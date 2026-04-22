"use client";

import { ContactProvider, useContact } from '@/context/ContactContext';
import { ContactModal } from './ContactModal';
import { SmoothScroll } from './SmoothScroll';
import { ScrollToTop } from './ScrollToTop';

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
        <ScrollToTop />
      </SmoothScroll>
    </ContactProvider>
  );
};
