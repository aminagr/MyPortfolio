"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import translations from '../../data/translations'; 
import LanguageSelector from './LanguageSelector'; 
import styles from './Navbar.module.css';

const Navbar = ({ lang }) => {
    const fname = process.env.NEXT_PUBLIC_FNAME; 
    const [menuActive, setMenuActive] = useState(false);
    const currentTranslations = translations[lang] || translations['en']; 

    const toggleMenu = () => {
        setMenuActive(prev => !prev);
    };

    return (
        <nav className={styles.navbar}>
            <Link href={`/${lang}`} className={styles.logo}>{fname}</Link>
            <LanguageSelector /> 

            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuActive ? 'X' : '☰'}
            </div>
            <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
                <Link href={`/${lang}`} className={styles.link}>{currentTranslations.navbar.home}</Link>
                <Link href={`/${lang}/projects`} className={styles.link}>{currentTranslations.navbar.projects}</Link>
                <Link href={`/${lang}/about`} className={styles.link}>{currentTranslations.navbar.about}</Link>
                <Link href={`/${lang}/contact`} className={styles.link}>{currentTranslations.navbar.contact}</Link>
                <a href="https://blog.aminagrine.com" className={styles.link}>
        {currentTranslations.navbar.blog}
    </a>
            </div>
        </nav>
    );
};

export default Navbar;
