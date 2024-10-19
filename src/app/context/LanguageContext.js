// src/app/context/LanguageContext.js
"use client"; 

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import translations from '../../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const router = useRouter(); 
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
        
        // Vérifiez l'URL et définissez la langue si nécessaire
        const pathLang = window.location.pathname.split('/')[1];
        if (pathLang === 'fr' || pathLang === 'en') {
            setLang(pathLang);
            localStorage.setItem('lang', pathLang);
        }
    }, []);

    const changeLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
        
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        router.push(`/${newLang}/${currentPath}`); 
    };

    const currentTranslations = translations[lang] || translations['en'];

    return (
        <LanguageContext.Provider value={{ lang, currentTranslations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
