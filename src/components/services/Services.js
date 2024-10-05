"use client";
import React from 'react';
import ItemsServices from './ItemsServices'; // Assurez-vous que le chemin est correct
import styles from './Services.module.css'; // Si vous avez un style spécifique pour le composant Services

const Services = () => {
    return (
        <div className={styles.servicesWrapper}>
           
            <ItemsServices />
        </div>
    );
};

export default Services;
