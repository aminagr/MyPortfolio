"use client";
import React from 'react';
import styles from './CallToAction.module.css'; 
import { useLanguage } from '../../app/context/LanguageContext'; 

const CallToAction = () => {
    const { currentTranslations } = useLanguage();

    return (
        <div className={styles.ctaBackground}>
            <div className={styles.ctaContainer}>
                <h1 className={styles.ctaTitle}>{currentTranslations.callToAction.title}</h1> 
                <h3 className={styles.ctaSubtitle}>{currentTranslations.callToAction.subtitle}</h3> 
                <p className={styles.ctaText}>
                    {currentTranslations.callToAction.text} 
                </p>
                <a href="#contact" className={styles.ctaButton}>{currentTranslations.callToAction.button}</a> 
            </div>
        </div>
    );
};

export default CallToAction;
