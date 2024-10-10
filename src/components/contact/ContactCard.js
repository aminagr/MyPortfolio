import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactCard.module.css';

const ContactCard = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                        <h3 className={styles.cardTitle}>Localisation</h3>
                        <p className={styles.cardText}>Alger, Algérie</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <FaEnvelope className={styles.icon} />
                    <div>
                        <h3 className={styles.cardTitle}>Email</h3>
                        <p className={styles.cardText}>aminagrine.pro@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
