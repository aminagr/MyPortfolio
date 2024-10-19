"use client"; 

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../app/context/LanguageContext'; 
import styles from './Languages.module.css';

const Languages = () => {
    const { currentTranslations } = useLanguage(); 
    const progressRefs = useRef([]);

  
    const languages = currentTranslations.languages.languagesList.map((name, index) => ({
        name,
        level: index === 0 ? 100 : index === 1 ? 90 : index === 2 ? 80 : index === 3 ? 70 : index === 4 ? 50 : index === 5 ? 40 : index === 6 ? 20 : 5 // Adjust levels as needed
    }));

    useEffect(() => {
        progressRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.width = `${languages[index].level}%`;
            }
        });
    }, [languages]); 

    return (
        <div>
            <h1 className={styles.title}>{currentTranslations.languages.title}</h1>
            <div className={styles.languagesContainer}>
                <p className={styles.intro}>{currentTranslations.languages.intro}</p>
                {languages.map((lang, index) => (
                    <div key={lang.name} className={styles.progressContainer}>
                        <span className={styles.languageName}>{lang.name}</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progress}
                                ref={(el) => (progressRefs.current[index] = el)} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
