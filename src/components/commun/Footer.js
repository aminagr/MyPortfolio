"use client";
import Link from 'next/link'; 
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
            </div>
            <div className={styles.menu}>
                <Link href="/" className={styles.link}>Accueil</Link>
                <Link href="/projects" className={styles.link}>Projets</Link>
                <Link href="/about" className={styles.link}>À propos</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;
