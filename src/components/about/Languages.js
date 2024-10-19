"use client"; // Ensure this is a client component

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../app/context/LanguageContext'; // Import the useLanguage hook
import styles from './Languages.module.css';

const Languages = () => {
    const { currentTranslations } = useLanguage(); // Get current translations
    const progressRefs = useRef([]);

    useEffect(() => {
        progressRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.width = `${languages[index].level}%`;
            }
        });
    }, []);

    // Define language levels
    const languages = currentTranslations.languages.languagesList.map((name, index) => ({
        name: name,
        level: index === 0 ? 100 : index === 1 ? 90 : index === 2 ? 80 : index === 3 ? 70 : index === 4 ? 50 : index === 5 ? 40 : index === 6 ? 20 : 5 // Adjust levels as needed
    }));

    return (
        <div>
            <h1 className={styles.title}>{currentTranslations.languages.title}</h1>
            <div className={styles.languagesContainer}>
                <p className={styles.intro}>{currentTranslations.languages.intro}</p>
                {languages.map((lang) => (
                    <div key={lang.name} className={styles.progressContainer}>
                        <span className={styles.languageName}>{lang.name}</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progress}
                                ref={(el) => (progressRefs.current[languages.indexOf(lang)] = el)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
