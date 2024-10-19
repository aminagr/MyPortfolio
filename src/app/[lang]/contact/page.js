"use client"; 

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ContactCard from '../../../components/contact/ContactCard';
import ContactForm from '../../../components/contact/ContactForm';

const Contact = () => {
    const { currentTranslations } = useLanguage(); 

    return (
        <div>
            <br/>
            <h1 style={{ background: 'linear-gradient(to right, #E26D5C, #FFB6C1)', color: 'white', padding: '20px 0' }}>
                {currentTranslations.contact.title} 
            </h1>

            <br/>
            <ContactCard/>
            <h3 style={{ textAlign: 'center', color: '#555', fontFamily: '"Didact Gothic", sans-serif', fontSize: '25px', paddingTop: '20px' }}>
                {currentTranslations.contact.form.message} 
            </h3>

            <ContactForm/>
        </div>
    );
};

export default Contact;
