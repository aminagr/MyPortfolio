"use client"; // Indicate a client component

import React from 'react';
import styles from './CallToAction.module.css'; // Import CSS module for styling

const CallToAction = () => {
    return (
        <div className={styles.ctaBackground}>
            <div className={styles.ctaContainer}>
                <h1 className={styles.ctaTitle}>Vous avez besoin d'un site Web ?</h1>
                <h3 className={styles.ctaSubtitle}>Je créerai votre propre site maintenant!</h3>
                <p className={styles.ctaText}>
                    Que vous soyez un petit artisan, un artiste ou une entreprise, un site web vous offre une visibilité sans précédent. Créez un site en ligne, présentez vos produits, vos services, et connectez-vous avec vos clients de manière plus efficace.
                </p>
                <a href="#contact" className={styles.ctaButton}>Contactez-moi</a>
            </div>
        </div>
    );
};

export default CallToAction;


