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
                        <h3 className={styles.cardTitle}>Adresse</h3>
                        <p className={styles.cardText}>123 Main St, City, Country</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <FaEnvelope className={styles.icon} />
                    <div>
                        <h3 className={styles.cardTitle}>Email</h3>
                        <p className={styles.cardText}>contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
