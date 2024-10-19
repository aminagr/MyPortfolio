"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import translations from '../../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const router = useRouter(); // Get the router
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            setLang(savedLang);
        } else {
            const browserLang = navigator.language.split('-')[0];
            const defaultLang = browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';
            setLang(defaultLang);
            localStorage.setItem('lang', defaultLang);
        }
    }, []);

    const changeLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
        
        // Navigate to the new language route without reloading
        const currentPath = window.location.pathname.split('/').slice(2).join('/'); // Get current path after language
        router.push(`/${newLang}/${currentPath}`); // Use router.push
    };

    const currentTranslations = translations[lang] || translations['en'];

    return (
        <LanguageContext.Provider value={{ lang, currentTranslations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
