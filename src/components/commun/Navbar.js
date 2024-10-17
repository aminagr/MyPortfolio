"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../../app/context/AppContext';
import LanguageSelector from './LanguageSelector'; 
import styles from './Navbar.module.css';

const Navbar = () => {
    const fname = process.env.NEXT_PUBLIC_FNAME; 
    const [menuActive, setMenuActive] = useState(false);
    const pathname = usePathname();
    const { language } = useAppContext(); 

    const toggleMenu = () => {
        setMenuActive(prevState => !prevState);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}> {fname}</Link>

          
            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuActive ? 'X' : '☰'}
            </div>
            <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
                <Link href="/" className={pathname === '/' ? styles.active : styles.link}>Accueil</Link>
              
                <Link href="/projects" className={pathname === '/projects' ? styles.active : styles.link}>Projets</Link>
                <Link href="/about" className={pathname === '/about' ? styles.active : styles.link}>À propos</Link>
                <Link href="/contact" className={pathname === '/contact' ? styles.active : styles.link}>Contact</Link>
                <Link href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
