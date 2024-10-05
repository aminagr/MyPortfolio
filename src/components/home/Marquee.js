"use client"; // Add this directive to indicate a client component

import React from 'react';
import styles from './Marquee.module.css'; // Import the CSS module for styles

const Marquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marquee}>
                <span>Transformez Vos Idées en Réalités Digitales</span>
            </div>
        </div>
    );
};

export default Marquee;
