"use client";

import React from 'react';
import styles from './Contact.module.css';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import { useLanguage } from '../../app/context/LanguageContext'; 

export default function Contact() {
    const { currentTranslations } = useLanguage(); 

    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>{currentTranslations.contact.title}</h1> 
            <p className={styles.subtitle}>
                {currentTranslations.contact.subtitle} 
            </p>
            <ContactForm />
        </div>
    );
}
