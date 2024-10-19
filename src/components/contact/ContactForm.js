"use client";

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { useLanguage } from '../../app/context/LanguageContext'; // Import the context

const ContactForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { currentTranslations } = useLanguage(); // Retrieve the translations

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
                formRef.current
            );
            setSuccessMessage(currentTranslations.contact.form.success); // Use translation for success message
            formRef.current.reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            setErrorMessage(currentTranslations.contact.form.error); // Use translation for error message
        } finally {
            setLoading(false);
        }
    };

    const imageSrc = '/images/contact.jpg'; 

    return (
        <section className={styles.contactFormContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.formSection}>
                    <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
                        <input type="hidden" name="contact_number" value="697483" />
                        <div className={styles.formGroup}>
                            <label htmlFor="user_name">{currentTranslations.contact.form.name}</label> {/* Use translation for name label */}
                            <input type="text" id="user_name" name="user_name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="user_email">{currentTranslations.contact.form.email}</label> {/* Use translation for email label */}
                            <input type="email" id="user_email" name="user_email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">{currentTranslations.contact.form.subject}</label> {/* Use translation for subject label */}
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">{currentTranslations.contact.form.message}</label> {/* Use translation for message label */}
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className={styles.btn} disabled={loading}>
                            {loading ? currentTranslations.contact.form.loading : currentTranslations.contact.form.sendButton} {/* Use translations for button text */}
                        </button>
                    </form>
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                </div>
                <div className={styles.imageSection}>
                    <img src={imageSrc} alt="Contact" className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
