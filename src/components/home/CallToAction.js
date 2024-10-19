"use client";
import React from 'react';
import styles from './CallToAction.module.css'; 
import { useLanguage } from '../../app/context/LanguageContext'; // Import the context

const CallToAction = () => {
    const { currentTranslations } = useLanguage(); // Retrieve the translations

    return (
        <div className={styles.ctaBackground}>
            <div className={styles.ctaContainer}>
                <h1 className={styles.ctaTitle}>{currentTranslations.callToAction.title}</h1> {/* Use the translation for the title */}
                <h3 className={styles.ctaSubtitle}>{currentTranslations.callToAction.subtitle}</h3> {/* Use the translation for the subtitle */}
                <p className={styles.ctaText}>
                    {currentTranslations.callToAction.text} {/* Use the translation for the text */}
                </p>
                <a href="#contact" className={styles.ctaButton}>{currentTranslations.callToAction.button}</a> {/* Use the translation for the button */}
            </div>
        </div>
    );
};

export default CallToAction;
