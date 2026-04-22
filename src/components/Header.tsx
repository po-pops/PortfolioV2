"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Header.module.css';
import { useContact } from '@/context/ContactContext';

export const Header = () => {
  const { openContactModal } = useContact();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link href="/#accueil" className={styles.navLink}>
            Accueil
          </Link>
          <Link href="/#apropos" className={styles.navLink}>
            Un peu plus sur moi
          </Link>
          <Link href="/#creations" className={styles.navLink}>
            Créations
          </Link>
        </nav>
        
        <div className={styles.desktopCta}>
          <Button variant="primary" icon onClick={openContactModal}>
            Créons ensemble
          </Button>
        </div>

        {/* Mobile Burger Button */}
        <button 
          className={styles.burgerButton} 
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <svg width="60" height="60" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1440_5312)">
              <rect x="12.0996" y="8.09998" width="56" height="56" rx="28" fill="black" shapeRendering="crispEdges"/>
              <path d="M48.9885 35.1H31.2107C30.5441 35.1 30.0996 35.5 30.0996 36.1C30.0996 36.7 30.5441 37.1 31.2107 37.1H48.9885C49.6552 37.1 50.0996 36.7 50.0996 36.1C50.0996 35.5 49.6552 35.1 48.9885 35.1ZM31.2107 32.1H48.9885C49.6552 32.1 50.0996 31.7 50.0996 31.1C50.0996 30.5 49.6552 30.1 48.9885 30.1H31.2107C30.5441 30.1 30.0996 30.5 30.0996 31.1C30.0996 31.7 30.5441 32.1 31.2107 32.1ZM48.9885 40.1H31.2107C30.5441 40.1 30.0996 40.5 30.0996 41.1C30.0996 41.7 30.5441 42.1 31.2107 42.1H48.9885C49.6552 42.1 50.0996 41.7 50.0996 41.1C50.0996 40.5 49.6552 40.1 48.9885 40.1Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_1440_5312" x="-0.000391006" y="-2.47955e-05" width="80.2" height="80.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6.05"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1440_5312"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1440_5312" result="shape"/>
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      {/* Overlay Background when Menu is Open */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`} 
        onClick={toggleMenu}
      ></div>

      {/* Sidebar Menu */}
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ''}`}>
        
        {/* Close Button */}
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Fermer le menu">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </button>

        <nav className={styles.mobileNav}>
          <Link href="/#accueil" className={styles.mobileNavLink} onClick={toggleMenu}>
            Accueil
          </Link>
          <Link href="/#apropos" className={styles.mobileNavLink} onClick={toggleMenu}>
            Un peu plus sur moi
          </Link>
          <Link href="/#creations" className={styles.mobileNavLink} onClick={toggleMenu}>
            Créations
          </Link>
        </nav>

        <div className={styles.mobileCta}>
          <Button 
            variant="primary" 
            icon 
            className={styles.sidebarButton}
            onClick={() => {
              toggleMenu();
              openContactModal();
            }}
          >
            Créons ensemble
          </Button>
        </div>

        <div className={styles.mobileSocials}>
           {/* Instagram Icon */}
           <a href="#" className={styles.socialIcon} aria-label="Instagram">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1516 19.1516C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1516C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1516 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="black" />
             </svg>
           </a>
           {/* LinkedIn Icon */}
           <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="black" />
             </svg>
           </a>
           {/* Email Icon */}
           <a href="mailto:contact@example.com" className={styles.socialIcon} aria-label="Email">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0716 6L12 12.4828L4.92844 6H19.0716ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z" fill="black" />
             </svg>
           </a>
        </div>
      </div>
    </header>
  );
};
