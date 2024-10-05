"use client"; // Indicate that this component is a client component

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            setSuccessMessage('Email envoyé avec succès !');
            formRef.current.reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    const imageSrc = '/images/contact.jpg'; // Path to the image

    return (
        <section className={styles.contactFormContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.formSection}>
                    <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
                        <input type="hidden" name="contact_number" value="697483" />
                        <div className={styles.formGroup}>
                            <label htmlFor="user_name">Nom</label>
                            <input type="text" id="user_name" name="user_name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="user_email">Email</label>
                            <input type="email" id="user_email" name="user_email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Objet</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className={styles.btn} disabled={loading}>
                            {loading ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </form>
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                </div>
                <div className={styles.imageSection}>
                    <img src={imageSrc} alt="Description de l'image" className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
