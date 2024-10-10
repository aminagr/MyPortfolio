import Link from 'next/link'; 
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; 
import styles from './Footer.module.css';

const Footer = () => {
    const email = process.env.NEXT_PUBLIC_EMAIL; 
    const fname = process.env.NEXT_PUBLIC_FNAME; 
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.logoContainer}>
                <Link href="/" className={styles.logo}>{fname}</Link>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.email}>{email}</div>
                    <div className={styles.menu}>
                        <Link href="/" className={styles.link}>Accueil</Link>
                        <Link href="/projects" className={styles.link}>Projets</Link>
                        <Link href="/about" className={styles.link}>À propos</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com" className={styles.icon}><FaGithub /></a>
                        <a href="https://linkedin.com" className={styles.icon}><FaLinkedin /></a>
                     
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} {fname} Tous droits réservés.
            </div>
        </div>
    );
};

export default Footer;
