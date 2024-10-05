"use client";
import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>L'Art du Web et des Mots</h1>
                <h2 className={styles.subtitle}>Avec Amina</h2>
                <p className={styles.description}>
                    Bonjour ! Je suis Amina, Ingénieur IT, développeuse web et traductrice multilingue. 
                    Je combine technologie et expertise linguistique pour offrir des solutions qui transcendent 
                    les frontières. Du développement de sites web modernes à la traduction et la rédaction de 
                    contenus, découvrez mes services et voyez comment je peux vous aider à atteindre vos objectifs.
                </p>
            </div>
            <div className={styles.rightColumn}>
                <Image
                    src="/images/hero.png" 
                    alt="Description de l'image"
                    layout="responsive" // Ajuste la mise en page
                    width={500} // Largeur de référence
                    height={700} // Hauteur de référence
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default Hero;
