import Link from 'next/link'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from './Footer.module.css';
import translations from '../../data/translations'; // Assurez-vous que ce chemin est correct

const Footer = ({ lang }) => { // Ajoutez lang en tant que prop
    const email = process.env.NEXT_PUBLIC_EMAIL; 
    const fname = process.env.NEXT_PUBLIC_FNAME; 
    const currentTranslations = translations[lang] || translations['en']; // Obtenez les traductions selon la langue

    return (
        <div>
            <br/>
            <footer className={styles.footer}>
                <div className={styles.logoContainer}>
                    <Link href={`/${lang}`} className={styles.logo}>{fname}</Link>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.email}>{currentTranslations.footer.email}: {email}</div>
                    <div className={styles.menu}>
                        <Link href={`/${lang}`} className={styles.link}>{currentTranslations.footer.home}</Link>
                        <Link href={`/${lang}/projects`} className={styles.link}>{currentTranslations.footer.projects}</Link>
                        <Link href={`/${lang}/about`} className={styles.link}>{currentTranslations.footer.about}</Link>
                        <Link href={`/${lang}/contact`} className={styles.link}>{currentTranslations.footer.contact}</Link>
                        <a href="https://blog.aminagrine.com" className={styles.link}>
        {currentTranslations.navbar.blog}
    </a>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com" className={styles.icon}><FaGithub /></a>
                        <a href="https://linkedin.com" className={styles.icon}><FaLinkedin /></a>
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} {fname} {currentTranslations.footer.rights}
            </div>
        </div>
    );
};

export default Footer;
