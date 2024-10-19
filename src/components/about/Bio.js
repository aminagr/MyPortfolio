"use client";
import React from 'react';
import { useLanguage } from '../../app/context/LanguageContext'; // Adjust the import path
import styles from './bio.module.css';

const Bio = () => {
    const { lang, currentTranslations } = useLanguage();
    const name = process.env.NEXT_PUBLIC_NAME; 
    const fname = process.env.NEXT_PUBLIC_FNAME; 

    return (
        <div className={styles.bioContainer}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>{currentTranslations.bio.title}</h1>
                <h2 className={styles.subtitle}>{currentTranslations.bio.subtitle}</h2>
                <p className={styles.paragraph}>
                    {currentTranslations.bio.paragraph1.replace('{fname}', fname)}
                </p>
                <p className={styles.paragraph}>
                    {currentTranslations.bio.paragraph2}
                </p>
                <p className={styles.paragraph}>
                    {currentTranslations.bio.paragraph3}
                </p>
            </div>
            <div className={styles.imageSection}>
                <img src="/images/aminadev2.png" alt="Amina" className={styles.image} />
            </div>
        </div>
    );
};

export default Bio;
