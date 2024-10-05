"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Languages.module.css';

const languages = [
    { name: 'Arabe', level: 100 },
    { name: 'Français', level: 90 },
    { name: 'Anglais', level: 80 },
    { name: 'Espagnol', level: 70 },
    { name: 'Italien', level: 50 },
    { name: 'Russe', level: 40 },
    { name: 'Turc', level: 20 },
    { name: 'Chinois', level: 5 },
];

const Languages = () => {
    const progressRefs = useRef([]);

    useEffect(() => {
        progressRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.width = `${languages[index].level}%`;
            }
        });
    }, []);

    return (
        <div className={styles.languagesContainer}>
            <h2 className={styles.title}>Langues que je parle</h2>
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
    );
};

export default Languages;
