import Link from 'next/link'; 
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; 
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.logoContainer}>
                    <a href="#" className={styles.logo}>Amina Grine</a>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.email}>aminagrine.pro@gmail.com</div>
                    <div className={styles.menu}>
                        <Link href="/" className={styles.link}>Accueil</Link>
                        <Link href="/projects" className={styles.link}>Projets</Link>
                        <Link href="/about" className={styles.link}>À propos</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com" className={styles.icon}><FaGithub /></a>
                        <a href="https://linkedin.com" className={styles.icon}><FaLinkedin /></a>
                        <a href="https://youtube.com" className={styles.icon}><FaYoutube /></a>
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} Amina. Tous droits réservés.
            </div>
        </div>
    );
};

export default Footer;
