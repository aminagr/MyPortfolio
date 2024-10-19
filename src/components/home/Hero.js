//src/components/home/Hero.js
"use client"; 
import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { useLanguage } from '../../app/context/LanguageContext';

const Hero = () => {
    const { currentTranslations } = useLanguage(); 
    const name = process.env.NEXT_PUBLIC_NAME; 
    const fname = process.env.NEXT_PUBLIC_FNAME; 

    return (
        <section className={styles.hero}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>{currentTranslations.hero.title}</h1>
                <h2 className={styles.subtitle}>{currentTranslations.hero.subtitle.replace('{name}', name)}</h2>
                <p className={styles.description}>
                    {currentTranslations.hero.description.replace('{fname}', fname)}
                </p>
            </div>
            <div className={styles.rightColumn}>
                <Image
                    src="/images/hero.png" 
                    alt="Description de l'image"
                    layout="responsive" 
                    width={500} 
                    height={700} 
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default Hero;
