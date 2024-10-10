"use client"; 

import React from 'react';
import styles from './Marquee.module.css';

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
